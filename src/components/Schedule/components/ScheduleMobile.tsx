"use client";

import { eventBlocks, eventBlocksDay2 } from '../../../../data';
import Footer from './footer';
import { FooterContactDetailsCosmos } from '../../../../data';
import Image from 'next/image';
import {motion} from 'framer-motion'
export default function SquidStepScene() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754649584/background1_yjghao.jpg"
          alt="Background"
          width={600}
          height={600}
          priority
          className="w-full h-full object-cover opacity-90"
          style={{
            objectPosition: "center top",
            filter: "blur(2px)",
          }}
        />
        {/* Adding an overlay on the background image */}
        <div className="absolute top-0 w-full h-full bg-black opacity-60"></div>
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
        <div className="relative w-40 h-auto object-contain">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="w-[300px] h-auto"
          >
            <Image
              src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643470/girl-min_ygo0s5.png"
              alt="Character"
              width={160}
              height={240}
              className="object-contain"
              style={{
                filter: "drop-shadow(0px 50px 50px #deabba)",
              }}
            />
          </motion.div>
        </div>

        {/* Event Blocks */}
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          {eventBlocks.map((event, i) => (
            <div
              key={i}
              className="w-full h-24 rounded-lg shadow-xl flex items-center justify-center text-lg font-bold text-white glow-glass-effect-mobile"
            >
              {event}
            </div>
          ))}
        </div>

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
        <div className="relative w-40 h-auto object-contain">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="w-[300px] h-auto"
          >
            <Image
              src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643470/guy-min_xj4jgc.png"
              alt="Guy"
              width={160}
              height={240}
              className="object-contain"
              style={{
                filter: "drop-shadow(0px 50px 50px #deabba)",
              }}
            />
          </motion.div>
        </div>

        {/* Second Set of Event Blocks */}
        <div className="flex flex-col items-center gap-6 w-full max-w-md mb-10">
          {eventBlocksDay2.map((event, i) => (
            <div
              key={i}
              className="w-full h-24 rounded-lg shadow-xl flex items-center justify-center text-lg font-bold text-white glow-glass-effect-mobile"
            >
              {event}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full !px-0 !mx-0">
        <Footer footerDetails={FooterContactDetailsCosmos} />
      </div>

      <style jsx>{`
        /* Mobile Optimization */
        @media (max-width: 768px) {
          .glow-effect {
            animation: float 5s ease-in-out infinite,
              glow 2s ease-in-out infinite;
          }

          /* Mobile Glow: reduce intensity */
          @keyframes glow {
            0%,
            100% {
              box-shadow: 0 0 8px #deabba, 0 0 15px #deabba;
            }
            50% {
              box-shadow: 0 0 12px #deabba, 0 0 20px #deabba;
            }
          }
        }
      `}</style>
    </div>
  );
}
