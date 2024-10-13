"use client";
import { VideoBackground } from "@/app/ui/bg-video";
import { Button } from "../button";
import {
  AppIcon,
  Divider,
  LoadingIndicator,
} from "@/app/assets/svg";
import { Navbar } from "../navbar";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { SelectCountry } from "../search-select";
import { selectedCountryOption } from "../search-select/data";

export const Levels = () => {
  const { toast } = useToast();
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState('')
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeLevel, setActiveLevel] = useState<"Level 1">(
    "Level 1",
  );
  const levels: ["Level 1"] = ["Level 1"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    if (!email) {
      setStatus("idle");
      toast({
        title: "❎ No email entered",
        description: "Please enter your email address.",
        duration: 3000,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("idle");
      toast({
        title: "❎ Invalid email",
        description: "Please enter a valid email address.",
        duration: 3000,
      });
      return;
    }
    const selectedCountry = selectedCountryOption(country);
    if (!selectedCountry) {
      setStatus("idle");
      toast({
        title: "❎ Invalid country",
        description: "Please select your country.",
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
          body: JSON.stringify({ address: email, country: selectedCountry.key, campaign: "level1" }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setCountry("");
        toast({
          title: "✅Success",
          description: "Info submitted successfully! Redirecting...",
          duration: 2900,
        });
        setTimeout(()=>{
          push("/");
        },3000)
      } else {
        setStatus("error");
        
        console.error(
          "Failed to submit info:",
          data.address || data.message || response.statusText,
        );
        toast({
          title: "❎Failed to submit info",
          description: data.address || data.message  || "Validation failed!",
          duration: 3000,
        });
      }
    } catch (error: any) {
      setStatus("error");
      toast({
        title: "❎An error occurred",
        description: error.message,
        duration: 3000,
      });
      console.error("An error occurred while submitting the info:", error);
    }
  };

  return (
    <VideoBackground as="section">
      <Navbar />
      <div
        id="levels"
        className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col items-center pt-2 lg:pt-20"
      >
        {/* Full section layout for larger screens */}
        <div className="bg-[rgba(4,20,29,0.70)] rounded-3xl py-14 md:pr-7 w-full flex flex-col lg:flex-row">
          <div className="w-full flex justify-center lg:justify-start flex-row lg:flex-col lg:w-1/4 gap-2 lg:gap-0 lg:space-y-2 mb-10 lg:mb-0">
            {levels.map((level) => (
              <button
                key={level}
                className={`flex h-fit md:h-[60px] w-fit lg:w-full lg:mx-auto rounded-full border lg:border-none lg:rounded-none items-center font-medium sm:font-semibold text-sm sm:text-xl px-3 sm:px-6 md:px-10 py-2 sm:py-[14px] transition duration-200 whitespace-nowrap ${
                  activeLevel === level
                    ? "bg-[rgba(255,255,255,0.10)] border-[#02A8FB]"
                    : "bg-transparent hover:bg-[rgba(255,255,255,0.10)] border-[#545666]"
                }`}
                onClick={() => setActiveLevel(level)}
              >
                <AppIcon className="w-5 sm:w-auto mr-1 sm:mr-2" />
                {level}
              </button>
            ))}
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute w-[2.286px] h-full bg-[#2C3043] rounded-[2.286px] top-0"></div>
            {levels.map((level) => (
              <div
                key={level}
                className={`transition duration-200 top-0 absolute w-[2.286px] h-[60px] rounded-[2.286px] ${
                  activeLevel === level ? "bg-[#02A8FB]" : "bg-transparent"
                } ${
                  activeLevel === "Level 1"
                    ? "translate-y-0"
                    : " translate-y-[68px]"
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-8 lg:mt-0 w-full lg:w-[calc(75%_-_2.286px)] px-0 md:pr-3 md:pl-11">
              <h1 className="w-fit text-center mx-auto text-2xl sm:text-4xl md:text-5xl font-medium flex items-center">Airdrop Campaign Level 1</h1>
              <p className="w-fit text-center mx-auto text-base sm:text-lg md:text-2xl flex items-center mb-8 mt-2 md:mt-4">Submit your info below to join the campaign</p>
              <form
                onSubmit={handleSubmit}
                className="py-3 sm:py-4 px-3 sm:px-4 flex flex-col items-center justify-center w-full rounded-[20px] mt-4 gap-y-8"
              >
                <div className="flex flex-col w-[95%] sm:w-[90%] max-w-[548px] mx-auto">
                  <label htmlFor="email" className="text-lg md:text-xl mb-2">Email Address<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-transparent h-12 py-1 sm:py-3 rounded-xl border outline-none text-white placeholder:!text-white autofill:bg-transparent [-webkit-autofill:focus]:bg-transparent autofill:text-white [-webkit-autofill:focus]:text-white font-medium text-sm sm:text-2xl px-2 sm:px-4 w-full"
                  />
                </div>
                <div className="flex flex-col w-[95%] sm:w-[90%] max-w-[548px] mx-auto mb-8">
                <label htmlFor="email" className="text-lg md:text-xl mb-2">Country<span className="text-red-500">*</span></label>
                  <SelectCountry country={country} setCountry={setCountry} />
                </div>                  
                <Button
                variant="shaped-white"
                className="scale-125 hover:!scale-[1.2]"
                type="submit"
              >
                {status === "loading" ? (
                  <span className="px-7">
                    <LoadingIndicator />
                  </span>
                  ) : (
                    <span className="px-5">Submit</span>
                  )}
              </Button>
              </form>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-20">
        <Divider />{" "}
      </div>
    </VideoBackground>
  );
};
