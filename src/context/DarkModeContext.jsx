
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DarkModeContext = createContext(null);

const STORAGE_KEY = "darkMode";

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [initialized, setInitialized] = useState(false);

  
  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY);

      setDarkMode(savedTheme !== "false");
    } catch (error) {
      console.warn(
        "No se pudo recuperar la preferencia de apariencia.",
        error
      );
    } finally {
      setInitialized(true);
    }
  }, []);

  
  useEffect(() => {
    if (!initialized) return;

    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode
      ? "dark"
      : "light";

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        String(darkMode)
      );
    } catch (error) {
      console.warn(
        "No se pudo guardar la preferencia de apariencia.",
        error
      );
    }
  }, [darkMode, initialized]);

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
