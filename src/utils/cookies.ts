"use server";
import { cookies } from "next/headers";

export const saveCookies = async (key: string, value: any) => {
  cookies().set(key, value);
};
