import Image from "next/image";
import joinToken from '@/assets/icons/join-token.webp';
import hero from '@/assets/images/hero.webp'
import { AnimatedText } from "../aimated-text";

export default function Hero () {
    return (
      <section className="grid grid-cols-[80px_1fr_80px] min-h-screen gap-4 font-[family-name:var(--font-geist-sans)] w-full overflow-hidden pt-20">
          <div className="grid grid-cols-1 gap-16 place-content-around pt-10 pl-10 h-full">
            <p
              className={`text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90 `}
            >
              Constant Reward
            </p>
            <p
              className={`text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90`}
            >
              Social Life
            </p>
            <p
              className={`text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90`}
            >
              Blockchain
            </p>
          </div>
        <div className="flex flex-col gap-[72px] pt-11">
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-[64px]/normal font-medium max-w-[18ch] mx-auto text-center">
              Experience J
              <Image
                src={joinToken}
                alt="Join Token also represents O"
                width={200}
                height={199}
                className="inline mix-blend-luminosity w-[50px] h-[50px] -mt-3 mx-1"
              />
              IN where <AnimatedText />meets Blockchain
            </h1>
            <p className="text-center text-sm text-[#E5E7EB] max-w-[67ch] mx-auto">
              Connect and Play: Connect with Others, Transform Gaming into
              Rewards, and Earn Every Step of the Way with Blockchain-Powered
              Security and Innovation!
            </p>
          </div>
          <div className="flex relative">
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-full h-full max-w-[556px] mx-auto bg-[#D9D9D9]/10 blur-[100px]" />
            <div className="absolute -bottom-16 text-background left-1/2 -translate-x-1/2">JOIN</div>
            <Image src={hero} alt="Join Animated Character of a girl" className="flex w-full max-w-[437px] mx-auto z-10 animate-bounce-hero" />
          </div>
        </div>
        <div className="grid grid-cols-1 place-content-end">
          <p className={`text-xs font-medium uppercase text-[#6B7280] whitespace-nowrap -rotate-90 pl-20 pb-10`}>
            Where social meets blockchain
          </p>
        </div>
      </section>
    );
}