import { sora } from "@/lib/fonts";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const OriginResponse: React.FC<ResponseComponentProps> = ({
  onAnimationComplete,
}) => {
  const words = `I was born in Jamshedpur — India’s first planned industrial city. Unlike
  chaotic metros, Jamshedpur has structure, self-sufficiency, and
  purpose-built systems — values that quietly shaped how I think about
  engineering. It’s a city that taught me discipline, grit, and the
  importance of building things that last. I did my schooling there before
  moving to Noida to pursue a B.Tech in Computer Science & Engineering at Amity
  University, where I discovered my passion for clean code, scalable
  systems, and thoughtful product development.`;
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
