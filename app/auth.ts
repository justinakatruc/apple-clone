import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import { connectToDatabase } from "@/app/lib/utils";
import { compare } from "bcrypt-ts";
import { User } from "@/app/lib/models";

// Extend NextAuth types to include 'phone'
declare module "next-auth" {
  interface Session {
    user: {
      email?: string;
      name?: string;
    };
  }
}
declare module "next-auth" {
  interface JWT {
    email?: string;
  }
}

const login = async (credentials: { emailOrPhone: string; password: string }) => {
  await connectToDatabase();
  const user = await User.findOne({ email: credentials.emailOrPhone }).select("+password");
  if (!user) {
    throw new Error("User not found");
  }

  const isValid = await compare(credentials.password, user.password);
  if (!isValid) {
    throw new Error("Invalid password");
  }

  // Remove password from user object before returning
  user.password = undefined;
  return user;
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        emailOrPhone: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const user = await login({
            emailOrPhone: credentials.emailOrPhone as string,
            password: credentials.password as string,
          });
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Check if toObject exists (likely Mongoose document)
        const plainUser =
          typeof (user as any).toObject === "function"
            ? (user as any).toObject()
            : user;

        token.email = plainUser.email;
        token.name = plainUser.firstName ?? "";
        console.log("JWT Token:", token);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
       const plainToken =
          typeof (token as any).toObject === "function"
            ? (token as any).toObject()
            : token;

        session.user.email = plainToken.email as string;
        session.user.name = plainToken.name as string;
      }
      return session;
    },
  },
});