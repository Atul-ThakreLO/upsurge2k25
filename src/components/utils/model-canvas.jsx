"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";

const LoadingFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#666" />
  </mesh>
);

const ModelCanvas = ({ children, path }) => {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 1.8, 1.2],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        <Suspense fallback={null}>
          <Environment
            preset="city"
            background={false}
            onError={(error) => {
              console.warn("Environment loading failed:", error);
            }}
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </Canvas>
    </div>
  );
};

// const preloadModel = async () => {
//   try {
//     await useGLTF.preload({path});
//   } catch (error) {
//     console.warn("Model preload failed:", error);
//   }
// };

// preloadModel();

export default ModelCanvas;
