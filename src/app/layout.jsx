
import { Plus_Jakarta_Sans } from "next/font/google";
import "./global.css";

import Providers from "./Providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SITE_URL = "https://www.toledanadev.com";

const SITE_NAME = "ToledanaDev";

const SITE_TITLE =
  "ToledanaDev | Desarrollo Web y Software a Medida";

const SITE_DESCRIPTION =
  "Desarrollo web, aplicaciones y software a medida para negocios que buscan mejorar su presencia digital, automatizar procesos y crecer con tecnología.";

const OG_IMAGE = "/branding/toledanadev-og.webp";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-toledana",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  // Verificación del dominio de Pinterest.
  other: {
    "p:domain_verify": "8112762bc9bad1cb71eaf6465af11891",
  },

  // Directivas para los motores de búsqueda.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Valores sociales compartidos.
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description:
      "Creamos sitios web, aplicaciones y soluciones de software a medida para ayudar a los negocios a crecer y mejorar sus procesos.",
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
    title: SITE_TITLE,
    description:
      "Desarrollo web, software a medida, aplicaciones y soluciones digitales para negocios.",
    images: [OG_IMAGE],
  },
  
 
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`dark ${plusJakartaSans.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen font-sans antialiased selection:bg-primary/30 bg-toledana-black">
        <Providers>
          <Navbar />

          <main className="transition-colors duration-300 bg-toledana-white dark:diagonal-gradient-pro min-h-screen pt-20">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
