"use client";
import React, { useState, useEffect } from "react";

interface TypewriterMultilineProps {
  text: string;
  speed?: number; // milliseconds per character
  startDelay?: number; // delay before starting animation
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void; // callback when animation completes
}

export const TypewriterMultiline: React.FC<TypewriterMultilineProps> = ({
  text,
  speed = 10,
  startDelay = 0,
  className = "",
  showCursor = false,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(
        () => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        },
        currentIndex === 0 ? startDelay : speed,
      );

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, startDelay, onComplete]);

  const cursorClass =
    showCursor && !isComplete
      ? "after:content-[''] after:inline-block after:w-[2px] after:h-[1em] after:bg-current after:ml-[1px] after:animate-pulse"
      : "";

  return (
    <p
      className={`${className} whitespace-normal ${cursorClass}`}
      style={{
        wordWrap: "break-word",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      {displayedText}
    </p>
  );
};
