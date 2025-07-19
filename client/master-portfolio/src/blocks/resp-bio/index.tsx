import { sora } from "@/lib/fonts";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";
import { useState, useEffect } from "react";

interface BioResponseProps {
  onAnimationComplete?: () => void;
}

const BioResponse: React.FC<BioResponseProps> = ({ onAnimationComplete }) => {
  const bio = `I'm a frontend-focused developer with a backend brain. I've worked with teams across time zones, shipped products at scale, and built systems that balance performance with maintainability. I care about doing things right — especially when no one's watching.`;
  const quote = `I'm not a great programmer, I'm just a good programmer with great habits - Kent Beck.`;

  const [bioComplete, setBioComplete] = useState(false);
  const [quoteComplete, setQuoteComplete] = useState(false);

  // Notify parent when both animations are complete
  useEffect(() => {
    if (bioComplete && quoteComplete) {
      onAnimationComplete?.();
    }
  }, [bioComplete, quoteComplete, onAnimationComplete]);

  return (
    <div className={`flex flex-col`}>
      <TypewriterMultiline
        text={bio}
        speed={25}
        startDelay={0}
        onComplete={() => setBioComplete(true)}
        className={`${sora.className} text-sm py-2 text-black dark:text-white`}
      />
      {bioComplete && (
        <TypewriterMultiline
          text={quote}
          speed={25}
          startDelay={0}
          onComplete={() => setQuoteComplete(true)}
          className={`${sora.className} text-sm py-2 text-black dark:text-white`}
        />
      )}
    </div>
  );
};

export default BioResponse;
