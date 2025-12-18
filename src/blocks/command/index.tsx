import { iceland } from "@/lib/fonts";
import { commands } from "@/lib/prompts";
import { useBackground } from "@/src/components/theme/bgtheme";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";

interface CommandsProps {
  setPrompt: Dispatch<SetStateAction<string>>;
}

const Commands: React.FC<CommandsProps> = ({ setPrompt }) => {
  const { theme } = useTheme();
  const { background } = useBackground();

  const isLumenText = theme === "dark" ? "text-zinc-600" : "text-zinc-400";
  const isEtherText = theme === "dark" ? "text-amber-500" : "text-neutral-500";

  return (
    <div>
      {commands.map((cmd, idx) => (
        <p
          key={idx}
          onClick={() => setPrompt(cmd.key)}
          className={`${iceland.className} ${background === "lumen" ? isLumenText : isEtherText} text-xl hover:cursor-pointer hover:underline hover:underline-offset-4`}
        >
          {cmd.key}
        </p>
      ))}
    </div>
  );
};

export default Commands;
