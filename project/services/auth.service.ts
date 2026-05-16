import axios from "axios";
import { signIn } from "next-auth/react";

export interface SignupData {
  name: string;
  email: string;
  password: string;
  contact: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const signupUser = async (formData: SignupData) => {
  const { data } = await axios.post("/api/auth/signup", formData);

  return data;
};

export const loginUser = async (formData: LoginData) => {
  const res = await signIn("credentials", {
    email: formData.email,
    password: formData.password,
    redirect: false,
  });

  if (res?.error) {
    throw new Error("Invalid email or password");
  }

  return res;
};
