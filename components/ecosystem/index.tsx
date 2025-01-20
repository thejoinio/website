"use client";
import {
  AppIcon,
  ControllerIcon,
} from "@/assets/svg";
import { Button } from "../button";
import { EcosystemCarousel } from "./carousel";
import { useState } from "react";
import Image from "next/image";
import appstore from "@/assets/images/appstore.png";
import playstore from "@/assets/images/playstore.png";
import joinToken from "@/assets/icons/join-token.webp";

const StoreButtons = () => {
  return (
    <div className="flex gap-5 mt-[30px] mb-10">
      <button aria-label="Download on Play Store" className="flex max-w-[136px] hover:scale-95 active:scale-100 transition duration-200">
        <Image
          src={playstore}
          alt="Download on Play Store"
          width={409}
          height={142}
        />
      </button>
      <button aria-label="Download on App Store" className="flex max-w-[122px] hover:scale-95 active:scale-100 transition duration-200">
        <Image
          src={appstore}
          alt="Download on App Store"
          width={367}
          height={142}
        />
      </button>
    </div>
  );
};

export default function Ecosystem () {
  const [activeTab, setActiveTab] = useState<"joint" | "joinda">("joinda");
  return (
      <section id="products" className="products relative flex flex-col items-center pt-10 lg:pt-20 overflow-hidden">
        <div className="products-body flex flex-col relative w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-2xl/normal xs:text-4xl/normal md:text-[48px]/normal font-medium max-w-[21ch] mx-auto text-center">
              The J
              <Image
              src={joinToken}
              alt="Join Token also represents O"
              width={200}
              height={199}
              className="inline mix-blend-luminosity w-6 xs:w-8 md:w-10 h-6 xs:h-8 md:h-10 -mt-1 xs:-mt-2 md:-mt-3 mx-1"
              />
              IN Ecosystem
          </h2>
          <div>

          </div>
          <div className="w-full flex flex-col justify-center items-center lg:hidden py-[35px] px-4">
            {/* Tabs for mobile view */}
            <div className="flex space-x-2 mb-10">
              <button
                onClick={() => setActiveTab("joinda")}
                className={`font-medium sm:font-semibold text-base sm:text-xl rounded-[40px] border transition duration-200 flex items-center px-3 sm:px-5 py-[10px] whitespace-nowrap ${activeTab === "joinda" ? "bg-[rgba(255,255,255,0.10)] border-[#02A8FB]" : "bg-transparent border-[#545666]"}`}
              >
                <AppIcon className="w-5 sm:w-full mr-1 sm:mr-2" /> Joinda App
              </button>
              <button
                onClick={() => setActiveTab("joint")}
                className={`font-medium sm:font-semibold text-base sm:text-xl rounded-[40px] border transition duration-200 flex items-center px-3 sm:px-5 py-[10px] whitespace-nowrap ${activeTab === "joint" ? "bg-[rgba(255,255,255,0.10)] border-[#02A8FB]" : "bg-transparent border-[#545666]"}`}
              >
                <ControllerIcon className="w-5 sm:w-full mr-1 sm:mr-2" /> Joint
                App
              </button>
            </div>

            {/* Content for mobile view */}
            <div className="w-full">
              {activeTab === "joinda" ? (
                <div className="flex flex-col justify-center items-center">
                  <ul className="text-white text-lg space-y-5 text-center">
                    <li>
                      <span className="font-medium">Instant Messaging: </span>
                      Communicate seamlessly with friends, family, and colleagues
                      in real-time.
                    </li>
                    <li>
                      <span className="font-medium">News Feed: </span>Stay updated
                      with the latest happenings within your network and beyond.
                    </li>
                    <li>
                      <span className="font-medium">
                        Fundraising for Projects:{" "}
                      </span>
                      Easily raise funds for personal or professional projects and
                      social issues within the community.
                    </li>
                  </ul>
                  <Button
                    // variant="shaped-gradient"
                    className="flex justify-center items-center mt-5"
                  >
                    <span className="px-2">Visit Website</span>
                  </Button>
                  <StoreButtons />
                  <div className="w-full max-w-[600px] mx-auto bg-[#020C11] rounded-[20px] pt-9 px-12 mt-5">
                    <EcosystemCarousel type={activeTab} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <ul className="text-white text-lg space-y-5 text-center">
                    <li>
                      <span className="font-medium">
                        Blockchain-Powered Lottery:{" "}
                      </span>
                      Experience the next generation of lotteries with complete
                      transparency and security, powered by blockchain technology.
                    </li>
                    <li>
                      <span className="font-medium">
                        Monetization Opportunities:{" "}
                      </span>
                      Turn your gaming skills into earnings by competing in global
                      tournaments and lotteries.
                    </li>
                    <li>
                      <span className="font-medium">Diverse Game Library: </span>
                      Enjoy a wide range of games across various genres, all
                      integrated.
                    </li>
                  </ul>
                  <Button
                    // variant="shaped-gradient"
                    className="flex justify-center items-center mt-5"
                  >
                    <span className="px-2 mt-1">Visit Website</span>{" "}
                    {/* <OutlineSend className="mt-1" />{" "} */}
                  </Button>
                  <StoreButtons />
                  <div className="w-full max-w-[600px] mx-auto bg-[#020C11] rounded-[20px] pt-9 px-12 mt-5">
                    <EcosystemCarousel type={activeTab} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Full section layout for larger screens */}
          <div className="py-14 pr-7 w-full hidden lg:flex">
            <div className="w-1/4 space-y-2">
              <button
                onClick={() => setActiveTab("joinda")}
                className={`flex h-[60px] w-full items-center font-semibold text-xl px-10 py-[14px] transition duration-200 whitespace-nowrap hover:bg-[rgba(255,255,255,0.10)] ${
                  activeTab === "joinda"
                    ? "bg-[rgba(255,255,255,0.10)]"
                    : "bg-transparent"
                }`}
              >
                {" "}
                <AppIcon className="mr-[18px]" /> Joinda App
              </button>
              <button
                onClick={() => setActiveTab("joint")}
                className={`flex h-[60px] w-full items-center font-semibold text-xl px-10 py-[14px] transition duration-200 hover:bg-[rgba(255,255,255,0.10)] ${
                  activeTab === "joint"
                    ? "bg-[rgba(255,255,255,0.10)]"
                    : "bg-transparent"
                }`}
              >
                {" "}
                <ControllerIcon className="mr-[18px]" /> Joint App
              </button>
            </div>
            <div className="relative block">
              <div className="absolute w-[2.286px] h-full bg-[#2C3043] rounded-[2.286px] top-0"></div>
              <div
                className={`absolute w-[2.286px] h-[60px] rounded-[2.286px] bg-[#02A8FB] ${
                  activeTab === "joinda" ? "top-0" : "top-[68px]"
                }`}
              ></div>
            </div>
            <div className="w-[calc(35%_-_2.286px)] pr-9 pl-11">
              {activeTab === "joinda" ? (
                <ul className="text-white text-lg space-y-5">
                  <li>
                    <span className="font-medium">Instant Messaging: </span>
                    Communicate seamlessly with friends, family, and colleagues in
                    real-time.
                  </li>
                  <li>
                    <span className="font-medium">News Feed: </span>Stay updated
                    with the latest happenings within your network and beyond.
                  </li>
                  <li>
                    <span className="font-medium">
                      Fundraising for Projects:{" "}
                    </span>
                    Easily raise funds for personal or professional projects and
                    social issues within the community.
                  </li>
                </ul>
              ) : (
                <ul className="text-white text-lg space-y-5">
                  <li>
                    <span className="font-medium">
                      Blockchain-Powered Lottery:{" "}
                    </span>
                    Experience the next generation of lotteries with complete
                    transparency and security, powered by blockchain technology.
                  </li>
                  <li>
                    <span className="font-medium">
                      Monetization Opportunities:{" "}
                    </span>
                    Turn your gaming skills into earnings by competing in global
                    tournaments and lotteries.
                  </li>
                  <li>
                    <span className="font-medium">Diverse Game Library: </span>
                    Enjoy a wide range of games across various genres, all
                    integrated.
                  </li>
                </ul>
              )}
              <Button
                className="flex justify-center items-center mt-5"
              >
                Visit Website
              </Button>
              <StoreButtons />
            </div>
            <div className="w-2/5 bg-[#020C11] rounded-[20px] pt-9 px-12">
              <EcosystemCarousel type={activeTab} />
            </div>
          </div> 
        </div>
      </section>
  );
};
