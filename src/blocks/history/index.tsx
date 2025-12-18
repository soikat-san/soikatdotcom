import { iceland } from "@/lib/fonts";
import { useBackground } from "@/src/components/theme/bgtheme";
import { useTheme } from "next-themes";

export interface HistoryItem {
  id: string;
  command: string;
  response: React.ReactNode;
}

interface ResponseHistoryProps {
  history: HistoryItem[];
}
const ResponseHistory: React.FC<ResponseHistoryProps> = ({ history }) => {
  if (!history.length) return null;
  const { theme } = useTheme();
  const { background } = useBackground();

  const isLumenShell = theme === "dark" ? "text-zinc-600" : "text-zinc-400";
  const isEtherShell = theme === "dark" ? "text-amber-500" : "text-neutral-500";
  const shellColor = background === "lumen" ? isLumenShell : isEtherShell;

  return (
    <div
      className={`mt-2 space-y-4 overflow-auto min-[550px]:max-h-[400px] ${iceland.className}`}
    >
      {history.map((item) => (
        <div key={item.id}>
          {/* echo the prompt */}
          <div className={`${iceland.className} flex items-center`}>
            <p className={`${shellColor} text-xl mr-7`}>soikat@shell~%</p>
            <p className="italic text-xl text-yellow-800 dark:text-lime-500">
              {item.command}
            </p>
          </div>
          {/* render the response component */}
          <div className="pl-2 min-[550px]:pl-4">{item.response}</div>
        </div>
      ))}
    </div>
  );
};

export default ResponseHistory;
