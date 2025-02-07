import Image from "next/image";
import joinToken from "@/assets/icons/join-token.webp";
import hero from "@/assets/images/hero.webp";
import { AnimatedText } from "../aimated-text";

export default function Hero() {
  return (
    <section className="hero-section relative gap-4 font-[family-name:var(--font-geist-sans)] w-full mx-auto overflow-hidden pt-20 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col gap-[72px] pt-[60px]">
        <div className="flex flex-col gap-[22px] relative hero-heading">
          <h1 className="text-3xl/tight xs:text-[40px]/normal md:text-[64px]/normal font-medium max-w-[13ch] xs:max-w-[18ch] mx-auto text-center">
            Experience J
            <Image
              src={joinToken}
              alt="Join Token also represents O"
              width={200}
              height={199}
              className="inline mix-blend-luminosity w-6 xs:w-8 md:w-[50px] h-6 xs:h-8 md:h-[50px] -mt-1 sm:-mt-2 md:-mt-3 mx-1"
            />
            IN where
            <AnimatedText />
            meets Blockchain
          </h1>
          <p className="text-center text-sm xs:text-base/[30px] md:text-xl text-[#E5E7EB] max-w-[67ch] mx-auto">
            Connect and Play: Connect with Others, Transform Gaming into
            Rewards, and Earn Every Step of the Way with Blockchain-Powered
            Security and Innovation!
          </p>
        </div>
        <div className="flex relative hero-image">
          <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-full h-full max-w-[556px] mx-auto bg-[#D9D9D9]/10 blur-[100px]" />
          <div className="absolute -bottom-16 text-background left-1/2 -translate-x-1/2">
            JOIN
          </div>
          <Image
            src={hero}
            alt="Join Animated Character of a girl"
            className="flex w-full max-w-[437px] mx-auto z-10 animate-bounce-hero"
          />
        </div>
      </div>
      <p
        className={`absolute top-[170px] -left-6 xs:-left-8 md:-left-0 -z-10 text-[10px] xs:text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90 `}
      >
        Constant Reward
      </p>
      <p
        className={`absolute top-1/2 left-0 md:left-8 -z-10 text-[10px] xs:text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90`}
      >
        Social Life
      </p>
      <p
        className={`absolute bottom-24 left-0 md:left-8 -z-10 text-[10px] xs:text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90`}
      >
        Blockchain
      </p>
      <p
        className={`absolute bottom-44 -right-20 md:-right-8 -z-10 text-[10px] xs:text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90`}
      >
        Where social meets blockchain
      </p>
    </section>
  );
}
