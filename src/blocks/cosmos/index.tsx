import React from "react";
import Galaxy from "@/src/components/reactbits/Backgrounds/Galaxy/Galaxy";

interface CosmicBackgroundProps {
  children: React.ReactNode;
}

const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen py-2 px-4">
      <div className="fixed inset-0 z-0 flex justify-center">
        <div className="w-full max-w-[1920px] h-full">
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
      </div>

      <div className="relative z-10 rounded-4xl min-h-screen">{children}</div>
    </div>
  );
};

export default CosmicBackground;
