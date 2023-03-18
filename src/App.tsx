import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nav from "./components/Nav";
import Router from "./Router";

function App() {
  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;
