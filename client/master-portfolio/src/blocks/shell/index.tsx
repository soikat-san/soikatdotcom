import { iceland, sora } from "@/lib/fonts";
import { responseMap } from "@/lib/response.map";
import ResponseHistory, { HistoryItem } from "../history";
import { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from "react";

const InteractiveShell: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const shellContainerRef = useRef<HTMLDivElement>(null);

  const [prompt, setPrompt] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [useCallbackSystem, setUseCallbackSystem] = useState(false);

  const handlePrompt = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || isAnimating) return;
    if (e.key === "Enter" && prompt === "respawn") {
      setPrompt("");
      setHistory([]);
    } else {
      const cmd = prompt.trim().toLowerCase();
      if (!cmd) return;

      // Commands that use TypewriterMultiline (callback system)
      const callbackCommands = ["bio", "origin"];
      const usesCallback = callbackCommands.includes(cmd);

      const handleAnimationComplete = () => {
        setIsAnimating(false);
      };

      const RespComp = responseMap[cmd];
      const responseElement = RespComp ? (
        <RespComp
          onAnimationComplete={
            usesCallback ? handleAnimationComplete : undefined
          }
        />
      ) : (
        <p className="text-xl  text-black dark:text-white typewriter-sequential">
          Command not found: &quot;{cmd}&quot;
        </p>
      );

      setHistory((h) => {
        const newHistoryItem = {
          id: `${Date.now()}-${Math.random()}`, // Generate unique ID
          command: cmd,
          response: responseElement,
        };
        if (h.length < 2) {
          // If history has less than 2 items, just add the new one
          return [...h, newHistoryItem];
        } else {
          // If history already has 2 items, remove the first one and add the new one
          return [h[1], newHistoryItem];
        }
      });
      setPrompt("");
      setIsAnimating(true); // Hide input during animation
      setUseCallbackSystem(usesCallback); // Set flag for animation detection system

      // Force immediate scroll after state update
      setTimeout(() => {
        const terminalContainer = document.getElementById("terminal-shell");
        if (terminalContainer) {
          terminalContainer.scrollTop = terminalContainer.scrollHeight;
        }
      }, 0);

      // For commands without animation (like "command not found"), show input immediately
      if (!RespComp) {
        setTimeout(() => setIsAnimating(false), 100);
      }
    }
  };
  // console.log(history, "--");
  // Auto-scroll to keep input field visible when history updates
  useEffect(() => {
    const terminalContainer = document.getElementById("terminal-shell");
    if (terminalContainer && inputRef.current) {
      // Immediately scroll to bottom when new content is added
      terminalContainer.scrollTop = terminalContainer.scrollHeight;

      // Debounce the scroll function to handle rapid changes
      let scrollTimeout: NodeJS.Timeout;
      const debouncedScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          terminalContainer.scrollTop = terminalContainer.scrollHeight;
        }, 10);
      };

      // Also set up a mutation observer to detect DOM changes during animations
      const observer = new MutationObserver(() => {
        debouncedScroll();
      });

      observer.observe(terminalContainer, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      // Additional scroll after a short delay to handle layout shifts
      const layoutShiftTimeout = setTimeout(() => {
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
      }, 100);

      // Clean up observer after animation is likely complete
      const cleanupTimeout = setTimeout(() => {
        observer.disconnect();
      }, 10000); // 10 seconds should cover most animations

      return () => {
        observer.disconnect();
        clearTimeout(scrollTimeout);
        clearTimeout(layoutShiftTimeout);
        clearTimeout(cleanupTimeout);
      };
    }
  }, [history]);

  // Auto-scroll during typewriter animations and track when they complete
  // Only run for CSS-based animations (not callback-based)
  useEffect(() => {
    // Skip this logic if using callback system
    if (useCallbackSystem) return;

    const terminalContainer = document.getElementById("terminal-shell");
    if (!terminalContainer || !shellContainerRef.current) return;

    const container = shellContainerRef.current;
    let animationFrame: number;
    let isScrolling = false;

    const scrollToBottom = () => {
      if (!isScrolling) return;

      // Always scroll to bottom during animation
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
      }, maxDuration);

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
  }, [history, isAnimating, useCallbackSystem]);

  // Auto-scroll for callback-based animations
  useEffect(() => {
    if (useCallbackSystem && isAnimating) {
      const terminalContainer = document.getElementById("terminal-shell");
      if (terminalContainer) {
        const scrollToBottom = () => {
          terminalContainer.scrollTop = terminalContainer.scrollHeight;
        };

        // Scroll periodically during animation
        const interval = setInterval(scrollToBottom, 100);

        return () => clearInterval(interval);
      }
    }
  }, [useCallbackSystem, isAnimating]);

  return (
    <div ref={shellContainerRef}>
      {/* intro text */}
      {history.length <= 1 && (
        <div>
          <div className={`flex items-center ${iceland.className}`}>
            <p className={` text-blue-700 dark:text-amber-500 text-xl mr-7`}>
              soikat@shell~%
            </p>
            <p className={` italic text-xl text-rose-600 dark:text-lime-500`}>
              welcome
            </p>
          </div>
          <p
            className={`${sora.className} text-sm my-2 text-black dark:text-white pl-2 min-[550px]:pl-4`}
          >
            Hi, I&apos;m Soikat Chakrabarty, a Software Engineer. Welcome to my
            Interactive AI Terminal !!
          </p>
          <p
            className={`${sora.className} text-sm text-black dark:text-white pl-2 min-[550px]:pl-4`}
          >
            Type <strong>&apos;controls&apos;</strong> to familiarize yourself
            with the commands.
          </p>
        </div>
      )}

      {/* response history */}
      <ResponseHistory history={history} />

      {/* interactive input - only show when not animating */}
      {!isAnimating && (
        <div className={`${iceland.className} mt-2 flex items-center`}>
          <p className="text-blue-700 dark:text-amber-500 text-xl mr-5">
            soikat@shell~%
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
            className="w-96 italic text-xl text-red-600 dark:text-lime-500 border-0 p-2 outline-none focus:ring-0 focus:border-0 bg-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default InteractiveShell;
