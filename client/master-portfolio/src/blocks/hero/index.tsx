"use client";
import { useTheme } from "next-themes";
import InteractiveTerminal from "../terminal";
import React, { useEffect, useState } from "react";
import ShinyText from "@/src/components/reactbits/TextAnimations/ShinyText/ShinyText";
import TextPressure from "@/src/components/reactbits/TextAnimations/TextPressure/TextPressure";

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "#FFF" : "#000";
  const textBorderColor = theme === "dark" ? "#1d4ed8" : "#FFD700";

  // Responsive font dimensions based on screen width
  const [fontDimensions, setFontDimensions] = useState({
    size: 64,
    ltrspace: 3,
  });

  useEffect(() => {
    const updateFontDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setFontDimensions({ size: 250, ltrspace: 1 });
      } else {
        setFontDimensions({ size: 300, ltrspace: 20 });
      }
    };

    updateFontDimensions();
    window.addEventListener("resize", updateFontDimensions);
    return () => window.removeEventListener("resize", updateFontDimensions);
  }, []);

  return (
    <div className="p-5 w-full h-auto bg-white/50 dark:bg-black/50 rounded-xl select-none">
      <div className="min-[550px]:block hidden">
        <ShinyText
          speed={5}
          text="Hi, I'm..."
          disabled={false}
          className="text-4xl mb-4 font-extrabold"
        />
      </div>

      <div
        className={`relative h-[${fontDimensions.size}px] -mt-10 -ml-2 min-[550px]:block hidden`}
      >
        <TextPressure
          text="Soikat"
          flex={true}
          alpha={false}
          stroke={true}
          width={true}
          weight={true}
          italic={true}
          strokeWidth={4}
          textColor={textColor}
          strokeColor={textBorderColor}
          fixedFontSize={fontDimensions.size}
          letterSpacing={fontDimensions.ltrspace}
        />
      </div>

      <div className="min-[550px]:hidden">
        <ShinyText
          speed={5}
          text="soikat-san"
          disabled={false}
          className="text-2xl font-extrabold"
        />
      </div>
      <InteractiveTerminal />
    </div>
  );
};

export default Hero;
