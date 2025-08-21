"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import girldj from "@/public/girldj.gif";
import { playlist } from "@/lib/playlist";
import { useEffect, useState } from "react";
import { useMusicPlayer } from "@/context/music-provider";
import { Equalizer } from "@/src/components/equalizer";
import GradientText from "@/src/components/reactbits/TextAnimations/GradientText/GradientText";

const Jukebox: React.FC = () => {
  const { theme } = useTheme();
  const [song, setSong] = useState<string>("");
  const { isPlaying, analyserRef, currentSong } = useMusicPlayer();

  useEffect(() => {
    findSong();
  }, [currentSong]);

  const findSong = () => {
    if (playlist.length) {
      const track = playlist.filter((s) => s.url === currentSong);
      if (track?.length > 0) {
        setSong(track[0]?.title);
      }
    }
  };

  return (
    <div className="absolute top-2 right-2 z-[9999] flex flex-row-reverse">
      {isPlaying && (
        <Image src={girldj.src} alt="girl_dj" width={75} height={75} />
      )}
      <div>
        <Equalizer analyserRef={analyserRef} theme={theme} />
        {/*<p className="text-red-400">{song}</p>*/}
        <GradientText
          showBorder={true}
          animationSpeed={5}
          className="px-2 mt-1"
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        >
          {song}
        </GradientText>
      </div>
    </div>
  );
};

export default Jukebox;
