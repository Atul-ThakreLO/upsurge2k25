'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { eventBlocks } from '../../../../data';
import Footer from './footer';
import { FooterContactDetailsACM } from '../../../../data';

export default function SquidStepScene() {
  const [scrollY, setScrollY] = useState(0);
  const [smoothedScroll, setSmoothedScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const smoothScroll = () => {
      setSmoothedScroll((prev) => {
        const delta = (scrollY - prev) * 0.1;
        return prev + delta;
      });
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollY]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Day 1 Header */}
      <div className="absolute top-[20vh] left-0 z-50 w-full text-center mb-10 mt-10 ml-40">
        <h1 className="text-6xl md:text-5xl font-bold font-[Orbitron] text-pink-600/90">
          1 - 일차
        </h1>
        <h2 className="text-4xl mt-2 font-[Orbitron] text-gray-200">Day - 1</h2>
      </div>

      {/* Character */}
      <div className="absolute right-10 top-[20vh] z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="w-[300px] h-auto"
        >
          <Image
            src="/Schedule/girl.png"
            alt="Character"
            width={300}
            height={450}
            className="object-contain"
            style={{
              filter: 'drop-shadow(0px 50px 50px #deabba)',
            }}
          />
        </motion.div>
      </div>

      {/* Guy Image on the left */}
      <div className="relative w-full min-h-[300vh] bg-black overflow-visible">
        {/* Guy Image */}
        <div className="absolute left-10 top-[95vh] z-30">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
            className="w-[300px] h-auto"
          >
            <Image
              src="/Schedule/guy.png"
              alt="Left Visual"
              width={300}
              height={450}
              className="object-contain"
              style={{ filter: 'drop-shadow(0px 50px 50px #deabba)' }}
            />
          </motion.div>
        </div>

        {/* Day 2 Content */}
        <div className="absolute left-[400px] top-[75vh] z-[40] text-white p-4">
          <div className="text-center mb-20 mt-60 ml-20">
            <h1 className="text-6xl md:text-5xl font-bold font-[Orbitron] text-pink-600/90">
              2 - 일차
            </h1>
            <h2 className="text-4xl mt-2 font-[Orbitron] text-gray-200">Day - 2</h2>
          </div>
        </div>
      </div>

      {/* Step Blocks */}
      <div className="absolute top-[10vh] left-0 z-20 perspective-1000">
        <div className="absolute top-[30vh] left-10 z-20">
          {eventBlocks.map((event, i) => {
            const mt = i * 10;
            const ml = i * 300;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
                style={{
                  marginTop: `${mt}px`,
                  marginLeft: `${ml}px`,
                }}
                className="w-64 h-24 bg-pink-500 rounded-lg shadow-2xl flex items-center justify-center font-bold text-lg text-white shadow-pink-500/50 glow-glass-effect animate-glow"
              >
                {event}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* RIGHT STAIRCASE - Mirrored Blocks */}
      <div className="absolute top-[130vh] right-80 z-20 perspective-1000">
        {eventBlocks.map((event, i) => {
          if (!event || i === 5) return null;
          const mt = i * 10;
          const mr = i * 306;

          return (
            <motion.div
              key={`right-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
              style={{
                marginTop: `${mt}px`,
                marginRight: `${mr}px`,
              }}
              className="w-64 h-24 bg-pink-500 rounded-lg shadow-2xl flex items-center justify-center font-bold text-lg text-white ml-auto shadow-pink-500/50 glow-glass-effect animate-glow"
            >
              {event}
            </motion.div>
          );
        })}
      </div>

      {/* Background Parallax */}
      <div className="absolute top-0 w-full h-full z-10 pointer-events-none">
        <div
          style={{
            transform: `translateY(${smoothedScroll * -0.2}px)`,
            willChange: 'transform',
          }}
          className="relative w-full h-[350vh]"
        >
          <Image
            src="/Schedule/transition.png"
            alt="Squid Game Scene"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Footer Overlayed */}
      <div className="absolute bottom-0 w-full z-50">
        <Footer footerDetails={FooterContactDetailsACM} />
      </div>
    </div>
  );
}
