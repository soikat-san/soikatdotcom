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
        </div>
      ),
    },
  ];
  return (
    <div className="p-5">
      <Timeline data={data} />
    </div>
  );
};

export default MyJourney;
