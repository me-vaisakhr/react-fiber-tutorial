import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BasicExample from "./components/BasicExample";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav />
      <Canvas shadows camera={{ position: [0, 3, 6], fov: 50 }}>
        <BasicExample />
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}

export default App;
