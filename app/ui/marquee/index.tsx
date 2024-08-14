import { inter } from "@/app/fonts";

export const Marquee = () => {
  return (
    <section className="overflow-hidden">
      <div className="overflow-hidden bg-primary flex justify-start rotate-6 mt-16 sm:mt-[180px] mb-14 sm:mb-[120px] -translate-x-3 w-[calc(100vw_+_20px)]">
        <p
          className={`text-[26px] font-medium uppercase text-[#DCD2FF] py-3 whitespace-nowrap animate-marquee ${inter.className}`}
        >
          <span className="px-3">•</span>
          Connect with Others, Transform Gaming into Rewards
        </p>
        <p
          className={`text-[26px] font-medium uppercase text-[#DCD2FF] py-3 whitespace-nowrap animate-marquee ${inter.className}`}
        >
          <span className="px-3">•</span>
          Connect with Others, Transform Gaming into Rewards
        </p>
        <p
          className={`text-[26px] font-medium uppercase text-[#DCD2FF] py-3 whitespace-nowrap animate-marquee ${inter.className}`}
        >
          <span className="px-3">•</span>
          Connect with Others, Transform Gaming into Rewards
        </p>
        <p
          className={`text-[26px] font-medium uppercase text-[#DCD2FF] py-3 whitespace-nowrap animate-marquee ${inter.className}`}
        >
          <span className="px-3">•</span>
          Connect with Others, Transform Gaming into Rewards
        </p>
      </div>
    </section>
  );
};
