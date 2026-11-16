
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61594431353298",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/johanatoledo1990",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@soytoledana?_r=1&_t=ZS-99bm9Lf7LBV",
    icon: FaTiktok,
  },
];

const socialBtnClass =
  "flex items-center justify-center w-9 h-9 rounded-full border-2 bg-transparent border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-primary hover:border-accent dark:hover:border-primary hover:bg-accent/5 dark:hover:bg-primary/5 transition-all duration-300 active:scale-95 transform hover:-translate-y-0.5 shrink-0";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 bg-white/70 px-4 py-12 text-black shadow-inner backdrop-blur-md transition-colors duration-300 md:px-8 dark:border-gray-900 dark:bg-toledana-black/40 dark:text-secundary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Redes sociales */}
        <div className="order-2 flex flex-wrap justify-center gap-4 md:order-1">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar nuestro perfil de ${social.name}`}
                className={socialBtnClass}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            );
          })}
        </div>

        {/* Logo */}
        <div className="order-1 flex shrink-0 select-none items-center md:order-2">
          <Image
            src="/branding/logotoledana.webp"
            alt="Logo ToledanaDev"
            width={180}
            height={45}
            className="h-auto w-40 object-contain brightness-100 transition-transform duration-300 hover:scale-102 sm:w-44 dark:brightness-110"
            loading="lazy"
          />
        </div>
      </div>

      {/* Enlaces legales */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-200/70 pt-6 dark:border-gray-800/70">
        <nav
          aria-label="Información legal"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          <Link
            href="/politica-de-privacidad"
            className="text-xs font-medium text-gray-600 transition-colors hover:text-accent hover:underline hover:underline-offset-4 dark:text-gray-400 dark:hover:text-primary"
          >
            Política de privacidad
          </Link>
        </nav>

        <p className="mt-5 text-center text-xs leading-6 text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} ToledanaDev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
