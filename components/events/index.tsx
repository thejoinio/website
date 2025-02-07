import Image from "next/image";
import joinToken from "@/assets/icons/join-token.webp";
import joinTokenHalf from "@/assets/icons/join-token-original.png";
import {
  ArrowUpRight,
  Calendar,
  ProductReleaseIcon,
  RaphaelSpeaker,
  Speaker,
  UnionIcon,
} from "@/assets/svg";
import week5avatar from "@/assets/images/og-vr.svg";
import week7meme from "@/assets/images/week-7-memes.png";
import event2airdrop from "@/assets/images/event-2-airdrop.png";
import event69 from "@/assets/images/event-69.png";
import Link from "next/link";

const JoinTokenSpeaker = () => (
  <div className="bg-white rounded-xl relative w-8 h-8">
    <Image
      src={joinToken}
      alt="Join Token"
      width={130}
      height={130}
      className="p-0.5 mix-blend-luminosity"
    />
    <div className="absolute -right-1 -bottom-1">
      <Speaker />
    </div>
  </div>
);

const WeekHeader: React.FC<{ heading: string; text: string }> = ({
  heading,
  text,
}) => (
  <div>
    <h5 className="text-[13px] font-bold leading-normal">{heading}</h5>
    <p className="text-[#73767D] text-[10px]">{text}</p>
  </div>
);
const UnionHead: React.FC<{ heading: string; className?: string }> = ({
  heading,
  className = "",
}) => {
  return (
    <div
      className={`flex justify-between items-center h-10 w-full min-w-[120px] max-w-[157px] bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)] ${className}`}
    >
      <UnionIcon />
      <h5 className="text-lg/normal font-medium">{heading}</h5>
      <UnionIcon />
    </div>
  );
};
const Event1Card = () => (
  <div className="w-full sm:w-1/2 max-w-md mx-auto flex flex-col bg-gradientOpaque rounded-3xl py-[51px] px-6">
    <div className="bg-[#202225] rounded-t-xl flex justify-between w-full p-[9px]">
      <div className="flex gap-2.5">
        {/* Join Token Speaker */}
        <JoinTokenSpeaker />
        <WeekHeader heading="Event 1" text="#event_1" />
      </div>
      <div className="flex items-center">
        <RaphaelSpeaker />
      </div>
    </div>
    <div className="flex flex-col justify-center text-center rounded-b-xl text-xs/normal gap-[5px] py-5 px-[14px] bg-[linear-gradient(98deg,#2E5E52_6.1%,#121010_103.66%)]">
      <p className="text-xs/normal font-medium">Join Users</p>
      <p>+</p>
      <p className="text-xs/normal font-medium">Engagement Phase for Point Generation</p>
      <Link href={'https://discord.gg/uf2TzvAsJX'} target="_blank" className="gap-1 font-medium flex justify-center items-center mt-3">
        Participate <ArrowUpRight />
      </Link>
    </div>
  </div>
);

const Event2Card = () => (
  <div className="w-full max-w-md mx-auto sm:w-1/2 flex flex-col bg-event2 bg-[#191934] bg-left-bottom bg-cover rounded-3xl py-[51px] px-6">
    <div className="bg-[#202225] bg-event2BgSm bg-cover bg-center rounded-t-xl flex justify-between w-full p-[9px]">
      <div className="flex gap-2.5">
        {/* Join Token with a Speaker */}
        <JoinTokenSpeaker />
        <WeekHeader heading="Event 2" text="#event_2" />
      </div>
      <div className="flex items-center">
        <Image
          src={event2airdrop}
          alt="Airdrop ballon"
          width={32}
          height={32}
        />
      </div>
    </div>
    <div className="flex flex-col justify-around h-full min-h-[120px] rounded-b-xl gap-3 py-5 px-[14px] bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)]">
      <p className="text-xs/normal font-medium">
        - Reward/Airdrop Point (JOIN Point)
      </p>
      <button className="gap-1 flex justify-center items-center">
        Join <ArrowUpRight />
      </button>
    </div>
  </div>
);

const Event4Card = () => (
  <div className="w-full max-w-md mx-auto sm:w-3/5 flex flex-col items-center bg-event3 bg-cover bg-[#190062] rounded-3xl py-[56px] px-6 gap-6 relative z-10">
    <div className="flex flex-col justify-center items-center gap-1">
      <h5 className="text-[28px]/normal font-semibold">Event 4</h5>
      <p className="text-lg/normal text-center">
        1st Quiz and Riddle event with rewards.
      </p>
    </div>
    <button className="flex justify-center items-center gap-1 bg-white text-[#09141B] rounded-full px-5 py-2.5">
      <Calendar /> Get your spot
    </button>
  </div>
);

const Event5Card = () => (
  <div className="w-full max-w-md mx-auto sm:w-2/5 h-full min-h-[280px] flex flex-col justify-center items-center gap-[50px] bg-event5 bg-[#19193480] bg-center bg-cover bg-blend-overlay px-3 rounded-3xl">
    <div className="text-center">
      <h5 className="text-2xl font-semibold">Event 5</h5>
      <p className="text-sm/[25px]">Whitelisting Phase</p>
    </div>
    <div className="relative gradient-border-div text-white text-center bg-[#121010]/50 font-medium outline-transparent py-[10px] px-5 rounded-full transition-colors duration-1000 ease-in-out">
      Join Whitelist
    </div>
  </div>
);

const Event3Card = () => (
  <div className="w-full max-w-md mx-auto sm:w-2/5 flex flex-col justify-center items-center gap-[15px] rounded-3xl p-6 px-[15px] bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)]">
    <UnionHead heading="Event 3" />
    <div className="beta-testing bg-ogBg bg-center bg-contain p-6 rounded-full">
      <Image
        src={week5avatar}
        alt="A man using VR"
        width={66}
        height={65}
        className=" rounded-full"
      />
    </div>
    <p className="text-sm text-center">Beta Testing with OGs</p>
  </div>
);

const Event8Card = ({type = 'default'}:{type?: string}) => (
  <div className={`w-full max-w-md mx-auto sm:w-3/5 bg-event7 pt-5 pb-9 px-[15px] bg-cover rounded-3xl ${type === 'default'?'hidden sm:flex': 'flex sm:hidden'} flex-col justify-center items-center`}>
    <h5>Event 8</h5>
    <div className="mt-7 mb-3">
      <Image src={week7meme} alt="Memes" />
    </div>
    <p className="text-center mt-4">Community Feature Release</p>
  </div>
);

const Event69Card = () => (
  <div className="relative w-full max-w-md sm:max-w-[630px] h-full min-h-[200px] mx-auto p-[35px] pb-0 px-[15px] sm:px-[35px] flex flex-col sm:flex-row justify-between gap-4 xl:gap-8 rounded-3xl bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)] overflow-hidden">
    <div className="flex flex-col items-center sm:items-start justify-between sm:pb-[40px]">
      <div className="flex w-full mb-4 sm:hidden">
        <UnionHead heading="Event 6 - 9" className="mx-auto" />
      </div>
      <h5 className="flex relative product-release text-[32px] text-center sm:text-left gap-1 max-w-fit sm:max-w-[6ch]">
        Product Release
        <span className="hidden sm:block absolute bottom-2.5 sm:right-0">
          <ProductReleaseIcon />
        </span>
      </h5>
      <ul className="pl-5 list-disc text-sm/normal gap-1 flex flex-col">
        <li className="xl:whitespace-nowrap">Affiliate Feature Release</li>
        <li className="xl:whitespace-nowrap">Presale + Hype Phase</li>
      </ul>
    </div>
    <div className="flex flex-col justify-between items-center sm:items-end gap-4 lg:gap-[27px] min-w-[138px]">
      <div className="hidden sm:flex w-full">
        <UnionHead heading="Event 6 - 9" className="ml-auto" />
      </div>
      <div className="flex">
        <Image
          src={event69}
          width={726}
          height={531}
          alt="A guy wearing the VR headsets"
          className=""
        />
      </div>
    </div>
    <Image
      src={joinTokenHalf}
      alt="Join Token"
      width={130}
      height={130}
      className="mix-blend-plus-lighter absolute left-7 sm:left-[40%] -translate-x-1/2 bottom-0"
    />
  </div>
);

export default function Events() {
  return (
    <section className="events-section relative overflow-hidden">
      <div className="events relative py-20 flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col-reverse items-center gap-1 font-semibold">
          <h2 className="text-2xl/normal sm:text-[48px] leading-[73px] text-center">Community Events</h2>
          <p className="text-sm sm:text-base/[26px]">Events</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 sm:mt-[56px]">
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Event 1 Card */}
            <Event1Card />
            {/* Event 2 Card */}
            <Event2Card />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Event 3 Card */}
            <Event3Card />
            {/* Event 8 Card */}
              <Event8Card />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Week 3 Card */}
            <Event4Card />
            {/* Event 5 Card */}
            <Event5Card />
          </div>
            <Event8Card type="small" />
          {/* Event 6 - 9 Card */}
          <Event69Card />
        </div>
      </div>
    </section>
  );
}
