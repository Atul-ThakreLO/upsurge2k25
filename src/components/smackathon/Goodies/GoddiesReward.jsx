"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { goodiesReward } from "../../../../data";

gsap.registerPlugin(ScrollTrigger);

const GoodiesRewards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef);

    gsap.from(q(".reward-line"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-4 text-white">
      {goodiesReward.map((text, index) => (
        <div key={index} className="reward-line flex items-center space-x-3">
          <div className="relative w-6 h-6">
            <Image
              src="/gif/bullet.gif"
              alt={`mask-${index}`}
              width={52}
              height={52}
              unoptimized
              style={{ objectFit: "contain" }}
            />
          </div>
          <span>
            <strong>{text}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};

export default GoodiesRewards;
