'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAnimationFrame } from 'framer-motion';

const knobImages = [
  '/rules/knob1.png',
  '/rules/knob3.png',
  '/rules/knob4.png',
  '/rules/knob5.png',
];

const rules = [
  "Team must consist of minimum 3 and a maximum of 5 members.",
  "Team access pass will be distributed to the team upon registration, which will be used for further references.",
  "The ideas presented by the teams should be original and not protected by patents, copyrights, or technical publications.",
  "All official communication will be through the Smackathon email (smackathon@upsurge2k25.tech). Participants must monitor all folders.",
  "Registrations must be completed through the Upsurge 2k25 website by 21st August 2025 to secure a spot.",
  "Smackathon team is not responsible for late, lost, or mis-directed entries.",
  "Problem statements will be provided on the day the Hackathon starts.",
  "The team must commit to the given Git repository every hour during the Hackathon.",
  "At least 2 members must be present at the allotted table at all times during Smackathon.",
  "Participants must not engage in malicious activities. Damage to college property leads to disqualification.",
  "Meals and rest areas will be provided if food and accommodation is opted. One accommodation ticket includes 2 beds.",
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
    <div className="relative z-10 text-center mt-24 mb-10">
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