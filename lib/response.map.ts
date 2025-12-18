import BioResponse from "@/src/blocks/resp-bio";
import CodexResponse from "@/src/blocks/resp-codex";
import OriginResponse from "@/src/blocks/resp-origin";
import ArsenalResponse from "@/src/blocks/resp-arsenal";
import LetsJamResponse from "@/src/blocks/resp-letsjam";
import JamOverResponse from "@/src/blocks/resp-jamover";
import DossierResponse from "@/src/blocks/resp-dossier";
import ControlsResponse from "@/src/blocks/resp-controls";
import CallsignResponse from "@/src/blocks/resp-callsign";
import CampaignResponse from "@/src/blocks/resp-campaigns";

export interface ResponseComponentProps {
  onAnimationComplete?: () => void;
}

export const responseMap: Record<string, React.FC<ResponseComponentProps>> = {
  bio: BioResponse,
  codex: CodexResponse,
  origin: OriginResponse,
  arsenal: ArsenalResponse,
  letsjam: LetsJamResponse,
  jamover: JamOverResponse,
  dossier: DossierResponse,
  controls: ControlsResponse,
  callsign: CallsignResponse,
  campaigns: CampaignResponse,
};
