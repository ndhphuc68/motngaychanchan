"use client";

import { LoginMain } from "@/app/login/styles";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import { RegisterModel } from "@/models";

export default function Register() {
  const [dataCreate, setDataCreate] = useState<RegisterModel>({
    username: "",
    password: "",
    phone: "",
    email: "",
    name: "",
  });

  const handleSignUp = (e: any) => {
    e.preventDefault();
  };

  return (
    <LoginMain>
      <div className="flex bg-white shadow-2xl rounded-xl p-10">
        <div className="flex-1 flex items-center">
          <Image
            className="w-full h-80 object-contain"
            src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OIqh5InxrFwXs1M3EMoAJtlikrj...Fv8vo8"
            alt="logo"
          />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSignUp} className="space-y-5">
            <h2>Register Account</h2>
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
              <label>Name</label>
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
                  type="text"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 h-9 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label>Confirm Password</label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 h-9 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div className="mt-2">
                <input
                  type="email"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 h-9 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label>Phone</label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 h-9 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-400 rounded-xl py-2.5 px-6"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginMain>
  );
}
