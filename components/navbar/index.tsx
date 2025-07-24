"use client";
import { CloseMenu, JamMenu } from "@/assets/svg";
import Link from "next/link";
import { JSX, useState } from "react";
import joinLogo from "@/assets/images/logo.png";
import Image from "next/image";
import { Button } from "../button";
import { DropdownDesktop } from "./dropdown-desktop";
import { DropdownMobile } from "./dropdown-mobile";
import JoinTelegram from "@/assets/community/telegram.webp";
import JoinDiscord from "@/assets/community/discord.webp";
import JoinLinkedIn from "@/assets/community/linkedin.webp";
import JoinTwitter from "@/assets/community/x.webp";
// import { useModal } from "@/contexts/modal-context";

export interface INavLink {
  label: string;
  path: string;
  type?: "dropdown";
  disabled?: boolean;
  subLinks?: {
    path: string;
    icon?: JSX.Element;
    background?: string;
    title: string;
    subtitle?: string;
  }[];
}

export const Navbar = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  // const {openModal} = useModal()

  const navLinks: INavLink[] = [
    {
      label: "Community",
      type: "dropdown",
      path: "/",
      subLinks: [
        {
          title: "Telegram",
          path: "https://t.me/JoinAllinOneEco",
          background:
            "linear-gradient(112deg, rgba(4, 20, 29, 0.40) 14.96%, rgba(14, 127, 184, 0.40) 85.38%)",
          icon: (
            <Image
              src={JoinTelegram}
              alt="Telegram and Join logos stacked together"
              className="ml-auto max-h-[120px] w-auto"
              width={500}
              height={360}
              placeholder="blur"
            />
          ),
        },
        {
          title: "Discord",
          path: "https://discord.gg/uf2TzvAsJX",
          background:
            "linear-gradient(112deg, rgba(4, 20, 29, 0.40) 14.96%, rgba(135, 164, 213, 0.40) 85.38%)",
          icon: (
            <Image
              src={JoinDiscord}
              alt="Discord and Join logos stacked together"
              className="ml-auto max-h-[120px] w-auto"
              width={500}
              height={360}
              placeholder="blur"
            />
          ),
        },
        {
          title: "LinkedIn",
          path: "https://www.linkedin.com/company/thejoineco",
          background:
            "linear-gradient(112deg, rgba(4, 20, 29, 0.40) 14.96%, rgba(0, 91, 188, 0.40) 85.38%)",
          icon: (
            <Image
              src={JoinLinkedIn}
              alt="LinkedIn and Join logos stacked together"
              className="ml-auto max-h-[120px] w-auto"
              width={500}
              height={360}
              placeholder="blur"
            />
          ),
        },
        {
          title: "Twitter",
          path: "https://twitter.com/intent/follow?screen_name=joineco",
          background:
            "linear-gradient(112deg, rgba(4, 20, 29, 0.40) 14.96%, rgba(4, 4, 4, 0.40) 85.38%)",
          icon: (
            <Image
              src={JoinTwitter}
              alt="Twitter and Join logos stacked together"
              className="ml-auto max-h-[120px] w-auto"
              width={500}
              height={360}
              placeholder="blur"
            />
          ),
        },
      ],
    },
    { label: "Whitepaper", path: "/whitepaper" },
    { label: "Products", path: "/#products" },
    { label: "Partners", path: "/#partners" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full font-[family-name:var(--font-tsb)] border-b border-[#374151] bg-[#09141B]/10 backdrop-blur">
      <nav className="flex justify-between items-center w-full max-w-[1440px] mx-auto h-20 px-4 md:px-10 lg:px-20">
        <Link href={"/"} className="flex items-center z-50 h-[30px]">
          <Image
            src={joinLogo}
            alt="Join Logo"
            width={192}
            height={67}
            className="flex h-[30px] w-auto"
          />
        </Link>
        <ul
          className={`${
            isNavOpened ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition duration-200 flex flex-col md:flex-row items-center gap-10 lg:gap-[60px] fixed md:relative top-0 left-0 pt-28 md:pt-0 w-full md:w-auto h-screen md:h-fit bg-black md:bg-transparent`}
        >
          {navLinks.map((link, idx) =>
            link.type === "dropdown" ? (
              <li key={idx}>
                <DropdownMobile navLink={link} idx={idx} />
                <DropdownDesktop navLink={link} idx={idx} />
              </li>
            ) : (
              <li
                key={idx}
                onClick={() => setIsNavOpened(!isNavOpened)}
                className="text-[#777E90] text-sm"
              >
                <Link
                  href={link.path}
                  className="hover:text-hoverPrimary transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="hidden md:flex">
          <Button variant="dark" href="/waitlist">
            Join Presale
          </Button>
        </div>
        <button
          onClick={() => setIsNavOpened(!isNavOpened)}
          className="flex md:hidden hover:scale-90 active:scale-90 transition duration-200 p-2.5 pr-0 z-50"
          aria-label="Toggle navigation" title="Toggle navigation"
        >
          {isNavOpened ? <CloseMenu /> : <JamMenu />}
        </button>
      </nav>
    </header>
  );
};
