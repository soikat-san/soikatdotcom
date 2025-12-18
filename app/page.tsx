import Hero from "@/src/blocks/hero";
import RadiantBackground from "@/src/blocks/radiance";

export default function Home() {
  return (
    <RadiantBackground>
      <Hero />
      {/*<p className="text-white dark:text-yellow-300 text-9xl">hello</p>*/}
    </RadiantBackground>
  );
}
