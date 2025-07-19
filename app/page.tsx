import Community from "@/components/communty";
import Ecosystem from "@/components/ecosystem";
import Events from "@/components/events";
import FAQSSection from "@/components/faqs-section";
import Hero from "@/components/hero";
import JoinTokenSection from "@/components/join-token-section";
import PartnersSection from "@/components/partners-section";
import Possibilities from "@/components/possibilities";
import PresaleSection from "@/components/presale-section";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-tsb)] bg-mainBgMobile md:bg-mainBg bg-cover bg-center bg-repeat">
      <Hero />
      <Possibilities />
      <Events />
      <Ecosystem />
      <PresaleSection />
      <JoinTokenSection />
      <Community />
      <PartnersSection />
      <FAQSSection />
    </main>
  );
}
