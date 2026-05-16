import axios from "axios";
import { UserDetailType } from "@/types/healthForm.type";

export const getUserDetails = async () => {
  const { data } = await axios.get("/api/userDetails");

  return data;
};

export const updateUserDetails = async (userData: UserDetailType) => {
  const { data } = await axios.post("/api/addUserDetails", userData);

  return data;
};
