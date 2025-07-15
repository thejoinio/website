import Ecosystem from "@/components/ecosystem";
import Events from "@/components/events";
import FAQSSection from "@/components/faqs-section";
import Hero from "@/components/hero";
import JoinTokenComponent from "@/components/join-token/join";
import PartnersSection from "@/components/partners-section";
import Possibilities from "@/components/possibilities";
import PresaleSection from "@/components/presale-section";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-tsb)] md:mainBg bg-cover">
      <Hero />
      <Possibilities />
      <Events />
      <Ecosystem />
      <PresaleSection />
      <JoinTokenComponent />
      <PartnersSection />
      <FAQSSection />
    </main>
  );
}
