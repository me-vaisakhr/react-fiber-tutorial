import { FC, Ref, useRef } from "react";
import { Mesh } from "three";
interface BoxProps {
  castShadow?: boolean;
  ref?: Ref<Mesh>;
  args?:
    | [
        radius?: number | undefined,
        widthSegments?: number | undefined,
        heightSegments?: number | undefined,
        phiStart?: number | undefined,
        phiLength?: number | undefined,
        thetaStart?: number | undefined,
        thetaLength?: number | undefined
      ]
    | undefined;
}
const Sphere: FC<BoxProps> = ({ ref, args, castShadow }) => {
  return (
    <mesh ref={ref} castShadow={castShadow}>
      <sphereGeometry args={args} />
      <meshPhysicalMaterial roughness={0} transmission={1}/>
    </mesh>
  );
};

export default Sphere;
