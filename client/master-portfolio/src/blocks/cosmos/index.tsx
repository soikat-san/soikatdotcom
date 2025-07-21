import React from "react";
import Galaxy from "@/src/components/reactbits/Backgrounds/Galaxy/Galaxy";

interface CosmicBackgroundProps {
  children: React.ReactNode;
}

const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen py-2 px-4">
      <div className="fixed inset-0 w-full h-full z-0">
        <Galaxy
          density={3}
          hueShift={0}
          saturation={0}
          starSpeed={0.1}
          glowIntensity={0.2}
          rotationSpeed={0.1}
          twinkleIntensity={0}
          repulsionStrength={5}
          mouseRepulsion={true}
          mouseInteraction={true}
        />
      </div>

      <div className="relative z-10 rounded-4xl min-h-screen">{children}</div>
    </div>
  );
};

export default CosmicBackground;
