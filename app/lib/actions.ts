"use server";

import { signIn, signOut } from "@/app/auth";
import { auth } from "@/app/auth";

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

export const logout = async () => {
  try {
    // Prevent auto-redirect
    await signOut({ redirect: false });
    return "success";
  } catch (error) {
    return "fail";
  }
}