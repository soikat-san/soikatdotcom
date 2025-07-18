import Commands from "../command";
import { iceland } from "@/lib/fonts";
import Timestamp from "@/src/blocks/timestamp";

const InteractiveTerminal: React.FC = () => {
  return (
    <div className="mt-10 w-full">
      <p
        className={`${iceland.className} py-1 text-2xl text-blue-700 dark:text-amber-500`}
      >
        soikat.sh
      </p>
      <div className="border border-blue-700 dark:border-amber-500" />
      <div className="py-2 h-[400px] grid grid-cols-12">
        <div className="col-span-4 border border-t-0 border-b-0 border-l-0 border-r-2 border-r-blue-700 dark:border-r-amber-500">
          <Commands />
        </div>
        <div className="pl-5 col-span-8 text-blue-700 dark:text-amber-500">
          TERMINAL
        </div>
      </div>
      <div className="border border-blue-700 dark:border-amber-500" />
      <Timestamp />
    </div>
  );
};

export default InteractiveTerminal;
