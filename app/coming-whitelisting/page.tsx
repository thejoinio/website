import { Marquee } from "@/app/ui/marquee";
import { MarqueeSection } from "@/app/ui/marquee-section";
import { Missions } from "@/app/ui/missions";

export default function Whitelist() {
  return (
    <main>
      <Missions />
      <Marquee />
      <MarqueeSection />
    </main>
  );
}
