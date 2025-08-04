'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


import { useInView } from 'react-intersection-observer';

const initialKnobData = [
  { top: '1%', left: '34.5%', src: '/rules/knob1.png' },
  { top: '18%', left: '60%', src: '/rules/knob2.png' },
  { top: '18%', left: '9%', src: '/rules/knob3.png' },
  { top: '41.5%', left: '17%', src: '/rules/knob4.png' },
  { top: '40%', left: '51%', src: '/rules/knob5.png' },
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

export default function KnobBox() {
  const [knobPositions, setKnobPositions] = useState(initialKnobData);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [startDance, setStartDance] = useState(false); // default: no dance

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.4, 
    triggerOnce: true, 
  });


    const shuffleKnobs = () => {
    const shuffled = [...initialKnobData].sort(() => Math.random() - 0.5);
    setKnobPositions(shuffled);
  };

  const resetKnobs = () => {
    setKnobPositions(initialKnobData);
  };
  useEffect(() => {
    if (inView) {
      setStartDance(true);
      const timer = setTimeout(() => {
        setStartDance(false);
        setKnobPositions(initialKnobData);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [inView]);


  const getRingaMotion = (i: number) => {
    const angle = (i / knobPositions.length) * 2 * Math.PI;
    const radius = 80;
    return {
      x: [
        0,
        Math.cos(angle) * radius,
        Math.cos(angle + Math.PI / 2) * radius,
        0,
      ],
      y: [
        0,
        Math.sin(angle) * radius,
        Math.sin(angle + Math.PI / 2) * radius - 150,
        -300,
      ],
      rotate: [0, 180, 360, 720],
      opacity: [1, 1, 1, 0],
    };
  };

  return (
    <div className=' w-full overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#110012]'>
     

  {/* Bottom Cinematic Shadow */}
  
    <div ref={sectionRef} className="w-full px-8 py-10 ml-25 overflow-hidden">
        <div className='absolute right-6 z-50 w-64 h-64 p-2 rotate-[8deg]'>
  <Image
    src="/rules/ddajki.png"
    alt="Ggonggi Game Sticker"
    width={80}
    height={80}
    className="object-contain w-full h-full"
  />
  </div>
      {/* Title */}
      <div className="text-center mb-20 mt-30 mr-70">
        <h1 className="text-6xl md:text-5xl font-bold font-[Orbitron] text-pink-700">
          규칙 및 규정
        </h1>
        <h2 className="text-4xl mt-2 font-[Orbitron] text-gray-200">
          Rules and Regulations 
        </h2>
      </div>

      {/* Content: Box + Rules */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Box (Left) */}
        <div
          className="relative w-[400px] h-[400px] overflow-visible mt-50"
          onMouseEnter={shuffleKnobs}
          onMouseLeave={resetKnobs}
        >
          <Image src="/rules/box.png" alt="wooden box" fill className="object-contain" />
          {knobPositions.map((knob, idx) => (
            <motion.div
              key={idx}
              className="absolute cursor-pointer"
              style={{
                top: knob.top,
                left: knob.left,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              animate={
                hoveredIndex === idx
                  ? { y: -30, opacity: 1 }
                  : startDance
                  ? getRingaMotion(idx)
                  : { x: 0, y: 0, rotate: 0, opacity: 1 }
              }
              transition={{
                duration: hoveredIndex === idx ? 0.4 : 3.5,
                ease: 'easeInOut',
                type: hoveredIndex === idx ? 'spring' : 'tween',
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image src={knob.src} alt={`Knob ${idx + 1}`} width={120} height={120} />
            </motion.div>
          ))}
        </div>

        {/* Rules (Right) */}
        <div className="max-w-3xl space-y-6 font-[Orbitron] text-lg font-semibold leading-relaxed text-white/90 ml-20">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start gap-4">
              <Image
                src={`/rules/knob${(index % 5) + 1}.png`}
                alt="Rule icon"
                width={35}
                height={35}
                className="mt-1"
              />
              <p>{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
