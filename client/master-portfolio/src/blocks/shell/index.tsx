import { iceland } from "@/lib/fonts";
import { responseMap } from "@/lib/response.map";
import ResponseHistory, { HistoryItem } from "../history";
import { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from "react";

const InteractiveShell: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const shellContainerRef = useRef<HTMLDivElement>(null);

  const [prompt, setPrompt] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handlePrompt = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || isAnimating) return;
    const cmd = prompt.trim().toLowerCase();
    if (!cmd) return;

    const RespComp = responseMap[cmd];
    const responseElement = RespComp ? (
      <RespComp command={cmd} />
    ) : (
      <p>Command not found: &quot;{cmd}&quot;</p>
    );

    setHistory((h) => [...h, { command: cmd, response: responseElement }]);
    setPrompt("");
    setIsAnimating(true); // Hide input during animation
  };

  // Auto-scroll to keep input field visible when history updates
  useEffect(() => {
    const terminalContainer = document.getElementById("terminal-shell");
    if (terminalContainer && inputRef.current) {
      // Scroll to bottom of terminal container smoothly
      setTimeout(() => {
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
      }, 100);
    }
  }, [history]);

  // Auto-scroll during typewriter animations and track when they complete
  useEffect(() => {
    const terminalContainer = document.getElementById("terminal-shell");
    if (!terminalContainer || !shellContainerRef.current) return;

    const container = shellContainerRef.current;
    let animationFrame: number;
    let isScrolling = false;

    const scrollToBottom = () => {
      if (!isScrolling) return;
      terminalContainer.scrollTop = terminalContainer.scrollHeight;
      animationFrame = requestAnimationFrame(scrollToBottom);
    };

    // Find all typewriter elements
    const typewriterElements = container.querySelectorAll(
      ".typewriter, .typewriter-fast, .typewriter-slow, .typewriter-fade, .typewriter-clean, .typewriter-sequential",
    );

    if (typewriterElements.length > 0) {
      isScrolling = true;
      animationFrame = requestAnimationFrame(scrollToBottom);

      // Calculate maximum animation duration based on the slowest animation + delays
      let maxDuration = 0;
      typewriterElements.forEach((element) => {
        let baseDuration = 0;
        let animationDelay = 0;

        // Get base animation duration
        if (element.classList.contains("typewriter-fast")) {
          baseDuration = 2000;
        } else if (element.classList.contains("typewriter-slow")) {
          baseDuration = 6000;
        } else if (element.classList.contains("typewriter-fade")) {
          baseDuration = 4000;
        } else if (
          element.classList.contains("typewriter-clean") ||
          element.classList.contains("typewriter-sequential")
        ) {
          baseDuration = 4000;
        } else {
          baseDuration = 4000; // default typewriter
        }

        // Get animation delay from inline style
        const style = window.getComputedStyle(element);
        const delayString = style.animationDelay;
        if (delayString && delayString !== "0s") {
          animationDelay = parseFloat(delayString) * 1000; // convert to milliseconds
        }

        // Total duration is base duration + delay
        const totalDuration = baseDuration + animationDelay;
        maxDuration = Math.max(maxDuration, totalDuration) - 2000;
      });

      // Stop scrolling and show input after all animations complete + delay
      const timeout = setTimeout(() => {
        isScrolling = false;
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        // Final scroll to ensure input is visible
        terminalContainer.scrollTop = terminalContainer.scrollHeight;

        // Show input after additional delay (equivalent to typewriter-delay-4: 2s)
        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }, maxDuration); // Add 500ms buffer
      console.log(maxDuration, "--md");
      return () => {
        isScrolling = false;
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        clearTimeout(timeout);
      };
    } else if (isAnimating) {
      // No typewriter animations found, show input immediately after delay
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // typewriter-delay-4 equivalent

      return () => clearTimeout(timeout);
    }
  }, [history, isAnimating]);

  return (
    <div ref={shellContainerRef}>
      {/* intro text */}
      <div className={`${iceland.className}`}>
        <div className="flex items-center">
          <p className=" text-blue-700 dark:text-amber-500 text-xl mr-7">
            soikat@Soikatdotcom %
          </p>
          <p className="italic text-xl text-rose-600 dark:text-lime-500">
            welcome
          </p>
        </div>
        <p className="text-xl text-black dark:text-white pl-4">
          Hi, I&apos;m Soikat Chakrabarty, a Software Engineer
        </p>
        <p className="text-xl text-black dark:text-white pl-4">
          Type <strong>&apos;controls&apos;</strong> to familiarize yourself
          with the commands
        </p>
      </div>

      {/* response history */}
      <ResponseHistory history={history} />

      {/* interactive input - only show when not animating */}
      {!isAnimating && (
        <div className={`${iceland.className} mt-2 flex items-center`}>
          <p className="text-blue-700 dark:text-amber-500 text-xl mr-5">
            soikat@Soikatdotcom %
          </p>
          <input
            autoFocus
            type="text"
            value={prompt}
            ref={inputRef}
            onChange={handlePrompt}
            onKeyDown={handleKeyDown}
            onBlur={() => inputRef.current?.focus()}
            placeholder="what would you like to know?"
            className="w-96 italic text-xl text-rose-600 dark:text-lime-500 border-0 p-2 outline-none focus:ring-0 focus:border-0 bg-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default InteractiveShell;
