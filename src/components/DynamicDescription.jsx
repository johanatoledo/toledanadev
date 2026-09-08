"use client"; 

import React from 'react';
import dynamic from 'next/dynamic';


const DescriptionCarousel = dynamic(() => import('./Description'), {
  ssr: false,
  loading: () => <div className="py-24 bg-transparent min-h-80" />
});

export default function DynamicDescription() {
  return <DescriptionCarousel />;
}