import Link from "next/link";
import { sora } from "@/lib/fonts";
import { useState, useEffect } from "react";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const CampaignResponse: React.FC<ResponseComponentProps> = ({
  onAnimationComplete,
}) => {
  const pitch =
    "Over the years, I’ve contributed to high-scale platforms, led key initiatives, and delivered mission-critical features across web and mobile. Here’s a breakdown of the impact I’ve created along the way.";
  const link = "See the full timeline of my experience.";

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
        <Link href={"/timeline"}>
          <TypewriterMultiline
            text={link}
            startDelay={0}
            onComplete={() => setLikComplete(true)}
            className={`${sora.className} text-sm underline underline-offset-2 py-2 text-fuchsia-500 dark:text-yellow-50`}
          />
        </Link>
      )}
    </div>
  );
};

export default CampaignResponse;
