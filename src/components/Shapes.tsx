import {
  Environment,
  GradientTexture,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";

const Shapes = () => {
  return <Scene />;
};

const Sphere = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += Math.PI * delta;
  });

  return (
    <mesh ref={ref} position={[-2, 0, 0]}>
      <sphereGeometry />
      <meshStandardMaterial emissive={"orange"} />
      <directionalLight position={[0, 10, 5]} />
    </mesh>
  );
};

const Box = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta;
    ref.current.rotation.z += delta;
  });
  return (
    <mesh position={[0.5, 0, 0]} ref={ref} scale={[1, 1.9, 1.9]}>
      <boxGeometry />
      <meshStandardMaterial color={"orange"} />
      <directionalLight position={[0, 10, 5]} />
    </mesh>
  );
};

const Plane = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta;
  });
  return (
    <mesh ref={ref} position={[2, 0, 1]}>
      <planeGeometry />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </mesh>
  );
};

const Capsule = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta;
  });
  return (
    <mesh ref={ref} position={[-4.5, 0, 0]}>
      <capsuleGeometry args={[1, 1, 4, 8]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

const Torus = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta;
  });
  return (
    <mesh ref={ref} position={[4.5, 0, 0]}>
      <torusGeometry />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

const Icosahedron = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta;
  });
  return (
    <mesh ref={ref} position={[8, 0, 0]}>
      <icosahedronGeometry />
      <meshStandardMaterial color={"purple"} />
    </mesh>
  );
};

const Cylinder = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta;
  });
  return (
    <mesh ref={ref} position={[-8, 0, 0]}>
      <cylinderGeometry />
      <meshStandardMaterial color={"purple"} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 70 }}>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.4} />
      <Box />
      <Sphere />
      <Capsule />
      <Plane />
      <Torus />
      <Cylinder />
      <Icosahedron />
      <Stars />
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </Canvas>
  );
};

export default Shapes;
