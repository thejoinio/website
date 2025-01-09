"use client";
import React, { useState, useEffect, useRef } from "react";

const texts = ["socials", "gaming", "payment"];

export const AnimatedText: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(236);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth + 30);
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
      className={`relative inline-flex items-center animated-text-background text-center transition-all duration-200`}
      style={{
        width: `${width}px`,
      }}
    >
      <span
        ref={textRef}
        className={`${
          isAnimating ? "animate-slide-out" : "animate-slide-in"
        } inline-flex items-center leading-tight my-2.5 decorated-text text-center mx-auto relative z-10`}
      >
        {texts[currentTextIndex]}
      </span>
    </span>
  );
};
