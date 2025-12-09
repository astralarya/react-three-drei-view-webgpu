import {
  Canvas,
  extend,
  type ConstructorRepresentation,
  type ThreeToJSXElements,
} from "@react-three/fiber";
// import { View } from "@react-three/drei";
import { View } from "./component/View";
import * as THREE from "three/webgpu";
import type { WebGPURendererParameters } from "three/src/renderers/webgpu/WebGPURenderer.Nodes.js";
import { useRef, useState } from "react";

extend(THREE as unknown as ConstructorRepresentation);

declare module "@react-three/fiber" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

function App() {
  const container = useRef<HTMLDivElement>(null!);
  return (
    <div ref={container}>
      <View className="w-40 h-40 border-2 border-red-500">
        <pointLight intensity={4} position={[0, 0, 4]} />
        <HoverBox />
      </View>
      <div className="top-0 left-0 right-0 bottom-0 fixed pointer-events-none">
        <Canvas
          eventSource={container}
          gl={async (props) => {
            const renderer = new THREE.WebGPURenderer(
              props as WebGPURendererParameters,
            );
            await renderer.init();
            return renderer;
          }}
        >
          <View.Port />
        </Canvas>
      </div>
    </div>
  );
}

function HoverBox() {
  const [hover, setHover] = useState(false);
  return (
    <mesh
      rotation={[Math.PI / 4, Math.PI / 3, 0]}
      scale={2}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={hover ? "red" : "blue"} />
    </mesh>
  );
}

export default App;
