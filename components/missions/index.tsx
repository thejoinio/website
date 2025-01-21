/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/button";
import {
  AppIcon,
  LoadingIndicator,
  DiscordPrimary,
  TelegramPrimary,
  YouTubeIcon,
} from "@/assets/svg";
import Image from "next/image";
import XIcon from "@/assets/icons/XPrimary.png";
import IgIcon from "@/assets/icons/Instagram.png";
import { JSX, useEffect, useState } from "react";
import { Mission } from "../mission";
import { Modal } from "../modal";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface Platform {
  name: string;
  textColor: string;
}

export interface MissionData {
  id: number;
  platform: Platform;
  icon: JSX.Element;
  link: string;
  description: string;
  boldParts: string[];
  handle: string;
}

const mission1Data: MissionData[] = [
  {
    id: 1,
    platform: { name: "Telegram", textColor: "telegram-text-gradient" },
    icon: <TelegramPrimary />,
    link: "https://t.me/JoinAllinOneEco",
    description: "Follow JOIN ecosystem",
    boldParts: ["JOIN"],
    handle: "JoinEco",
  },
  {
    id: 2,
    platform: { name: "Discord", textColor: "text-[#5865F2]" },
    icon: <DiscordPrimary />,
    link: "https://discord.gg/joineco",
    description: "Follow JOIN ecosystem",
    boldParts: ["JOIN"],
    handle: "thejoin",
  },
  {
    id: 3,
    platform: { name: "X", textColor: "text-white" },
    icon: (
      <Image src={XIcon} alt="X Icon" width={30} height={30} className="mx-1" />
    ),
    link: "https://twitter.com/intent/follow?screen_name=joineco",
    description: "Follow JOIN ecosystem",
    boldParts: ["JOIN"],
    handle: "joineco",
  },
  {
    id: 4,
    platform: { name: "X", textColor: "text-white" },
    icon: (
      <Image src={XIcon} alt="X Icon" width={30} height={30} className="mx-1" />
    ),
    link: "https://twitter.com/intent/follow?screen_name=cybadaddy",
    description: "Follow Co-founder Dave",
    boldParts: ["Co-founder"],
    handle: "cybadaddy",
  },
  {
    id: 5,
    platform: { name: "X", textColor: "text-white" },
    icon: (
      <Image src={XIcon} alt="X Icon" width={30} height={30} className="mx-1" />
    ),
    link: "https://twitter.com/intent/follow?screen_name=leonoklyne",
    description: "Follow Co-founder Ben",
    boldParts: ["Co-founder"],
    handle: "leonoklyne",
  },
];

const mission2Data: MissionData[] = [
  {
    id: 6,
    platform: { name: "X", textColor: "text-white" },
    icon: (
      <Image src={XIcon} alt="X Icon" width={30} height={30} className="mx-1" />
    ),
    link: "https://twitter.com/intent/follow?screen_name=iamvicol",
    description: "Follow Co-founder Vico",
    boldParts: ["Co-founder"],
    handle: "iamvicol",
  },
  {
    id: 7,
    platform: { name: "Instagram", textColor: "text-white" },
    icon: (
      <Image
        src={IgIcon}
        alt="Instagram Icon"
        width={30}
        height={30}
        className="mx-1"
      />
    ),
    link: "https://instagram.com/joinecosystem",
    description: "Follow JOIN Ecosystem",
    boldParts: ["JOIN"],
    handle: "joinecosystem?",
  },
  {
    id: 8,
    platform: { name: "Instagram", textColor: "text-white" },
    icon: (
      <Image
        src={IgIcon}
        alt="Instagram Icon"
        width={30}
        height={30}
        className="mx-1"
      />
    ),
    link: "https://instagram.com/cybadaddy",
    description: "Follow Co-founder Dave",
    boldParts: ["Co-founder"],
    handle: "cybadaddy",
  },
  {
    id: 9,
    platform: { name: "Instagram", textColor: "text-white" },
    icon: (
      <Image
        src={IgIcon}
        alt="Instagram Icon"
        width={30}
        height={30}
        className="mx-1"
      />
    ),
    link: "https://instagram.com/leonoklyne_",
    description: "Follow Co-founder Ben",
    boldParts: ["Co-founder"],
    handle: "leonoklyne_",
  },
  {
    id: 10,
    platform: { name: "YouTube", textColor: "text-white" },
    icon: <YouTubeIcon className="mx-1" />,
    link: "https://youtube.com/@thejoineco",
    description: "Follow the JOIN project",
    boldParts: ["JOIN"],
    handle: "thejoineco",
  },
];


export const checkAllMissionsCompleted = (
  validatedMissions: Record<string, boolean>,
) => {
  for (let i = 1; i <= 10; i++) {
    if (!validatedMissions[`Mission-${i}`]) {
      return false;
    }
  }
  return true;
};


export const Missions = () => {
  const STORAGE_KEY = "validatedMissions";
  const { toast } = useToast();
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeMission, setActiveMission] = useState<"Mission 1" | "Mission 2">(
    "Mission 1",
  );

  const [currentMissionKey, setCurrentMissionKey] = useState<string | null>(
    null,
  );
  const [allMissionsCompleted, setAllMissionsCompleted] = useState(false);

  const missions: ["Mission 1", "Mission 2"] = ["Mission 1", "Mission 2"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMissions = localStorage.getItem(STORAGE_KEY);
      if (storedMissions) {
        const parsedValidatedMissions = JSON.parse(storedMissions);
        setAllMissionsCompleted(
          checkAllMissionsCompleted(parsedValidatedMissions),
        );
      }
    }
  }, []);

  const isMissionValidated = (missionKey: string) => {
    if (typeof window !== "undefined") {
      const storedMissions = localStorage.getItem(STORAGE_KEY);
      if (storedMissions) {
        const parsedValidatedMissions = JSON.parse(storedMissions);
        return parsedValidatedMissions[missionKey] || false;
      }
    }
    return false;
  };

  const handleFollowClick = (missionKey: string) => {
    setCurrentMissionKey(missionKey);
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
        "http://teapot.thejoin.io/helper/submit-email/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: email }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
        localStorage.removeItem(STORAGE_KEY);
        toast({
          title: "✅Success",
          description: "Email submitted successfully! Redirecting...",
        });
        setTimeout(()=>{
          push("/");
        },1000)
      } else {
        setStatus("error");
        console.error(
          "Failed to submit email:",
          data.address || response.statusText,
        );
        toast({
          title: "❎Failed to submit email",
          description: data.address || "Validation failed!",
        });
      }
    } catch (error: any) {
      setStatus("error");
      toast({
        title: "❎An error occurred",
        description: error.message,
      });
      console.error("An error occurred while submitting the email:", error);
    }
  };

  const missionData =
    activeMission === "Mission 1" ? mission1Data : mission2Data;

  return (
    <section>
      <div
        id="missions"
        className="relative w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 flex flex-col items-center pt-2 lg:pt-20"
      >
        {/* Full section layout for larger screens */}
        <div className="pt-[120px] py-20 md:py-[133px] md:pr-7 w-full flex flex-col lg:flex-row">
          <div className="w-full flex justify-center lg:justify-start flex-row lg:flex-col lg:w-1/4 gap-2 lg:gap-0 lg:space-y-2 mb-10 lg:mb-0">
            {missions.map((mission) => (
              <button
                key={mission}
                type="button"
                className={`flex h-fit md:h-[60px] w-fit lg:w-full lg:mx-auto rounded-full border lg:border-none lg:rounded-none items-center font-medium sm:font-semibold text-sm sm:text-xl px-3 sm:px-6 md:px-10 py-2 sm:py-[14px] transition duration-200 whitespace-nowrap ${
                  activeMission === mission
                    ? "bg-[rgba(255,255,255,0.10)] border-[#02A8FB]"
                    : "bg-transparent hover:bg-[rgba(255,255,255,0.10)] border-[#545666]"
                }`}
                onClick={() => setActiveMission(mission)}
              >
                <AppIcon className="w-5 sm:w-auto mr-1 sm:mr-2" />
                {mission}
              </button>
            ))}
            {/* Outlined JOIN Texts */}
            <div className="relative hidden lg:flex h-full">
              <p className="absolute left-0 top-20 text-[250px] font-medium clipped-text">J</p>
              <p className="absolute right-0 top-20 text-[250px] font-medium clipped-text">O</p>
              <p className="absolute left-0 -bottom-20 text-[250px] font-medium clipped-text">I</p>
              <p className="absolute right-0 -bottom-20 text-[250px] font-medium clipped-text">N</p>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute w-[2.286px] h-full bg-[#2C3043] rounded-[2.286px] top-0"></div>
            {missions.map((mission) => (
              <div
                key={mission}
                className={`transition duration-200 top-0 absolute w-[2.286px] h-14 rounded-[2.286px] ${
                  activeMission === mission ? "bg-[#02A8FB]" : "bg-transparent"
                } ${
                  activeMission === "Mission 1"
                    ? "translate-y-0"
                    : "translate-y-16"
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-4 lg:mt-0 w-full lg:w-[calc(75%_-_2.286px)] px-0 md:pr-3 md:pl-11">
            {missionData.map((data, idx) => (
              <Mission
                onFollowClick={() => handleFollowClick(`Mission-${data.id}`)}
                isMissionValidated={isMissionValidated(`Mission-${data.id}`)}
                key={idx}
                {...data}
              />
            ))}
            {/* Modal Component */}
            <Modal
              isOpen={currentMissionKey !== null}
              missionData={missionData.find(
                (data) => `Mission-${data.id}` === currentMissionKey,
              )}
              onClose={() => setCurrentMissionKey(null)}
              setAllMissionsCompleted={setAllMissionsCompleted}
            />

            {activeMission === "Mission 1" ? (
              <div className="bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)] py-3 sm:py-7 px-4 sm:px-[30px] gap-3 flex flex-col xs:flex-row justify-between items-center w-full rounded-[20px] mt-24">
                <p className="text-white whitespace-nowrap text-sm sm:text-[25px] font-medium">
                  Proceed to Mission 2
                </p>{" "}
                <Button
                  type="submit"
                  variant="white"
                  onClick={() => setActiveMission("Mission 2")}
                  className="font-semibold text-[#04141D] whitespace-nowrap w-fit sm:min-w-[150px] ml-2 sm:ml-4"
                >
                        Continue Missions
                </Button>
              </div>
            ) : (
              <div className="bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)] px-6 py-5 rounded-2xl mt-24">
                <form
                  onSubmit={handleSubmit}
                  className="bg-[linear-gradient(98deg,#8AE5CF_6.1%,#7C3AE7_103.66%)] py-3 px-3 sm:p-5 flex flex-col xs:flex-row items-center justify-between gap-3 w-full rounded-[20px]"
                >
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent rounded-md border-b xs:border-none outline-none text-white placeholder:!text-white font-medium text-sm sm:text-2xl w-[95%] sm:w-[90%] max-w-[548px] px-0 py-2 xs:py-0"
                  />
                  <Button
                    type="submit"
                    variant="white"
                    disabled={
                      !allMissionsCompleted ||
                      status === "loading" ||
                      status === "success"
                    }
                    className="font-semibold text-[#04141D] whitespace-nowrap w-fit ml-2 sm:ml-4 !rounded-lg self-disabled"
                  >
                    {status === "loading" ? (
                      <LoadingIndicator />
                    ) : (
                      <span>Join Whitelist</span>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
