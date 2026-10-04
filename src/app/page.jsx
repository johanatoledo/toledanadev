import Hero from "../components/Hero";
import DynamicDescription from "../components/DynamicDescription";
import Services from "../components/Services";
import Projects from "../components/Projects";
import { organizationJsonLd } from "./_data/organitationJsonLd";


export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <Hero />

      <DynamicDescription />

      <Services />

      <Projects />
    </>
  );
}