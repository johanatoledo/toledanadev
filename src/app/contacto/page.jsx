
import ContactSection from "./_components/ContactSection";

const CONTACT_URL = "https://www.toledanadev.com/contacto";

const CONTACT_TITLE =
  "Contacto | Soluciones digitales para negocios";

const CONTACT_DESCRIPTION =
  "Cuéntanos qué proceso quieres digitalizar. En ToledanaDev desarrollamos páginas web, software a medida, aplicaciones web, automatizaciones y soluciones con inteligencia artificial.";

const OG_IMAGE = "/branding/toledanadev-og.webp";

export const metadata = {
  title: CONTACT_TITLE,

  description: CONTACT_DESCRIPTION,

  alternates: {
    canonical: CONTACT_URL,
  },

  openGraph: {
    title: `${CONTACT_TITLE} | ToledanaDev`,
    description: CONTACT_DESCRIPTION,
    url: CONTACT_URL,
    siteName: "ToledanaDev",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "ToledanaDev - Desarrollo Web y Software a Medida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${CONTACT_TITLE} | ToledanaDev`,
    description: CONTACT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-toledana-black dark:text-toledana-white">
      <header className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-12 pt-32 text-center sm:px-8 sm:pb-16 sm:pt-36 lg:px-10">
          <h1 className="max-w-5xl font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Conversemos sobre la solución digital que necesita tu negocio
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl dark:text-white/70">
            Cuéntanos qué proceso quieres mejorar, automatizar o digitalizar.
            Analizaremos tu necesidad para ayudarte a encontrar una solución
            tecnológica adaptada a tu negocio.
          </p>
        </div>
      </header>

      <ContactSection />
    </div>
  );
}
