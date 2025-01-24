import Image from "next/image";
import { StoreButtons } from ".";
import { Button } from "../button";
// import { EcosystemCarousel } from "./carousel";
import joinda from "@/assets/images/joinda-app-2.webp";
import joint from "@/assets/images/joint-app-2.webp";
import homeNSearch from "@/assets/vectors/home-n-search.svg";

const GridOne = () => (
  <div className="grid-one grid relative overflow-hidden lg:col-span-4 lg:row-span-3 lg:flex flex-col justify-end rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)] p-5 md:p-7 pb-0 md:pb-0">
    <div className="flex flex-col gap-3 lg:gap-4 relative grid-one-div">
      <h4 className="text-[28px]/normal md:text-[32px]/normal font-semibold">
        Joinda App
      </h4>
      <p className="text-base md:text-xl text-[#ddd]">
        <span className="font-semibold">Instant Messaging: </span>
        Communicate seamlessly with friends, family, and colleagues in
        real-time.
      </p>
    </div>
    <div className="flex flex-col md:flex-row mt-6">
      <div className="flex items-end relative">
        <StoreButtons />
      </div>
      <div className="w-full max-w-[320px] md:max-w-[419px] mx-auto md:mx-0">
        <div className="mt-auto h-[240px] md:h-[378px] w-full overflow-hidden grid">
          <Image
            draggable={false}
            src={joinda}
            width={1077}
            height={1287}
            alt="Joinda app screen shot"
            className="flex w-full max-w-[420px] h-auto object-cover relative mt-auto"
          />
        </div>
      </div>
    </div>
  </div>
);
const GridTwo = () => (
  <div className="grid-two relative overflow-hidden col-span-1 lg:col-span-4 lg:row-span-2 flex flex-col md:flex-row gap-5 md:gap-10 px-5 md:px-0 py-6 md:py-8 rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)]">
    <div className="ml-0 md:ml-[43px] flex items-end md:justify-end">
      <Image
        src={homeNSearch}
        width={241}
        height={271}
        alt="Home Icon with a search icon after it"
        className="relative max-w-[150px] md:max-w-auto"
      />
    </div>
    <div className="flex flex-col justify-center pr-3.5 gap-4 z-10">
      <p className="text-sm sm:text-xl text-[#ddd]">
        <span className="font-semibold">News Feed: </span>Stay updated with the
        latest happenings within your network and beyond.
      </p>
      <p className="text-sm sm:text-xl text-[#ddd]">
        <span className="font-semibold">Fundraising for Projects: </span>
        Easily raise funds for personal or professional projects and social
        issues within the community.
      </p>
      <Button variant="dark" className="z-10 opacity-50">
        Visit Website
      </Button>
    </div>
  </div>
);
const GridThree = () => (
  <div className="grid-three relative overflow-hidden order-2 lg:order-1 lg:col-span-3 lg:row-span-2 flex flex-col md:flex-row gap-6 lg:gap-4 pl-5 py-[37px] rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)] lg:row-start-1 lg:col-start-5">
    <div className="flex items-end">
      <div className="flex items-end h-[150px] w-[137px] gap-3">
        <div className="rounded-[74px] w-full max-w-[37px] h-full max-h-[91px] bg-[rgba(217,217,217,0.08)] shadow-[1.74px_0.58px_7.539px_0.58px_rgba(255,255,255,0.10)_inset] backdrop-blur-[7px]"></div>
        <div className="rounded-[74px] w-full max-w-[37px] h-full max-h-[150px] bg-[linear-gradient(98deg,#8AE5CF_6.1%,_#7C3AE7_103.66%)] shadow-[-1.74px_-2.32px_12.353px_0px_#A82600_inset,_1.74px_0.58px_7.539px_0.58px_rgba(255,255,255,0.70)_inset]"></div>
        <div className="rounded-[74px] w-full max-w-[37px] h-full max-h-[121px] bg-[rgba(217,217,217,0.08)] shadow-[1.74px_0.58px_7.539px_0.58px_rgba(255,255,255,0.10)_inset] backdrop-blur-[7px]"></div>
      </div>
    </div>
    <div className="flex flex-col gap-4 pr-3">
      <p className="text-sm sm:text-base text-[#ddd]">
        <span className="font-semibold">Monetization Opportunities: </span>
        Turn your gaming skills into earnings by competing in global tournaments
        and lotteries.
      </p>
      <p className="text-sm sm:text-base text-[#ddd]">
        <span className="font-semibold">Diverse Game Library: </span>
        Enjoy a wide range of games across various genres, all integrated.
      </p>
      <Button variant="dark" className="z-10 opacity-50">
        Visit Website
      </Button>
    </div>
  </div>
);
const GridFour = () => (
  <div className="grid-four relative overflow-hidden lg:col-span-3 lg:row-span-3 flex flex-col justify-end p-5 md:p-7 pb-0 md:pb-0 rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)] lg:row-start-3 lg:col-start-5">
    <div className="flex flex-col gap-[18px]">
      <h4 className="text-lg sm:text-[32px]/normal font-semibold silver-text">
        Joint App
      </h4>
      <p className="text-sm sm:text-xl text-[#ddd]">
        <span className="font-semibold">Blockchain-Powered Lottery: </span>
        Experience the next generation of lotteries with complete transparency
        and security, powered by blockchain technology.
      </p>
    </div>
    <div className="flex flex-col md:flex-row mt-6 relative z-10">
      <div className="flex items-end">
        <StoreButtons />
      </div>
      <div className="w-full max-w-[320px] md:max-w-[419px] mx-auto md:mx-0">
        <div className="mt-auto h-[300px] w-full overflow-hidden grid">
          <Image
            draggable={false}
            src={joint}
            width={1077}
            height={1287}
            alt="Joinda app screen shot"
            className="flex w-full max-w-[420px] h-auto object-cover mt-auto"
          />
        </div>
      </div>
    </div>
  </div>
);
export const EcosystemGrid = () => (
  <>
    <div className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-5 gap-5 mt-10">
      <GridOne />
      <GridTwo />
      <GridThree />
      <GridFour />
    </div>
  </>
);
