"use client";

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';


export default function Footer() {
   const whatsappNumber = "51932297805"; 
   const mensajeCustom = `¡Hola, ToledanaDev! Estuve viendo su página web y me gustaría recibir información sobre sus soluciones digitales para mi negocio.`
   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeCustom)}`;
   const facebookUrl="https://web.facebook.com/profile.php?id=61594431353298";
   const tiktokUrl="https://www.tiktok.com/@soytoledana?_r=1&_t=ZS-99bm9Lf7LBV";
   const instagramUrl="https://www.instagram.com/johanatoledo1990"
   

  // Array de redes sociales 
  const socialLinks = [
    { name: 'Facebook', href: `${facebookUrl}`, icon: <FaFacebookF size={16} /> },
    { name: 'Instagram', href: `${instagramUrl}`, icon: <FaInstagram size={16} /> },
    { name: 'WhatsApp',  href: `${whatsappUrl}`, icon: <FaWhatsapp size={16} /> },
    { name: 'TikTok', href: `${tiktokUrl}`, icon: <FaTiktok size={16} /> },
  ];

  // Abstracción de clases para los botones circulares de redes sociales 
  const socialBtnClass = "flex items-center justify-center w-9 h-9 rounded-full border-2 bg-transparent border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-primary hover:border-accent dark:hover:border-primary hover:bg-accent/5 dark:hover:bg-primary/5 transition-all duration-300 active:scale-95 transform hover:-translate-y-0.5 shrink-0";

  return (
    <footer className="py-12 px-4 md:px-8 bg-white/70 dark:bg-toledana-black/40 text-black dark:text-secundary mt-12 transition-colors duration-300 backdrop-blur-md border-t border-gray-100 dark:border-gray-900 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LADO IZQUIERDO: Redes Sociales */}
        <div className="flex flex-wrap gap-4 order-2 md:order-1 justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar nuestro perfil de ${social.name}`}
              className={socialBtnClass}
            >
              {social.icon}
            </a>
          ))}
        </div>


     

          {/* LADO DERECHO:  Logo de TonavTech */}
        <div className="order-1 md:order-2 flex items-center select-none shrink-0">
          <Image 
            src="/branding/logotoledana.webp" 
            alt="Logo Toledana"
            width={180} 
            height={45} 
            className="object-contain w-40 sm:w-44 h-auto brightness-100 dark:brightness-110 transition-transform duration-300 hover:scale-102"
            loading="lazy" 
          />
        </div>
        
      </div>
    </footer>
  );
}