"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import Mask from "./mask";

const LoadingFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#666" />
  </mesh>
);

const RotateMask = () => {
  return (
    <div className="w-full md:mt-10 mx-auto md:w-1/2 h-[40%] md:h-1/2 relative cursor-none">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
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

        <Suspense fallback={<LoadingFallback />}>
          <Mask
            modelPath="https://res.cloudinary.com/dok1hsojb/image/upload/v1753940672/mask_ajtjmf.glb"
            onError={(error) => {
              console.warn("Mask loading failed:", error);
            }}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

const preloadModel = async () => {
  try {
    await useGLTF.preload(
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1753940672/mask_ajtjmf.glb"
    );
  } catch (error) {
    console.warn("Model preload failed:", error);
  }
};

preloadModel();

export default RotateMask;
