import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { DiscordIcon, LinkedinIcon, Star, StarSmall, TelegramIcon, TwitterIcon } from "@/assets/svg";
import joinLogo from '@/assets/images/logo.png';

export default function Footer () {
    const icons = [
        {
          title: "Telegram",
          url: "https://t.me/JoinAllinOneEco",
          icon: <TelegramIcon />,
        },
        {
          title: "Discord",
          url: "https://discord.com/invite/uf2TzvAsJX",
          icon: <DiscordIcon />,
        },
        {
          title: "Twitter",
          url: "https://twitter.com/joineco",
          icon: <TwitterIcon />,
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/company/thejoineco",
          icon: <LinkedinIcon />,
        },
      ];

      const links = [
        {
            title: "Join Network",
            links: [{name: "Community", link: '/'}, {name: "Whitepaper", link: '/'}]
        },
        {
            title: "Company",
            links: [{name: "Products", link: '/'}]
        },
        {
            title: "Resource",
            links: [{name: "Partners", link: '/'}]
        },
      ]

    return (
        <footer className="py-20 footer-pattern font-[family-name:var(--font-tsb)]">
            <form className="flex flex-col gap-5 w-full max-w-5xl mx-auto px-4 md:px-10 mb-8 xs:mb-10 md:mb-[90px]">
                <label htmlFor="email">Be the first to know Join updates</label>
                <div className="flex gap-2 border-b border-[#4C4C4C] focus-within:border-white transition duration-200">
                    <input type="text" id="email" placeholder="Your e-mail" className="flex bg-transparent w-full outline-none placeholder:text-[#999] leading-normal" />
                    <Button type="submit">Subscribe</Button>
                </div>
            </form>
            <div className="flex flex-col gap-8 xs:gap-8 md:gap-[50px] w-full max-w-7xl mx-auto px-4 md:px-10 pt-8 xs:pt-10 sm:pt-20">
                <div className="flex flex-col md:flex-row justify-between gap-6 xs:gap-8 sm:gap-10 md:gap-[187px]">
                    <div className="flex flex-col gap-6 w-fit">
                        <Link href={'/'}>
                            <Image src={joinLogo} alt="Join Logo" width={192} height={67} />
                        </Link>
                        <p className="text-[#E8F1F2] leading-6 md:whitespace-nowrap">With Join, every dream is a possibility.</p>
                        <ul className="flex gap-10">
                            {icons.map((icon, idx) => (
                                <li key={idx} className="flex h-9 w-9 items-center justify-center">
                                <Link
                                    href={icon.url}
                                    title={icon.title}
                                    target="_blank"
                                    className="hover:scale-105 active:100 transition duration-200"
                                >
                                    {icon.icon}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-3 md:justify-items-end w-full gap-4 md:gap-10">
                            {links.map((item, idx)=>(
                                <div className="flex flex-col gap-3 sm:gap-5" key={idx}>
                                    <h4 className="text-sm xs:text-base sm:text-xl/normal font-medium whitespace-nowrap">{item.title}</h4>
                                    <ul className="flex flex-col gap-3 sm:gap-5">
                                        {item.links.map((link, idx)=>(
                                            <li key={idx}><Link href={link.link} className="hover:underline underline-offset-4 text-[10px] xs:text-xs sm:text-sm md:text-base">{link.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            )) 
                            }
                    </div>
                </div>
                <div className="text-center text-xs sm:text-sm">
                    Copyright &copy; <span className="copyright-join">JOIN</span> 2025. All Right Reserved.
                </div>
            </div>
            <div className="footer-text absolute left-1/2 -translate-x-1/2 -bottom-5">JOIN</div>
            <div className="absolute bottom-[325px] right-[250px]"><Star /></div>
            <div className="absolute bottom-[200px] right-[40%]"><StarSmall /></div>
            <div className="absolute bottom-[100px] left-[250px]"><StarSmall /></div>
        </footer>
    )
}