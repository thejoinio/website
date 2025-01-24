'use client'
import Image from "next/image";
import joinToken from '@/assets/icons/join-token.webp';
import communityImg from '@/assets/images/community.png';
import Countdown from "../countdown";
import { Button } from "../button";

export default function Community () {
    return (
        <section className="community-section bg-communityLooper bg-bottom bg-cover mt-px relative overflow-hidden pb-10 md:pb-20">
            <div className="community flex flex-col mt-[50px] gap-[30px] w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
                <div className="flex flex-col gap-2.5 mb-5 xs:mb-[30px]">
                    <h2 className="text-2xl/normal xs:text-[48px]/normal font-medium mx-auto text-center">
                    J
                    <Image
                        src={joinToken}
                        alt="Join Token also represents O"
                        width={200}
                        height={199}
                        className="inline mix-blend-luminosity w-5 xs:w-[30px] h-5 xs:h-[30px] -mt-1 mx-1"
                    />
                    in Community of Blockchain
                    </h2>
                    <p className="text-center text-base xs:text-xl/[30px]">Join the millions of creators, collectors, and curators who are on this journey with you.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 xs:gap-[30px]">
                    <Countdown targetDate="2025-01-30T00:00:00" />
                    <Button variant="dark" className="text-xl px-[30px] py-[15px]" disabled>Join Whitelisting</Button>
                </div>
                <div>
                    <Image src={communityImg} alt="Characters in hexagonal shaped background" width={2400} height={1838} className="w-full max-w-[800px] mx-auto" />
                </div>
            </div>
        </section>
    )
}