import React from 'react';
import Hero from '../components/Hero';
import DynamicDescription from '../components/DynamicDescription'; 
import Services from '../components/Services';
import Projects from '../components/Projects';


export default function HomePage() {
  return (
    <>
      <Hero />
      <DynamicDescription />
      <Services />
      <Projects />
      
    </>
  );
}