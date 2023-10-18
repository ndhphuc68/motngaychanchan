import api from "@/api/axios";
import { LoginModel } from "@/models";

export const loginApi = async (data: any) => {
  const res = await api.post("/auth/login", data);
  console.log(res);
  return res.data;
};
