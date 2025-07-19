import ControlsResponse from "../src/blocks/resp-controls";

export const responseMap: Record<string, React.FC<{ command: string }>> = {
  controls: ControlsResponse,
};
