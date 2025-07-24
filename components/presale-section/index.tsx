import Image from "next/image";
import cryptoDebitCard from "@/assets/images/crypto-debit-card-big.png";
import { Button } from "../button";

const ShinyStar = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="71"
    height="71"
    viewBox="0 0 71 71"
    fill="none"
    className={className}
  >
    <g style={{ mixBlendMode: "color-dodge" }}>
      <g
        clip-path="url(#paint0_diamond_1104_13909_clip_path)"
        data-figma-skip-parse="true"
      >
        <g transform="matrix(-0.00904124 0.0337424 -0.0337424 -0.00904124 35.6892 35.554)">
          <rect
            x="0"
            y="0"
            width="1041.41"
            height="1041.41"
            fill="url(#paint0_diamond_1104_13909)"
            opacity="1"
            shape-rendering="crispEdges"
          />
          <rect
            x="0"
            y="0"
            width="1041.41"
            height="1041.41"
            transform="scale(1 -1)"
            fill="url(#paint0_diamond_1104_13909)"
            opacity="1"
            shape-rendering="crispEdges"
          />
          <rect
            x="0"
            y="0"
            width="1041.41"
            height="1041.41"
            transform="scale(-1 1)"
            fill="url(#paint0_diamond_1104_13909)"
            opacity="1"
            shape-rendering="crispEdges"
          />
          <rect
            x="0"
            y="0"
            width="1041.41"
            height="1041.41"
            transform="scale(-1)"
            fill="url(#paint0_diamond_1104_13909)"
            opacity="1"
            shape-rendering="crispEdges"
          />
        </g>
      </g>
      <circle
        cx="35.6892"
        cy="35.554"
        r="34.9327"
        transform="rotate(15 35.6892 35.554)"
        data-figma-gradient-fill='{"type":"GRADIENT_DIAMOND","stops":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":0.0},{"color":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},"position":1.0}],"stopsVar":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":0.0},{"color":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},"position":1.0}],"transform":{"m00":-18.082485198974609,"m01":-67.484748840332031,"m02":78.472785949707031,"m10":67.484748840332031,"m11":-18.082485198974609,"m12":10.852911949157715},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
      />
    </g>
    <defs>
      <clipPath id="paint0_diamond_1104_13909_clip_path">
        <circle
          cx="35.6892"
          cy="35.554"
          r="34.9327"
          transform="rotate(15 35.6892 35.554)"
        />
      </clipPath>
      <linearGradient
        id="paint0_diamond_1104_13909"
        x1="0"
        y1="0"
        x2="500"
        y2="500"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default function PresaleSection() {
  return (
    <section className="presale-section overflow-hidden py-[60px] md:py-[52px] relative">
      <div className="flex flex-col-reverse md:flex-row items-center gap-[60px] relative w-full max-w-[1440px] mx-auto md:px-10 lg:px-20">
        <div className="flex justify-center items-center w-full md:w-[55%] relative">
          <ShinyStar className="absolute bottom-4" />
          <ShinyStar className="absolute left-0" />
          <ShinyStar className="absolute right-0 lg:right-4 top-16" />
          <Image
            src={cryptoDebitCard}
            alt="Crypto Debit Card"
            width={1035}
            height={908}
            className="w-full max-w-[650px] z-10"
          />
        </div>
        <div className="flex flex-col gap-5 xs:gap-[30px] w-full md:w-[45%] z-10 px-5 md:px-0">
          <h4 className="text-2xl/normal xs:text-4xl/normal md:text-5xl/normal">
            Grab your Spot in the JOIN Presale.
          </h4>
          <p className="text-base xs:text-xl md:text-2xl">
            Exclusive Freebies Await!
          </p>
          <Button
            variant="dark"
            className="text-xl px-[30px] py-[15px]"
            href="/waitlist"
          >
            Join Presale
          </Button>
        </div>
        <div className="absolute left-0 h-full w-full bg-presaleSectionBg bg-right-top md:bg-right bg-no-repeat mix-blend-soft-light"></div>
      </div>
    </section>
  );
}
