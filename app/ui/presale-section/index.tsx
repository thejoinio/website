import Image from "next/image";
import { Button } from "../button";
import nft from "@/app/assets/images/possibilities/nft.webp";

export const PresaleSection = () => {
  return (
    <section className="relative mt-[150px] mb-[120px] md:mb-0">
      <div className="bg-[#030E14] mix-blend-color-dodge absolute -z-20 h-full w-[calc(100%_-_48px)] sm:w-[calc(100%_-_120px)] md:w-[calc(100%_-_180px)] xl:w-[calc(100%_-_240px)] max-w-8xl mx-auto ">
        <div className="absolute left-0 -bottom-1/4 bg-[url('/presale-section-bg.png')] bg-bottom bg-contain bg-no-repeat w-[255px] h-[419px]" />
      </div>
      <div className="relative overflow-hidden top-0 flex flex-col md:flex-row items-center justify-center w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto bg-[rgba(23,38,47,0.20)] bg-no-repeat px-6 sm:px-10 md:px-20 py-[60px] rounded-[50px] border border-[rgba(255,255,255,0.10)] backdrop-blur-[22px]">
        <div className="bg-[#030E14] mix-blend-color-dodge absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 md:left-[200px] h-full w-full bg-presale-flare mix-blend-color-dodge bg-contain bg-center bg-no-repeat" />
          <div className="absolute top-0 -left-1/3 md:left-0 w-[239px] h-[500px] bg-[url('/join-presale-tl.png')] bg-contain bg-clip-padding -z-10 bg-no-repeat rounded-tl-[50px] mix-blend-color-dodge" />
          <div className="absolute top-1/4 -right-1/4 md:right-0 w-[152px] h-[381px] bg-[url('/join-presale-cr.png')] bg-contain bg-clip-padding -z-10 bg-no-repeat rounded-tl-[50px] mix-blend-color-dodge" />
        </div>
        <div className="absolute bottom-0 -right-2/4 md:right-0 w-[786px] h-[500px] bg-[url('/join-presale-cb.png')] bg-contain bg-clip-padding -z-10 bg-no-repeat rounded-tl-[50px] mix-blend-color-dodge" />
        <div className="flex flex-col w-full md:w-3/5">
          <h2 className="join-presale-heading font-semibold text-center md:text-left text-3xl md:text-5xl lg:text-[55px] lg:leading-normal md:max-w-[18ch] z-40">
            Grab your Spot in the JOIN Presale. <br /> Exclusive Freebies Await
          </h2>
          <div className="flex justify-center md:justify-between">
            <Button
              disabled
              variant="shaped-enabled"
              className="translate-x-0 z-40 scale-125 hover:!scale-[1.2] mt-9 md:translate-x-[24px]"
            >
              <span className="join-presale-text font-bold whitespace-nowrap">
                Join Presale
              </span>
            </Button>
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="absolute bottom-[20px] right-0 md:left-[40%] lg:left-1/2 h-[140px] w-[180px] bg-[url('/upto41.png')] bg-contain bg-center bg-no-repeat -z-10 mix-blend-color-dodge"
                aria-label="Up to 4% in direct and indirect SOLANA commissions when your refer"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 mt-5 md:mt-0">
          <Image
            draggable={false}
            src={nft}
            width={822}
            height={1162}
            alt="3 Demigods nft stacked on top of each other"
            className="z-40 flex mx-auto md:ml-auto md:mr-0 h-full max-h-[400px] w-auto object-scale-down mix-blend-normal"
          />
        </div>
      </div>
    </section>
  );
};
