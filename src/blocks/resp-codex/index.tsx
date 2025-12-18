import { sora } from "@/lib/fonts";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const CodexResponse: React.FC<ResponseComponentProps> = ({
  onAnimationComplete,
}) => {
  const codex = `Hi, I'm Soikat Chakrabarty, a Software React & React Native Engineer.`;
  return (
    <div className={`flex flex-col`}>
      <TypewriterMultiline
        text={codex}
        startDelay={0}
        onComplete={onAnimationComplete}
        className={`${sora.className} text-sm py-2 text-black dark:text-white`}
      />
    </div>
  );
};

export default CodexResponse;
