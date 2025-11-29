import {
  Canvas,
  extend,
  type ConstructorRepresentation,
  type ThreeToJSXElements,
} from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three/webgpu";
import type { WebGPURendererParameters } from "three/src/renderers/webgpu/WebGPURenderer.Nodes.js";

extend(THREE as unknown as ConstructorRepresentation);

declare module "@react-three/fiber" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

function App() {
  return (
    <>
      <View className="w-40 h-40 border-2 border-red-500">
        <pointLight intensity={2} position={[0, 0, 4]} />
        <mesh rotation={[Math.PI / 4, Math.PI / 3, 0]} scale={2}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </View>
      <div className="top-0 left-0 right-0 bottom-0 fixed">
        <Canvas
          gl={async (props) => {
            const renderer = new THREE.WebGPURenderer(
              props as WebGPURendererParameters
            );
            await renderer.init();
            return renderer;
          }}
        >
          <View.Port />
        </Canvas>
      </div>
    </>
  );
}

export default App;
