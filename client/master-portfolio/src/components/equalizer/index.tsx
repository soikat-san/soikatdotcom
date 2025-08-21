import { useEffect, useRef } from "react";

interface EqualizerProps {
  analyserRef: React.RefObject<AnalyserNode | null>;
  barCount?: number;
  theme?: string;
}

export const Equalizer: React.FC<EqualizerProps> = ({
  analyserRef,
  barCount = 30,
  theme,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = canvas.width / barCount;

    const render = () => {
      animationRef.current = requestAnimationFrame(render);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const slice = Math.floor(bufferLength / barCount);

      for (let i = 0; i < barCount; i++) {
        const index = i * slice;
        const barHeight = dataArray[index];
        const x = i * barWidth;
        const y = canvas.height - barHeight;

        if (theme === "dark") {
          const mix = barHeight / 255; // Normalize to 0–1
          const r = Math.round(135 + (255 - 135) * mix); // 135 → 255
          const g = Math.round(206 + (255 - 206) * mix); // 206 → 255
          const b = Math.round(235 + (255 - 235) * mix); // 235 → 255
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        } else {
          const mix = barHeight / 255; // Normalize barHeight to 0–1
          const r = 255;
          let g, b;

          if (mix < 0.5) {
            // Fuchsia → Rose
            const localMix = mix / 0.5; // 0 to 1 range
            g = Math.round(0 + (102 - 0) * localMix);
            b = Math.round(255 - (255 - 204) * localMix);
          } else {
            // Rose → White
            const localMix = (mix - 0.5) / 0.5; // 0 to 1 range
            g = Math.round(102 + (255 - 102) * localMix);
            b = Math.round(204 + (255 - 204) * localMix);
          }

          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        }

        ctx.fillRect(x, y, barWidth - 1, barHeight);
      }
    };

    render();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [analyserRef, barCount, theme]);

  return <canvas ref={canvasRef} className="w-[200px] h-12" />;
};
