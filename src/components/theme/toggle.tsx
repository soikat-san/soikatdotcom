"use client";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import Orb from "@/src/components/reactbits/Backgrounds/Orb/Orb";

const Toggle: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const hueShift = theme === "dark" ? 0 : 100;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const excludedRoutes = ["/timeline", "/arsenal"];

  return (
    <Fragment>
      {!excludedRoutes.includes(pathname) ? (
        <>
          <div
            className="w-[100px] h-[100px] hidden min-[550px]:flex items-center justify-center cursor-pointer"
            onClick={toggleTheme}
          >
            <Orb
              hue={hueShift}
              hoverIntensity={0.5}
              rotateOnHover={true}
              forceHoverState={false}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              {theme === "dark" ? (
                <Sun className="w-10 h-10 text-yellow-300" />
              ) : (
                <Moon className="w-10 h-10 text-black" />
              )}
            </div>
          </div>
          <div onClick={toggleTheme} className="p-5 min-[550px]:hidden">
            {theme === "dark" ? (
              <Sun className="w-7 h-7 text-yellow-300" />
            ) : (
              <Moon className="w-7 h-7 text-black" />
            )}
          </div>
        </>
      ) : null}
    </Fragment>
  );
};

export default Toggle;
