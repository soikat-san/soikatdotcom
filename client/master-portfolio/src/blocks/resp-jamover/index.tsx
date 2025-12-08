"use client";
import { useEffect } from "react";
import { sora } from "@/lib/fonts";
import { useMusicPlayer } from "@/context/music-provider";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";

const JamOverResponse: React.FC<ResponseComponentProps> = () => {
  const { stop } = useMusicPlayer();

  useEffect(() => {
    stop();
  }, [stop]);

  return (
    <div className={`${sora.className} flex flex-col`}>
      <TypewriterMultiline
        startDelay={0}
        text={"Disconnected from rhythm server"}
        className="text-md py-2 text-black dark:text-white"
      />
    </div>
  );
};

export default JamOverResponse;
