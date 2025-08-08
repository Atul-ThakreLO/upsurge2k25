'use client';

import { eventBlocks } from '../../../../data';
import Footer from './footer';
import { FooterContactDetailsACM } from '../../../../data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SquidStepScene() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-black">
      {/* Background Image (static blur pre-applied in asset if possible) */}
      <div className="absolute top-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643352/transition_avzosl.jpg"
          alt="Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover opacity-90"
          style={{
            objectPosition: 'center top',
            filter: 'blur(2px)', // remove if pre-blurred
            willChange: 'transform',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Day 1 Header */}
        <div className="w-full text-center mt-16 mb-10">
          <h1 className="text-4xl font-bold font-[Orbitron] text-pink-600/90">
            1 - 일차
          </h1>
          <h2 className="text-2xl mt-2 font-[Orbitron] text-gray-200">
            Day - 1
          </h2>
        </div>

        {/* Character Image */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="w-full flex justify-center mb-10"
        >
          <Image
            src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643470/girl-min_ygo0s5.png"
            alt="Character"
            width={160}
            height={240}
            className="w-40 h-auto object-contain drop-shadow-[0_8px_15px_rgba(222,171,186,0.5)]"
          />
        </motion.div>

        {/* Event Blocks — simple staggered rise */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col items-center gap-6 w-full max-w-md"
        >
          {eventBlocks.map((event, i) => (
            <motion.div
  key={i}
  variants={{
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  style={{ willChange: 'transform, opacity' }}
  className="w-full h-24 rounded-lg shadow-xl flex items-center justify-center text-lg font-bold text-white glow-glass-effect"
>
  {event}
</motion.div>

          ))}
        </motion.div>

        {/* Day 2 Header */}
        <div className="w-full text-center mt-20 mb-10">
          <h1 className="text-4xl font-bold font-[Orbitron] text-pink-600/90">
            2 - 일차
          </h1>
          <h2 className="text-2xl mt-2 font-[Orbitron] text-gray-200">
            Day - 2
          </h2>
        </div>

        {/* Guy Image */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="w-full flex justify-center mb-10"
        >
          <Image
            src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643470/guy-min_xj4jgc.png"
            alt="Guy"
            width={160}
            height={240}
            className="w-40 h-auto object-contain drop-shadow-[0_8px_15px_rgba(222,171,186,0.5)]"
          />
        </motion.div>

        {/* Second Set of Event Blocks */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col items-center gap-6 w-full max-w-md mb-10"
        >
          {eventBlocks.map((event, i) => (
           <motion.div
  key={i}
  variants={{
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  style={{ willChange: 'transform, opacity' }}
  className="w-full h-24 rounded-lg shadow-xl flex items-center justify-center text-lg font-bold text-white glow-glass-effect"
>
  {event}
</motion.div>

          ))}
        </motion.div>

        {/* Footer */}
        <div className="w-full">
          <Footer footerDetails={FooterContactDetailsACM} />
        </div>
      </div>
    </div>
  );
}
