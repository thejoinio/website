import Image from "next/image";
import demigods from '@/assets/images/demigods-nft-cards.png'
import { Button } from "../button";

export default function PresaleSection () {
    return (
        <section className="flex flex-col md:flex-row items-center py-[52px] relative">
            <div className="absolute left-0 h-full w-full bg-presaleSectionBg bg-right bg-no-repeat mix-blend-soft-light"></div>
            <div className="flex justify-center items-center w-full md:w-1/2">
                <Image src={demigods} alt="3 Demigods NFT Cards" width={1651} height={1502} className="w-full max-w-[550px]" />
            </div>
            <div className="flex flex-col gap-[30px] w-full md:w-1/2">
                <h4 className="text-5xl/normal">Grab your Spot in the JOIN Presale.</h4>
                <p className="text-2xl">Exclusive Freebies Await!</p>
                <Button variant="dark" className="text-xl px-[30px] py-[15px]" disabled>Join Presale</Button>
            </div>
        </section>
    )
}