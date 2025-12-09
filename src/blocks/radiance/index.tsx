import React from "react";
import ControlledBrightness from "./bright";

interface RadiantBackgroundProps {
  children: React.ReactNode;
}

const RadiantBackground: React.FC<RadiantBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen py-2 px-4">
      <div className="fixed inset-0 z-0 flex justify-center">
        <div className="w-full max-w-[1920px] h-full">
          <ControlledBrightness />
        </div>
      </div>

      <div className="relative z-10 rounded-4xl min-h-screen">{children}</div>
    </div>
  );
};

export default RadiantBackground;
