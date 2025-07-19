import { sora } from "@/lib/fonts";
import { commands } from "@/lib/prompts";

const ControlsResponse: React.FC = () => {
  return (
    <div className={`${sora.className} flex flex-col`}>
      <p
        style={{ animationDelay: "0s" }}
        className="text-xl py-2  text-black dark:text-white typewriter-sequential"
      >
        Available commands are as follows:
      </p>
      <div className="grid grid-cols-12">
        {commands.map((cmd, idx) => (
          <div key={idx} className="col-span-6 flex items-center pb-2">
            <div
              className="w-2 h-2 rounded-full bg-black dark:bg-white mr-2 bullet-fade-in"
              style={{ animationDelay: `${1 + idx * 0.3}s` }}
            />
            <p
              style={{ animationDelay: `${1 + idx * 0.3}s` }}
              className="text-sm  text-black dark:text-white typewriter-sequential"
            >
              {`${cmd.key} (${cmd.value})`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlsResponse;
