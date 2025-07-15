"use client";
import { useTheme } from "next-themes";
import GradientText from "@/src/components/reactbits/TextAnimations/GradientText/GradientText";
import ScrambledText from "@/src/components/reactbits/TextAnimations/ScrambledText/ScrambledText";

const Identity: React.FC = () => {
  const { theme } = useTheme();
  const quoteGradient =
    theme === "dark"
      ? ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]
      : ["#FFD700", "#c2410c", "#FFD700", "#c2410c", "#FFD700"];
  return (
    <div className="mt-10 p-10 w-7/12 ml-auto rounded-4xl flex flex-col items-center bg-white dark:bg-black">
      <ScrambledText
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".:"}
        margin="0px"
      >
        I’m a frontend-focused developer with a backend brain. I’ve worked with
        teams across time zones, shipped products at scale, and built systems
        that balance performance with maintainability. I care about doing things
        right — especially when no one’s watching.
      </ScrambledText>
      <GradientText
        colors={quoteGradient}
        animationSpeed={5}
        showBorder={false}
        className="mt-5 pointer-events-none"
      >
        I&apos;m not a great programmer, I&apos;m just a good programmer with
        great habits - Kent Beck.
      </GradientText>
    </div>
  );
};

export default Identity;
