"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SquidGameBackground from "../../components/Events/SquidGameBackground";
import EventsDesktop from "../../components/Events/EventsDesktop";
import EventsMobile from "../../components/Events/EventsMobile";

gsap.registerPlugin(ScrollTrigger);

const EventsPage = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isDesktop === null) return; // Wait until we know screen type

    gsap.from(".page-title", {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    if (!isDesktop) {
      ScrollTrigger.batch(".event-card", {
        start: "top 90%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
            }
          ),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          }),
        onLeave: (batch) =>
          gsap.to(batch, {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
          }),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen py-14 flex flex-col items-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <SquidGameBackground />
      </div>

      <h1
        className="page-title font-squid text-5xl md:text-7xl font-extrabold pt-10 md:pt-0 mb-5 md:mb-9 text-transparent tracking-wide relative [text-shadow:
          0_0_2px_rgb(236_72_153),
          0_0_5px_rgb(236_72_153),
          0_0_10px_rgb(219_39_119),
          0_0_15px_rgb(219_39_119),
          0_0_20px_rgb(190_24_93),
          0_0_30px_rgb(190_24_93)
        ]"
        style={{
          WebkitTextStroke: "1px #E62163",
          textStroke: "1px #E62163",
        }}
        aria-label="Events"
      >
        Events
      </h1>

      {isDesktop === null ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center text-pink-500">
          <img
            src="/gif/frontman.gif"
            alt="Frontman"
            className="w-40 h-40 object-cover rounded-lg drop-shadow-[0_0_10px_rgb(236,72,153)] animate-pulse"
          />
          <p className="text-lg font-extrabold tracking-wide animate-bounce">
            Preparing the Arena...
          </p>
          <p className="text-sm text-gray-400 animate-pulse">
            Loading upcoming challenges & games
          </p>
        </div>
      ) : isDesktop ? (
        <EventsDesktop />
      ) : (
        <EventsMobile />
      )}
    </div>
  );
};

export default EventsPage;
