"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Orb from "@/src/components/reactbits/Backgrounds/Orb/Orb";

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const hueShift = theme === "dark" ? 0 : 180;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="w-[100px] h-[100px] flex items-center justify-center cursor-pointer"
      onClick={toggleTheme}
    >
      <Orb
        hue={hueShift}
        hoverIntensity={0.5}
        rotateOnHover={true}
        forceHoverState={false}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        {theme === "dark" ? (
          <Sun className="w-10 h-10 text-yellow-300" />
        ) : (
          <Moon className="w-10 h-10 text-black" />
        )}
      </div>
    </div>
  );
};

export default Toggle;
