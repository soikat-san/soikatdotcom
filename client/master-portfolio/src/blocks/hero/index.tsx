import React from "react";
import Iridescence from "@/src/components/reactbits/Backgrounds/Iridescence/Iridescence";

const Hero: React.FC = () => {
  return (
    <div className="rounded-tl-[100px] rounded-br-[100px] w-full h-96 min-h-[600px] overflow-hidden">
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={true}
        amplitude={0.1}
        speed={1.0}
      />
    </div>
  );
};

export default Hero;
