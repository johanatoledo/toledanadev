"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext";

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

  const navLinks = [
    { name: "Inicio", href: "/#home" },
    { name: "Servicios", href: "/#services" },
  
  ];

  const controlBtnClass =
    "p-2 rounded-full bg-transparent text-accent dark:text-primary border-2 border-accent dark:border-primary hover:bg-accent/10 dark:hover:bg-primary/10 transition-all duration-200 active:scale-95 shrink-0";

  return (
    <>
      {/* Navbar principal */}
    <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 sm:px-6 py-1.5 bg-toledana-white/80 dark:bg-toledana-black/10 text-black dark:text-secundary transition-colors duration-300 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 shadow-sm">

  {/* Logo */}
  <Link
    href="/#home"
    className="flex items-center select-none group focus:outline-none shrink-0"
  >
    <Image
      src="/branding/logotoledana.webp"
      alt="ToledanaDev"
      width={160}
      height={48}
      className="object-contain w-28 sm:w-32 md:w-36 h-auto transition-transform duration-300 group-hover:scale-102 brightness-100 dark:brightness-110"
      priority
    />
  </Link>

        {/* Menú de navegación y controles */}
        <div className="flex items-center gap-3 md:gap-6">

          {/* Enlaces de escritorio */}
          <ul className="hidden md:flex gap-6 text-sm sm:text-base items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-accent dark:hover:text-primary transition-colors duration-200 text-gray-700 dark:text-gray-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controles */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Dark Mode */}
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

            {/* Menú móvil */}
            <button
              type="button"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              className={`${controlBtnClass} flex flex-col justify-center items-center border-none w-9 h-9 md:hidden space-y-1 z-50`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`block h-0.5 w-4 bg-accent dark:bg-primary transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-4 bg-accent dark:bg-primary transition duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-4 bg-accent dark:bg-primary transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

          </div>
        </div>
      </nav>

      {/* Menú lateral móvil */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] max-w-75 bg-white/95 dark:bg-background/95 backdrop-blur-lg z-40 border-l border-gray-200 dark:border-gray-900 p-6 pt-24 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="border-b border-gray-100 dark:border-gray-900 pb-3"
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-accent dark:hover:text-primary transition-colors duration-200 text-gray-800 dark:text-gray-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-xs text-gray-400 dark:text-gray-600 font-medium tracking-widest uppercase">
          © ToledanaDev 2026
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}