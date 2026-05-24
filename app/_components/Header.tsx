"use client";

import { UserButton, useUser, SignInButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";

export default function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between py-8 px-6 bg-white shadow-md">
      <div className="flex gap-2 items-center">
        <Image src="/logo.png" alt="logo" width={45} height={45} />

        <h2 className="text-lg font-bold">
          <span className="text-blue-500">Vid</span>Course
        </h2>
      </div>

      <ul className="flex gap-8 mt-3 ml-2">
        <li className="text-lg hover:text-blue-500 cursor-pointer font-medium">
          Home
        </li>
        <li className="text-lg hover:text-blue-500 cursor-pointer font-medium">
          Pricing
        </li>
      </ul>

      <div className="mt-3 ml-2">
        {user ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Get Started
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}