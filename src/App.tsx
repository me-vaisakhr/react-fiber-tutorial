import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  Center
} from "@react-three/drei";
import { Ref, useRef } from "react";
import { BoxGeometry, Mesh } from "three";
function App() {
  const Box = () => {
    const ref = useRef<Mesh>(null);

    return (
      <Center top>
        <mesh ref={ref} castShadow> 
          <sphereGeometry args={[0.75, 64, 64]}/>
          <meshStandardMaterial metalness={1} roughness={1} attach="material" />
        </mesh>
      </Center>
    );
  };

  const Backgound = () => {
    return <Environment preset="sunset" background blur={0.65} />;
  };

  return (
    <Canvas shadows camera={{ position: [0, 3, 6], fov: 50 }}>
      <mesh castShadow receiveShadow>
        <group position={[0, 0, 0]}>
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
      <Backgound />
      <OrbitControls autoRotate/>
    </Canvas>
  );
}

export default App;
