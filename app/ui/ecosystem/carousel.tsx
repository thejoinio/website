"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import joinda1 from "@/app/assets/images/joinda-app-1.webp";
import joinda2 from "@/app/assets/images/joinda-app-2.webp";
import joint1 from "@/app/assets/images/joint-app-1.webp";
import joint2 from "@/app/assets/images/joint-app-2.webp";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
interface IEcosystemCarousel {
  type: "joint" | "joinda";
}
export const EcosystemCarousel: React.FC<IEcosystemCarousel> = ({ type }) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      partialVisible={true}
      ssr={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      customButtonGroup={<ButtonGroup />}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["all"]}
      itemClass="carousel-item-padding-40-px"
      className="!pb-0 relative"
    >
      <div className="mt-auto overflow-hidden">
        {type === "joinda" ? (
          <Image
            draggable={false}
            src={joinda1}
            width={1077}
            height={1287}
            alt="Joinda app splash screen shot"
            className="flex w-full h-auto"
          />
        ) : (
          <Image
            draggable={false}
            src={joint1}
            width={1077}
            height={1290}
            alt="Joint app splash screen shot"
            className="flex w-full h-auto"
          />
        )}
      </div>
      <div className="mt-auto overflow-hidden">
        {type === "joinda" ? (
          <Image
            draggable={false}
            src={joinda2}
            width={1077}
            height={1287}
            alt="Joinda app home screen shot"
            className="flex w-full h-auto"
          />
        ) : (
          <Image
            draggable={false}
            src={joint2}
            width={1077}
            height={1290}
            alt="Joint app home screen shot"
            className="flex w-full h-auto"
          />
        )}
      </div>
    </Carousel>
  );
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  next,
  previous,
  ...rest
}) => {
  const currentSlide = rest.carouselState?.currentSlide ?? 0;
  const totalSlides = rest.carouselState?.totalItems ?? 2;

  const handleClick = () => {
    if (currentSlide === totalSlides - 1) {
      previous?.();
    } else {
      next?.();
    }
  };

  const isRightPosition = currentSlide % 2 !== 0;

  return (
    <div className="carousel-button-group absolute w-full h-[3px] bottom-0 bg-[#5E5E5E] rounded-[2.286px]">
      <button
        className={`
          w-1/2 h-[3px] bg-[#02A8FB] absolute bottom-0 
          transition-transform duration-500 rounded-[2.286px]
          ${isRightPosition ? "translate-x-full" : "translate-x-0"}
        `}
        onClick={handleClick}
        disabled={(!next && !previous) || totalSlides <= 1}
      />
    </div>
  );
};