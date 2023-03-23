import BasicExample from "../components/BasicExample";
import GltfLoader from "../components/GltfLoader";
import Shapes from "../components/Shapes";

export enum RoutePaths {
  BASIC = "basic",
  SHAPES = "shapes",
  GLTF = "gltf"
}

export interface RoutePath {
  path: string;
  name: string;
  element: React.ReactNode;
}

export const routePaths: RoutePath[] = [
  {
    path: RoutePaths.BASIC,
    name: "Basic Example",
    element: <BasicExample />,
  },
  {
    path: RoutePaths.SHAPES,
    name: "Shapes",
    element: <Shapes />,
  },
  {
    path: RoutePaths.GLTF,
    name: "GLTF Loader",
    element: <GltfLoader />,
  },
];



