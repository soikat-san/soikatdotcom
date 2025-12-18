"use client";
import React, { useState, useEffect } from "react";

interface TypewriterMultilineProps {
  text: string;
  speed?: number; // ms per character
  startDelay?: number; // delay before starting animation (ms)
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void; // callback when animation completes
  newlinePause?: number; // extra pause when a newline is encountered (ms)
}

export const TypewriterMultiline: React.FC<TypewriterMultilineProps> = ({
  text,
  speed = 10,
  startDelay = 0,
  className = "",
  showCursor = false,
  onComplete,
  newlinePause = 250,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // reset when text changes
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const nextChar = text[currentIndex];
      // If nextChar is newline, use a longer pause (so you see separation)
      const delay =
        currentIndex === 0
          ? startDelay
          : nextChar === "\n"
            ? newlinePause
            : speed;

      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex((i) => i + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length) {
      // finished typing
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, startDelay, onComplete, newlinePause]);

  const cursorClass =
    showCursor && !isComplete
      ? "after:content-[''] after:inline-block after:w-[2px] after:h-[1em] after:bg-current after:ml-[1px] after:animate-pulse"
      : "";

  // render displayedText with explicit <br/> for each newline
  const renderWithLineBreaks = (txt: string) => {
    // split preserves empty lines ('' for double newline)
    const parts = txt.split("\n");
    return parts.map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {/* add a <br/> after every line except the last one */}
        {i < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <p
      className={`${className} whitespace-pre-wrap ${cursorClass}`}
      style={{
        wordWrap: "break-word",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      {renderWithLineBreaks(displayedText)}
    </p>
  );
};
