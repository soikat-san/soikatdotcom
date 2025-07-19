import OriginResponse from "@/src/blocks/resp-origin";
import ControlsResponse from "@/src/blocks/resp-controls";
import BioResponse from "@/src/blocks/resp-bio";

export interface ResponseComponentProps {
  onAnimationComplete?: () => void;
}

export const responseMap: Record<string, React.FC<ResponseComponentProps>> = {
  controls: ControlsResponse,
  origin: OriginResponse,
  bio: BioResponse,
};
