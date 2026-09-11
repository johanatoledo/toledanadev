import { Plus_Jakarta_Sans } from "next/font/google";
import "./global.css";
import Providers from "./Providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-toledana",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ToledanaDev",
  url: "https://toledanadev.com",
  description:
    "Desarrollo web, software a medida y soluciones digitales para negocios.",
  areaServed: {
    "@type": "Country",
    name: "Perú",
  },
  serviceType: [
    "Desarrollo Web",
    "Desarrollo de Software",
    "Aplicaciones Web",
    "Automatización",
    "Inteligencia Artificial",
  ],
};


export const metadata = {
  metadataBase: new URL("https://toledanadev.com"),

  title: {
    default: "ToledanaDev | Desarrollo Web y Software a Medida",
    template: "%s | ToledanaDev",
  },

  description:
    "Desarrollo web, aplicaciones y software a medida para negocios que buscan mejorar su presencia digital, automatizar procesos y crecer con tecnología.",

  keywords: [
    "desarrollo web",
    "desarrollo de software",
    "software a medida",
    "páginas web",
    "aplicaciones web",
    "Next.js",
    "React",
    "inteligencia artificial",
    "automatización",
    "desarrollo web Perú",
    "desarrollo web Lima",
    "soluciones digitales",
  ],

  authors: [
    {
      name: "ToledanaDev",
      url: "https://toledanadev.com",
    },
  ],

  creator: "ToledanaDev",
  publisher: "ToledanaDev",

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

  alternates: {
    canonical: "https://toledanadev.com",
  },

  openGraph: {
    title: "ToledanaDev | Desarrollo Web y Software a Medida",
    description:
      "Creamos sitios web, aplicaciones y soluciones de software a medida para ayudar a los negocios a crecer y mejorar sus procesos.",
    url: "https://toledanadev.com",
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

  twitter: {
    card: "summary_large_image",
    title: "ToledanaDev | Desarrollo Web y Software a Medida",
    description:
      "Desarrollo web, software a medida, aplicaciones y soluciones digitales para negocios.",
    images: ["/branding/toledanadev-og.webp"],
  },

  icons: {
    icon: "/branding/toledana_ico.webp",
    shortcut: "/branding/toledana_ico.webp",
    apple: "/branding/toledana_ico.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={plusJakartaSans.variable}>
      <body className="min-h-screen font-sans antialiased selection:bg-primary/30">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
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