"use client";
import Image from "next/image";
import { Button } from "../button";
import tokens from "@/app/assets/images/join-tokens.webp";

export const MarqueeSection = () => {
  const gradientStyle = {
    background:
      "linear-gradient(98deg, rgba(102, 254, 203, 0.20) 6.1%, rgba(137, 64, 255, 0.20) 103.66%), rgba(29, 29, 29, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.10)",
  };
  return (
    <section
      style={gradientStyle}
      className="flex flex-col md:flex-row items-center justify-center px-6 w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto rounded-[50px]"
    >
      <div className="flex flex-col w-full md:w-[45%] items-center justify-center pb-10 pt-14 sm:py-10 md:py-[100px]">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-10 md:mb-[60px] w-full max-w-[12ch]">
          With JOIN Community, every dream is a possibility{" "}
        </h2>
        <Button
          variant="shaped-white"
          className="scale-125 hover:!scale-[1.2]"
          onClick={() => {
            window.open('https://t.me/JoinAllinOneEco', '_blank', 'noopener,noreferrer');
          }}
        >
          Join Community{" "}
        </Button>
      </div>
      <div className="flex items-center justify-center w-full md:w-[55%] pb-10 md:pb-0">
        <Image
          src={tokens}
          width={1200}
          height={1170}
          alt="Two 3D Join tokens stacked on top of each other"
          className="animate-bounce-token max-w-[300px] md:max-w-[400px]"
        />
      </div>
    </section>
  );
};
