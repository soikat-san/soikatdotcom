"use client";
import { useEffect, useState } from "react";

export const useClock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const newTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      const newDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
      }).format(now);

      setTime(newTime);
      setDate(newDate);
    };

    update(); // set immediately on mount

    const interval = setInterval(() => {
      update();
    }, 1000); // updates time every second, date updates at midnight automatically

    return () => clearInterval(interval);
  }, []);

  return { time, date };
};
