import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/shop((?!/signIn|/signUp|/forgotPassword).*)",],
};
