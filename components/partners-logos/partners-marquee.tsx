import Image, { StaticImageData } from "next/image";
import fightCamp from "@/assets/partners/fight-camp.jpg";
import hambitPay from "@/assets/partners/hambit-pay.jpg";
import helaLabs from "@/assets/partners/hela-labs.jpg";
import nitroChain from "@/assets/partners/nitro-chain.jpg";
import qstn from "@/assets/partners/qstn.jpg";
import { Marquee } from "./marquee";

export interface IPartnerLogo {
  name: string;
  logo: StaticImageData;
}
const partnerLogos: IPartnerLogo[] = [
  {
    name: "Fight Camp",
    logo: fightCamp,
  },
  {
    name: "Hambit Pay",
    logo: hambitPay,
  },
  {
      name: "Nitro Chain",
      logo: nitroChain,
    },
    {
        name: "QSTN",
        logo: qstn,
    },
    {
      name: "Hela Labs",
      logo: helaLabs,
    },
];

export function PartnersMarquee() {
  return (
    <div style={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
      }} 
      className="relative flex h-[200px] w-full flex-col gap-[2rem] items-center justify-center overflow-hidden">
      <Marquee className="[--duration:20s]">
        {partnerLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.logo}
            alt={`${logo.name} logo`}
            className="h-20 w-auto"
            title={logo.name}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {partnerLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.logo}
            alt={`${logo.name} logo`}
            className="h-20 w-auto"
            title={logo.name}
          />
        ))}
      </Marquee>
    </div>
  );
}
