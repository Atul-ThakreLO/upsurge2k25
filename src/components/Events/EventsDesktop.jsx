"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";

import { EventsDataDesktop } from "../../../data";
import SquidGameBackground from "./SquidGameBackground";
import EventCard from "./EventCard";

export default function EventsDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalEvents = EventsDataDesktop.length;

  const scrollLock = useRef(false);
  const cardRef = useRef(null);

  const animateCard = useCallback((newIndex, direction) => {
    if (scrollLock.current || newIndex === activeIndex) return;
    scrollLock.current = true;

    const fromY = direction === "next" ? 80 : -80;
    const toY = direction === "next" ? -80 : 80;

    gsap.to(cardRef.current, {
      opacity: 0,
      y: toY,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        setActiveIndex(newIndex);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: fromY },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => (scrollLock.current = false),
          }
        );
      },
    });
  }, [activeIndex]);

  const triggerChange = useCallback(
    (direction) => {
      const newIndex =
        direction === "next"
          ? (activeIndex + 1) % totalEvents
          : (activeIndex - 1 + totalEvents) % totalEvents;
      animateCard(newIndex, direction);
    },
    [activeIndex, totalEvents, animateCard]
  );

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      triggerChange(e.deltaY > 0 ? "next" : "prev");
    };

    const handleKey = (e) => {
      if (["ArrowDown", "ArrowRight"].includes(e.key)) triggerChange("next");
      if (["ArrowUp", "ArrowLeft"].includes(e.key)) triggerChange("prev");
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [triggerChange]);

  return (
    <div className="relative w-full flex items-center justify-center text-white">
      <SquidGameBackground />

      <div className="w-full max-w-[1200px] flex gap-8">
        {/* Event Navigation */}
        <nav className="hidden md:flex flex-col gap-4 w-1/4" aria-label="Event Navigation">
          {EventsDataDesktop.map(({ title, poster }, index) => {
            const isActive = activeIndex === index;
            const direction = index > activeIndex ? "next" : "prev";

            return (
              <button
                key={title}
                type="button"
                onClick={() => animateCard(index, direction)}
                className={`group flex items-center gap-3 text-left text-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-md ${
                  isActive
                    ? "bg-pink-500/20 text-pink-400 font-bold px-3 py-2 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="w-8 h-8 flex items-center justify-center">
                  {isActive && (
                    <img
                      src="/gif/dagchi.gif"
                      alt="active indicator"
                      className="w-8 h-8 object-cover rounded-lg animate-pulse drop-shadow-[0_0_6px_rgb(236,72,153)]"
                    />
                  )}
                </span>

                <span className="relative">
                  {title}
                  {!isActive && (
                    <img
                      src={poster}
                      alt={`${title} poster`}
                      className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-4 w-16 h-16 object-cover rounded-lg opacity-0 scale-95 
                                 group-hover:opacity-100 group-hover:scale-105 group-hover:rotate-1 
                                 transition-all duration-300 shadow-[0_0_12px_rgba(236,72,153,0.4)]"
                    />
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Active Event Card */}
        <div className="flex-1 flex justify-center items-center">
          <div ref={cardRef} className="w-full flex justify-center">
            <EventCard {...EventsDataDesktop[activeIndex]} />
          </div>
        </div>
      </div>
    </div>
  );
}