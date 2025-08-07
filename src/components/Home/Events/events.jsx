"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const Events = () => {
  const fixedContainerRef = useRef(null);
  const containerRef = useRef(null);
  const timeLine = useRef(null);

//   useGSAP(() => {
//     timeLine.current = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//         pin: fixedContainerRef.current,
//         pinSpacing: false,
//         invalidateOnRefresh: true,
//         fastScrollEnd: true,
//       },
//     });

//     return () => {
//       if (tlRef.current) {
//         tlRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };

//     // timeLine.current.fromTo();
//   }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black w-full py-32 h-[200vh]"
    >
      <div ref={fixedContainerRef} className="">
        <Image src="/timeline/grain.png" width={500} height={500} alt="bg" />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Events;
