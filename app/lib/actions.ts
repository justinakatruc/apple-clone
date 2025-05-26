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
  return session?.user?.name || "";
}

export const getEmail = async () => {
  const session = await auth();
  return session?.user?.email || "";
}

export const getUser = async () => {
  try {
    connectToDatabase();
    const user = await User.findOne({ email: await getEmail() }).exec();
    if (!user) {
      throw new Error("User not found");
    }
    user.password = undefined;
    return JSON.parse(JSON.stringify(user));
  }
  catch (error) {
    redirect('/shop/signIn');
  }
};


export const logout = async () => {
  try {
    await signOut({ redirect: false });
    return "success";
  } catch (error) {
    return "fail";
  }
}

export const signUp = async (prevState: any, formData: FormData) => {
  const { email, password, confirmPassword, firstName, lastName, country, birthday } = Object.fromEntries(formData);
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  const emailExists = await User.findOne({ email: email.toString() });
  if (emailExists) {
    return "This email is already registered";
  }
  try {
    connectToDatabase();

    const salt = await genSalt(10);
    const hashedPassword = await hash(password.toString(), salt);
    const user = new User({ email, password: hashedPassword, firstName, lastName, country, birthday });
    console.log("Creating user:", user);
    await user.save();
  }
  catch (error) {
    redirect('/shop/signIn');
  }
  
  revalidatePath('/shop/signIn');
  redirect('/shop/signIn');
}

export const updateUser = async (prevState: any, formData: FormData) => {
  const email = await getEmail();
  const { firstName, lastName, address, country, phone, formName } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    await User.updateOne({ email }, { $set: { firstName, lastName, address, country, phone } })
    return `Your ${formName} has been updated successfully.`;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

export const deleteUser = async (formData: FormData) => {
  const email = formData.get('email');
  console.log("Deleting user with email:", email);
  try {
    connectToDatabase();
    await User.deleteOne({ email });
    // Delete the session
    await signOut({ redirect: false });
    revalidatePath('/shop/signIn');
    redirect('/shop/signIn');
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}