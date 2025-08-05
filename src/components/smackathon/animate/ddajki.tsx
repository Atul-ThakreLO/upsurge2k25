'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Ddajki() {
  const redControls = useAnimation();
  const blueControls = useAnimation();
  const redRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const [hasHit, setHasHit] = useState(false);

  useEffect(() => {
    // Animate blue ddakji dropping
    blueControls.start({
      x: ['0vw', '4vw'], // slight diagonal path
      y: ['0vh', '40vh'],
      rotate: [-70, -360],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    });

    // Check collision every 100ms
    const interval = setInterval(() => {
      if (!hasHit && redRef.current && blueRef.current) {
        const redBox = redRef.current.getBoundingClientRect();
        const blueBox = blueRef.current.getBoundingClientRect();

        const isColliding =
          redBox.left < blueBox.right &&
          redBox.right > blueBox.left &&
          redBox.top < blueBox.bottom &&
          redBox.bottom > blueBox.top;

        if (isColliding) {
          setHasHit(true);
          redControls.start({
            rotate: [0, -10, 10, -5, 0],
            scale: [1, 0.95, 1],
            transition: {
              duration: 0.6,
              delay:0.6 ,
              ease: 'easeInOut',
              type: 'keyframes',
            },
          });
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [blueControls, redControls, hasHit]);

  return (
    <div className="fixed bottom-0 right-0 w-[600px] h-[600px] overflow-hidden">
      {/* Red ddakji (target) */}
      <motion.div
        className="absolute"
        animate={redControls}
        ref={redRef}
        style={{ bottom: '20px', right: '40px' }}
      >
        <Image
          src="/red.png"
          alt="Red Ddakji"
          width={400}
          height={400}
        />
      </motion.div>

      {/* Blue ddakji (hitter) */}
      <motion.div
        className="absolute"
        initial={{ x: '0vw', y: '0vh', rotate: -90 }}
        animate={blueControls}
        ref={blueRef}
        style={{ top: '34px', left: '10px' }}
      >
        <Image
          src="/blue.png"
          alt="Blue Ddakji"
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
}
