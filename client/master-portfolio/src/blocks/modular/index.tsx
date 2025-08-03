import useWindowDimensions from "@/lib/dimensions";
import Cubes from "@/src/components/reactbits/Animations/Cubes/Cubes";

const ModularTree: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-8 border border-green-500 p-5">
          <p className="text-5xl">{`${width} × ${height}`}</p>
        </div>
        <div className="col-span-4 pl-10 pt-2">
          <Cubes
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
          />
        </div>
      </div>
    </div>
  );
};

export default ModularTree;
