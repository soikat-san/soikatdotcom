// import Cubes from "@/src/components/reactbits/Animations/Cubes/Cubes";
import {
  CardDemo,
  Card,
  CardSkeletonContainer,
  Skeleton,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/damn-good-card";

const ModularTree: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* Row 1 */}
        <div className="col-span-4 border border-green-500 p-5">
          <Card>
            <CardSkeletonContainer>
              <Skeleton />
            </CardSkeletonContainer>
            <CardTitle>Frontend</CardTitle>
            <CardDescription>
              A card that showcases a set of tools that you use to create your
              product.
            </CardDescription>
          </Card>
        </div>
        <div className="col-span-4 pl-10 pt-2">
          {/* <Cubes
            radius={1}
            gridSize={6}
            cubeSize={65}
            maxAngle={120}
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
            faceColor={"#171717"}
            rippleColor={"#94a3b8"}
            borderStyle={"1px dashed #f8fafc"}
          /> */}
          Cubes
        </div>
        <div className="col-span-4 border border-green-500 p-5">
          <CardDemo />
        </div>

        {/* Row 2 */}
        <div className="col-span-4 pl-10 pt-2">
          {/* <Cubes
            radius={1}
            gridSize={6}
            cubeSize={65}
            maxAngle={120}
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
            faceColor={"#171717"}
            rippleColor={"#94a3b8"}
            borderStyle={"1px dashed #f8fafc"}
          /> */}
          Cubes
        </div>
        <div className="col-span-4 border border-green-500 p-5">
          <CardDemo />
        </div>
        <div className="col-span-4 pl-10 pt-2">
          {/* <Cubes
            radius={1}
            gridSize={6}
            cubeSize={65}
            maxAngle={120}
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
            faceColor={"#171717"}
            rippleColor={"#94a3b8"}
            borderStyle={"1px dashed #f8fafc"}
          /> */}
          Cubes
        </div>

        {/* Row 3 */}
        <div className="col-span-4 border border-green-500 p-5">
          <CardDemo />
        </div>
        <div className="col-span-4 pl-10 pt-2">
          {/* <Cubes
            radius={1}
            gridSize={6}
            cubeSize={65}
            maxAngle={120}
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
            faceColor={"#171717"}
            rippleColor={"#94a3b8"}
            borderStyle={"1px dashed #f8fafc"}
          /> */}
          Cubes
        </div>
        <div className="col-span-4 border border-green-500 p-5">
          <CardDemo />
        </div>
      </div>
    </div>
  );
};

export default ModularTree;
