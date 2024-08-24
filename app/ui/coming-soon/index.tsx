'use client'
import { JoinIcon } from "@/app/assets/svg";
import React from "react";
import { Button } from "../button";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh_-_128px)]">
      <div className="flex flex-col space-y-5 justify-center items-center px-4">
        <JoinIcon />
        <h1 className="text-4xl sm:text-5xl font-bold text-whitePrimary">
          Coming Soon
        </h1>
        <p className="mt-4 text-whitePrimary text-lg text-center">
          We&apos;re cooking something for your delight. <br /> While we cook, you can proceed to joining our Community!
        </p>
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
    </div>
  );
};

export default ComingSoon;
