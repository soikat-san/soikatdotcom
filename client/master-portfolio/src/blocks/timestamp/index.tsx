"use client";
import { iceland } from "@/lib/fonts";
import { useClock } from "./clock.hook";
import { Copyright } from "lucide-react";

const Timestamp: React.FC = () => {
  const { time, date } = useClock();
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Copyright className=" text-blue-700 dark:text-amber-500" />
        <p
          className={`${iceland.className} pl-2 py-1 text-end text-xl text-blue-700 dark:text-amber-500`}
        >
          {currentYear}&nbsp;&nbsp;{`Soikat Chakrabarty.`}&nbsp;&nbsp;
          {`All rights reserved.`}
        </p>
      </div>
      <p
        className={`${iceland.className} py-1 text-end text-xl text-blue-700 dark:text-amber-500`}
      >
        {`${date}, ${time}`}
      </p>
    </div>
  );
};

export default Timestamp;
