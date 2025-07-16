import Hero from "@/src/blocks/hero";
import Snapshot from "@/src/blocks/snapshot";
import RadiantBackground from "@/src/blocks/radiance";

export default function Home() {
  return (
    <RadiantBackground>
      <Hero />
      {/* TODO - include identity in terminal */}
      <Snapshot />
    </RadiantBackground>
  );
}
