import { Button } from "../button";

export default function WaitlistSection() {

  return (
    <section className="presale-section overflow-hidden relative">
      <div className="flex flex-col items-center gap-10 relative w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-[60px] md:py-[52px]">
        <div>
          <p className="text-sm font-medium bg-[linear-gradient(84deg,#6065A4_-33.49%,#0F1625_37.89%,#6065A4_117.87%)] p-2.5 rounded-lg px-3">4000+ Joined</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1.5 xs:gap-10 w-full z-10 px-5 md:px-0">
          <h4 className="text-2xl/normal xs:text-4xl/normal md:text-5xl/normal font-medium">
            Hop in now!
          </h4>
          <p className="text-base xs:text-xl leading-normal font-medium text-center">
            Get Notified when we are Live, by joining our Waitlist.
          </p>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center w-full relative">
          <div className="flex flex-col gap-3 w-full max-w-[733px] mx-auto">
            <label htmlFor="email" className="text-[#858585] font-medium">Email address</label>
            <div className="waitlist-border rounded-[10px]">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnsmith@gmail.com"
                className="rounded-[10px] bg-transparent p-4 w-full h-16 outline-none placeholder:text-[#585858CC] text-[#858585]"
              />
            </div>

          </div>
          <div className="flex items-center justify-center">
            <Button variant="dark">Join Waitlist</Button>
          </div>
        </div>
        <div className="absolute left-0 md:-left-10 lg:-left-20 h-full w-full bg-presaleSectionBg bg-left-top md:bg-left bg-no-repeat mix-blend-soft-light"></div>
      </div>
    </section>
  );
}
