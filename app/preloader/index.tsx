import React from "react";
import loader from './loader.gif'
import Image from "next/image";

export const Preloader: React.FC = () => {
  return (
    <main
      className={`bg-[#03131c] fixed left-0 top-0 z-[99999] w-full h-full flex justify-center items-center`}
    >
      <Image src={loader} alt="Loading..." height={391} width={400} priority />
    </main>
  );
};
