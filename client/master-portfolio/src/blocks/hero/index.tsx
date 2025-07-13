"use client";
import React from "react";
import { useTheme } from "next-themes";
import ShinyText from "@/src/components/reactbits/TextAnimations/ShinyText/ShinyText";
import TextPressure from "@/src/components/reactbits/TextAnimations/TextPressure/TextPressure";
import GradientText from "@/src/components/reactbits/TextAnimations/GradientText/GradientText";

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "#FFF" : "#000";
  const textBorderColor = theme === "dark" ? "#1105F5" : "#FFD700";
  const quoteGradient =
    theme === "dark"
      ? ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]
      : ["#FFD700", "#c2410c", "#FFD700", "#c2410c", "#FFD700"];

  return (
    <div className="p-10 w-11/12 h-auto bg-white dark:bg-black rounded-4xl pointer-events-none">
      <ShinyText
        text="Hello, I'm,"
        disabled={false}
        speed={5}
        className="text-4xl mb-4"
      />
      <div className="relative h-[450px]">
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
          minFontSize={36}
        />
      </div>
      <div className="mt-4 text-right">
        <ShinyText
          text="- Full-Stack Developer. I ship pixels that perform."
          disabled={false}
          speed={5}
          className="text-2xl"
        />
        <GradientText
          colors={quoteGradient}
          animationSpeed={5}
          showBorder={false}
          className="!mx-0 !ml-auto !justify-end"
        >
          I&apos;m not a great programmer; I&apos;m just a good programmer with
          great habits - Kent Beck.
        </GradientText>
      </div>
    </div>
  );
};

export default Hero;
