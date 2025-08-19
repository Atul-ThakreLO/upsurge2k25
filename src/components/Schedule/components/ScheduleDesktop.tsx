"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { eventBlocksDay2desktop, eventBlocksdesktop } from "../../../../data";
import Footer from "./footer";
import { FooterContactDetailsCosmos } from "../../../../data";

export default function SquidStepScene() {
  const [scrollY, setScrollY] = useState(0);
  const [smoothedScroll, setSmoothedScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="relative min-h-screen bg-black text-white">
      {/* Day 1 Header */}
      <div className="absolute top-[10vh] left-0 z-50 w-full text-center mb-10 mt-10 ml-40">
        <h1 className="text-6xl md:text-5xl font-bold font-[Orbitron] text-pink-600/90">
          1 - 일차
        </h1>
        <h2 className="text-4xl mt-2 font-[Orbitron] text-gray-200">Day - 1</h2>
      </div>

      {/* Character */}
      <div className="absolute right-10 top-[60vh] z-30">
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
            width={300}
            height={450}
            className="object-contain"
            style={{
              filter: "drop-shadow(0px 50px 50px #deabba)",
            }}
          />
        </motion.div>
      </div>

      {/* Guy Image*/}
      <div className="relative w-full min-h-[350vh] bg-black overflow-visible">
        {/* Guy Image */}
        <div className="absolute left-30 top-[230vh] z-30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
            className="w-[300px] h-auto"
          >
            <Image
              src="https://res.cloudinary.com/dhzjs2xvo/image/upload/v1754643470/guy-min_xj4jgc.png"
              alt="Left Visual"
              width={300}
              height={450}
              className="object-contain"
              style={{ filter: "drop-shadow(0px 50px 50px #deabba)" }}
            />
          </motion.div>
        </div>

        {/* Day 2 Content */}
        <div className="absolute left-[400px] top-[160vh] z-[40] text-white p-4">
          <div className="text-center mb-20 mt-60 ml-20">
            <h1 className="text-6xl md:text-5xl font-bold font-[Orbitron] text-pink-600/90">
              2 - 일차
            </h1>
            <h2 className="text-4xl mt-2 font-[Orbitron] text-gray-200">
              Day - 2
            </h2>
          </div>
        </div>
      </div>

      {/* Step Blocks */}
      <div className="absolute top-[40vh] left-50 z-20 flex flex-col gap-15 w-[40vw]">
        {eventBlocksdesktop.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            className={`px-6 py-4 bg-pink-500 rounded-2xl shadow-2xl 
                  font-bold text-lg text-white shadow-pink-500/50 glow-glass-effect animate-glow
                  ${i % 2 === 0 ? "self-start" : "self-end"}`}
          >
            {event}
          </motion.div>
        ))}
      </div>

      {/* RIGHT STAIRCASE - Mirrored Blocks */}

<div className="absolute top-[225vh] right-60 z-20 flex flex-col gap-18 w-[40vw]">
  {eventBlocksDay2desktop.map((event, i) => {
    return (
      <motion.div
        key={`right-${i}`}
        initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
        className={`px-6 py-4 bg-pink-500 rounded-2xl shadow-2xl 

                    font-bold text-lg text-white shadow-pink-500/50 glow-glass-effect animate-glow
                    ${i % 2 === 0 ? "self-end" : "self-start"}`}
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
            willChange: "transform",
          }}
          className="relative w-full h-[520vh]"
        >
          <Image
            src="/Schedule/transition.webp"
            alt="Squid Game Scene"
            fill
            objectFit="cover"
            quality={100}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      {/* Footer Overlayed */}
      <div className="relative w-full bottom-0 z-50">
        <Footer footerDetails={FooterContactDetailsCosmos} />
      </div>
    </div>
  );
}
