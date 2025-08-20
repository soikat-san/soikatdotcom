import { useEffect, useRef } from "react";

interface EqualizerProps {
  analyserRef: React.RefObject<AnalyserNode | null>;
  barCount?: number;
}

export const Equalizer: React.FC<EqualizerProps> = ({
  analyserRef,
  barCount = 32,
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

        ctx.fillStyle = `rgb(${225 - barHeight}, ${barHeight}, 50)`;
        ctx.fillRect(x, y, barWidth - 1, barHeight);
      }
    };

    render();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [analyserRef, barCount]);

  return (
    <canvas
      ref={canvasRef}
      // width={100}
      // height={50}
      className="w-[500px] h-20"
    />
  );
};
