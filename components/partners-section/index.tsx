import React from "react";
import { StaticImageData } from "next/image";
import ScrollingLogos from "@/components/scrolling-logos";
import joint from '@/assets/partners/joint-logo.png';
import joinda from '@/assets/partners/joinda-logo.png';
import uverus from '@/assets/partners/uverus.png';
import { Marquee } from "../scrolling-logos/marquee";

export interface IPartnerLogo {
    name: string;
    logo: StaticImageData;
}
const partnerLogos: IPartnerLogo[] = [
    {
        name: 'Joint',
        logo: joint,
    },
    {
        name: 'Joinda',
        logo: joinda,
    },
    {
        name: 'Uverus',
        logo: uverus,
    }
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-12 flex flex-col gap-6">
      <h2 className="text-2xl xs:text-4xl/normal md:text-[48px]/normal font-medium max-w-[21ch] mx-auto text-center">
        Our Partners
      </h2>
      <div className="flex flex-col gap-8">
      {/* Left scrolling logos */}
        <ScrollingLogos logos={partnerLogos} />
      {/* Right scrolling logos */}
      <ScrollingLogos logos={partnerLogos} reverse />
      </div>
      <div className="hidden flex-col gap-8">
        <Marquee logos={partnerLogos} />
        <Marquee logos={partnerLogos} reverse />
      </div>
    </section>
  );
};

export default PartnersSection;
