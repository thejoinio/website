import Image from "next/image";
import joinToken from "@/assets/icons/join-token.webp";
import hero from "@/assets/images/hero.webp";
import { AnimatedText } from "../aimated-text";
import { UnionHead } from "../events";
import week5avatar from "@/assets/images/og-vr.svg";
import Link from "next/link";

const PrelaunchQuest = () => (
  <div className="flex w-full p-2.5 md:p-[14px] max-w-[117px] md:max-w-[250px] lg:max-w-[270px] border-white/20 border rounded-3xl absolute left-0 md:-left-4 xl:left-20 top-[40%] md:top-1/3">
    <div className="w-full max-w-md flex flex-col justify-center items-center gap-2 rounded-2xl p-2 md:p-6 pb-0.5 md:pb-2 px-[15px] bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)]">
      <UnionHead heading="Join Pre-Launch Quest" small className="font-[family-name:var(--font-abel)]" />
      <p className="text-[6px] md:text-sm text-center font-[family-name:var(--font-abel)]">Earn While Waiting</p>
      <div className="beta-testing bg-ogBg bg-center bg-contain p-3 md:p-6 rounded-full">
        <Image
          src={week5avatar}
          alt="A man using VR"
          width={66}
          height={65}
          className=" rounded-full"
        />
      </div>
      <Link href="/coming-soon" className="text-[8px] text-center md:text-base font-[family-name:var(--font-abel)] py-[3.5px] md:py-2.5 p-2.5 w-full max-w-[135px] rounded-lg" style={{ background: "linear-gradient(98deg, #8AE5CF 6.1%, #7C3AE7 103.66%)"}}>Start Earning</Link>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="fullscreen-container relative gap-4 w-full mx-auto overflow-hidden pt-20 px-5 md:px-10 lg:px-20">
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
          {/* <div className="absolute -bottom-16 text-background left-1/2 -translate-x-1/2">
            JOIN
          </div> */}
          <Image
            src={hero}
            alt="Join Animated Character of a girl"
            className="flex w-full max-w-[437px] mx-auto z-10 animate-bounce-hero"
          />
          <PrelaunchQuest />
        </div>
      </div>
    </section>
  );
}
