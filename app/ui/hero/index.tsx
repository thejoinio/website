"use client";
import { inter } from "@/app/fonts";
import { AnimatedText } from "../aimated-text";
import { VideoBackground } from "@/app/ui/bg-video";
import { Button } from "../button";
import { Divider } from "@/app/assets/svg";
import Countdown from "../countdown";
import { Navbar } from "../navbar";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const { push } = useRouter();
  return (
    <VideoBackground as="section">
      <Navbar />
      <div className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col items-center pt-24">
        <h1 className="bg-[rgba(92,78,222,0.1)] rounded-[25px] border border-[rgba(255,255,255,0.10)] hidden md:inline-flex px-5 py-3 text-[#9891E1] text-lg font-semibold mb-[55px]">
          Join: One For All
        </h1>
        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-[55px] font-semibold md:font-bold tracking-wider text-center text-white md:leading-[70px] mb-10">
          <span className="inline-flex max-w-[18ch] md:max-w-full">
            Experience JOIN where
          </span>
          <br />
          <span className="flex relative items-center transition-all duration-300 pt-2 w-fit lg:w-auto mx-auto">
            <AnimatedText />
            <span className="py-2 hidden lg:inline-flex items-center leading-tight mr-2 ml-2">
              meets Blockchain
            </span>
          </span>
          <span className="py-2 inline-flex lg:hidden items-center leading-tight mr-2 ml-2">
            meets Blockchain
          </span>
        </h2>
        <p
          className={`flex w-full max-w-[850px] mx-auto text-center font-medium text-sm md:text-xl leading-[30px] md:leading-[35px] text-white mb-[38px] md:mb-[55px] ${inter.className}`}
        >
          Connect and Play: Connect with Others, Transform Gaming into Rewards,
          and Earn Every Step of the Way with Blockchain-Powered Security and
          Innovation!
        </p>
        <Countdown targetDate="2024-08-12T00:00:00" />
        <Button
          variant="shaped-gradient-outline"
          onClick={() => push("/whitelisting")}
          className="scale-125 hover:!scale-[1.2]"
        >
          <span className="text-whitePrimary font-semibold text-base scale-90">
            Join Whitelisting
          </span>
        </Button>
      </div>
      <div className="flex w-full mt-20 overflow-hidden">
        <Divider className="w-screen" />{" "}
      </div>
    </VideoBackground>
  );
};
