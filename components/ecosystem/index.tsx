import Image from "next/image";
import joinToken from '@/assets/icons/join-token.webp';
import joindaApp from '@/assets/images/joinda-app.png';
import joinApp from '@/assets/images/join-app.png';

export default function Ecosystem () {
    return (
        <section className="py-[70px]">
            <h2 className="text-[48px]/normal font-medium max-w-[18ch] mx-auto text-center">
              The J
              <Image
                src={joinToken}
                alt="Join Token also represents O"
                width={200}
                height={199}
                className="inline mix-blend-luminosity w-[50px] h-[50px] -mt-3 mx-1"
              />
              IN Ecosystem
            </h2>
            <div className="grid grid-cols-5 grid-rows-3 gap-5 mt-10 px-11">
              <div className="bg-[#8940FF14] flex flex-col max-h-[539px] self-stretch col-span-3 row-span-3 rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-[18px] p-7">
                  <h3 className="text-[32px] font-semibold">Joinda App</h3>
                  <p className="text-[#ddd]"><span className="font-semibold">Instant Messaging: </span>Communicate seamlessly with friends, family, and colleagues in real-time.</p>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-3"></div>
                  <div className="col-span-7">
                    <Image src={joindaApp} alt="Joinda App" width={419} height={367} />
                  </div>
                  <div className="col-span-2"></div>
                </div>
              </div>
              <div className="bg-[#8940FF14] flex self-strech col-span-2 row-span-2 py-[18px] pr-3 pl-5 rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)]">
                <div className="w-4/12 pr-[37px]"></div>
                <div className="w-8/12 gap-4">
                  <p className="text-[17px]/[28px] text-[#ddd] "><span className="font-semibold">Monetization Opportunities: </span> Turn your gaming skills into earnings by competing in global tournaments and lotteries.</p>
                  <p className="text-[17px]/[28px] text-[#ddd] "><span className="font-semibold">Diverse Game Library: </span>Enjoy a wide range of games across various genres, all integrated.</p>
                </div>
              </div>
              <div className="bg-[#8940FF14] flex max-h-[539px] col-span-2 row-span-3 bg-[#09141B] rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-[18px] p-7">
                  <h3 className="text-[32px] font-semibold silver-text">Join App</h3>
                  <p className="text-[#ddd]"><span className="font-semibold">Blockchain-Powered Lottery: </span>Experience the next generation of lotteries with complete transparency and security, powered by blockchain technology.</p>
                </div>
                <div className="flex">
                  <div className="w-3/12"></div>
                  <div className="w-9/12">
                    <Image src={joinApp} alt="Join App" width={359} height={375} />
                  </div>
                </div>
              </div>
              <div className="bg-[#8940FF14] flex col-span-3 row-span-2 rounded-2xl shadow-[0px_13.339px_21.4px_0px_rgba(0,0,0,0.25)]">
              <div className="w-2/5"></div>
                <div className="w-3/5 gap-5">
                  <p className="text-[17px]/[28px] text-[#ddd] "><span className="font-semibold">News Feed: </span> Stay updated with the latest happenings within your network and beyond.</p>
                  <p className="text-[17px]/[28px] text-[#ddd] "><span className="font-semibold">Fundraising for Projects: </span>Easily raise funds for personal or professional projects and social issues within the community.</p>
                </div>
              </div>
            </div>
        </section>
    )
}