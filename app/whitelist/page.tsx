'use client'
import React from "react";
import WaitlistSection from "@/components/waitlist-section";
import JoinUsBig from "@/components/join-us-big";

export default function Page () {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen w-full">
      <JoinUsBig type="Whitelist" />
      <WaitlistSection type={'Whitelist'} />
    </div>
  );
};

