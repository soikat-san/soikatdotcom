"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import girldj from "@/public/girldj.gif";
import { playlist } from "@/lib/playlist";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Equalizer } from "@/src/components/equalizer";
import { useMusicPlayer } from "@/context/music-provider";
import GradientText from "@/src/components/reactbits/TextAnimations/GradientText/GradientText";

const Jukebox: React.FC = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
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

  const topStyle =
    pathname === "/"
      ? "top-20 min-[550px]:top-[275px] min-[640px]:top-80"
      : "top-2";

  return (
    <>
      {isPlaying && (
        <div
          className={`absolute ${topStyle} right-2 z-[9999] flex flex-row-reverse`}
        >
          <Image src={girldj.src} alt="girl_dj" width={75} height={75} />

          <div className="hidden min-[640px]:block">
            <Equalizer analyserRef={analyserRef} theme={theme} />

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
      )}
    </>
  );
};

export default Jukebox;
