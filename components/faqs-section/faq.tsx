'use client'
import { CircledMinus, CircledPlus } from "@/assets/svg";
import React, { useState } from "react";

interface FAQProps {
  idx: number;
  title: string;
  content: string;
}
export const FAQ: React.FC<FAQProps> = ({ idx, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`mx-auto mb-[15px] flex w-full max-w-[60.625rem] flex-col transition duration-[850ms] bg-[#111C23] border-l-2 ${isActive ? "border-[#7F5CE2]": 'border-transparent'}`}>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="cursor-pointer mb-[20px] grid grid-cols-12 gap-4 md:gap-10 px-2.5 p-[26px] pb-0 z-20"
      >
        <div className="hidden xs:block text-base md:text-xl/[30px] font-medium self-center">{(idx + 1).toString().padStart(2, '0')}.</div>
        <p className="flex text-base md:text-xl/[30px] font-medium col-span-11 xs:col-span-10 self-center pl-3 pr-3 xs:pr-0">
          {title}
        </p>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="flex w-7 md:w-12 justify-end transition duration-500 md:col-span-1 justify-self-end z-20"
          aria-label="toggle button"
        >
          {isActive ? <CircledMinus /> : <CircledPlus />}
        </button>
      </div>
      <div
        className={`${
          !isActive
            ? "transition-all grid-rows-[0fr] opacity-0"
            : "transition-all grid-rows-[1fr] opacity-100 pb-[26px]"
        } overflow-hidden grid grid-cols-12 duration-[850ms]`}
      >
        <p
          aria-hidden={isActive}
          className={`text-[17px]/[30px] text-[#8C8C8C] overflow-hidden col-span-10 col-start-2 px-[26px]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
