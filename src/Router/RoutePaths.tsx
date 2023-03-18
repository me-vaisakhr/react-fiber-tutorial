import BasicExample from "../components/BasicExample";
import Shapes from "../components/Shapes";

export enum RoutePaths {
  BASIC = "basic",
  SHAPES = "shapes"
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
];
