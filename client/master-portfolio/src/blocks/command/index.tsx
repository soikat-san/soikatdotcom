import { iceland } from "@/lib/fonts";
import { useTheme } from "next-themes";
import { commands } from "@/lib/prompts";
import ClickSpark from "@/src/components/reactbits/Animations/ClickSpark/ClickSpark";
import StarBorder from "@/src/components/reactbits/Animations/StarBorder/StarBorder";

const Commands: React.FC = () => {
  const { theme } = useTheme();
  const starShade = theme === "dark" ? "cyan" : "magenta";
  return (
    <div>
      <p
        className={`text-2xl text-blue-700 dark:text-amber-500 ${iceland.className}`}
      >
        Welcome to my Interactive AI Terminal !!
      </p>
      <div className="grid grid-cols-12 pt-5">
        {commands.map((cmd, idx) => (
          <div key={idx} className="col-span-3 py-4">
            <ClickSpark
              sparkSize={10}
              sparkCount={8}
              duration={400}
              sparkRadius={15}
              sparkColor={"#fff"}
            >
              <StarBorder
                speed="5s"
                as="button"
                color={starShade}
                className="w-30 cursor-pointer rounded-xl"
              >
                {cmd.key}
              </StarBorder>
            </ClickSpark>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commands;
