"use client";

import { toast } from "@/hooks/use-toast";
import { Button } from "../button";
import NumberOfUsers from "../users-count";
import { useState } from "react";
import { handleSubmit } from "@/lib/helper";

export default function WaitlistSection({
  type = "Waitlist",
}: { type?: "Whitelist" | "Waitlist" } = {}) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const resetEmail = () => setEmail("");

  return (
    <section className="presale-section overflow-hidden relative w-full">
      <div className="flex flex-col items-center gap-10 relative w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-[60px] md:py-[52px]">
        <div>
          <NumberOfUsers />
        </div>
        <div className="flex flex-col justify-center items-center gap-1.5 xs:gap-10 w-full z-10 px-5 md:px-0">
          <h4 className="text-2xl/normal xs:text-4xl/normal md:text-5xl/normal font-medium">
            Hop in now!
          </h4>
          <p className="text-base xs:text-xl leading-normal font-medium text-center">
            Get Notified when we are Live, by joining our {type}.
          </p>
        </div>
        <form
          onSubmit={(e) =>
            handleSubmit({
              event: e,
              setStatus,
              type: type === "Waitlist" ? "thejoin-waitlist" : "thejoin-whitelist",
              resetEmail,
              toast,
              email,
            })
          }
          className="flex flex-col gap-10 justify-center items-center w-full relative"
        >
          <div className="flex flex-col gap-3 w-full max-w-[733px] mx-auto">
            <label htmlFor="email" className="text-[#858585] font-medium">
              Email address
            </label>
            <div className="waitlist-border rounded-[10px]">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="johnsmith@gmail.com"
                className="rounded-[10px] bg-transparent p-4 w-full h-16 outline-none placeholder:text-[#585858CC] text-[#858585]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            {type === "Whitelist" ? (
              <Button
                variant="dark"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining..." : "Join Whitelist"}
              </Button>
            ) : (
              <Button
                variant="dark"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </Button>
            )}
          </div>
        </form>
        <div className="absolute left-0 md:-left-10 lg:-left-20 h-full w-full bg-presaleSectionBg bg-left-top md:bg-left bg-no-repeat mix-blend-soft-light"></div>
      </div>
    </section>
  );
}
