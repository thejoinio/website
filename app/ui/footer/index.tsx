import Link from "next/link";
import { gilroy, inter } from "@/app/fonts";
import {
  DiscordIcon,
  JoinIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/app/assets/svg";

export const Footer = () => {
  const icons = [
    {
      title: "Telegram",
      url: "https://t.me/JoinAllinOneEco",
      icon: <TelegramIcon />,
    },
    {
      title: "Discord",
      url: "https://discord.gg/8aNnVw8q",
      icon: <DiscordIcon />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/joineco",
      icon: <TwitterIcon />,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: <LinkedinIcon />,
    },
  ];

  return (
    <footer
      className={`w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[100px] py-8 md:py-[49px] text-[#ffffff8a] ${inter.className}`}
    >
      <div className="flex flex-col items-center md:items-start">
        <Link href="/" className="flex justify-center md:justify-start">
          <JoinIcon className="scale-75 md:scale-100 w-[112px] h-[112px]" />
        </Link>
        <h4
          className={`my-6 md:mt-8 md:mb-12 w-full text-xl text-[rgba(255,255,255,0.50)] text-center md:text-left max-w-[18ch] ${gilroy.className}`}
        >
          With Join, every dream is a possibility.
        </h4>
        <p className="hidden md:block mb-8 md:mb-0 w-full text-center md:text-left max-w-[42ch]">
          For investment inquiries, please{" "}
          <a href="mailto:investment@thejoin.io" className="underline">
            reach out
          </a>{" "}
          to us. For community requests, please reach out to us{" "}
          <a href="mailto:community@thejoin.io" className="underline">
            here
          </a>
          .
        </p>
      </div>
      <div className="space-y-6 md:space-y-9 flex flex-col self-center md:self-end">
        <Link href="/" className={`${inter.className} text-[#A5A5A5] leading-6 my-9 md:my-0 underline flex justify-center md:justify-end`}>
          Privacy Policy
        </Link>
        <ul className="grid grid-cols-2 gap-10 md:gap-0 md:flex md:space-x-10">
          {icons.map((icon, idx) => (
            <li key={idx} className="flex h-9 w-9 items-center justify-center">
              <a
                href={icon.url}
                title={icon.title}
                target="_blank"
                className="hover:scale-105 active:100 transition duration-200"
              >
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="md:hidden mb-[52px] mt-[99px] w-full text-center md:text-left max-w-[42ch]">
        For investment inquiries, please{" "}
        <a href="mailto:investment@thejoin.io" className="underline">
          reach out
        </a>{" "}
        to us. For community requests, please reach out to us{" "}
        <a href="mailto:community@thejoin.io" className="underline">
          here
        </a>
        .
      </p>
    </footer>
  );
};
