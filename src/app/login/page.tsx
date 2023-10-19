"use client";

import * as L from "@/app/login/styles";
import { Image } from "@nextui-org/react";
import { loginApi } from "@/api/modules/auth";
import { useState } from "react";
import { ApiResponse, LoginModel } from "@/models";
import { toastSuccess } from "@/utils/toast";
import { useDispatch } from "react-redux";
import { authStore } from "@/stores/modules/auth";
import { saveCookies } from "@/utils/cookies";
import Link from "next/link";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [dataLogin, setDataLogin] = useState<LoginModel>({
    username: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const res: ApiResponse = await loginApi(dataLogin);
    if (res.success) {
      dispatch(authStore.actions.getTokenUser(res.data.token));
      await saveCookies("token", res.data.token);
      toastSuccess("Login Success !");
    }
  };

  return (
    <L.LoginMain>
      <form
        onSubmit={handleLogin}
        className="shadow-xl rounded-xl w-96 space-y-4 bg-white py-14 px-10"
      >
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OIqh5InxrFwXs1M3EMoAJtlikrj...Fv8vo8"
            alt="logo"
          />
          <h2 className="text-center text-2xl font-bold mt-6 leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
        <div>
          <label>User Name</label>
          <div className="mt-2">
            <input
              value={dataLogin.username}
              onChange={(e) =>
                setDataLogin({
                  ...dataLogin,
                  username: e.target.value,
                })
              }
              type="text"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 h-9 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className="mt-2">
            <input
              value={dataLogin.password}
              onChange={(e) =>
                setDataLogin({
                  ...dataLogin,
                  password: e.target.value,
                })
              }
              type="password"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 h-9 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-400 rounded-xl py-2.5 px-6"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <Link
            className="text-sm font-bold"
            href={{
              pathname: "/register",
            }}
          >
            Register
          </Link>
        </div>
      </form>
    </L.LoginMain>
  );
}
