'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
{/*import { useAnimationFrame } from 'framer-motion';*/}
import { rules } from "../../../../../data";
const knobImages = [
  '/rules/knob1.png',
  '/rules/knob3.png',
  '/rules/knob4.png',
  '/rules/knob5.png',
];

export default function RuleMobile() {
  type FloatingKnob = {
    id: number;
    phase: number;
  };

  const [floatingKnobs] = useState<FloatingKnob[]>(
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      phase: i * Math.PI / 3,
    }))
  );

// Knob state
 const [elapsed, setElapsed] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Mark mount complete (avoid SSR mismatch){delay differen on client screen and my screen hydration error for DOM schema}
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Run animation after mount
  useEffect(() => {
    if (!hasMounted) return;

    let animationFrame: number;
    const start = performance.now();

    const tick = () => {
      const now = performance.now();
      setElapsed((now - start) / 500);
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasMounted]);



return (
  <div className="relative w-full min-h-screen px-4 py-10 bg-gradient-to-b from-[#0a0a0f] to-[#110012] overflow-hidden">
    <div className="absolute left-1/2 -translate-x-1/2 z-50 flex gap-7">
      {floatingKnobs.map((knob, index) => (
        <motion.div
          key={knob.id}
          style={{
            y: Math.sin(elapsed + knob.phase) * 10,
          }}
        >
          <Image
            src={knobImages[index % knobImages.length]}
            alt={`Knob ${index + 1}`}
            width={70}
            height={70}
          />
        </motion.div>
      ))}
    </div>

    {/* Title */}
    <div className="relative z-50 text-center mt-24 mb-10">
      <h1 className="text-4xl font-bold font-[Orbitron] text-pink-700">
        규칙 및 규정
      </h1>
      <h2 className="text-2xl mt-2 font-[Orbitron] text-gray-200">
        Rules and Regulations
      </h2>
    </div>

    {/* Rules List */}
    <div className="relative z-10 max-w-md mx-auto space-y-6 font-[Orbitron] text-sm font-medium leading-relaxed text-white/90">
      {rules.map((rule, index) => (
        <div key={index} className="flex items-start gap-3">
          <Image
            src={knobImages[index % knobImages.length]}
            alt="Bullet knob"
            width={25}
            height={25}
            className="mt-1"
          />
          <p>{rule}</p>
        </div>
      ))}
    </div>
  </div>
);
}