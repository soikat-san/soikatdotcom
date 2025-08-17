import Link from "next/link";
import { sora } from "@/lib/fonts";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const CallsignResponse: React.FC<ResponseComponentProps> = () => {
  return (
    <div className={`${sora.className} flex flex-col`}>
      <TypewriterMultiline
        text={
          "Let’s connect — I’m always open to meaningful projects, collaborations, or a quick hello."
        }
        startDelay={0}
        className={`text-sm py-2 text-black dark:text-white`}
      />

      <div className="flex items-center">
        <div
          className="w-2 h-2 rounded-full bg-black dark:bg-white mr-2 bullet-fade-in"
          style={{ animationDelay: `1s` }}
        />
        <p
          style={{ animationDelay: "1.5s" }}
          className="text-sm py-2  text-black dark:text-white typewriter-sequential"
        >
          Linkedin:
        </p>
        <Link
          target="_blank"
          rel="noopener noreferer"
          style={{ animationDelay: "2s" }}
          href={`https://www.linkedin.com/in/soikat11/`}
          className="pl-5 underline underline-offset-2 text-sm py-2  text-fuchsia-500 typewriter-sequential"
        >
          /in/soikat11
        </Link>
      </div>
      <div className="flex items-center">
        <div
          className="w-2 h-2 rounded-full bg-black dark:bg-white mr-2 bullet-fade-in"
          style={{ animationDelay: `2.75s` }}
        />
        <p
          style={{ animationDelay: "3s" }}
          className="text-sm py-2  text-black dark:text-white typewriter-sequential"
        >
          Github:
        </p>
        <Link
          target="_blank"
          rel="noopener noreferer"
          style={{ animationDelay: "3.25s" }}
          href={`https://github.com/soikat-san`}
          className="pl-7 underline underline-offset-2 text-sm py-2  text-fuchsia-500 typewriter-sequential"
        >
          @soikat-san
        </Link>
      </div>
      <div className="flex items-center">
        <div
          className="w-2 h-2 rounded-full bg-black dark:bg-white mr-2 bullet-fade-in"
          style={{ animationDelay: `3.5s` }}
        />
        <p
          style={{ animationDelay: "3.75s" }}
          className="text-sm py-2  text-black dark:text-white typewriter-sequential"
        >
          Email:
        </p>
        <p
          style={{ animationDelay: "4s" }}
          className="pl-10 underline underline-offset-2 text-sm py-2  text-fuchsia-500 typewriter-sequential"
        >
          {/* TODO - add a domain email */}
          {/* TODO - add copy to clipboard */}
          soikat.codes@gmail.com
        </p>
      </div>
    </div>
  );
};

export default CallsignResponse;
