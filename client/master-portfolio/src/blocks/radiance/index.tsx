import React from "react";
import Iridescence from "@/src/components/reactbits/Backgrounds/Iridescence/Iridescence";

interface RadiantBackgroundProps {
  children: React.ReactNode;
}

const RadiantBackground: React.FC<RadiantBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full z-0">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default RadiantBackground;
