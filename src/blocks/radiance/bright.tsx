"use client";
import { useTheme } from "next-themes";
import Iridescence from "@/src/components/reactbits/Backgrounds/Iridescence/Iridescence";
import LightPillar from "@/src/components/reactbits/Backgrounds/LightPillar/LightPillar";
import { useBackground } from "@/src/components/theme/bgtheme";

const ControlledBrightness: React.FC = () => {
  const { theme } = useTheme();
  const { background } = useBackground();

  const colorGradient: [number, number, number] =
    theme === "dark" ? [1, 0, 0.5] : [1, 1, 1];

  const topColor: string = theme === "dark" ? "#FF0000" : "#FFFF00";
  const bottomColor: string = theme === "dark" ? "#37FF00" : "#FFF";

  if (background === "ether") {
    return (
      <Iridescence
        color={colorGradient}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
    );
  }

  return (
    <LightPillar
      topColor={topColor}
      bottomColor={bottomColor}
      intensity={1.0}
      rotationSpeed={0.5}
      glowAmount={0.002}
      pillarWidth={3.0}
      pillarHeight={0.4}
      noiseIntensity={0.5}
      pillarRotation={35}
      interactive={false}
      mixBlendMode="screen"
    />
  );
};

export default ControlledBrightness;
