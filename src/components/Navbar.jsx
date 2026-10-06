"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext";

const navLinks = [
  { name: "Inicio", href: "/",},
  { name: "Servicios", href: "/servicios",},
  { name: "Blog", href: "/blog",},
  { name: "Contacto", href: "/contacto",},
];

export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const controlBtnClass =
    "p-2 rounded-full bg-transparent text-accent dark:text-primary border-2 border-accent dark:border-primary hover:bg-accent/10 dark:hover:bg-primary/10 transition-all duration-200 active:scale-95 shrink-0";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar principal */}
      <nav className="fixed top-0 left-0 z-40 flex w-full items-center justify-between border-b border-gray-100 bg-toledana-white/80 px-4 py-1.5 text-black shadow-sm backdrop-blur-md transition-colors duration-300 sm:px-6 dark:border-gray-900 dark:bg-toledana-black/10 dark:text-secundary">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ir al inicio de ToledanaDev"
          className="group flex shrink-0 items-center select-none focus:outline-none"
        >
          <Image
            src="/branding/logotoledana.webp"
            alt="ToledanaDev"
            width={160}
            height={48}
            className="h-auto w-28 object-contain brightness-100 transition-transform duration-300 group-hover:scale-102 sm:w-32 md:w-36 dark:brightness-110"
            priority
          />
        </Link>

        {/* Navegación y controles */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Navegación desktop */}
          <ul className="hidden items-center gap-6 text-sm sm:text-base md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium text-gray-700 transition-colors duration-200 hover:text-accent dark:text-gray-300 dark:hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controles */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dark mode */}
            <button
              type="button"
              aria-label={
                mounted
                  ? darkMode
                    ? "Cambiar a modo claro"
                    : "Cambiar a modo oscuro"
                  : "Cambiar modo de color"
              }
              className={controlBtnClass}
              onClick={() => setDarkMode(!darkMode)}
            >
              {mounted ? (darkMode ? "🌙" : "☀️") : "☀️"}
            </button>

            {/* Botón menú móvil */}
            <button
              type="button"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={`${controlBtnClass} z-50 flex h-9 w-9 flex-col items-center justify-center space-y-1 border-none md:hidden`}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span
                className={`block h-0.5 w-4 transform bg-accent transition duration-300 ease-in-out dark:bg-primary ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-4 bg-accent transition duration-300 ease-in-out dark:bg-primary ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-4 transform bg-accent transition duration-300 ease-in-out dark:bg-primary ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-navigation"
        className={`fixed top-0 right-0 z-40 flex h-screen w-[80%] max-w-75 flex-col justify-between border-l border-gray-200 bg-toledana-white/60 p-6 pt-24 shadow-2xl backdrop-blur-lg transition-transform duration-300 ease-in-out sm:w-[60%] md:hidden dark:border-gray-900 dark:bg-toledana-black/5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cerrar menú */}
        <button
          type="button"
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 text-gray-600 transition-colors hover:text-accent md:hidden dark:text-gray-300 dark:hover:text-primary"
          aria-label="Cerrar menú"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col gap-6 text-lg font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-gray-100 pb-3 dark:border-accent"
            >
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block text-gray-800 transition-colors duration-200 hover:text-accent dark:text-gray-200 dark:hover:text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-xs font-medium tracking-widest text-gray-400 uppercase dark:text-gray-600">
          © ToledanaDev 2026
        </div>
      </div>

      {/* Overlay móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-xs md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}