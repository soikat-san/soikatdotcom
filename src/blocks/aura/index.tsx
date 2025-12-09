import React from "react";
import LightRays from "@/src/components/reactbits/Backgrounds/LightRays/LightRays";

interface AuricBackgroundProps {
  children: React.ReactNode;
}

const AuricBackground: React.FC<AuricBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen py-2 px-4">
      <div className="fixed inset-0 z-0 flex justify-center">
        <div className="w-full max-w-[1920px] h-full">
          <LightRays
            raysSpeed={1}
            saturation={2}
            distortion={0}
            rayLength={1.2}
            fadeDistance={2}
            noiseAmount={0.1}
            lightSpread={1.5}
            raysColor={"FFF"}
            followMouse={true}
            mouseInfluence={0.1}
            raysOrigin="top-center"
          />
        </div>
      </div>

      <div className="relative z-10 rounded-4xl min-h-screen">{children}</div>
    </div>
  );
};

export default AuricBackground;
