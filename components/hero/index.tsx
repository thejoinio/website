import Image from "next/image";
import joinToken from "@/assets/icons/join-token.webp";
import hero from "@/assets/images/hero.webp";
import { AnimatedText } from "../aimated-text";
import game from "@/assets/images/game1.jpg";



export default function Hero() {
  return (
    <section className="hero-section relative gap-4 font-[family-name:var(--font-geist-sans)] w-full mx-auto overflow-hidden pt-20 px-5 md:px-10 lg:px-20 h-screen">
      <div className="flex flex-col gap-[72px] pt-[60px]  relative">
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
          <div className="relative w-[279px] h-[232.3246px] bg-gray-900 rounded-[12px] overflow-hidden">
            <div className="absolute inset-0 border-2 border-[linear-gradient(90deg,_#8AE5CF_30%,_#7C3AE7_70%)] rounded-lg"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-white bg-[linear-gradient(90deg,_#8AE5CF_30%,_#7c3AE7_70%)] p-4">
              {/* Top Text */}
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold">||</span>
                <h2 className="text-xl font-semibold">Gaming</h2>
                <span className="text-2xl font-bold">||</span>
              </div>

              <div className="mt-6 w-[80px] h-[80px] bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={game}
                  alt="Gaming"
                  className="object-cover w-full h-full"
                  width={80}
                  height={80}
        
                />
              </div>

              {/* Bottom Text */}
              <div className="mt-6 text-center">
                <p className="text-sm font-medium">Beta Testing with Beta</p>
              </div>
            </div>
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
