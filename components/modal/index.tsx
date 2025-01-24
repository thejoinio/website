"use client";
import React from "react";
import { TimesIcon } from "@/assets/svg";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[rgba(4,20,29,0.70)] flex justify-center items-center z-50 bg-mainBgMobile md:bg-whitelistingBg bg-cover bg-center"
    >
      <div
        className="bg-[rgba(23,38,47,0.30)] bg-[url('/modal-bg.png')] bg-contain bg-no-repeat sm:bg-cover border border-[#666666CC] p-2 sm:p-7 rounded-[50px] backdrop-blur-[50px] relative w-[90%] max-w-[800px] h-fit flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-[30px] right-4 sm:right-[30px] hover:scale-110 active:scale-100 transition duration-200"
        >
          <TimesIcon />
        </button>
        {children}
      </div>
    </div>
  );
};
