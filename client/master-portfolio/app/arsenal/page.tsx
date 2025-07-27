import { skillsTree } from "@/lib/skills";
import AuricBackground from "@/src/blocks/aura";
import InfiniteMenu from "@/src/components/reactbits/Components/InfiniteMenu/InfiniteMenu";

export default function Arsenal() {
  return (
    <AuricBackground>
      <div className="m-2 rounded-md overflow-hidden h-[calc(100vh-120px)] bg-transparent">
        <InfiniteMenu items={skillsTree} hideLink />
      </div>
    </AuricBackground>
  );
}
