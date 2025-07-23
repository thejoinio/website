'use client';

import { toast } from "@/hooks/use-toast";
import { Button } from "../button";
import NumberOfUsers from "../users-count";
import { useState } from "react";

export default function WaitlistSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    if (!email) {
      setStatus("idle");
      toast({
        title: "❎ No email entered",
        description: "Please enter YOUR email address.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("idle");
      toast({
        title: "❎ Invalid email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const response = await fetch(
        "https://teapot.thejoin.io/helper/submit-email/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
        toast({
          title: "✅Success",
          description: "Email submitted successfully! You will be notified when we are live.",
        });
        
      } else {
        setStatus("error");
        console.error(
          "Failed to submit email:",
          data.address || response.statusText
        );
        toast({
          title: "❎Failed to submit email",
          description: data.address || "Validation failed!",
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      setStatus("error");
      toast({
        title: "❎An error occurred",
        description: error.message,
      });
      console.error("An error occurred while submitting the email:", error);
    }
  };

  return (
    <section className="presale-section overflow-hidden relative">
      <div className="flex flex-col items-center gap-10 relative w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-[60px] md:py-[52px]">
        <div>
          <NumberOfUsers />
        </div>
        <div className="flex flex-col justify-center items-center gap-1.5 xs:gap-10 w-full z-10 px-5 md:px-0">
          <h4 className="text-2xl/normal xs:text-4xl/normal md:text-5xl/normal font-medium">
            Hop in now!
          </h4>
          <p className="text-base xs:text-xl leading-normal font-medium text-center">
            Get Notified when we are Live, by joining our Waitlist.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 justify-center items-center w-full relative">
          <div className="flex flex-col gap-3 w-full max-w-[733px] mx-auto">
            <label htmlFor="email" className="text-[#858585] font-medium">Email address</label>
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
            <Button variant="dark" type="submit" disabled={status === 'loading'}>{status === 'loading'? "Joining...": "Join Waitlist"}</Button>
          </div>
        </form>
        <div className="absolute left-0 md:-left-10 lg:-left-20 h-full w-full bg-presaleSectionBg bg-left-top md:bg-left bg-no-repeat mix-blend-soft-light"></div>
      </div>
    </section>
  );
}
