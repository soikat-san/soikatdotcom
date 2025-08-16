import { iceland } from "@/lib/fonts";

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

  return (
    <div
      className={`mt-2 space-y-4 overflow-auto min-[550px]:max-h-[400px] ${iceland.className}`}
    >
      {history.map((item) => (
        <div key={item.id}>
          {/* echo the prompt */}
          <div className={`${iceland.className} flex items-center`}>
            <p className="text-blue-700 dark:text-amber-500 text-xl mr-7">
              soikat@shell~%
            </p>
            <p className="italic text-xl text-rose-600 dark:text-lime-500">
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
