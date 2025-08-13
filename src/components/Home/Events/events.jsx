"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { EventsDataMobile } from "../../../../data.js";
import EventCard from "./event-card.jsx";
import Guards3d from "./model/guards-3d.jsx";
import ModelCanvas from "../../utils/model-canvas.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const shapes = [
  { src: "/events/circle.png", alt: "circle" },
  { src: "/events/triangle.png", alt: "triangle" },
  { src: "/events/circle.png", alt: "square" },
];

const Events = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // const [isVisible, setIsVisible] = useState(false)

  const fixedContainerRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const timeLine = useRef(null);
  const cardsRef = useRef([]);
  const shapesRef = useRef(null);
  const squareRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      [titleRef.current, subTitleRef.current],
      {
        y: 100,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play reset resume reset",
        },
      }
    );

    gsap.to(shapesRef.current, {
      gap: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 45%",
        toggleActions: "play reset resume reset",
      },
    });

    gsap.set(overlayRef.current, {
      height: "100%",
    });

    gsap.to(overlayRef.current, {
      height: "0%",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top -110%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const randomRotation = (Math.random() - 0.5) * 16;
      const randomX = (Math.random() - 0.5) * 60;
      const randomScale = 0.95 + Math.random() * 0.1;

      gsap.set(card, {
        scale: 0.9,
        filter: "blur(10px) grayscale(100%) brightness(50%)",
        y: 500,
      });

      gsap.to(card, {
        y: 0,
        filter: "blur(0px) grayscale(0%) brightness(100%)",
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.to(card, {
        rotation: randomRotation,
        x: randomX,
        scale: randomScale,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    ScrollTrigger.create({
      trigger: fixedContainerRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
      // onEnter: () => setIsVisible(true),
      // onLeave: () => setIsVisible(false),
    });
  }, []);

  return (
    <section ref={containerRef} className="bg-black w-full max-w-screen">
      <div className=" relative text-white text-center h-screen flex flex-col pt-[200px] md:pt-[200px] justify-around items-center bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1754644020/event-bg_upscaled_uopwtk.jpg')]">
        <div className="absolute z-[1] w-full h-full left-0 top-0 bg-gradient-to-b from-black/100 via-black/70 to-black/100"></div>
        <div className="relative z-[2]">
          <h3
            ref={titleRef}
            className="text-6xl md:text-7xl font-squid opacity-0"
          >
            Events
          </h3>
          <p
            ref={subTitleRef}
            className="text-4xl md:text-5xl font-mono mt-10 md:mt-5 opacity-0"
          >
            Now the game begins.....
          </p>
        </div>
        <div
          ref={shapesRef}
          className="relative z-[2] flex items-center justify-center gap-52 w-screen overflow-hidden"
        >
          {shapes.map((shape, i) => (
            <Image
              key={i}
              src={shape.src}
              alt={shape.alt}
              width={100}
              height={100}
              className="h-14 w-14 md:h-28 md:w-28 aspect-square"
            />
          ))}
        </div>
      </div>
      <div className="relative grid grid-cols-1 gap-5 md:grid-cols-7 md:pb-[200px]">
        <div className="sticky col-span-7 top-0 w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/neon-landscape-background_53876-91662.jpg?semt=ais_hybrid&w=740&q=80')]">
          <div className="w-full h-full bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
        </div>
        <div
          ref={fixedContainerRef}
          className="col-span-3 w-full pt-[250px pb-[75px] hidden md:block"
        >
          <div className="w-full h-[500px] sticky top-[15%] flex justify-center">
            <ModelCanvas path={"/3d/squid_game_-_guards.glb"}>
              <Guards3d
                modelPath={"/3d/squid_game_-_guards.glb"}
                onError={(error) => {
                  console.warn("Mask loading failed:", error);
                }}
                scrollProgress={scrollProgress}
              />
            </ModelCanvas>
          </div>
        </div>
        <div className="col-span-7 md:col-span-4 flex flex-wrap flex-col gap-40 md:gap-20 px-14 md:px-20">
          {EventsDataMobile.map((event, i) => (
            <div
              key={event.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card-wrapper w-full h-[55vh] md:h-[500px] bg-black border-[10px] md:border-[15px] shadow-2xl border-white sticky top-[15%] z-[2]"
            >
              <EventCard
                poster={event.image}
                title={event.title}
                id={event.title}
                description={event.description}
                i={i}
              />
            </div>
          ))}
          <div
            ref={(el) => (cardsRef.current[EventsDataMobile.length] = el)}
            className="card-wrapper overflow-hidden w-full h-[500px] bg-transparent rounded-2xl sticky top-[10%] md:top-[15%] z-[1]"
          />
          <div
            ref={(el) => (cardsRef.current[EventsDataMobile.length + 1] = el)}
            className="card-wrapper overflow-hidden w-full h-[500px] bg-transparent rounded-2xl sticky top-[10%] md:top-[15%] z-[1]"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
