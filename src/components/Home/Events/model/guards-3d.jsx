import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";
import * as THREE from "three";

const Guards3d = ({ modelPath, scrollProgress = 0 }) => {
  const meshRef = useRef(null);
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const { camera } = useThree();

  const targetCameraPos = useRef(new THREE.Vector3(0, 1.8, 1.2));
  const targetLookAt = useRef(new THREE.Vector3(0, 1, 0));

  useFrame(() => {
    if (!meshRef.current) return;

    // Calculate target positions based on scroll progress
    const targets = calculateCameraTargets(scrollProgress);

    // Smooth interpolation to target positions
    targetCameraPos.current.lerp(targets.position, 0.05);
    targetLookAt.current.lerp(targets.lookAt, 0.05);

    // Apply to camera
    camera.position.copy(targetCameraPos.current);
    camera.lookAt(targetLookAt.current);

    // Model transformations
    if (targets.modelRotation !== undefined) {
      meshRef.current.rotation.y = targets.modelRotation;
    }
    if (targets.modelScale !== undefined) {
      meshRef.current.scale.setScalar(targets.modelScale);
    }
  });

  const calculateCameraTargets = (progress) => {
    const radius = 4;

    // Stage 1: Close-up pull back and move down (0 - 0.2)
    if (progress <= 0.2) {
      const t = progress / 0.2;
      return {
        position: new THREE.Vector3(
          THREE.MathUtils.lerp(0.3, 0, t),
          THREE.MathUtils.lerp(1.8, 1, t),
          THREE.MathUtils.lerp(1.2, 4, t)
        ),
        lookAt: new THREE.Vector3(0, THREE.MathUtils.lerp(1.7, 1, t), 0),

        modelRotation: 0,
        modelScale: 1,
      };
    }

    // Stage 2: 360° rotation staying at front (0.2 - 0.4)
    else if (progress <= 0.4) {
      const t = (progress - 0.2) / 0.2;
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      // Stay at front position, just rotate the model 360°
      return {
        position: new THREE.Vector3(0, THREE.MathUtils.lerp(1, 2.5, eased), 5),
        lookAt: new THREE.Vector3(0, THREE.MathUtils.lerp(1, 1.2, eased), 0),
        modelRotation: eased * Math.PI * 2, // Model rotates 360°, camera stays front
        modelScale: 1,
      };
    }
    // else if (progress <= 0.4) {
    //   const t = (progress - 0.2) / 0.2;
    //   const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    //   const angle = eased * Math.PI * 2; // This already gives 360° rotation

    //   return {
    //     position: new THREE.Vector3(
    //       Math.sin(angle) * radius,
    //       THREE.MathUtils.lerp(1, 2.5, eased),
    //       Math.cos(angle) * radius
    //     ),
    //     lookAt: new THREE.Vector3(0, THREE.MathUtils.lerp(1, 1.2, eased), 0),
    //     modelRotation: 0, // Remove model rotation, let camera do the work
    //     modelScale: 1,
    //   };
    // }

    // Stage 3: Quick move to nearest side (right) (0.4 - 0.6)
    else if (progress <= 0.6) {
      const t = (progress - 0.4) / 0.2;
      const eased = 1 - Math.pow(1 - t, 3); // Quick start, smooth end

      // Move from front (0°) to right side (90°) - shortest path
      const angle = (eased * Math.PI) / 2; // 0° to 90°

      return {
        position: new THREE.Vector3(
          Math.sin(angle) * radius, // Move to right side
          THREE.MathUtils.lerp(2.5, 1.8, eased), // Come down slightly
          Math.cos(angle) * radius // Front to side
        ),
        lookAt: new THREE.Vector3(0, 1.2, 0),
        modelRotation: 0, // Reset model rotation
        // modelScale: THREE.MathUtils.lerp(1, 1.3, eased),
        modelScale: 1,
      };
    }

    // Stage 4: Quick move to other side via front (0.6 - 0.8)
    else if (progress <= 0.8) {
      const t = (progress - 0.6) / 0.2;
      const eased = 1 - Math.pow(1 - t, 3); // Quick movement

      // Move from right (90°) to left (-90°) via front (going through 0°)
      // This is 180° movement but going through front, not back
      const startAngle = Math.PI / 2; // 90° (right)
      const endAngle = -Math.PI / 2; // -90° (left)
      // Go via front (0°) - shorter arc
      let currentAngle;
      if (eased < 0.5) {
        // First half: right to front
        currentAngle = THREE.MathUtils.lerp(startAngle, 0, eased * 2);
      } else {
        // Second half: front to left
        currentAngle = THREE.MathUtils.lerp(0, endAngle, (eased - 0.5) * 2);
      }

      return {
        position: new THREE.Vector3(
          Math.sin(currentAngle) * radius,
          1.8,
          Math.cos(currentAngle) * radius
        ),
        lookAt: new THREE.Vector3(0, 1.2, 0),
        modelRotation: 0,
        modelScale: 1,
      };
    }

    // Stage 5: Slow return to front center (0.8 - 1.0)
    else {
      const t = (progress - 0.8) / 0.2;
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // Smooth movement

      // Move from left (-90°) back to front center (0°)
      const startAngle = -Math.PI / 2; // -90° (left)
      const endAngle = 0; // 0° (front)
      const currentAngle = THREE.MathUtils.lerp(startAngle, endAngle, eased);

      return {
        position: new THREE.Vector3(
          Math.sin(currentAngle) * radius,
          THREE.MathUtils.lerp(1.8, 2, eased), // Rise slightly
          Math.cos(currentAngle) * radius
        ),
        lookAt: new THREE.Vector3(0, THREE.MathUtils.lerp(1.2, 1, eased), 0),
        modelRotation: 0,
        // modelScale: THREE.MathUtils.lerp(1.3, 1, eased),
        modelScale: 1,
      };
    }
  };

  return (
    <group ref={meshRef}>
      <primitive object={clonedScene} position={[0, 0.5, 0]} />
    </group>
  );
};

export default Guards3d;
