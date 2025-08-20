"use client";
import { useEffect } from "react";
import { sora } from "@/lib/fonts";
import { useMusicPlayer } from "@/context/music-provider";
import { ResponseComponentProps } from "@/lib/response.map";
import { TypewriterMultiline } from "@/src/components/ui/typewriter-multiline";
import { playlist } from "@/lib/playlist";
import { Equalizer } from "@/src/components/equalizer";

const LetsJamResponse: React.FC<ResponseComponentProps> = () => {
  const { play, analyserRef, currentSong } = useMusicPlayer();

  useEffect(() => {
    const timer = setTimeout(() => {
      const firstTrack = playlist[0];

      // Only play if a different song is not already playing
      if (currentSong !== firstTrack.url) {
        play(firstTrack.url);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${sora.className} flex flex-col`}>
      <TypewriterMultiline
        text={"Shuffling through songs..."}
        startDelay={0}
        className="text-xl py-2 text-black dark:text-white"
      />
      <Equalizer analyserRef={analyserRef} />
      <img src="/girldj.gif" className="w-48 h-48" alt="dj girl" />
    </div>
  );
};

export default LetsJamResponse;
