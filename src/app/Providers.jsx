"use client";

import React from "react";
import { DarkModeProvider } from "../context/DarkModeContext";

import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const initEngine = async (engine) => {
  await loadSlim(engine);
};

export default function Providers({ children }) {
  return (
    <DarkModeProvider>
      <ParticlesProvider init={initEngine}>
        {children}
      </ParticlesProvider>
    </DarkModeProvider>
  );
}