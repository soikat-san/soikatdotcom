import {
  frontend,
  languages,
  architecture,
  uiToolkit,
  backendDevops,
} from "@/lib/skills";
import {
  Card,
  Skeleton,
  CardTitle,
  CardDescription,
  CardSkeletonContainer,
} from "@/src/components/ui/damn-good-card";
import Cubes from "@/src/components/reactbits/Animations/Cubes/Cubes";

const ModularTree: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* Row 1 */}
        <div className="col-span-12 min-[910px]:col-span-6 min-[1240px]:col-span-4 p-5">
          <Card>
            <CardSkeletonContainer>
              <Skeleton segment={frontend} />
            </CardSkeletonContainer>
            <CardTitle>Frontend</CardTitle>
            <CardDescription className="text-justify">
              I build modern, performant UIs using React and Next.js, with
              scalable state management through Redux and Zustand, and
              cross-platform capability via React Native — ensuring consistent
              experiences across web and mobile.
            </CardDescription>
          </Card>
        </div>
        <div className="col-span-4 hidden min-[1700px]:block">
          <div className="flex justify-center relative right-[70px] top-[50px]">
            <Cubes
              radius={2}
              cubeSize={32}
              maxAngle={60}
              faceColor="#262626"
              rippleColor="#93c5fd"
              borderStyle="1px dashed #e2e8f0"
            />
          </div>
        </div>
        <div className="col-span-12 min-[910px]:col-span-6 min-[1240px]:col-span-4 p-5">
          <Card>
            <CardSkeletonContainer>
              <Skeleton segment={languages} />
            </CardSkeletonContainer>
            <CardTitle>Core Languages</CardTitle>
            <CardDescription className="text-justify">
              I work fluently with HTML, CSS, and JavaScript, write robust code
              in TypeScript. These core technologies form the foundation of
              every product I build, enabling me to craft responsive interfaces
              and architect data flows with precision and intent.
            </CardDescription>
          </Card>
        </div>

        {/* Row 2 */}
        <div className="col-span-4 hidden min-[1700px]:block">
          <div className="flex justify-center relative right-[70px] top-[50px]">
            <Cubes
              radius={2}
              cubeSize={32}
              maxAngle={60}
              faceColor="#262626"
              rippleColor="#93c5fd"
              borderStyle="1px dashed #e2e8f0"
            />
          </div>
        </div>
        <div className="col-span-12 min-[1240px]:col-span-4 p-5">
          <Card>
            <CardSkeletonContainer>
              <Skeleton segment={architecture} />
            </CardSkeletonContainer>
            <CardTitle>Architecture & Versioning</CardTitle>
            <CardDescription className="text-justify">
              I architect modular systems using Micro-Frontends and Module
              Federation, manage scalable builds with Webpack, and maintain
              clean version control and collaboration through Git and GitHub
              across distributed teams and projects.
            </CardDescription>
          </Card>
        </div>
        <div className="col-span-4 hidden min-[1700px]:block">
          <div className="flex justify-center relative right-[70px] top-[50px]">
            <Cubes
              radius={2}
              cubeSize={32}
              maxAngle={60}
              faceColor="#262626"
              rippleColor="#93c5fd"
              borderStyle="1px dashed #e2e8f0"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-12 min-[910px]:col-span-6 min-[1700px]:col-span-4 p-5">
          <Card>
            <CardSkeletonContainer>
              <Skeleton segment={uiToolkit} />
            </CardSkeletonContainer>
            <CardTitle>UI Design & Package Ecosystem</CardTitle>
            <CardDescription className="text-justify">
              I craft modern interfaces using utility-first and component-based
              design systems, collaborate seamlessly via Figma, and manage
              dependencies with fast, reliable tooling — ensuring efficient
              builds and consistent UI delivery across projects. Tools like
              Tailwind CSS, Material UI, and pnpm help me scale frontends
              quickly without compromising on performance, developer experience,
              or design integrity.
            </CardDescription>
          </Card>
        </div>
        <div className="col-span-4 hidden min-[1700px]:block">
          <div className="flex justify-center relative right-[70px] top-[80px]">
            <Cubes
              radius={2}
              cubeSize={32}
              maxAngle={60}
              faceColor="#262626"
              rippleColor="#93c5fd"
              borderStyle="1px dashed #e2e8f0"
            />
          </div>
        </div>
        <div className="col-span-12 min-[910px]:col-span-6 min-[1700px]:col-span-4 p-5">
          <Card>
            <CardSkeletonContainer>
              <Skeleton segment={backendDevops} />
            </CardSkeletonContainer>
            <CardTitle>Backend, DevOps & Testing</CardTitle>
            <CardDescription className="text-justify">
              I collaborate with backend engineers to manage infrastructure and
              ensure reliability through modern DevOps and automated testing
              pipelines. With tools like Node.js, AWS, Docker, along with Jest
              and Playwright, I deliver production-ready code that’s stable, and
              easy to deploy. From CI/CD workflows to containerized
              environments, I take ownership of the entire delivery process to
              enable fast, confident releases at scale.
            </CardDescription>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModularTree;
