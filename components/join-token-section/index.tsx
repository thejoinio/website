import Image from "next/image";
import joinTokens from '@/assets/images/join-tokens.png';

const Vector = () => <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="605" viewBox="0 0 1440 605" fill="none" className="absolute z-30" style={{filter: "blur(250px)"}}>
  <g filter="url(#filter0_f_1115_24219)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M975.708 313.426C1051.83 308.551 1130.54 314.245 1190.58 361.319C1257.75 413.984 1296.28 492.162 1310.95 576.268C1329.25 681.154 1344.67 796.465 1281.43 882.102C1211.48 976.817 1090.7 1055.43 975.708 1030.25C866.076 1006.23 861.594 849.127 779.827 772.224C692.141 689.754 490.87 696.648 493.017 576.268C495.176 455.22 680.401 445.065 786.695 387.184C848.444 353.559 905.548 317.919 975.708 313.426Z" fill="url(#paint0_linear_1115_24219)"/>
  </g>
  <defs>
    <filter id="filter0_f_1115_24219" x="-7" y="-188" width="1834" height="1723" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1115_24219"/>
    </filter>
    <linearGradient id="paint0_linear_1115_24219" x1="527.75" y1="456.6" x2="1431.23" y2="601.348" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8AE6CF"/>
      <stop offset="1" stop-color="#7C3AE7"/>
    </linearGradient>
  </defs>
</svg>

export default function JoinTokenSection() {
  return (
    <section className="presale-section overflow-hidden py-[60px] md:py-[52px] relative">
      <div className="flex flex-col md:flex-row items-center gap-[60px] relative w-full max-w-[1440px] mx-auto md:px-10 lg:px-20">
       <div className="flex flex-col gap-1.5 xs:gap-[35px] w-full md:w-1/2 z-10 px-5 md:px-0">
          <h4 className="text-2xl/normal xs:text-4xl/normal md:text-5xl/normal">
            JOIN Token
          </h4>
          <p className="text-base xs:text-xl leading-[35px]">
            The JOIN Token is the native utility token powering the entire Joinda ecosystem. Built on the Solana blockchain, it facilitates fast, low-cost, and secure transactions across social features, gaming, communities, quests, and premium services.
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 relative">
          <Image
            src={joinTokens}
            alt="Join Tokens stacked on each other"
            width={1035}
            height={908}
            className="w-full max-w-[550px] z-10"
          />
        </div>
        <div className="absolute left-0 md:-left-10 lg:-left-20 h-full w-full bg-presaleSectionBg bg-left-top md:bg-left bg-no-repeat mix-blend-soft-light"></div>
        <Vector />
      </div>
    </section>
  );
}
