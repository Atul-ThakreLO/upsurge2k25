"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RotatingHeader = () => {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useEffect(() => {
    const rotateAnim = (element) => {
      return gsap.to(element, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 0.1,
        },
      });
    };

    const leftTL = rotateAnim(leftImgRef.current);
    const rightTL = rotateAnim(rightImgRef.current);

    return () => {
      leftTL.kill();
      rightTL.kill();
    };
  }, []);

  return (
    <div className="relative w-full pt-5 flex justify-center items-center md:mx-0">
      <img
        ref={leftImgRef}
        src="/img/rotate-blue.png"
        alt="start icon"
        className="w-10 h-10 mr-2 md:w-12 md:h-12 md:mr-4"
      />
      <h1 className="text-2xl md:text-6xl text-center font-mono md:font-sans font-bold text-white relative">
        Exclusive Goods From Cojag and Unstop
      </h1>
      <img
        ref={rightImgRef}
        src="/img/rotate-red.png"
        alt="end icon"
        className="w-10 h-10 ml-2 md:w-12 md:h-12 md:ml-4"
      />
    </div>
  );
};

export default RotatingHeader;
