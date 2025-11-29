import { Canvas, extend, type ThreeToJSXElements } from "@react-three/fiber";

import * as THREE from "three/webgpu";

declare module "@react-three/fiber" {
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

extend(THREE as any);

function App() {
  return (
    <>
      <Canvas
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props as any);
          await renderer.init();
          return renderer;
        }}
      >
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
