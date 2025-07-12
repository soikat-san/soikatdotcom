"use client";
import { useTheme } from "next-themes";
import Iridescence from "@/src/components/reactbits/Backgrounds/Iridescence/Iridescence";

const ControlledBrightness: React.FC = () => {
  const { theme } = useTheme();
  const colorGradient: [number, number, number] =
    theme === "dark" ? [1, 0, 0] : [0, 1, 1];
  return (
    <Iridescence
      color={colorGradient}
      mouseReact={true}
      amplitude={0.1}
      speed={1.0}
    />
  );
};

export default ControlledBrightness;
