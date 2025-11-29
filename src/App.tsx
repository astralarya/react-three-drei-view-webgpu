import {
  Canvas,
  extend,
  type ConstructorRepresentation,
  type ThreeToJSXElements,
} from "@react-three/fiber";
import type { WebGPURendererParameters } from "three/src/renderers/webgpu/WebGPURenderer.Nodes.js";

import * as THREE from "three/webgpu";

extend(THREE as unknown as ConstructorRepresentation);

declare module "@react-three/fiber" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

function App() {
  return (
    <>
      <Canvas
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(
            props as WebGPURendererParameters
          );
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
