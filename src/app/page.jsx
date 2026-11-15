import Hero from "../components/Hero";
import DynamicDescription from "../components/DynamicDescription";
import Services from "../components/Services";
import Projects from "../components/Projects";
import { organizationJsonLd } from "./_data/organitationJsonLd";


export const metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ToledanaDev | Desarrollo Web y Software a Medida",
    description:
      "Creamos sitios web, aplicaciones y soluciones de software a medida para ayudar a los negocios a crecer y mejorar sus procesos.",
    url: "/",
    siteName: "ToledanaDev",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/branding/toledanadev-og.webp",
        width: 1200,
        height: 630,
        alt: "ToledanaDev - Desarrollo Web y Software a Medida",
        
      },
    ],
  },
};


export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />

      <DynamicDescription />

      <Services />

      <Projects />
    </>
  );
}