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
  const titleRef = useRef(null);
  const subTextRef = useRef(null);

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

  useEffect(() => {
    const el = envelopeRef.current;
    const title = titleRef.current;
    const sub = subTextRef.current;
    gsap.fromTo(
      el,
      {
        scale: 0.8,
        x: -10,
        opacity: 0,
      },
      {
        scale: 1,
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        onComplete: () => {
          gsap.fromTo(
            el,
            { rotateZ: 5 },
            {
              rotateZ: -5,
              duration: 0.1,
              repeat: 3,
              yoyo: true,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to(el, {
                  rotateZ: 0,
                });
                // if (!isOpen && timelineRef.current) {
                //   timelineRef.current.play();
                // }
              },
            }
          );
        },
      }
    );

    gsap.fromTo(
      [title, sub],
      {
        y: 50,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: title,
          start: "70% 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <section className="relative font-[Orbitron] bg-no-repeat bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOdOfFc-GwOhmbBa33YGokx9esPlKj32QvQ&s')] py-10 ">
        <div className="absolute inset-0 top-0 bg-gradient-to-b from-15% from-black  to-transparent z-[1]" />
        <div className="absolute inset-0 top-0 bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="py-10 text-white text-center w-full relative z-[2]">
          <p ref={titleRef} className="text-5xl">
            Brochure
          </p>
          <p
            ref={subTextRef}
            className="mt-3 flex justify-center tracking-widest gap-2"
          >
            Click <span className="hidden md:block">or Hover</span> to open
          </p>
        </div>
        <div className=" w-full flex justify-center items-end pb-16 mt-16">
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
                <a
                  href="https://drive.google.com/file/d/11ZpL3jMTWOpPBHzWPvKqGIAidJImhqV_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-pink-700 cursor-pointer hover:bg-pink-800 py-1 px-3 rounded-lg mt-2">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brochure;
