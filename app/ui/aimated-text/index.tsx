"use client";
import { gilroy } from "@/app/fonts";
import React, { useState, useEffect, useRef } from "react";

const texts = ["Socials", "Gaming", "Payment"];

export const AnimatedText: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(236);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth + 36);
    }
  }, [currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`relative inline-flex items-center rounded-full animated-text-background text-center transition-all duration-200 ${gilroy.className}`}
      style={{
        width: `${width}px`,
      }}
    >
      <span
        ref={textRef}
        className={`${
          isAnimating ? "animate-slide-out" : "animate-slide-in"
        } rounded-full inline-flex items-center leading-tight my-2.5 text-[#B0AFB1] text-center mx-auto relative z-10`}
      >
        {texts[currentTextIndex]}
      </span>
    </span>
  );
};
