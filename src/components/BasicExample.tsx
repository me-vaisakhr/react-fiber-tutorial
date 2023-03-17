import {
  AccumulativeShadows,
  Center,
  Environment,
  RandomizedLight,
} from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";
import Sphere from "./common/Sphere";

const SphereBall = () => {
  const ref = useRef<Mesh>(null);

  return (
    <Center top>
      <Sphere ref={ref} castShadow args={[0.75, 64, 64]} />
    </Center>
  );
};

const Box = () => {
  const ref = useRef<Mesh>(null);

  return (
    <mesh castShadow position={[0, 0.5, 2]}>
      <boxGeometry />
      <directionalLight
        intensity={0.2}
        color={"yellow"}
        position={[0, 0.5, 2]}
      />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

const Backgound = () => {
  return <Environment preset="dawn" background blur={0.65} />;
};

const Scene = () => (
  <mesh castShadow receiveShadow>
    <group position={[0, 0, 0]}>
      <SphereBall />
      <Box />
      <AccumulativeShadows
        temporal
        frames={200}
        color="purple"
        colorBlend={0.5}
        opacity={1}
        scale={10}
        alphaTest={0.85}
      >
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          position={[5, 3, 2]}
          bias={0.001}
        />
      </AccumulativeShadows>
    </group>
  </mesh>
);

const BasicExample = () => {
  return (
    <mesh>
      <directionalLight position={[0, 5, 10]} />
      <Scene />
      <Backgound />
    </mesh>
  );
};

export default BasicExample;
