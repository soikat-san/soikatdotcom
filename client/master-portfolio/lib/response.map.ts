import BioResponse from "@/src/blocks/resp-bio";
import OriginResponse from "@/src/blocks/resp-origin";
import ControlsResponse from "@/src/blocks/resp-controls";

export interface ResponseComponentProps {
  onAnimationComplete?: () => void;
}

export const responseMap: Record<string, React.FC<ResponseComponentProps>> = {
  bio: BioResponse,
  origin: OriginResponse,
  controls: ControlsResponse,
};
