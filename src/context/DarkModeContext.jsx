"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext(null);

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }

    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error(
      "useDarkMode debe utilizarse dentro de un DarkModeProvider"
    );
  }

  return context;
}