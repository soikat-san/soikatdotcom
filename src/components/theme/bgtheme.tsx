"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type BackgroundVariant = "ether" | "lumen";

interface BackgroundContextValue {
  background: BackgroundVariant;
  setBackground: (bg: BackgroundVariant) => void;
  toggleBackground: () => void;
}

const BackgroundContext = createContext<BackgroundContextValue | null>(null);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState<BackgroundVariant>("ether");

  const toggleBackground = useCallback(() => {
    setBackground((prev) => (prev === "ether" ? "lumen" : "ether"));
  }, []);

  return (
    <BackgroundContext.Provider
      value={{ background, setBackground, toggleBackground }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const ctx = useContext(BackgroundContext);
  if (!ctx) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }
  return ctx;
};
