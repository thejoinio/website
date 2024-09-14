'use client'
import { ChevronDown } from "@/app/assets/svg";
import React, { useState } from "react";

interface FAQProps {
  title: string;
  content: string;
}
export const FAQ: React.FC<FAQProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div data-aos='fade-up' className="mx-auto mb-10 border-b-[0.488px] border-[#788190] flex w-full max-w-[75rem] flex-col transition duration-200">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="cursor-pointer mb-[37px] flex min-w-[90%] items-center justify-between mx-2.5 md:mx-0"
      >
        <p className="text-base font-semibold text-gray-200 transition duration-300 md:text-lg">
          {title}
        </p>
        <div className="flex w-12 justify-end transition duration-300">
          <ChevronDown isActive={isActive} />
        </div>
      </div>
      <div
        className={`${
          !isActive
            ? "transition-all duration-800 grid-rows-[0fr] opacity-0"
            : "transition-all duration-800 grid-rows-[1fr] opacity-100 pb-8"
        } overflow-hidden grid`}
      >
        <p
          aria-hidden={isActive}
          className={`text-sm text-gray-200 overflow-hidden md:text-base mx-2.5 md:mx-0`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
