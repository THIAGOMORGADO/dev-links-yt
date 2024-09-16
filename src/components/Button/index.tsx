import React, { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="h-12 bg-[#212529] dark:bg-white  text-[#eee] dark:text-dark font-bold rounded-md text-[14px] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-105">
      {children}
    </button>
  );
}
