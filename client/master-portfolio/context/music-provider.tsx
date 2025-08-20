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
  audioRef: React.RefObject<HTMLAudioElement | null>;
  analyserRef: React.RefObject<AnalyserNode | null>;
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
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  const play = async (url?: string) => {
    if (!audioRef.current) return;

    // Resume context if needed (important for browser autoplay restrictions)
    if (audioCtxRef.current?.state === "suspended") {
      await audioCtxRef.current.resume();
    }

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
    isPlaying ? pause() : play();
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

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }

    const audio = audioRef.current;
    const audioCtx = audioCtxRef.current;

    // Only create analyser and source once
    if (!analyserRef.current) {
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      analyserRef.current = analyser;

      const source = audioCtx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    const handleEnded = () => {
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      const nextTrack = playlist[nextIndex];
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
        audioRef,
        analyserRef,
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
