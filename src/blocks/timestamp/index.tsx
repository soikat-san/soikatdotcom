"use client";
import { iceland } from "@/lib/fonts";
import { useClock } from "./clock.hook";
import { Copyright } from "lucide-react";
import { useTheme } from "next-themes";
import { useBackground } from "@/src/components/theme/bgtheme";

const Timestamp: React.FC = () => {
  const { time, date } = useClock();
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { background } = useBackground();

  const isLumenText = theme === "dark" ? "text-zinc-600" : "text-zinc-400";
  const isEtherText = theme === "dark" ? "text-amber-500" : "text-neutral-500";
  const textColor = background === "lumen" ? isLumenText : isEtherText;
  return (
    <>
      <div className="hidden min-[700px]:flex justify-between items-center">
        <div className="flex items-center">
          <Copyright className={textColor} />
          <p
            className={`${iceland.className} ${textColor} pl-2 py-1 text-end text-xl`}
          >
            {currentYear}&nbsp;&nbsp;{`Soikat Chakrabarty.`}&nbsp;&nbsp;
            {`All rights reserved.`}
          </p>
        </div>
        <p
          className={`${iceland.className} ${textColor} py-1 text-end text-xl`}
        >
          {`${date}, ${time}`}
        </p>
      </div>
      <div className="min-[700px]:hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-12 min-[460px]:col-span-6">
            <p
              className={`${iceland.className} ${textColor} text-center min-[460px]:text-start text-md`}
            >
              {`${date}, ${time}`}
            </p>
          </div>

          <div className="col-span-12 min-[460px]:col-span-6 flex items-center justify-center min-[460px]:justify-end">
            <Copyright className=" w-3 h-3" />
            <p
              className={`${iceland.className} ${textColor} pl-2 text-end text-md`}
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
