import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        <pointLight intensity={2} position={[0, 0, 4]} />
        <mesh rotation={[Math.PI / 4, Math.PI / 3, 0]} scale={2}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
