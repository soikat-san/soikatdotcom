"use client";
import { useState } from "react";
import { sora } from "@/lib/fonts";
import { Undo2 } from "lucide-react";
import { skillsTree } from "@/lib/skills";
import AuricBackground from "@/src/blocks/aura";
import TargetCursor from "@/src/components/reactbits/Animations/TargetCursor/TargetCursor";
import InfiniteMenu from "@/src/components/reactbits/Components/InfiniteMenu/InfiniteMenu";
import RotatingText from "@/src/components/reactbits/TextAnimations/RotatingText/RotatingText";

export default function Arsenal() {
  const [layers, setLayers] = useState(0);

  const reset = (): void => {
    setLayers(0);
  };

  const modularView = (): void => {
    setLayers(1);
  };

  const geometricView = (): void => {
    setLayers(2);
  };

  return (
    <AuricBackground>
      {layers === 0 && (
        <div className={`${sora.className}`}>
          <div className="pt-40 flex items-center justify-center">
            <p className="text-8xl font-extrabold pr-5">Welcome to my</p>
            <RotatingText
              texts={[
                "Arsenal",
                "Deck",
                "Gear",
                "Inventory",
                "Loadout",
                "Setup",
                "Stack",
                "Toolkit",
              ]}
              animate={{ y: 0 }}
              staggerFrom={"last"}
              exit={{ y: "-120%" }}
              initial={{ y: "100%" }}
              staggerDuration={0.025}
              rotationInterval={2000}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              mainClassName="w-[500px] px-3 py-2 text-8xl font-extrabold bg-gradient-to-r from-rose-600 via-orange-500 to-yellow-300 text-amber-50 overflow-hidden justify-center rounded-lg"
            />
          </div>
          <div className="pt-30 flex gap-10 justify-center">
            <TargetCursor spinDuration={2} hideDefaultCursor={true} />

            <button
              onClick={modularView}
              className="planar-gradient-fill cursor-target relative border border-green-400 p-8 rounded-2xl w-[480px] font-semibold text-5xl group"
            >
              <span className="relative z-10 planar-text-progress">
                Planar View
              </span>
            </button>

            <button
              onClick={geometricView}
              className="geometric-gradient-fill cursor-target relative border border-blue-400 p-8 rounded-2xl w-[480px] font-semibold text-5xl group"
            >
              <span className="relative z-10 geometric-text-progress">
                Geometric View
              </span>
            </button>
          </div>
        </div>
      )}
      {layers > 0 && (
        <div className="border border-red-400 p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="font-bold text-3xl underline underline-offset-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
              {layers === 2 ? "Geometric Skill Tree" : "Modular Skill Tree"}
            </p>
            <div
              onClick={reset}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer animate-pulse"
            >
              <Undo2 className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
          {layers === 2 && (
            <div className="rounded-md overflow-hidden h-[calc(100vh-150px)] bg-transparent">
              <InfiniteMenu items={skillsTree} hideLink />
            </div>
          )}
          {layers === 1 && (
            <div className="rounded-md overflow-hidden h-[calc(100vh-150px)] bg-transparent">
              hello
            </div>
          )}
        </div>
      )}
    </AuricBackground>
  );
}
