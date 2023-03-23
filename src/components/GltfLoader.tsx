import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Car from "./common/Car";

const GltfLoader = () => {
  const Ground = () => {
    return (
      <mesh
        castShadow
        receiveShadow
        position={[0, -1, 1]}
        rotation-x={Math.PI * -0.5}
      >
        <circleGeometry args={[5, 128]} />
        <meshStandardMaterial />
      </mesh>
    );
  };
  return (
    <Canvas shadows>
      <Suspense fallback={"..."}>
        <PerspectiveCamera makeDefault position={[-3, 1, 7]} fov={100} />
        <spotLight castShadow position={[0, 7, 0]} />
        <spotLight castShadow position={[0, 7, 2]} />
        <spotLight castShadow position={[0, 7, -2]} />
        <mesh castShadow receiveShadow>
          <Car />
        </mesh>
        <Ground />
        <Environment background>
          <color attach="background" args={["black"]} />
        </Environment>
        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={50}
          autoRotate
        />
      </Suspense>
    </Canvas>
  );
};

export default GltfLoader;
