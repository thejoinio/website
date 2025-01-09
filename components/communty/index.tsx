'use client'
import Image from "next/image";
import joinToken from '@/assets/icons/join-token.webp';
import communityImg from '@/assets/images/community.png';
import Countdown from "../countdown";
import { Button } from "../button";

export default function Community () {
    return (
        <section className="flex flex-col gap-[30px] mt-[90px]">
            <div className="flex flex-col gap-2.5 mb-[30px]">
                <h2 className="text-[48px]/normal font-medium mx-auto text-center">
                J
                <Image
                    src={joinToken}
                    alt="Join Token also represents O"
                    width={200}
                    height={199}
                    className="inline mix-blend-luminosity w-[30px] h-[30px] -mt-1 mx-1"
                />
                in Community of Blockchain
                </h2>
                <p className="text-center text-xl/[30px]">Join the millions of creators, collectors, and curators who are on this journey with you.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px]">
                <Countdown targetDate="2025-01-14T00:00:00" />
                <Button variant="dark" className="text-xl px-[30px] py-[15px]" disabled>Join Whitelisting</Button>
            </div>
            <div>
                <Image src={communityImg} alt="Characters in hexagonal shaped background" width={2400} height={1838} className="w-full max-w-[800px] mx-auto" />
            </div>
        </section>
    )
}