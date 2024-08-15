"use client";
import { VideoBackground } from "@/app/ui/bg-video";
import { Button } from "../button";
import {
  AppIcon,
  DiscordPrimary,
  Divider,
  LoadingIndicator,
  ShapedRightWhite,
  TelegramPrimary,
  YouTubeIcon,
} from "@/app/assets/svg";
import Image from "next/image";
import { Navbar } from "../navbar";
import XIcon from "@/app/assets/XPrimary.png";
import IgIcon from "@/app/assets/Instagram.png";
import { useEffect, useState } from "react";
import { Mission } from "../mission";
import { Modal } from "../modal";
import { useToast } from "@/components/ui/use-toast";
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
    link: "https://discord.gg/8aNnVw8q",
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


const TestBtn = () => {
  return (
    <button className="relative inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 bg-[#F2E6E0] hover:scale-95 mx-[12px] h-9 px-2 text-lg font-bold text-dark w-[140px]">
      <svg
        viewBox="0 0 15 45"
        fill="none"
        className="inline-flex absolute left-[-11px] text-primary-foreground fill-[#F2E6E0] h-9"
      >
        <path d="M15 0H12.6085C11.4514 0 10.3974 0.665477 9.89991 1.7102L0.614192 21.2102C0.225634 22.0262 0.225634 22.9738 0.614191 23.7898L9.8999 43.2898C10.3974 44.3345 11.4514 45 12.6085 45H15V0Z"></path>
      </svg>
      <span className="mt-1">START</span>
      <svg
        viewBox="0 0 15 45"
        fill="none"
        className="inline-flex absolute right-[-11px] text-primary-foreground fill-[#F2E6E0] h-9"
      >
        <path d="M0 0H2.39151C3.54864 0 4.60261 0.665477 5.10009 1.7102L14.3858 21.2102C14.7744 22.0262 14.7744 22.9738 14.3858 23.7898L5.1001 43.2898C4.60261 44.3345 3.54864 45 2.39151 45H0V0Z"></path>
      </svg>
    </button>
  );
};

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
  const disabled = false;

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
    <VideoBackground as="section">
      <Navbar />
      <div
        id="missions"
        className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col items-center pt-2 lg:pt-20"
      >
        {/* Full section layout for larger screens */}
        <div className="bg-[rgba(4,20,29,0.70)] rounded-3xl py-14 md:pr-7 w-full flex flex-col lg:flex-row">
          <div className="w-full flex justify-center lg:justify-start flex-row lg:flex-col lg:w-1/4 gap-2 lg:gap-0 lg:space-y-2 mb-10 lg:mb-0">
            {missions.map((mission) => (
              <button
                key={mission}
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
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute w-[2.286px] h-full bg-[#2C3043] rounded-[2.286px] top-0"></div>
            {missions.map((mission) => (
              <div
                key={mission}
                className={`transition duration-200 top-0 absolute w-[2.286px] h-[60px] rounded-[2.286px] ${
                  activeMission === mission ? "bg-[#02A8FB]" : "bg-transparent"
                } ${
                  activeMission === "Mission 1"
                    ? "translate-y-0"
                    : " translate-y-[68px]"
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-8 lg:mt-0 w-full lg:w-[calc(75%_-_2.286px)] px-0 md:pr-3 md:pl-11">
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
              <div className="bg-[#7F5CE2] py-3 sm:py-5 px-4 sm:px-[30px] flex justify-between items-center w-full rounded-[20px] mt-24">
                <p className="text-[#DCD2FF] whitespace-nowrap text-sm sm:text-[25px] font-medium">
                  Proceed to Mission 2
                </p>{" "}
                <Button
                  type="submit"
                  variant="ordinary"
                  onClick={() => setActiveMission("Mission 2")}
                  className="font-semibold text-[#04141D] whitespace-nowrap w-fit sm:min-w-[150px] ml-2 sm:ml-4"
                >
                  <ShapedRightWhite
                    className="translate-x-[1.5px]"
                    active={disabled}
                  />
                  <span
                    className={`bg-white h-full flex text-xs sm:text-base items-center z-10 ${
                      disabled ? "bg-opacity-50" : "bg-opacity-100"
                    }`}
                  >
                    <>
                      <span className="hidden sm:inline-flex">
                        Continue Missions
                      </span>
                      <span className="inline-flex sm:hidden">Continue</span>
                    </>
                  </span>
                  <ShapedRightWhite
                    className="rotate-180 -translate-x-[1.5px]"
                    active={disabled}
                  />
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#7F5CE2] py-3 sm:py-4 px-3 sm:px-4 flex items-center justify-between w-full rounded-[20px] mt-24"
              >
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent py-0 sm:py-2 sm:bg-[rgba(171,147,241,0.50)] rounded-xl border-none outline-none text-white placeholder:!text-white font-medium text-sm sm:text-2xl w-[95%] sm:w-[90%] max-w-[548px] px-0 sm:px-4"
                />
                <Button
                  type="submit"
                  variant="ordinary"
                  disabled={
                    !allMissionsCompleted ||
                    status === "loading" ||
                    status === "success"
                  }
                  className="font-semibold text-[#04141D] whitespace-nowrap w-fit min-w-[109px] sm:min-w-[150px] ml-2 sm:ml-4"
                >
                  <ShapedRightWhite
                    className={`${!allMissionsCompleted ? "translate-x-[0.7px]" : "translate-x-[1.5px]"}`}
                    active={!allMissionsCompleted}
                  />
                  <span
                    className={`bg-white h-7 sm:h-full flex text-xs sm:text-base items-center z-10 ${
                      !allMissionsCompleted ? "bg-opacity-50" : "bg-opacity-100"
                    }`}
                  >
                    {status === "loading" ? (
                      <LoadingIndicator />
                    ) : (
                      <span>Join Whitelist</span>
                    )}
                  </span>
                  <ShapedRightWhite
                    className={`rotate-180 ${!allMissionsCompleted ? "-translate-x-[0.7px]" : "-translate-x-[1.5px]"}`}
                    active={!allMissionsCompleted}
                  />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full mt-20">
        <Divider />{" "}
      </div>
    </VideoBackground>
  );
};
