import Link from "next/link";
import { sora } from "@/lib/fonts";
import { useState, useEffect } from "react";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const ArsenalResponse: React.FC<ResponseComponentProps> = ({
  onAnimationComplete,
}) => {
  const pitch =
    "Here’s a visual breakdown of the tools, languages, and frameworks I’ve mastered over time. From core frontend technologies to cloud integrations and testing frameworks — this is the evolving stack I use to build, scale, and ship robust web and mobile applications.";
  const link = "Explore the full tech stack here.";

  const [pitchComplete, setPitchComplete] = useState(false);
  const [linkComplete, setLikComplete] = useState(false);

  // Notify parent when both animations are complete
  useEffect(() => {
    if (pitchComplete && linkComplete) {
      onAnimationComplete?.();
    }
  }, [pitchComplete, linkComplete, onAnimationComplete]);

  return (
    <div className={`flex flex-col`}>
      <TypewriterMultiline
        text={pitch}
        startDelay={0}
        onComplete={() => setPitchComplete(true)}
        className={`${sora.className} text-sm py-2 text-black dark:text-white`}
      />
      {pitchComplete && (
        <Link href={"/arsenal"}>
          <TypewriterMultiline
            text={link}
            startDelay={0}
            onComplete={() => setLikComplete(true)}
            className={`${sora.className} text-sm underline underline-offset-2 py-2 text-orange-500 dark:text-blue-500`}
          />
        </Link>
      )}
    </div>
  );
};

export default ArsenalResponse;
