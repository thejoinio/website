import Image from "next/image";
import React from "react";
import { IPartnerLogo } from "../partners-section";

interface ScrollingLogosProps {
  logos: IPartnerLogo[];
  reverse?: boolean;
}

const ScrollingLogos: React.FC<ScrollingLogosProps> = ({ logos, reverse = false }) => {

  return (
    <>
        <div className="overflow-hidden w-full h-24 flex items-center relative gap-12"
        style={{
            maskImage: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          }}
        >
        {/* Scrolling container */}
        <div
            className={`flex items-center gap-12 ${reverse ? "animate-scroll-right flex-row-reverse" : "animate-scroll-left"}`}
        >
            {/* Render logos */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <Image
                key={index}
                src={logo.logo}
                alt={`${logo.name} logo`}
                className="h-20 w-auto"
                title={logo.name}
            />
            ))}
        </div>
        </div>
        
    </>

  );
};

export default ScrollingLogos;
