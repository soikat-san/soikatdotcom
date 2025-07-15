import Hero from "@/src/blocks/hero";
import Identity from "@/src/blocks/identity";
import RadiantBackground from "@/src/blocks/radiance";

export default function Home() {
  return (
    <RadiantBackground>
      <Hero />
      <Identity />
    </RadiantBackground>
  );
}
