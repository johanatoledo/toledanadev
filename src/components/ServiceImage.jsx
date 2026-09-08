import React from "react";
import Image from "next/image"; 

/**
 * Image component for service images optimized for Next.js
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for the image
 * @param {string} className - Optional Tailwind classes (se aplican al contenedor padre)
 */
const ServiceImage = ({ src, alt, className = "w-20 h-20 mx-auto mb-4" }) => {
  return (
    
    <div className={`relative ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill
        sizes="(max-width: 768px) 5rem, 5rem" 
        className="object-contain" 
        loading="lazy" 
      />
    </div>
  );
};

export default ServiceImage;