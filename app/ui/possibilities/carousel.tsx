"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import kites from "@/app/assets/images/possibilities/kites.webp";
import card from "@/app/assets/images/possibilities/card.webp";
import purchases from "@/app/assets/images/possibilities/purchases.webp";
import pay from "@/app/assets/images/possibilities/pay.webp";
import lotteries from "@/app/assets/images/possibilities/lotteries.webp";
import rewards from "@/app/assets/images/possibilities/rewards.webp";
import funds from "@/app/assets/images/possibilities/funds.webp";
import nft from "@/app/assets/images/possibilities/nft.webp";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 4,
    slidesToSlide: 2,
    partialVisibilityGutter: 50,
  },
  largeDesktop: {
    breakpoint: { max: 1600, min: 1408 },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 50,
  },
  desktop: {
    breakpoint: { max: 1408, min: 1200 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 50,
  },
  desktopX: {
    breakpoint: { max: 1200, min: 992 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 50,
  },
  laptop: {
    breakpoint: { max: 992, min: 704 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 704, min: 352 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 352, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export const PossibilitiesCarousel: React.FC = () => {
  const [settings, setSettings] = useState({
    centerMode: false,
    partialVisible: true,
  });

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth || 704;
      if (width >= 540 && width <= 704) {
        setSettings({
          centerMode: true,
          partialVisible: false,
        });
      } else {
        setSettings({
          centerMode: false,
          partialVisible: true,
        });
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      {...settings}
      ssr={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[
        "superLargeDesktop",
        "largeDesktop",
        "desktop",
        "laptop",
        "tablet",
        "mobile",
      ]}
      itemClass="carousel-item-padding-40-px"
      className="py-6 h-fit min-h-[522px] pl-0 px-8"
    >
      <div className="ml-4 mx-4 py-8 overflow-hidden h-full">
        <div className="flex flex-col bg-[#7F5CE2] bg-slide-primary max-w-[352px] w-full h-full min-h-[522px] rounded-3xl bg-cover">
          <p className="text-lg text-white p-7">
            Use <span className="font-bold">JOIN</span> as a secure and
            transparent{" "}
            <span className="font-bold text-[#89DAD0]">means of exchange</span>{" "}
            within the ecosystem
          </p>
          <div className="flex h-[350px] w-full object-scale-down">
            <Image
              draggable={false}
              src={kites}
              width={1056}
              height={1030}
              alt="Two flying kites around Join token"
              className="flex w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden h-full">
        <div className="bg-[#778692] flex flex-col justify-end max-w-[352px] w-full h-full min-h-[522px] rounded-3xl px-7 pt-0">
          <p className="text-lg text-white py-7">
            <span className="font-bold text-[#89DAD0]">
              In-Game Purchases:{" "}
            </span>
            Spend <span className="font-bold">JOIN</span> on various in-game
            items and features.
          </p>
          <div className="flex items-center">
            <Image
              draggable={false}
              src={purchases}
              width={810}
              height={1131}
              alt="Join in-game purchase screen shot"
              className="flex mx-auto h-auto w-auto"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden h-full">
        <div className="bg-[#030E14] max-w-[352px] w-full h-full min-h-[522px] rounded-3xl px-7 pt-0">
          <p className="text-lg text-white py-7">
            Introducing our{" "}
            <span className="font-bold text-[#89DAD0]">global</span>{" "}
            decentralized crypto debit card for in - store and online payments.
          </p>
          <div className="relative top-0 h-[380px] flex items-center px-1">
            <div className="absolute h-full w-full bg-slide-card mix-blend-color-dodge bg-contain bg-center bg-no-repeat" />
            <Image
              draggable={false}
              src={card}
              width={1056}
              height={1113}
              alt="Join in-game purchase screen shot"
              className="flex mx-auto h-full w-auto object-scale-down mix-blend-normal animate-bounce-token"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden h-full">
        <div className="bg-nft bg-contain bg-bottom mix-blend-color-dodge max-w-[352px] w-full h-full min-h-[522px] rounded-3xl px-7 pt-0">
          <p className="text-lg font-bold text-[#C8C8C8] py-7">
            Get access to our NFT collections on JOIN.
          </p>
          <div className="relative top-0 h-[380px] flex items-center px-1">
            <div className="absolute h-full w-full bg-slide-card mix-blend-color-dodge bg-contain bg-center bg-no-repeat" />
            <Image
              draggable={false}
              src={nft}
              width={822}
              height={1162}
              alt="3 Demigods nft stacked on top of each other"
              className="flex mx-auto h-full w-auto object-scale-down mix-blend-normal animate-bounce-nft"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden h-full">
        <div className="bg-white max-w-[352px] w-full h-full min-h-[522px] rounded-3xl p-7 pt-0">
          <div className="flex items-start">
            <Image
              draggable={false}
              src={pay}
              width={822}
              height={1224}
              alt="Join payment successful screen shot"
              className="flex mx-auto w-auto h-auto"
            />
          </div>
          <p className="text-lg text-[#121010] pt-7">
            <span className="font-bold text-[#89DAD0]">Pay </span>for a wide
            range of products and services using
            <span className="font-semibold text-[#403D3D]"> JOIN </span> tokens
          </p>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden h-full">
        <div className="bg-[#0089FF] w-full max-w-[352px] h-full min-h-[522px] rounded-3xl px-7 flex flex-col justify-end">
          <p className="text-lg text-white py-7">
            <span className="font-bold">Participate in lotteries </span>
            that ensure fairness through blockchain technology.
          </p>
          <div className="flex items-end">
            <Image
              draggable={false}
              src={lotteries}
              width={810}
              height={1131}
              alt="Join lotteries screen shot"
              className="flex mx-auto h-auto w-auto"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden h-full">
        <div className="bg-white max-w-[352px] w-full h-full min-h-[522px] rounded-3xl p-7 pt-0">
          <div className="flex items-start">
            <Image
              draggable={false}
              src={rewards}
              width={810}
              height={1237}
              alt="Join rewards screen shot"
              className="flex mx-auto h-full w-auto object-contain"
            />
          </div>
          <p className="text-lg text-[#121010] pt-7">
            <span className="font-bold text-[#89DAD0]">Earn Rewards </span>in
            <span className="font-semibold text-[#403D3D]"> JOIN </span>
            for high engagement and content creation
          </p>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden h-full">
        <div className="bg-[#1E2337] flex flex-col justify-end max-w-[352px] w-full h-full min-h-[522px] rounded-3xl px-7 pt-0">
          <p className="text-lg text-white py-7">
            <span className="font-bold text-[#89DAD0]">Raise Funds </span>
            by launching crowdfunding campaigns for your projects.
          </p>
          <div className="flex items-end">
            <Image
              draggable={false}
              src={funds}
              width={810}
              height={1131}
              alt="Join fundraising screen shot"
              className="flex mx-auto h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};
