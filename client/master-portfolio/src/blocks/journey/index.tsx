import { PFLog, ROCCLog } from "@/lib/journeylog";
import { Timeline } from "@/src/components/ui/timeline";

const MyJourney: React.FC = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-5xl font-extrabold text-neutral-300">
            TECHIEBUTLER, India
          </p>
          <p className="text-md font-normal text-neutral-300">
            - Senior Frontend Developer
          </p>
          <p className="text-md font-normal text-neutral-300">
            - building Property Finder’s B2B platforms (UAE)
          </p>
          <p className="pt-5 italic text-justify text-sm">
            Working on Property Finder&apos;s products has refined the way I
            approach both engineering and collaboration. This role has pushed me
            to think beyond the UI — to consider architecture, scalability, and
            long-term maintainability in every decision. I approach problems
            with curiosity first, followed by structured thinking and a bias for
            clean, incremental solutions. Within my focus group, I work closely
            with cross-functional peers to elevate the agent experience —
            continuously delivering improvements that balance user needs with
            business goals. Day-to-day, I collaborate with tech leads, product
            managers, designers, and fellow developers to shape features from
            idea to release. It’s a culture of shared ownership, thoughtful
            code, and measurable impact — and I’ve grown stronger because of it.
          </p>
          <p className="pt-5 underline underline-offset-4">
            Core Engineering Contributions at Property Finder
          </p>
          <ul className="pt-4">
            {PFLog.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4 mb-2">
                <div className="w-4 h-4 mt-1.5 bg-neutral-400 rotate-90 clip-hexagon flex-shrink-0" />
                <p className="text-md font-light text-justify">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
          <p className="text-5xl font-extrabold text-neutral-300">
            TECHIEBUTLER, India
          </p>
          <p className="text-md font-normal text-neutral-300">
            - Senior Frontend Developer
          </p>
          <p className="pt-5 italic text-justify text-sm">
            I joined Techiebutler in August 2024 with a deep sense of purpose
            and excitement — ready to take on new challenges and push myself
            into the next phase of my engineering journey. Soon after, I was
            onboarded to the Property Finder B2B team, where I began
            contributing to a complex, high-impact platform serving real estate
            professionals across the UAE. The scale of the systems, the speed of
            decision-making, and the collaborative expectations of the team
            challenged me early — and I leaned into all of it. From day one, I
            approached this opportunity with determination, curiosity, and the
            commitment to grow not just as a developer, but as a product thinker
            and a teammate.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-5xl font-extrabold text-neutral-300">
            ROCCSOLUTION India Pvt Ltd
          </p>
          <p className="text-md font-normal text-neutral-300">
            - Web Developer Frontend
          </p>
          <p className="pt-5 italic text-justify text-sm">
            By early 2024, my work at Roccsolutions had become a launchpad for
            deeper ownership and sharper decision-making. I wasn’t just writing
            frontend code — I was building business-critical tools from the
            ground up: loan workflows, lead acquisition systems, and
            performance-focused interfaces that powered real outcomes. Working
            closely with stakeholders, designers, and backend teams, I learned
            how to balance structure with speed — designing for users while
            honoring complexity. This phase sharpened my frontend instincts,
            deepened my design intuition, and taught me the value of clear logic
            wrapped in intuitive UI. It’s where I first began thinking like a
            product engineer — not just a developer — and those habits have
            stayed with me ever since.
          </p>
          <p className="pt-5 underline underline-offset-4">
            Core Engineering Contributions at RoccSolution
          </p>
          <ul className="pt-4">
            {ROCCLog.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4 mb-2">
                <div className="w-4 h-4 mt-1.5 bg-neutral-400 rotate-90 clip-hexagon flex-shrink-0" />
                <p className="text-md font-light text-justify">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="p-5 h-full">
      <Timeline data={data} />
    </div>
  );
};

export default MyJourney;
