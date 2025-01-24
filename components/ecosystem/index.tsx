"use client";
import Image from "next/image";
import appstore from "@/assets/images/appstore.png";
import playstore from "@/assets/images/playstore.png";
import joinToken from "@/assets/icons/join-token.webp";
import { EcosystemGrid } from "./ecosystem-grid";

export const StoreButtons = () => {
  return (
    <div className="flex flex-row md:flex-col gap-[5px] mt-4 lg:mt-[30px] mb-7 lg:mb-10">
      <button aria-label="Download on Play Store" title="Download on Play Store" className="flex max-w-[136px] hover:scale-95 active:scale-100 transition duration-200">
        <Image
          src={playstore}
          alt="Download on Play Store"
          width={409}
          height={142}
        />
      </button>
      <button aria-label="Download on App Store" title="Download on App Store" className="flex max-w-[122px] hover:scale-95 active:scale-100 transition duration-200">
        <Image
          src={appstore}
          alt="Download on App Store"
          width={367}
          height={142}
        />
      </button>
    </div>
  );
};

export default function Ecosystem () {
  return (
      <section id="products" className="products relative flex flex-col items-center pt-10 lg:pt-20 overflow-hidden">
        <div className="products-body flex flex-col relative w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-2xl/normal xs:text-4xl/normal md:text-[48px]/normal font-medium max-w-[21ch] mx-auto text-center">
              The J
              <Image
              src={joinToken}
              alt="Join Token also represents O"
              width={200}
              height={199}
              className="inline mix-blend-luminosity w-6 xs:w-8 md:w-10 h-6 xs:h-8 md:h-10 -mt-1 xs:-mt-2 md:-mt-3 mx-1"
              />
              IN Ecosystem
          </h2>

          <EcosystemGrid />
        </div>
      </section>
  );
};
