import { Timeline } from "@/src/components/ui/timeline";
import { PFLog, ROCCLog, ADVLog, CAVLog } from "@/lib/journeylog";

const MyJourney: React.FC = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-sm md:text-3xl xl:text-5xl font-extrabold text-neutral-300">
            TECHIEBUTLER, India
          </p>
          <p className="text-sm md:text-md font-normal text-neutral-300">
            - Senior Frontend Developer
          </p>
          <p className="text-sm md:text-md font-normal text-neutral-300">
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
          <p className="pt-5 underline underline-offset-4 text-sm md:text-md">
            Core Engineering Contributions at Property Finder
          </p>
          <ul className="pt-4">
            {PFLog.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4 mb-2">
                <div className="w-4 h-4 mt-1.5 bg-neutral-400 rotate-90 clip-hexagon flex-shrink-0" />
                <p className="text-sm md:text-md font-light text-justify">
                  {highlight}
                </p>
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
          <p className="text-sm md:text-3xl xl:text-5xl font-extrabold text-neutral-300">
            TECHIEBUTLER, India
          </p>
          <p className="text-sm md:text-md font-normal text-neutral-300">
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
          <p className="text-sm md:text-3xl xl:text-5xl font-extrabold text-neutral-300">
            ROCCSOLUTION India Pvt Ltd
          </p>
          <p className="text-sm md:text-md font-normal text-neutral-300">
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
          <p className="pt-5 underline underline-offset-4 text-sm md:text-md">
            Core Engineering Contributions at RoccSolution
          </p>
          <ul className="pt-4">
            {ROCCLog.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4 mb-2">
                <div className="w-4 h-4 mt-1.5 bg-neutral-400 rotate-90 clip-hexagon flex-shrink-0" />
                <p className="text-sm md:text-md font-light text-justify">
                  {highlight}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Mid 2023",
      content: (
        <div>
          <p className="text-sm md:text-3xl xl:text-5xl font-extrabold text-neutral-300">
            ROCCSOLUTION India Pvt Ltd
          </p>
          <p className="text-sm md:text-md font-normal text-neutral-300">
            - Web Developer Frontend
          </p>
          <p className="pt-5 italic text-justify text-sm">
            I joined Roccsolution in June 2023, eager to move beyond routine
            development and immerse myself in real product work. This was my
            first opportunity to take ownership of customer-facing features with
            real business stakes — from lead pipelines and loan logic to
            dashboard flows that directly impacted provider operations. I
            quickly found myself not just implementing designs, but shaping
            them; not just integrating APIs, but questioning flows and
            suggesting better ones. It was a hands-on, fast-moving environment
            that asked me to think critically, design with empathy, and deliver
            with care. That role planted the early roots of product intuition
            and frontend leadership that would later define the way I work
            today.
          </p>
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div>
          <p className="text-sm md:text-3xl xl:text-5xl font-extrabold text-neutral-300">
            Advenith Technology Pvt Ltd
          </p>
          <p className="text-sm md:text-md font-normal text-neutral-300">
            - React Developer
          </p>
          <p className="pt-5 italic text-justify text-sm">
            In late 2021, I joined Advenith Technology with a strong grasp of
            the React ecosystem and a growing hunger to sharpen my fundamentals
            through real-world client projects. This was a phase of rapid
            exploration and deep focus — I learned to move fast without breaking
            things, to translate fuzzy requirements into fluid UI, and to design
            with intention. I was building production-ready SPAs that needed to
            be stable, responsive, and flexible across domains. At Advenith, I
            honed my communication skills, got comfortable working across
            shifting priorities, and built the frontend muscle memory that would
            shape my developer instincts going forward.
          </p>
          <p className="pt-5 underline underline-offset-4 text-sm md:text-md">
            Core Engineering Contributions at Advenith
          </p>
          <ul className="pt-4">
            {ADVLog.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4 mb-2">
                <div className="w-4 h-4 mt-1.5 bg-neutral-400 rotate-90 clip-hexagon flex-shrink-0" />
                <p className="text-sm md:text-md font-light text-justify">
                  {highlight}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Early 2021",
      content: (
        <div>
          <p className="text-sm md:text-3xl xl:text-5xl font-extrabold text-neutral-300">
            Cavis Infotech Pvt Ltd
          </p>
          <p className="text-sm md:text-md font-normal text-neutral-300">
            - React Developer
          </p>
          <p className="pt-5 italic text-justify text-sm">
            Cavis Infotech was where it all began — my first experience writing
            code that directly impacted real users and teams. I joined in April
            2021 as a React developer and was tasked with building an attendance
            tracking system from the ground up. It challenged me to think
            structurally, deliver with clarity, and design interfaces that
            solved real operational problems. That project taught me the value
            of building software that’s not just functional, but essential — and
            it set the tone for how I’ve approached every role since.
          </p>
          <p className="pt-5 underline underline-offset-4 text-sm md:text-md">
            Core Engineering Contributions at Cavis
          </p>
          <ul className="pt-4">
            {CAVLog.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4 mb-2">
                <div className="w-4 h-4 mt-1.5 bg-neutral-400 rotate-90 clip-hexagon flex-shrink-0" />
                <p className="text-sm md:text-md font-light text-justify">
                  {highlight}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="pb-10">
          <p className="text-sm md:text-3xl xl:text-5xl font-extrabold text-neutral-300">
            Early Embers
          </p>
          <p className="pt-2 text-sm md:text-md font-normal text-neutral-300">
            - A quiet init() before the launch.
          </p>
          <p className="pt-5 italic text-justify text-sm">
            Before fully transitioning into tech, I spent time navigating a very
            different field — one that demanded resilience, adaptability, and
            clear communication during a challenging personal chapter. It wasn’t
            a formal technical role, but in the margins of that experience, I
            began exploring frontend development on my own. I took on a small
            contract-like project for a local business — designing and building
            a responsive presentational website. Working independently taught me
            the basics of performance, structure, and mobile-first thinking. It
            was a quiet but meaningful start — a glimpse into the discipline and
            satisfaction that comes with shipping something real, and the moment
            I knew I wanted to build software with purpose.
          </p>
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
