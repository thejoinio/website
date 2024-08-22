import { Marquee } from "@/app/ui/marquee";
import { Hero } from "@/app/ui/hero";
import { Possibilities } from "@/app/ui/possibilities";
import { Ecosystem } from "@/app/ui/ecosystem";
import { MarqueeSection } from "@/app/ui/marquee-section";
import React from "react";
import { PresaleSection } from "@/app/ui/presale-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Possibilities />
      <Ecosystem />
      <PresaleSection />
      <Marquee />
      <MarqueeSection />
    </main>
  );
}
