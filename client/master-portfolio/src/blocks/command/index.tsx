import { iceland } from "@/lib/fonts";
import { commands } from "@/lib/prompts";

const Commands: React.FC = () => {
  return (
    <div>
      {commands.map((cmd, idx) => (
        <p
          key={idx}
          className={`${iceland.className} text-blue-700 dark:text-amber-500 hover:cursor-pointer hover:underline hover:underline-offset-4`}
        >
          {cmd.key}
        </p>
      ))}
    </div>
  );
};

export default Commands;
