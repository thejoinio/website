import {
    DiscordPrimary,
    TelegramPrimary,
    YouTubeIcon,
  } from "@/assets/svg";
  import Image from "next/image";
  import XIcon from "@/assets/icons/XPrimary.png";
  import IgIcon from "@/assets/icons/Instagram.png";
import { JSX } from "react";

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
  
 export const mission1Data: MissionData[] = [
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
  
 export const mission2Data: MissionData[] = [
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
      handle: "joinecosystem",
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
  