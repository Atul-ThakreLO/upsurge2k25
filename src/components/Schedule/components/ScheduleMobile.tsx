'use client';

import { eventBlocks } from '../../../../data';
import Footer from './footer';
import { FooterContactDetailsACM } from '../../../../data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SquidStepScene() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-black">
      {/* Background Image */}
      <div className="absolute top-0 w-full h-full z-10 pointer-events-none">
        <Image
          src="/Schedule/transition.png"
          alt="Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover opacity-90 brightness-15"
          style={{
            objectPosition: 'center top',
            filter: 'blur(2px)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Day 1 Header */}
        <div className="w-full text-center mt-16 mb-10">
          <h1 className="text-4xl font-bold font-[Orbitron] text-pink-600/90">1 - 일차</h1>
          <h2 className="text-2xl mt-2 font-[Orbitron] text-gray-200">Day - 1</h2>
        </div>

        {/* Character Image (floating animation) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="w-full flex justify-center mb-10"
        >
          <Image
            src="/Schedule/girl.png"
            alt="Character"
            width={160}
            height={240}
            className="w-40 h-auto object-contain drop-shadow-[0_20px_30px_rgba(222,171,186,0.7)]"
          />
        </motion.div>

        {/* Event Blocks */}
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          {eventBlocks.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full h-24 bg-pink-500 bg-opacity-90 rounded-lg shadow-xl flex items-center justify-center text-lg font-bold text-white glow-glass-effect backdrop-blur-sm"
            >
              {event}
            </motion.div>
          ))}
        </div>

        {/* Day 2 Header */}
        <div className="w-full text-center mt-20 mb-10">
          <h1 className="text-4xl font-bold font-[Orbitron] text-pink-600/90">2 - 일차</h1>
          <h2 className="text-2xl mt-2 font-[Orbitron] text-gray-200">Day - 2</h2>
        </div>

        {/* Guy Image (floating animation) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1 }}
          className="w-full flex justify-center mb-10"
        >
          <Image
            src="/Schedule/guy.png"
            alt="Guy"
            width={160}
            height={240}
            className="w-40 h-auto object-contain drop-shadow-[0_20px_30px_rgba(222,171,186,0.7)]"
          />
        </motion.div>

        {/* Second Set of Event Blocks */}
        <div className="flex flex-col items-center gap-6 w-full max-w-md mb-10">
          {eventBlocks.map((event, i) => (
            <motion.div
              key={`second-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full h-24 bg-pink-500 bg-opacity-90 rounded-lg shadow-xl flex items-center justify-center text-lg font-bold text-white glow-glass-effect backdrop-blur-sm"
            >
              {event}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer footerDetails={FooterContactDetailsACM} />
        </div>
      </div>
    </div>
  );
}
