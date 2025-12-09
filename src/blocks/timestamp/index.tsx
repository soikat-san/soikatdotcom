"use client";
import { iceland } from "@/lib/fonts";
import { useClock } from "./clock.hook";
import { Copyright } from "lucide-react";

const Timestamp: React.FC = () => {
  const { time, date } = useClock();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="hidden min-[700px]:flex justify-between items-center">
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
      <div className="min-[700px]:hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-12 min-[460px]:col-span-6">
            <p
              className={`${iceland.className} text-center min-[460px]:text-start text-md text-blue-700 dark:text-amber-500`}
            >
              {`${date}, ${time}`}
            </p>
          </div>

          <div className="col-span-12 min-[460px]:col-span-6 flex items-center justify-center min-[460px]:justify-end">
            <Copyright className=" text-blue-700 dark:text-amber-500 w-3 h-3" />
            <p
              className={`${iceland.className} pl-2 text-end text-md text-blue-700 dark:text-amber-500`}
            >
              soikat-san
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timestamp;
