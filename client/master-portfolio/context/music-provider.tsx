"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { playlist } from "@/lib/playlist";

interface MusicContextType {
  isPlaying: boolean;
  currentSong: string | null;
  play: (url?: string) => void;
  pause: () => void;
  toggle: () => void;
  stop: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusicPlayer = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicProvider");
  }
  return context;
};

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  const play = (url?: string) => {
    if (!audioRef.current) return;

    if (url && url !== currentSong) {
      audioRef.current.src = url;
      setCurrentSong(url);
    }

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.error("Playback error:", err));
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const stop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const handleEnded = () => {
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      const nextTrack = playlist[nextIndex];
      console.log(nextTrack, "--");
      setCurrentTrackIndex(nextIndex);
      setCurrentSong(nextTrack.url);

      if (audioRef.current) {
        audioRef.current.src = nextTrack.url;
        audioRef.current.play();
      }
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex]);

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentSong,
        play,
        pause,
        toggle,
        stop,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
