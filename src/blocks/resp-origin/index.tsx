import { sora } from "@/lib/fonts";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const OriginResponse: React.FC<ResponseComponentProps> = ({
  onAnimationComplete,
}) => {
  const words = `
  Origin: Jamshedpur — India’s first engineered city.

  Effect: a lifelong bias for structure, clarity, and systems that endure.

  I later moved to Noida to study Computer Science at Amity University, where that curiosity turned into a passion for clean architecture, scalable engineering, and building products with intent.
  `;

  return (
    <div className={`flex flex-col`}>
      <TypewriterMultiline
        text={words}
        startDelay={0}
        onComplete={onAnimationComplete}
        className={`${sora.className} text-sm py-2 text-black dark:text-white`}
      />
    </div>
  );
};

export default OriginResponse;
