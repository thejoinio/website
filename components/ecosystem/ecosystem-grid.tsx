import Image from "next/image";
import { StoreButtons } from ".";
import joinda from "@/assets/images/joinda-app.png";
import joindaDesktop from '@/assets/images/joinda-desktop.png';
// import homeNSearch from "@/assets/vectors/home-n-search.svg";

const GridOne = () => (
  <div className="grid-one grid relative overflow-hidden lg:col-span-4 lg:row-span-3 lg:flex flex-col rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)] p-5 md:p-7 pb-0 md:pb-0">
    <div className="flex flex-col gap-3 lg:gap-4 relative grid-one-div">
      <h4 className="text-[28px]/normal md:text-[32px]/normal font-semibold">
        Joinda App
      </h4>
    </div>
    <div className="flex flex-col md:flex-row mt-6 gap-4">
      <div className="flex items-end relative">
        <StoreButtons />
      </div>
      <div className="w-full max-w-[320px] md:max-w-[419px] mx-auto md:mx-0">
        <div className="mt-auto h-full w-full overflow-hidden grid">
          <Image
            draggable={false}
            src={joinda}
            width={1077}
            height={1287}
            alt="Joinda app screenshot"
            className="flex w-full max-w-[420px] h-auto object-cover relative mt-auto"
          />
        </div>
      </div>
    </div>
  </div>
);
const GridTwo = () => (
  <div className="grid-two relative overflow-hidden col-span-1 lg:col-span-4 lg:row-span-2 flex justify-center items-center px-5 md:px-0 py-6 md:py-8 rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)]">
    <Image
      draggable={false}
      src={joindaDesktop}
      width={964}
      height={678}
      alt="Joinda desktop screenshot"
      className="flex w-full max-w-[482px] h-auto relative mt-auto"
    />
  </div>
);
const GridThree = () => (
  <div className="grid-three relative overflow-hidden order-2 lg:order-1 lg:col-span-4 lg:row-span-5 flex flex-col md:flex-row gap-6 lg:gap-4 pl-5 py-[37px] rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)] lg:row-start-1 lg:col-start-5">
    <div className="flex flex-col gap-4 pr-3">
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Play-to-Earn: </span>
        Compete in skill-based games, complete quests, and earn Joinda Points.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Instant Messaging: </span>
        Communicate seamlessly with friends, family, and colleagues in
        real-time.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Diverse Game Library: </span>
        Enjoy a wide range of games across various genres, all integrated.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Community Engagement: </span>
        Join or build communities, host discussions, and grow influence using
        unique referral links.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Quest Participation: </span>
        Complete tasks, earn rewards, and rank in quest leaderboards.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">News Feed: </span>Stay updated with the
        latest happenings within your network and beyond.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Fundraising for Projects: </span>
        Easily raise funds for personal or professional projects and social
        issues within the community.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Premium Subscriptions & Boosts: </span>
        Upgrade your account, unlock features, and boost visibility with Joinda Points or JOIN.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">In-App Wallet: </span>
        Automatically generated wallet to store, convert, and use JOIN Tokens and Joinda Points.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">Affiliate Earnings: </span>
        Refer friends, grow your network, and earn commissions through multi-tier rewards.
      </p>
      <p className="text-base md:text-lg text-[#ddd]">
        <span className="font-semibold">JOINDA Card: </span>
        The Joinda Card is a decentralized crypto debit card designed to enable seamless global spending using JOIN Tokens and other supported assets.
      </p>
    </div>
  </div>
);

export const EcosystemGrid = () => (
  <>
    <div className="grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-5 gap-5 mt-10">
      <GridOne />
      <GridTwo />
      <GridThree />
    </div>
  </>
);
