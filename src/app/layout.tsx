"use client";

import { Exo } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "@/stores";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const inter = Exo({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ReCaptchaProvider reCaptchaKey="6LcEua4oAAAAAImkSG4MNL-CSZcYHK_tVah0slBO">
              <NextUIProvider>{children}</NextUIProvider>
            </ReCaptchaProvider>
          </QueryClientProvider>
        </Provider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
