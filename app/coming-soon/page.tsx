'use client'
import React from "react";
import { Button } from "../../components/button";
import { HexagonalJoin } from "@/assets/svg";

export default function Page () {
  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <div className="flex flex-col space-y-5 justify-center items-center px-4">
        <HexagonalJoin />
        <h1 className="text-4xl sm:text-5xl font-bold text-whitePrimary">
          Coming Soon
        </h1>
        <p className="mt-4 text-whitePrimary text-lg text-center">
          We&apos;re cooking something for your delight. <br /> Check back later!
        </p>
        <div className="flex gap-4">
          <Button href="/">Go Back</Button>
        </div>
      </div>
    </div>
  );
};

