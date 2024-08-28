"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../Logo";

const PharmacyPage = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col justify-between bg-gradient-to-r from-black via-gray-900 to-black min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <nav className="w-full max-w-screen-xl py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <div className="flex flex-col items-center">
        <Image
          src="/pharmacy-counter.svg"
          alt="Pharmacy Counter"
          width={320}
          height={200}
          className="mb-6"
        />
        <div className="max-w-lg w-full text-center space-y-8">
          <h2 className="text-2xl font-extrabold text-white">
            Pharmacy Partner Dashboard
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={() => navigateTo("/pharmacy/login")}
              className="shadow-[inset_0_0_0_2px_#3478f6] text-white px-16 py-5 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#3478f6] hover:text-white dark:text-neutral-200 transition duration-200 text-lg"
            >
              Log In
            </button>
            <button
              onClick={() => navigateTo("/pharmacy/signup")}
              className="shadow-[inset_0_0_0_2px_#34f67a] text-white px-16 py-5 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#34f67a] hover:text-white dark:text-neutral-200 transition duration-200 text-lg"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <footer className="text-xs text-gray-400 w-full text-center">
        By continuing, you agree to our
        <a
          href="/terms"
          className="underline text-blue-200 hover:text-blue-100"
        >
          {" "}
          Terms of Service
        </a>
        ,
        <a
          href="/privacy"
          className="underline text-blue-200 hover:text-blue-100"
        >
          {" "}
          Privacy Policy
        </a>
        , and
        <a
          href="/conduct"
          className="underline text-blue-200 hover:text-blue-100"
        >
          {" "}
          Code of Conduct
        </a>
        .
      </footer>
    </div>
  );
};

export default PharmacyPage;
