import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={18}>
          <MugModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[12,1,1]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;
