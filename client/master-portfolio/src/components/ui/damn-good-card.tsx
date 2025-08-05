import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { animate, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>Damn good card</CardTitle>
      <CardDescription>
        A card that showcases a set of tools that you use to create your
        product.
      </CardDescription>
    </Card>
  );
}

type SkillItem = {
  alt: string;
  image: StaticImageData;
  imgSize: string;
  containerSize: string;
};

interface SkeletonProps {
  segment?: SkillItem[];
}

export const Skeleton = ({ segment }: SkeletonProps) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  // Define animation groups for the inverted triangle layout
  // Group 1: reactbits (index 0)
  // Group 2: mui (index 1), expo (index 5)
  // Group 3: tailwind (index 2), pnpm (index 6), xcode (index 8)
  // Group 4: figma (index 3), yarn (index 7)
  // Group 5: aceternity (index 4)

  const getAnimationGroup = (index: number): number => {
    switch (index) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 5:
        return 2;
      case 2:
        return 3;
      case 6:
        return 3;
      case 8:
        return 3;
      case 3:
        return 4;
      case 7:
        return 4;
      case 4:
        return 5;
      default:
        return 1;
    }
  };

  useEffect(() => {
    if (!segment) return;

    // Create sequence based on animation groups
    const sequence: any[] = [];
    const groups = new Map<number, number[]>();

    // Group items by their animation group
    segment.forEach((_, idx) => {
      const group = getAnimationGroup(idx);
      if (!groups.has(group)) {
        groups.set(group, []);
      }
      groups.get(group)!.push(idx);
    });

    // Create animation sequence with proper timing
    let delay = 0;
    groups.forEach((indices) => {
      indices.forEach((idx) => {
        sequence.push([
          `.item-${idx}`,
          {
            scale,
            transform,
          },
          { duration: 0.8, at: delay },
        ]);
      });
      delay += 0.8; // Add delay between groups
    });

    if (sequence.length > 0) {
      animate(sequence, {
        repeat: Infinity,
        repeatDelay: 1,
      });
    }
  }, [segment, scale, transform]);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      {segment?.length === 5 ? (
        <div className="flex flex-row shrink-0 justify-center items-center gap-2">
          {segment?.map((seq, idx) => (
            <Container key={idx} className={`item-${idx} ${seq.containerSize}`}>
              <Image
                width={50}
                height={50}
                alt={seq.alt}
                src={seq.image.src}
                className={`rounded-full ${seq.imgSize}`}
              />
            </Container>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-row shrink-0 justify-center items-center mb-4 gap-x-2">
            {segment?.slice(0, 5)?.map((seq, idx) => (
              <Container
                key={idx}
                className={`item-${idx} ${seq.containerSize}`}
              >
                <Image
                  width={50}
                  height={50}
                  alt={seq.alt}
                  src={seq.image.src}
                  className={`rounded-full ${seq.imgSize}`}
                />
              </Container>
            ))}
          </div>
          <div className="flex flex-row shrink-0 justify-center items-center mb-4 gap-x-2">
            {segment?.slice(5, 8)?.map((seq, idx) => {
              const globalIdx = idx + 5; // Maintain global index
              return (
                <Container
                  key={globalIdx}
                  className={`item-${globalIdx} ${seq.containerSize}`}
                >
                  <Image
                    width={50}
                    height={50}
                    alt={seq.alt}
                    src={seq.image.src}
                    className={`rounded-full ${seq.imgSize}`}
                  />
                </Container>
              );
            })}
          </div>
          <div className="flex flex-row shrink-0 justify-center items-center mb-4 gap-x-2">
            {segment?.slice(8, 9)?.map((seq, idx) => {
              const globalIdx = idx + 8;
              return (
                <Container
                  key={globalIdx}
                  className={`item-${globalIdx} ${seq.containerSize}`}
                >
                  <Image
                    width={50}
                    height={50}
                    alt={seq.alt}
                    src={seq.image.src}
                    className={`rounded-full ${seq.imgSize}`}
                  />
                </Container>
              );
            })}
          </div>
        </div>
      )}

      <div
        className={`h-${segment?.length === 5 ? 40 : 80} w-px absolute top-${segment?.length === 5 ? 20 : 0} m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move`}
      >
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]",
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};
