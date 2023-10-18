"use client";
import * as L from "@/app/login/styles";
import { Image } from "@nextui-org/react";

export default function LoginPage() {
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(1232323);
  };

  return (
    <L.LoginMain className="flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="w-96 space-y-4 bg-white py-14 px-10"
      >
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OIqh5InxrFwXs1M3EMoAJtlikrj...Fv8vo8"
            alt="logo"
          />
          <h2 className="text-center text-2xl font-bold mt-6 leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div>
          <label>User Name</label>
          <div className="mt-2">
            <input
              type="text"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 h-9 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className="mt-2">
            <input
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
      </form>
    </L.LoginMain>
  );
}
