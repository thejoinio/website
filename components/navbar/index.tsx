'use client'
import { CloseMenu, JamMenu } from "@/assets/svg";
import Link from "next/link";
import { useState } from "react";
import joinLogo from '@/assets/images/logo.png';
import Image from "next/image";
import { Button } from "../button";

export const Navbar = () => {
    const [isNavOpened, setIsNavOpened] = useState(false);

  const navLinks = [
    { label: "Community", href: "/#" },
    { label: "Whitepaper", href: "/#" },
    { label: "Products", href: "/#" },
    { label: "Partners", href: "/#" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full font-[family-name:var(--font-tsb)]">
      <nav className="flex justify-between items-center w-full max-w-[1440px] mx-auto h-20 px-4 md:px-10 border-b border-[#374151] bg-[#09141B]">
        <Link
          href={"/"}
          className="flex items-center z-50 h-[30px]"
        >
          <Image src={joinLogo} alt="Join Logo" width={192} height={67} className="flex h-[30px] w-auto" />
        </Link>
        <ul className={`${isNavOpened? "translate-x-0": "-translate-x-full"} md:translate-x-0 transition duration-200 flex flex-col md:flex-row items-center gap-14 md:gap-10 lg:gap-[60px] fixed md:relative top-0 left-0 pt-28 md:pt-0 w-full md:w-auto h-screen md:h-fit bg-black md:bg-transparent bg-opacity-80 md:bg-opacity-100 backdrop-blur-md md:backdrop-blur-0`}>
          {navLinks.map((link, idx) => (
            <li key={idx} onClick={()=>setIsNavOpened(!isNavOpened)} className="text-[#777E90] text-sm">
              <Link href={link.href} className="hover:underline underline-offset-4">{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex">
            <Button variant="dark" disabled>Join Presale</Button>
        </div>
        <button onClick={()=>setIsNavOpened(!isNavOpened)} className="flex md:hidden hover:scale-90 active:scale-90 transition duration-200 p-2.5 pr-6 z-50">{isNavOpened? <CloseMenu /> :<JamMenu />}</button>
      </nav>
    </header>
  );
};
