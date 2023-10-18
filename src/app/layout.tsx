"use client";

import { Exo } from "next/font/google";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

import { Provider } from "react-redux";
import { store } from "@/stores";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import React from "react";

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
            <NextUIProvider>{children}</NextUIProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
