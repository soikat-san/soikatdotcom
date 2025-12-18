import { sora } from "@/lib/fonts";
import Link from "next/link";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const DossierResponse: React.FC<ResponseComponentProps> = ({
  onAnimationComplete,
}) => {
  const codex = `Check out my resume:`;
  return (
    <div className={`flex flex-row`}>
      <TypewriterMultiline
        text={codex}
        startDelay={0}
        onComplete={onAnimationComplete}
        className={`${sora.className} text-sm py-2 text-black dark:text-white`}
      />
      <Link
        target="_blank"
        rel="noopener noreferer"
        href={"https://flowcv.com/resume/4eiekqpgt8qh"}
      >
        <p className="text-xl mt-1 pl-2 dark:text-yellow-50 text-fuchsia-500 underline underline-offset-2">
          here
        </p>
      </Link>
    </div>
  );
};

export default DossierResponse;
