import React from "react";
import { Metadata } from "next";
import { Preloader } from "./ui/preloader";

export const metadata: Metadata = {
  title: "JOIN - One For All",
  description:
    "Unite and Play: Connect with Others, Transform Gaming into Rewards, and Earn Every Step of the Way with Blockchain-Powered Security and Innovation!",
};

export default function Loading() {
  return <Preloader />;
}
