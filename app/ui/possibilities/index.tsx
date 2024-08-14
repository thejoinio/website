import { Divider, LogoGradient, LogoGradientSm } from "@/app/assets/svg";
import { PossibilitiesCarousel } from "./carousel";

export const Possibilities = () => {
  return (
    <section>
      <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-[100px] w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto ">
        <h2>Endless Possibilities</h2>
        <h3 className="inline-flex mt-2">
          Do it all on
          <LogoGradientSm className="inline-flex md:hidden ml-1.5 sm:ml-3 -translate-y-2 sm:-translate-y-1 w-[90px] sm:w-[120px]" />{" "}
          <LogoGradient className="hidden md:inline-flex ml-3 -translate-y-1" />{" "}
        </h3>
      </div>
      <PossibilitiesCarousel />
      <div className="flex w-full mt-24">
        <Divider />{" "}
      </div>
    </section>
  );
};
