import { sora } from "@/lib/fonts";
import { useState, useEffect } from "react";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const BioResponse: React.FC<ResponseComponentProps> = ({
  onAnimationComplete,
}) => {
  const bio = `I’m a frontend-focused engineer with a backend-level understanding of how systems actually work. I’ve collaborated with teams across time zones, shipped features at scale, and built interfaces that balance performance, clarity, and maintainability. I believe great engineering happens in the details — especially when no one is watching.`;
  const quote = `As Kent Beck said, “I’m not a great programmer; I’m just a good programmer with great habits.” That philosophy shapes how I work every day.`;

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
        startDelay={0}
        onComplete={() => setBioComplete(true)}
        className={`${sora.className} text-sm py-2 text-black dark:text-white`}
      />
      {bioComplete && (
        <TypewriterMultiline
          text={quote}
          startDelay={0}
          onComplete={() => setQuoteComplete(true)}
          className={`${sora.className} text-sm py-2 text-black dark:text-white`}
        />
      )}
    </div>
  );
};

export default BioResponse;
