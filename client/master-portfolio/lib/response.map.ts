import BioResponse from "@/src/blocks/resp-bio";
import CodexResponse from "@/src/blocks/resp-codex";
import OriginResponse from "@/src/blocks/resp-origin";
import ControlsResponse from "@/src/blocks/resp-controls";
import CallsignResponse from "@/src/blocks/resp-callsign";

export interface ResponseComponentProps {
  onAnimationComplete?: () => void;
}

export const responseMap: Record<string, React.FC<ResponseComponentProps>> = {
  bio: BioResponse,
  codex: CodexResponse,
  origin: OriginResponse,
  controls: ControlsResponse,
  callsign: CallsignResponse,
};
