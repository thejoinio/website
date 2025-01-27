import { PartnersMarquee } from "../partners-logos/partners-marquee";


const PartnersSection: React.FC = () => {
  return (
    <section className="py-12 flex flex-col gap-6">
      <h2 className="text-2xl xs:text-4xl/normal md:text-[48px]/normal font-medium max-w-[21ch] mx-auto text-center">
        Our Partners
      </h2>
      <PartnersMarquee />
    </section>
  );
};

export default PartnersSection;
