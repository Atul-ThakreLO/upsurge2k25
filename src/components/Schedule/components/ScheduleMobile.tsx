'use client';

import { eventBlocks } from '../../../../data';
import Footer from './footer';
import { FooterContactDetailsACM } from '../../../../data';
import Image from 'next/image';

export default function SquidStepScene() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute top-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754649584/background1_yjghao.jpg"
          alt="Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover opacity-90"
          style={{
            objectPosition: 'center top',
            filter: 'blur(2px)',
          }}
        />
        {/* Adding an overlay on the background image */}
        <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
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
        <Image
          src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643470/girl-min_ygo0s5.png"
          alt="Character"
          width={160}
          height={240}
          priority
          sizes="(max-width: 768px) 50vw, 160px"
          className="w-40 h-auto object-contain"
        />

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
        <Image
          src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643470/guy-min_xj4jgc.png"
          alt="Guy"
          width={160}
          height={240}
          priority
          sizes="(max-width: 768px) 50vw, 160px"
          className="w-40 h-auto object-contain"
        />

        {/* Second Set of Event Blocks */}
        <div className="flex flex-col items-center gap-6 w-full max-w-md mb-10">
          {eventBlocks.map((event, i) => (
            <div
              key={i}
              className="w-full h-24 rounded-lg shadow-xl flex items-center justify-center text-lg font-bold text-white glow-glass-effect-mobile"
            >
              {event}
            </div>
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
