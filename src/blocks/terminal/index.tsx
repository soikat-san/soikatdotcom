import { useState } from "react";
import Commands from "../command";
import { iceland } from "@/lib/fonts";
import InteractiveShell from "../shell";
import Timestamp from "@/src/blocks/timestamp";
import { useTheme } from "next-themes";
import { useBackground } from "@/src/components/theme/bgtheme";

const InteractiveTerminal: React.FC = () => {
  const { theme } = useTheme();
  const { background } = useBackground();

  const isLumenText = theme === "dark" ? "text-zinc-600" : "text-zinc-400";
  const isEtherText = theme === "dark" ? "text-amber-500" : "text-neutral-500";
  const isLumenBorder =
    theme === "dark" ? "border-zinc-600" : "border-zinc-400";
  const isEtherBorder =
    theme === "dark" ? "border-amber-500" : "border-neutral-500";
  const borderColor = background === "lumen" ? isLumenBorder : isEtherBorder;

  const [prompt, setPrompt] = useState("");

  return (
    <div className="mt-5 w-full">
      <p
        className={`${iceland.className} py-1 text-2xl ${background === "lumen" ? isLumenText : isEtherText}`}
      >
        soikat.sh
      </p>
      <div className={`${borderColor} border`} />
      <div className="py-2 grid grid-cols-12 min-[700px]:h-[calc(70dvh-250px)]  min-[550px]:h-[calc(70dvh-200px)] h-[calc(100dvh-250px)]">
        <div
          className={`hidden min-[1050px]:block col-span-1 overflow-scroll border-b-0 border-r-2 ${borderColor}`}
        >
          <Commands setPrompt={setPrompt} />
        </div>
        {/* h-[calc(75vh-110px)] */}
        <div
          className="min-[1050px]:pl-5 col-span-12 min-[1050px]:col-span-11 overflow-y-scroll scrollbar-hide min-[550px]:max-h-[400px]"
          id="terminal-shell"
        >
          <InteractiveShell prompt={prompt} setPrompt={setPrompt} />
        </div>
      </div>
      <div className={`border ${borderColor}`} />
      <Timestamp />
    </div>
  );
};

export default InteractiveTerminal;
