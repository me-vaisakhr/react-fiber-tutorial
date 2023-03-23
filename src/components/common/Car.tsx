/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/scene.gltf
Author: kekis69 (https://sketchfab.com/kekis69)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/land-rover-defender-90-lowpoly-88e5f30687ec4d508cebafa876e014d6
Title: Land Rover Defender 90 Lowpoly
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

const Car = (props: any) => {
  const { nodes, materials } = useGLTF("public/bmw/scene.gltf") as GLTFResult;
  const carRef = useRef<Group>(null);

  const frontLeftTire = useRef<Group>(null);
  const frontRightTire = useRef<Group>(null);
  const backLeftTire = useRef<Group>(null);
  const backRightTire = useRef<Group>(null);

  const [backLightBlink, enableBackLightBlink] = useState(false);
  const [indicatorBlink, enableIndicatorBlink] = useState(false);

  useEffect(() => {
    setInterval(() => {
      enableIndicatorBlink((blink) => !blink);
    }, 1000);
  }, []);


  useFrame((state, delta) => {
    if (!frontLeftTire.current) return;
    if (!backLeftTire.current) return;
    if (!backRightTire.current) return;
    if (!frontRightTire.current) return;

    frontLeftTire.current.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI * delta);
    backLeftTire.current.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI * delta);
    frontRightTire.current.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI * delta);
    backRightTire.current.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI * delta);

    const deltaPercent = delta * 100;
    if (deltaPercent < 10) {
      enableBackLightBlink((blink) => !blink);
    }
  });

  return (
    <group castShadow ref={carRef} {...props} dispose={null}>
      {/* BUMPER */}
      <group castShadow position={[0, -0.49, 1.27]} scale={[1.37, 1.12, 3.12]}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Material.015"]}
        >
          <meshStandardMaterial
            emissive={"orange"}
            emissiveIntensity={indicatorBlink ? 0.1 : 7}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Material.012"]}
        ></mesh>
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Material.017"]}
        />
      </group>
      {/* DOORS */}
      <group castShadow position={[0, -0.5, 0]}>
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials["Material.007"]}
        />
      </group>
      {/* FRONT GRILL */}
      <group castShadow position={[0, -0.49, 1.27]} scale={[1.34, 1.12, 3.12]}>
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["Material.009"]}
        />
      </group>
      {/* BACK BUMPER */}
      <group castShadow position={[0, -0.5, 0]}>
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Material.002"]}
        />
      </group>
      {/* BACK LIGHT */}
      <group position={[0, -0.5, 0]}>
        {/* RED LIGHT */}
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials["Material.014"]}
        />
        {/* FRONT GLASS */}
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials["Material.012"]}
        >
          <meshStandardMaterial
            emissive={"red"}
            emissiveIntensity={backLightBlink ? 0.1 : 5}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials["Material.011"]}
        />
        {/* INDICATOR */}
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials["Material.015"]}
        >
          <meshStandardMaterial
            emissive={"orange"}
            emissiveIntensity={indicatorBlink ? 0.1 : 5}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group castShadow position={[0, -0.5, 0]}>
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials["Material.012"]}
        />
      </group>
      {/* GLASS */}
      <group position={[0, -0.5, 0]}>
        <mesh
          geometry={nodes.Object_39.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Object_41.geometry}
          material={materials["Material.002"]}
        />
      </group>
      {/* FRONT LEFT TIRE */}
      <group
        castShadow
        ref={frontLeftTire}
        position={[1.24, -0.54, 3.79]}
        rotation={[-0.18, 0, 0]}
        scale={[1.23, 1.16, 1.16]}
      >
        <mesh
          geometry={nodes.Object_43.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          geometry={nodes.Object_45.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials["Material.003"]}
        />
      </group>
      {/* BOTTOM PLATFORM */}
      <group castShadow position={[0, -0.49, 1.27]} scale={[1.33, 1.12, 3.12]}>
        <mesh
          castShadow
          geometry={nodes.Object_52.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          geometry={nodes.Object_53.geometry}
          material={materials["Material.002"]}
        />
      </group>
      {/* FRONT LIGHT */}
      <group position={[0, -0.49, 1.27]} scale={0.47}>
        <mesh geometry={nodes.Object_59.geometry} material={materials.Material}>
          <meshStandardMaterial
            transparent
            emissive={"white"}
            emissiveIntensity={0.8}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_60.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          geometry={nodes.Object_61.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Object_62.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        castShadow
        position={[-0.89, 0.19, -1.71]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.05}
      >
        <mesh
          geometry={nodes.Object_69.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          geometry={nodes.Object_70.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          geometry={nodes.Object_71.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          geometry={nodes.Object_72.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_73.geometry}
          material={materials["Material.012"]}
        />
      </group>
      {/* BACK LEFT TIRE */}
      <group
        castShadow
        ref={backLeftTire}
        position={[1.26, -0.54, -0.27]}
        rotation={[-0.18, 0, 0]}
        scale={[1.23, 1.16, 1.16]}
      >
        <mesh
          geometry={nodes.Object_79.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_80.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          geometry={nodes.Object_81.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Object_82.geometry}
          material={materials["Material.003"]}
        />
      </group>
      {/* BACK RIGHT TIRE */}
      <group
        castShadow
        ref={backRightTire}
        position={[-1.25, -0.54, -0.27]}
        rotation={[-2.96, 0, -Math.PI]}
        scale={[1.23, 1.16, 1.16]}
      >
        <mesh
          geometry={nodes.Object_84.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_85.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          geometry={nodes.Object_86.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Object_87.geometry}
          material={materials["Material.003"]}
        />
      </group>
      {/* FRONT RIGHT TIRE */}
      <group
        castShadow
        ref={frontRightTire}
        position={[-1.23, -0.54, 3.79]}
        rotation={[-2.96, 0, -Math.PI]}
        scale={[1.23, 1.16, 1.16]}
      >
        <mesh
          geometry={nodes.Object_89.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_90.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          geometry={nodes.Object_91.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Object_92.geometry}
          material={materials["Material.003"]}
        />
      </group>
      {/* FOG LIGHT */}
      <group position={[0, -0.49, 1.2]} scale={[1.37, 1.12, 3.12]}>
        <mesh
          geometry={nodes.Object_94.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_95.geometry}
          material={materials["Material.012"]}
        ></mesh>
        <mesh
          geometry={nodes.Object_96.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          geometry={nodes.Object_97.geometry}
          material={materials["Material.022"]}
        >
          <meshStandardMaterial emissive={"white"} emissiveIntensity={7} />
        </mesh>
      </group>
      <group castShadow position={[-0.16, 0.15, -1.68]} scale={0.62}>
        <mesh
          geometry={nodes.Object_107.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_108.geometry}
          material={materials["Material.025"]}
        />
      </group>
      <group
        castShadow
        position={[1.19, -0.54, 3.79]}
        rotation={[-0.44, 0, -Math.PI / 2]}
        scale={[0.09, 0.11, 0.09]}
      >
        <mesh
          geometry={nodes.Object_110.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          geometry={nodes.Object_111.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          geometry={nodes.Object_112.geometry}
          material={materials["Material.044"]}
        />
      </group>
      <group
        castShadow
        position={[1.19, -0.54, -0.27]}
        rotation={[-0.44, 0, -Math.PI / 2]}
        scale={[0.09, 0.11, 0.09]}
      >
        <mesh
          geometry={nodes.Object_114.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          geometry={nodes.Object_115.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          geometry={nodes.Object_116.geometry}
          material={materials["Material.044"]}
        />
      </group>
      <group
        castShadow
        position={[-1.17, -0.54, -0.27]}
        rotation={[0.03, 0, Math.PI / 2]}
        scale={[0.09, 0.11, 0.09]}
      >
        <mesh
          geometry={nodes.Object_118.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          geometry={nodes.Object_119.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          geometry={nodes.Object_120.geometry}
          material={materials["Material.044"]}
        />
      </group>
      <group
        castShadow
        position={[-1.17, -0.54, 3.79]}
        rotation={[-0.13, 0, Math.PI / 2]}
        scale={[0.09, 0.11, 0.09]}
      >
        <mesh
          geometry={nodes.Object_122.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          geometry={nodes.Object_123.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          geometry={nodes.Object_124.geometry}
          material={materials["Material.044"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        position={[0, -0.49, 1.27]}
        scale={[1.33, 1.12, 3.12]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials["Material.001"]}
        position={[0, -0.49, 1.27]}
        scale={[1.33, 1.12, 3.12]}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials["Material.001"]}
        position={[0, -0.49, 1.27]}
        scale={[1.33, 1.12, 3.12]}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials["Material.001"]}
        position={[0, -0.5, 0]}
      />
      <mesh
        geometry={nodes.Object_37.geometry}
        material={materials["Material.001"]}
        position={[0, -0.49, 1.27]}
        scale={[1.33, 1.12, 3.12]}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials["Material.001"]}
        position={[0, -0.5, 0]}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials["Material.001"]}
        position={[0, -0.5, 0]}
      />
      <mesh
        geometry={nodes.Object_55.geometry}
        material={materials["Material.008"]}
      />
      <mesh
        geometry={nodes.Object_57.geometry}
        material={materials["Material.001"]}
        position={[0, -0.5, 0]}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={materials["Material.016"]}
        position={[0, 0.27, -1.71]}
        rotation={[Math.PI / 2, 1.42, -1.53]}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        geometry={nodes.Object_67.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Object_75.geometry}
        material={materials["Material.002"]}
        position={[15.53, 0, 3.23]}
        scale={0.25}
      />
      <mesh
        geometry={nodes.Object_77.geometry}
        material={materials["Material.002"]}
        position={[0.3, 0.59, 3.33]}
        scale={0.16}
      />
      <mesh
        geometry={nodes.Object_99.geometry}
        material={materials["Material.001"]}
        position={[-0.61, -0.5, -1.64]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.08}
      />
      <mesh
        geometry={nodes.Object_101.geometry}
        material={materials["Material.029"]}
        position={[0.02, -0.01, -1.66]}
        rotation={[-1.35, Math.PI / 2, 0]}
        scale={[0.09, 0.1, 0.1]}
      />
      <mesh
        geometry={nodes.Object_103.geometry}
        material={materials["Material.012"]}
        position={[0.01, 0.12, -1.7]}
        rotation={[-0.03, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Object_105.geometry}
        material={materials["Material.002"]}
        position={[0.01, 0.12, -1.66]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Object_126.geometry}
        material={materials["Material.026"]}
        position={[0.66, -0.64, -1.91]}
        rotation={[Math.PI / 2, 0, 0.04]}
        scale={[0.05, 0.19, 0.05]}
      />
    </group>
  );
};

export default Car;

useGLTF.preload("public/bmw/scene.gltf");
