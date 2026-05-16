import { useMutation } from "@tanstack/react-query";
import {
  signupUser,
  SignupData,
  LoginData,
  loginUser,
} from "@/services/auth.service";

export const useSignup = () => {
  return useMutation({
    mutationFn: (formData: SignupData) => signupUser(formData),
  });
};
export const useLogin = () => {
  return useMutation({
    mutationFn: (formData: LoginData) => loginUser(formData),
  });
};
