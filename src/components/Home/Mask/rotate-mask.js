"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import Mask from "./mask";

const RotateMask = () => {
  return (
    <div className="w-full md:mt-10 mx-auto md:w-1/2 h-[25vh] md:h-[40vh] relative cursor-none">
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

        <Environment preset="sunset" />

        <Mask modelPath="https://res.cloudinary.com/dok1hsojb/image/upload/v1753940672/mask_ajtjmf.glb" />
      </Canvas>
    </div>
  );
};

useGLTF.preload(
  "https://res.cloudinary.com/dok1hsojb/image/upload/v1753940672/mask_ajtjmf.glb"
);

export default RotateMask;
