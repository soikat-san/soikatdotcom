import Commands from "../command";
import { iceland } from "@/lib/fonts";
import InteractiveShell from "../shell";
import Timestamp from "@/src/blocks/timestamp";

const InteractiveTerminal: React.FC = () => {
  return (
    <div className="mt-5 w-full">
      <p
        className={`${iceland.className} py-1 text-2xl text-blue-700 dark:text-amber-500`}
      >
        soikat.sh
      </p>
      <div className="border border-blue-700 dark:border-amber-500" />
      <div className="py-2 grid grid-cols-12 min-[700px]:h-[calc(70dvh-250px)]  min-[550px]:h-[calc(70dvh-200px)] h-[calc(100dvh-250px)]">
        <div className="hidden min-[1050px]:block col-span-1 overflow-scroll border-b-0 border-r-2 border-blue-700 dark:border-amber-500">
          <Commands />
        </div>
        {/* h-[calc(75vh-110px)] */}
        <div
          className="min-[1050px]:pl-5 col-span-12 min-[1050px]:col-span-11 overflow-scroll scrollbar-hide min-[550px]:max-h-[400px]"
          id="terminal-shell"
        >
          <InteractiveShell />
        </div>
      </div>
      <div className="border border-blue-700 dark:border-amber-500" />
      <Timestamp />
    </div>
  );
};

export default InteractiveTerminal;
