"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./brochure.css";

const Brochure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const envelopeRef = useRef(null);
  const lidOneRef = useRef(null);
  const lidTwoRef = useRef(null);
  const brochureCard = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });
    gsap.set(lidOneRef.current, { rotateX: 0, transformOrigin: "top" });
    gsap.set(lidTwoRef.current, { rotateX: 80, transformOrigin: "top" });
    gsap.set(brochureCard.current, { y: 0, position: "absolute", zIndex: 2 });

    timelineRef.current
      .to(lidOneRef.current, {
        rotateX: 90,
        duration: 0.25,
        ease: "power2.out",
      })
      .to(lidOneRef.current, {
        opacity: 0,
        duration: 0.1,
      })
      .to(
        lidTwoRef.current,
        {
          rotateX: 180,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .to(
        brochureCard.current,
        {
          y: -200,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .to(brochureCard.current, {
        position: "relative",
        zIndex: 10,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isOpen && timelineRef.current) {
      timelineRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isOpen && timelineRef.current) {
      timelineRef.current.reverse();
    }
  };

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);

    if (timelineRef.current) {
      if (!isOpen) {
        // Opening - play the animation
        timelineRef.current.play();
      } else {
        // Closing - reverse the animation
        timelineRef.current.reverse();
      }
    }
  };

  return (
    <>
      <section className="relative">
        {/* <div className="h-full w-full absolute top-0 bg-gradient-to-b from-black from-5% to-transparent z-[1]" /> */}
        <div className="h-[70vh] w-full flex justify-center items-end pb-28 font-[Orbitron] bg-black">
          <div
            ref={envelopeRef}
            className="envelope-wrapper relative z-10 flex justify-center cursor-pointer select-none"
            onClick={toggleEnvelope}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={lidOneRef} className="lid lid-one" />
            <div ref={lidTwoRef} className="lid lid-two" />
            <div className="envelope-body" />
            <div ref={brochureCard} className="brochureCard">
              <div className="p-4 h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  Brochure
                </h3>
                <p className="text-sm md:text-base text-white/90 drop-shadow-md">
                  Click to Download
                </p>
                <button className="bg-pink-700 hover:bg-pink-800 py-1 px-3 rounded-lg mt-2">Download</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brochure;
