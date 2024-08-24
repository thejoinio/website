"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { Button } from "@/app/ui/button";
import {
  Hamburger,
  Logo,
  NavUnderlineMobile,
  TimesIcon,
} from "@/app/assets/svg";
import { useRouter } from "next/navigation";
import { NavUnderline } from "@/app/assets/svg";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import JoinTelegram from "@/app/assets/community/telegram.png";
import JoinDiscord from "@/app/assets/community/discord.png";
import JoinLinkedIn from "@/app/assets/community/linkedin.png";
import JoinTwitter from "@/app/assets/community/x.png";

interface NavLink {
  label: string;
  path?: string;
  type: "dropdown" | "text" | "button";
  buttonType?: "shaped-disabled" | "outlined" | "shaped" | "text";
  disabled?: boolean;
  subLinks?: {
    path: string;
    icon?: JSX.Element;
    background?: string;
    title: string;
    subtitle?: string;
  }[];
}

const navLinksLeft: NavLink[] = [
  {
    label: "Community",
    type: "dropdown",
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
        path: "https://discord.gg/joineco",
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
  {
    label: "Partners",
    type: "dropdown",
    disabled: true,
    subLinks: [
      {
        title: "Coming Soon",
        path: "/",
        background:
          "linear-gradient(112deg, rgba(4, 20, 29, 0.40) 14.96%, rgba(14, 127, 184, 0.40) 85.38%)",
      },
    ],
  },
  {
    label: "Whitepaper",
    path: "/whitepaper",
    type: "text",
    // buttonType: "text",
  },
];
const navLinksRight: NavLink[] = [
  {
    label: "Join Whitelisting",
    path: "/whitelisting",
    type: "text",
    disabled: false,
  },
  {
    label: "Join Presale",
    path: "/",
    type: "text",
    // buttonType: "shaped-disabled",
    disabled: true,
  },
  {
    label: "Products",
    path: "/#products",
    type: "text",
  },
];
export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={clsx("transition-all duration-300 ease-in-out w-full z-50")}
      >
        <div className="h-20 w-full flex flex-col items-center justify-center">
          <div className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex justify-between items-center">
            <ul className="hidden lg:flex gap-5 items-center w-2/5">
              {navLinksLeft.map((navLink, idx) =>
                navLink.type === "dropdown" ? (
                  <NavigationMenu key={`${navLink} ${idx}`}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={`${
                            pathname === navLink.path ||
                            pathname ===
                              (navLink.subLinks && navLink?.subLinks[idx]?.path)
                              ? "text-[#F2E6E0]"
                              : "hover:text-hoverPrimary"
                          } text-[#F2E6E0] hover:text-hoverPrimary flex items-center text-[15px] p-0 uppercase font-semibold`}
                        >
                          {navLink.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex w-full min-w-[180px] gap-4 p-5">
                          {navLink.subLinks &&
                            navLink.subLinks.map((subLink, idx) => (
                              <NavigationMenuLink
                                key={idx}
                                href={subLink.path}
                                target="_blank"
                                style={{ background: subLink.background }}
                                className={`flex flex-col flex-grow w-fit min-w-[200px] lg:min-w-[200px] xl:min-w-[250px] 2xl:min-w-[300px] rounded-[15px] px-5 pt-6 pb-2 transition duration-200 border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.50)]`}
                              >
                                <h3
                                  style={
                                    subLink.title === "Coming Soon"
                                      ? { marginBottom: 12 }
                                      : undefined
                                  }
                                  className="text-[15px] mb-[5px] font-semibold"
                                >
                                  {subLink.title}
                                </h3>
                                {subLink.title !== "Coming Soon" && (
                                  <p className="text-xs">
                                    Join our community on {subLink.title}
                                  </p>
                                )}
                                {subLink.icon}
                              </NavigationMenuLink>
                            ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : navLink.type === "button" ? (
                  <Button
                    key={`${navLink} ${idx}`}
                    variant={navLink.buttonType}
                    className="font-semibold !uppercase !text-[15px] transition-colors min-h-10 !h-fit"
                    disabled={
                      navLink?.disabled && navLink.disabled ? true : false
                    }
                    onClick={() => {
                      router.push(`${navLink.path}`);
                    }}
                  >
                    {navLink.label}
                  </Button>
                ) : (
                  <Link
                    key={idx}
                    href={navLink.path ? navLink.path : "/"}
                    className={`${
                      pathname === navLink.path
                        ? "text-[#F2E6E0] hover:text-hoverPrimary"
                        : ""
                    } flex items-center text-[#F2E6E0] hover:text-hoverPrimary font-semibold transition-colors uppercase`}
                  >
                    {navLink.label}
                  </Link>
                )
              )}
            </ul>
            <Link
              href="/"
              className="flex translate-y-4 translate-x-[14px] mx-auto lg:mx-0 z-50"
            >
              <Logo className="h-[60px] md:h-full" />
            </Link>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="translate-y-2.5 hover:scale-90 active:scale-100 transition duration-200"
              >
                <Hamburger />
              </button>
            </div>
            <ul className="hidden lg:flex justify-end gap-3 xl:gap-5 2xl:gap-7 items-center w-2/5">
              {navLinksRight.map((navLink, idx) =>
                navLink.type === "button" ? (
                  <Button
                    key={`${navLink} ${idx}`}
                    variant={navLink.buttonType}
                    className="font-semibold !uppercase !text-[15px] transition-colors min-h-10 !h-fit whitespace-nowrap"
                    disabled={
                      navLink?.disabled && navLink.disabled ? true : false
                    }
                    onClick={() => {
                      router.push(`${navLink.path}`);
                    }}
                  >
                    {navLink.label}
                  </Button>
                ) : (
                  <Link
                    key={idx}
                    href={navLink.path ? navLink.path : "/"}
                    className={`${
                      pathname === navLink.path
                        ? "text-[#F2E6E0] hover:text-hoverPrimary"
                        : ""
                    } flex items-center text-[#F2E6E0] hover:text-hoverPrimary font-semibold transition-colors uppercase text-[15px]`}
                  >
                    {navLink.label}
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center overflow-hidden z-50">
          <NavUnderline />
        </div>
        <div className="flex md:hidden justify-center items-center overflow-hidden z-50">
          <NavUnderlineMobile />
        </div>
        {/* Mobile nav */}
        <div
          className={`
            lg:hidden bg-background/50 backdrop-blur-xl text-whitePrimary w-full fixed top-0 left-0 h-screen z-[999999] 
            flex flex-col items-center pt-20 transition-transform duration-300
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-8 right-4 sm:right-8 md:right-[50px] hover:scale-90 active:scale-100 transition duration-200"
          >
            <TimesIcon />
          </button>
          <ul className="flex flex-col gap-5 items-center">
            {navLinksLeft.map((navLink, idx) =>
              navLink.type === "dropdown" ? (
                <Accordion
                  type="single"
                  collapsible
                  key={idx}
                  disabled={navLink.disabled}
                >
                  <AccordionItem value={`item-${idx}`} className="border-b-0">
                    <AccordionTrigger
                      className={`hover:no-underline py-0 font-medium text-left text-[#F2E6E0] disabled:cursor-not-allowed disabled:opacity-80 uppercase flex items-center min-w-[127px]`}
                    >
                      {navLink.label}
                    </AccordionTrigger>
                    {navLink.subLinks &&
                      navLink.subLinks.map((subLink, idx) => (
                        <AccordionContent
                          className="group pt-3 pb-0 text-base text-left"
                          key={idx}
                        >
                          <Link
                            href={subLink.path}
                            target="_blank"
                            className="text-[#F2E6E0] hover:text-hoverPrimary flex space-x-3 items-center group-hover:bg-primary-50 space-y-2"
                          >
                            <div
                              style={{ background: subLink.background }}
                              className="group-hover:bg-primary-100 w-8 h-8 flex justify-center items-center bg-white shadow-custom rounded"
                            >
                              {subLink.icon}
                            </div>
                            <div>
                              <div className="text-base mb-1">
                                {subLink.title}
                              </div>
                            </div>
                          </Link>
                        </AccordionContent>
                      ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  key={idx}
                  href={navLink.path ? navLink.path : "/"}
                  className={`${
                    pathname === navLink.path
                      ? "text-[#F2E6E0] hover:text-hoverPrimary"
                      : ""
                  } flex items-center text-[#F2E6E0] hover:text-hoverPrimary font-semibold transition-colors uppercase`}
                >
                  {navLink.label}
                </Link>
              )
            )}
            {navLinksRight.map((navLink, idx) =>
              navLink.type === "button" ? (
                <Button
                  key={idx}
                  variant={navLink.buttonType}
                  disabled={navLink.disabled}
                  className="font-semibold text-lg w-full text-center"
                  onClick={() => {
                    router.push(`${navLink.path}`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {navLink.label}
                </Button>
              ) : (
                <Link
                  key={idx}
                  href={navLink.path ? navLink.path : "/"}
                  className={`${
                    pathname === navLink.path
                      ? "text-[#F2E6E0] hover:text-hoverPrimary"
                      : ""
                  } flex items-center text-[#F2E6E0] hover:text-hoverPrimary font-semibold transition-colors uppercase`}
                >
                  {navLink.label}
                </Link>
              )
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
