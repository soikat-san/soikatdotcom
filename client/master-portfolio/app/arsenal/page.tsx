import { sora } from "@/lib/fonts";
// import { skillsTree } from "@/lib/skills";
import AuricBackground from "@/src/blocks/aura";
import TargetCursor from "@/src/components/reactbits/Animations/TargetCursor/TargetCursor";
// import InfiniteMenu from "@/src/components/reactbits/Components/InfiniteMenu/InfiniteMenu";
import RotatingText from "@/src/components/reactbits/TextAnimations/RotatingText/RotatingText";

export default function Arsenal() {
  return (
    <AuricBackground>
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
            className={`cursor-target border border-red-400 p-8 rounded-2xl w-[480px] font-semibold text-5xl ${sora.className}`}
          >
            Planar View
          </button>
          <button
            className={`cursor-target border border-blue-400 p-8 rounded-2xl w-[480px] font-semibold text-5xl ${sora.className}`}
          >
            Geometric View
          </button>
        </div>
      </div>
      {/* <div className="m-2 rounded-md overflow-hidden h-[calc(100vh-120px)] bg-transparent">
        <InfiniteMenu items={skillsTree} hideLink />
      </div> */}
    </AuricBackground>
  );
}
