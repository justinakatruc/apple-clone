import mongoose from "mongoose";

export interface UserProps {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  country?: string;
  birthday?: Date;
  phone?: string;
  address?: string;
}

const userSchema = new mongoose.Schema<UserProps>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    country: {
      type: String,
      // required: true,
    },
    birthday: {
      type: Date,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema, "users");

