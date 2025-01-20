import Image from "next/image";
import demigods from '@/assets/images/demigods-nft-cards.png'
import { Button } from "../button";

export default function PresaleSection () {
    return (
        <section className="presale-section overflow-hidden py-[60px] md:py-[52px] relative">
            <div className="flex flex-col-reverse md:flex-row items-center gap-[60px] relative w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <Image src={demigods} alt="3 Demigods NFT Cards" width={1651} height={1502} className="w-full max-w-[550px] z-10" />
                </div>
                <div className="flex flex-col gap-5 xs:gap-[30px] w-full md:w-1/2 z-10">
                    <h4 className="text-2xl/normal xs:text-4xl/normal md:text-5xl/normal">Grab your Spot in the JOIN Presale.</h4>
                    <p className="text-base xs:text-xl md:text-2xl">Exclusive Freebies Await!</p>
                    <Button variant="dark" className="text-xl px-[30px] py-[15px]" disabled>Join Presale</Button>
                </div>
                <div className="absolute left-0 h-full w-full bg-presaleSectionBg bg-right-top md:bg-right bg-no-repeat mix-blend-soft-light"></div>
            </div>
        </section>
    )
}