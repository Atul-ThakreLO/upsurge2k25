'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Ddajki() {
  const redControls = useAnimation();
  const blueControls = useAnimation();
  const redRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const [hasHit, setHasHit] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);


  // Set up intersection observer
  const { ref: containerRef, inView } = useInView({
    triggerOnce: true, // Only run once
    threshold: 0.9,     
  });

  useEffect(() => {
    if (!inView) return;

    // Delay start to ensure render
    const timeout = setTimeout(() => {
      blueControls.start({
        x: ['0vw', '4vw'],
        y: ['0vh', '40vh'],
        rotate: [-70, -360],
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      });
    }, 100);

    // Collision detection
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
  rotateX: [0, -180, 0],  // Flipping on X-axis
  y: [0, -30, 0],         // Small upward jump
  scale: [1, 1.05, 1],    // Slight stretch and settle
  transition: {
    duration: 0.9,
    delay: 0.3,
    ease: 'easeInOut',
  },
}).then(() => {
  setAnimationDone(true); // 
});

        }
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [inView, blueControls, redControls, hasHit]);

  return (
    <div
      ref={containerRef}
      className="bottom-50 right-10 w-[600px] h-[600px] overflow-visible transform-gpu will-change-transform pointer-events-none z-50 relative"
    >
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
          width={500}
          height={500}
        />
      </motion.div>

      {/* Blue ddakji (hitter) */}
      <motion.div
        className="absolute"
        initial={{ x: '10vw', y: '30vh', rotate: -90 }}
        animate={blueControls}
        ref={blueRef}
        style={{ top: '10px', left: '10px' }}
        onClick={() => {
    if (animationDone) {
      alert('Red ddakji clicked!');
    }
  }}
      >
        <Image
          src="/blue.png"
          alt="Blue Ddakji"
          width={600}
          height={600}
        />
      </motion.div>
    </div>
  );
}
