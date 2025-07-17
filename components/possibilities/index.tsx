import Image, { StaticImageData } from "next/image";
import joinToken from "@/assets/icons/join-token.webp";
import { Card } from "./card";
<<<<<<< HEAD
import joinExchange from "@/assets/images/join-exchange-cards.png";
import digiArt from "@/assets/images/digital-art-cube-with-square-middle.png";
import nftCollection from "@/assets/images/nft-collections.png";
import cryptoDebitCard from "@/assets/images/crypto-debit-card.png";
import lotteriesParticipation from "@/assets/images/lotteries-participation.png";
import makePaymentCards from "@/assets/images/make-payment-cards.png";
import earnRewards from "@/assets/images/earn-rewards.png";
import raiseFunds from "@/assets/images/raise-funds.png";
import affilliation from "@/assets/images/affiliation.png";
=======
import joinExchange from '@/assets/images/join-exchange-cards.png';
import digiArt from '@/assets/images/digital-art-cube-with-square-middle.png';
import nftCollection from '@/assets/images/nft-collections.png';
import cryptoDebitCard from '@/assets/images/crypto-debit-card.png';
import makePaymentCards from '@/assets/images/make-payment-cards.png';
import earnRewards from '@/assets/images/earn-reward.png';
import commEng from '@/assets/images/community-engagement.png'
import raiseFunds from '@/assets/images/raise-funds.png';
import affiliatePrograms from '@/assets/images/affiliate-program.png'
>>>>>>> f9a7537 (feat: new updates ✨✅)
import { HexagonalJoin } from "@/assets/svg";

export default function Possibilities() {
  const data: {
    heading: string;
    image: string | StaticImageData;
    width: number;
    height: number;
    details: string;
  }[] = [
    {
      heading: "Means of Exchange",
      image: joinExchange,
      width: 450,
      height: 411,
      details:
        "Use JOIN as a secure and transparent means of exchange within the ecosystem.",
    },
<<<<<<< HEAD
    {
      heading: "In-Games Purchases",
=======
    { 
      heading: "Gaming & Tournament",
>>>>>>> f9a7537 (feat: new updates ✨✅)
      image: digiArt,
      width: 420,
      height: 394,
      details: "Spend JOIN on various in-game items and features.",
    },
    {
      heading: "Crypto Debit Card",
      image: cryptoDebitCard,
      width: 406,
      height: 399,
      details:
        "Introducing our global decentralized crypto debit card for in - store and online payments.",
    },
<<<<<<< HEAD
    {
      heading: "NFT Collections",
      image: nftCollection,
      width: 630,
      height: 353,
      details: "Get access to our NFT collections on JOIN.",
=======
    { 
      heading: "Quest Participation",
      image: nftCollection,
      width: 630,
      height: 353,
      details: "Complete community-driven tasks to earn rewards and boost engagement."
>>>>>>> f9a7537 (feat: new updates ✨✅)
    },
    {
      heading: "Make Payment",
      image: makePaymentCards,
      width: 480,
      height: 457,
      details:
        "Pay for a wide range of products and services using JOIN tokens",
    },
<<<<<<< HEAD
    {
      heading: "Lotteries Participation",
      image: lotteriesParticipation,
      width: 579,
      height: 366,
      details:
        "Participate in lotteries that ensure fairness through blockchain technology.",
    },
    {
=======
    { 
>>>>>>> f9a7537 (feat: new updates ✨✅)
      heading: "Earn Rewards",
      image: earnRewards,
      width: 432,
      height: 451,
      details: "Earn Rewards in JOIN for high engagement and content creation.",
    },
<<<<<<< HEAD
    {
=======
    { 
      heading: "Community Engagement",
      image: commEng,
      width: 432,
      height: 451,
      details: "Build, manage, and monetize vibrant communities with powerful admin tools."
    },
    { 
>>>>>>> f9a7537 (feat: new updates ✨✅)
      heading: "Raise Funds",
      image: raiseFunds,
      width: 420,
      height: 427,
      details:
        "Raise Funds by launching crowdfunding campaigns for your projects.",
    },
<<<<<<< HEAD

    {
      heading: "Affiliate Program",
      image: affilliation,
      width: 420,
      height: 427,
      details:
        "Raise Funds by launching crowdfunding campaigns for your projects.",
    },
  ];

=======
    { 
      heading: "Affiliate Program",
      image: affiliatePrograms,
      width: 420,
      height: 427,
      details: "Referral-based earning and multi-tier commissions."
    },
  ]
  
>>>>>>> f9a7537 (feat: new updates ✨✅)
  return (
    <>
      <div className="flex md:px-[18px] max-w-[1440px] mx-auto">
        <div className="w-full rounded-tl-[36px] rounded-tr-[24px] bg-[#04141D] border border-b-0 border-[#4C4C4C]"></div>
        <div className="relative uppercase w-fit flex-shrink-0 flex items-center gap-2 md:gap-[18px] text-[#FFFFFF]/60 leading-4 font-semibold px-8 md:px-16 pt-[10px] pb-6 text-sm xs:text-base">
          {" "}
          <div className="absolute -left-px top-6 rounded-t-0 rounded-b-3xl border-x border-b border-[#4c4c4c] h-6 w-[calc(100%_+_2px)] shadow-[0px_12px_0px_8px_#0C0C0C]"></div>{" "}
          <div className="rounded-full w-2 h-2 bg-[#999]"></div>What we do
        </div>
        <div className="w-full rounded-tl-[24px] rounded-tr-[32px] bg-[#04141D] border border-b-0 border-[#4C4C4C]"></div>
      </div>
      <section className="flex flex-col md:px-[18px] relative max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col gap-[45px] pt-16 xs:pt-32 border-x border-[#4C4C4C]">
          <div className="flex flex-col items-center gap-9">
            <h2 className="text-2xl xs:text-4xl/normal md:text-[48px]/normal font-medium max-w-[21ch] mx-auto text-center">
              Endless Possibilities <br />
              Do it all on J
              <Image
                src={joinToken}
                alt="Join Token also represents O"
                width={200}
                height={199}
                className="inline mix-blend-luminosity w-6 h-6 xs:w-8 xs:h-8 md:w-10 md:h-10 -mt-1.5 xs:-mt-2 sm:-mt-3 mx-1"
              />
              IN
            </h2>
            <p className="py-2 px-3 text-center rounded-lg border-t border-[#4C4C4C] border-b w-fit text-[#999999] text-xs xs:text-sm md:text-base font-semibold">
              Not just blockchains.
            </p>
          </div>
          <div className="relative pb-[60px]">
            <div className="absolute bg-possibilitiesMobile md:bg-possibilitiesDekstop -z-10 bg-full md:bg-cover bg-top bg-no-repeat h-[calc(100%_+_130px)] w-full -mt-[0px] md:-mt-[130px]"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-3 justify-items-center md:place-items-center md:gap-14 w-full max-w-[1440px] mx-auto px-4 md:px-7 lg:px-14 mt-[115px] md:mt-0">
              <Card
                height={data[0].height}
                image={data[0].image}
                width={data[0].width}
                details={data[0].details}
                heading={data[0].heading}
              />
              <div className="hidden md:flex self-start pt-2.5">
                <div className="hidden"></div>
              </div>
<<<<<<< HEAD
              <div className="mt-6 xs:mt-[60px] md:mt-0">
                <Card
                  height={data[1].height}
                  image={data[1].image}
                  width={data[1].width}
                  details={data[1].details}
                  heading={data[1].heading}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:place-items-center md:gap-y-[60px] md:gap-7 md:mt-[60px] w-full max-w-[1440px] mx-auto px-4 md:px-[55px] lg:px-24">
              {data.slice(2).map((d, idx) => {
                const totalItems = data.slice(2).length;
                const isLastItem = idx === totalItems - 1;
                return (
                  <div
                    key={idx}
                    className={`${
                      idx === 1 ? "md:-mt-[350px] mt-6 xs:mt-[50px]" : ""
                    } ${idx === 4? "md:-mt-[350px]" : ""} ${
                      idx === 3 || idx === 5 ? "mt-6 xs:mt-[50px] md:mt-0" : ""
                    } ${
                      isLastItem
                        ? "md:col-span-3 md:row-start-3 md:mx-auto "
                        : ""
                    }`}
                  >
                    <Card
                      height={d.height}
                      image={d.image}
                      width={d.width}
                      details={d.details}
                      heading={d.heading}
                    />
=======
              <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:place-items-center md:gap-y-[60px] md:gap-7 md:mt-[60px] w-full max-w-[1440px] mx-auto px-4 md:px-[55px] lg:px-24">
                {data.slice(2, 8).map((d, idx)=> {
                  return <div key={idx} className={`${idx === 1?  "md:-mt-[350px] mt-6 xs:mt-[50px]": ""} ${idx === 4? "md:-mt-[350px]": ""} ${idx === 3 || idx === 5? "mt-6 xs:mt-[50px] md:mt-0": ""}`}>
                    <Card height={d.height} image={d.image} width={d.width} details={d.details} heading={d.heading} />
>>>>>>> f9a7537 (feat: new updates ✨✅)
                  </div>
                );
              })}
            </div>
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 row-start-2 justify-items-center md:place-items-center md:gap-14 w-full max-w-[1440px] mx-auto px-4 md:px-7 lg:px-14 mt-0">
                <div className="mt-6 xs:mt-[60px] md:-mt-20 md:col-start-2">
                  <Card height={data[data.length-1].height} image={data[data.length-1].image} width={data[data.length-1].width} details={data[data.length-1].details} heading={data[data.length-1].heading} />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
