"use server";

import { signIn, signOut } from "@/app/auth";
import { auth } from "@/app/auth";
import { connectToDatabase } from "./utils";
import { genSalt, hash } from "bcrypt-ts";
import { User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const authenticate = async (prevState: any, formData: FormData) => {
  // Simulate authentication logic
  const emailOrPhone = formData.get("emailOrPhone");
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      redirect: false,
      emailOrPhone: emailOrPhone?.toString(),
      password: password?.toString(),
    });
    return "success";
  } catch (error) {
    return "fail";
  }
};

export const getUsername = async () => {
  const session = await auth();
  // console.log("Session:", session);
  return session?.user?.name || "";
}

export const getEmail = async () => {
  const session = await auth();
  return session?.user?.email || "";
}

export const logout = async () => {
  try {
    await signOut({ redirect: false });
    return "success";
  } catch (error) {
    return "fail";
  }
}

export const signUp = async (prevState: any, formData: FormData) => {
  const {firstName, email, password, confirmPassword} = Object.fromEntries(formData);
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  try {
    connectToDatabase();

    const salt = await genSalt(10);
    const hashedPassword = await hash(password.toString(), salt);
    const user = new User({firstName, email, password: hashedPassword});
    console.log("Creating user:", user);
    await user.save();
  }
  catch (error) {
    throw new Error("Failed to add user");
  }

  revalidatePath('/');
  redirect('/');
};
