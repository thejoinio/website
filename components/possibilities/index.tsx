import Image, { StaticImageData } from "next/image";
import joinToken from "@/assets/icons/join-token.webp";
import { Card } from "./card";
import joinExchange from '@/assets/images/join-exchange-cards.png';
import digiArt from '@/assets/images/digital-art-cube-with-square-middle.png';
import nftCollection from '@/assets/images/nft-collections.png';
import cryptoDebitCard from '@/assets/images/crypto-debit-card.png';
import lotteriesParticipation from '@/assets/images/lotteries-participation.png';
import makePaymentCards from '@/assets/images/make-payment-cards.png';
import earnRewards from '@/assets/images/earn-rewards.png';
import raiseFunds from '@/assets/images/raise-funds.png';
// import { HexagonalJoin } from "@/assets/svg";

export default function Possibilities() {
  const data: {heading: string;
    image: string | StaticImageData;
    width: number;
    height: number;
    details: string;}[] = [
    { 
      heading: "Means of Exchange",
      image: joinExchange,
      width: 450,
      height: 411,
      details: "Use JOIN as a secure and transparent means of exchange within the ecosystem."
    },
    { 
      heading: "In-Games Purchases",
      image: digiArt,
      width: 420,
      height: 394,
      details: "Spend JOIN on various in-game items and features."
    },
    { 
      heading: "Crypto Debit Card",
      image: cryptoDebitCard,
      width: 406,
      height: 399,
      details: "Introducing our global decentralized crypto debit card for in - store and online payments."
    },
    { 
      heading: "NFT Collections",
      image: nftCollection,
      width: 630,
      height: 353,
      details: "Get access to our NFT collections on JOIN."
    },
    { 
      heading: "Make Payment",
      image: makePaymentCards,
      width: 480,
      height: 457,
      details: "Pay for a wide range of products and services using JOIN tokens"
    },
    { 
      heading: "Lotteries Participation",
      image: lotteriesParticipation,
      width: 579,
      height: 366,
      details: "Participate in lotteries that ensure fairness through blockchain technology."
    },
    { 
      heading: "Earn Rewards",
      image: earnRewards,
      width: 432,
      height: 451,
      details: "Earn Rewards in JOIN for high engagement and content creation."
    },
    { 
      heading: "Raise Funds",
      image: raiseFunds,
      width: 420,
      height: 427,
      details: "Raise Funds by launching crowdfunding campaigns for your projects."
    },
  ]
  
  return (
    <section className="flex flex-col gap-[45px] pt-32 relative">
        <div className="flex flex-col items-center gap-9">
            <h2 className="text-[48px]/normal font-medium max-w-[21ch] mx-auto text-center">
                Endless Possibilities <br />
                Do it all on J
                <Image
                src={joinToken}
                alt="Join Token also represents O"
                width={200}
                height={199}
                className="inline mix-blend-luminosity w-10 h-10 -mt-3 mx-1"
                />
                IN
            </h2>
            <p className="py-2 px-3 text-center rounded-lg border-t border-[#4C4C4C] border-b w-fit text-[#999999] font-semibold">Not just blockchains.</p>
        </div>
        <div className="relative">
        <div className="absolute bg-possibilitiesVector -z-10 bg-contain bg-no-repeat h-full w-full -mt-[130px]"></div>
          <div className="relative grid grid-cols-3 place-items-center">
            <Card height={data[0].height} image={data[0].image} width={data[0].width} details={data[0].details} heading={data[0].heading} />
            <div className="self-start pt-2.5">
              {/* <HexagonalJoin /> */}
            </div>
            <Card height={data[1].height} image={data[1].image} width={data[1].width} details={data[1].details} heading={data[1].heading} />
          </div>
          <div className="grid grid-cols-3 px-[55px] place-items-center gap-y-[60px] mt-[60px]">
            {data.slice(2).map((d, idx)=> {
              return <div key={idx} className={`${idx === 1 || idx === 4? "-mt-[350px]": ""}`}>
              <Card height={d.height} image={d.image} width={d.width} details={d.details} heading={d.heading} />
              </div>
            })}
          </div>
        </div>
    </section>
  );
}
