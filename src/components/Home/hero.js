"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import RotateMask from "./Mask/rotate-mask";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainCharRef = useRef(null);
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const fixedContainerRef = useRef(null);
  const scrollingContainerRef = useRef(null);
  const tlRef = useRef(null);

  // scroll animation
  useGSAP(() => {
    const fixedContainer = fixedContainerRef.current;
    const scrollingContainer = scrollingContainerRef.current;
    const container = containerRef.current;

    if (!fixedContainer || !scrollingContainer) return;

    // Create timeline for better performance
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
        pin: fixedContainer, // Pin the fixed container
        pinSpacing: false, // Don't add extra spacing
        invalidateOnRefresh: true, // Recalculate on window resize
        fastScrollEnd: true, // Optimize for fast scrolling
      },
    });

    tlRef.current.fromTo(
      scrollingContainer,
      {
        y: "100vh",
        // opacity: 0.9,
      },
      {
        y: "0vh",
        // opacity: 1,
        ease: "none",
        duration: 1,
      }
    );

    [bgRef.current, mainCharRef.current].forEach((item) => {
      tlRef.current.to(item, {
        duration: 0.5,
        scale: 1.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "50% bottom",
          end: "bottom top",
          scrub: 3,
        },
      });
    });


    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Hero animation
  useGSAP(() => {
    // const main = document.querySelector(".main");

    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseStopTimer = null;
    const MOUSE_IDLE_DELAY = 100;

    const checkMouseStopped = (currentX, currentY) => {
      // Clear existing timer
      if (mouseStopTimer) {
        clearTimeout(mouseStopTimer);
      }

      // Check if mouse position has changed
      if (lastMouseX === currentX && lastMouseY === currentY) {
        return; // Mouse hasn't moved, don't restart timer
      }

      // Update last known position
      lastMouseX = currentX;
      lastMouseY = currentY;

      // Set new timer to reset after idle delay
      mouseStopTimer = setTimeout(() => {
        gsap.to(".name", {
          x: 0,
          y: 0,
        });
        gsap.to(".name1", {
          x: 0,
          y: 0,
        });
      }, MOUSE_IDLE_DELAY);
    };

    containerRef.current?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 5;

      gsap.to(mainCharRef.current, {
        x: `${xMove * 0.4}%`,
        // rotateX: -yMove * 10,
        y: -yMove * 10,
      });
      gsap.to(".name", {
        x: xMove,
        y: -yMove * 5,
      });
      gsap.to(".name1", {
        x: xMove * 0.5,
        y: -yMove * 5,
      });
      gsap.to(bgRef.current, {
        x: xMove * 1.7,
        // rotateX: -yMove * 10,
        y: -yMove * 10,
      });

      checkMouseStopped(e.clientX, e.clientY);
    });

    return () => {
      if (mouseStopTimer) {
        clearTimeout(mouseStopTimer);
      }
    };
  }, []);
  return (
    <div ref={containerRef}>
      <div ref={fixedContainerRef} className="relative">
        {/* <Image
      className="w-screen h-screen object-cover"
        src="/Frame1.png"
        alt="Next.js logo"
        width={1000}
        height={1000}
        priority
      /> */}
        <div className="absolute z-50 w-full">
          <div className="w-[90%] mt-5 mx-auto flex justify-between items-center">
            {/* <h1 className="font-squid text-2xl leading-5 text-white">
            <p>squid</p> <p className="ml-5">game</p>
          </h1> */}
            <div>
              <Image
                className=""
                src="/sglogo.png"
                alt="Next.js logo"
                width={150}
                height={150}
                priority
              />
            </div>
            <div>
              <Image
                className=""
                src="/Logo.svg"
                alt="Next.js logo"
                width={50}
                height={50}
                priority
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] relative overflow-hidden  h-screen">
          <div
            ref={bgRef}
            className="bg scale-[1.1] h-screen w-[100%] object-cover bg-[url('/bg-back-ex.jpg')] bg-no-repeat bg-center bg-position-[center_bottom_-10rem bg-cover"
          >
            {/* <h1 className="font-squid text-8xl mt-10 leading-16 tracking-[2.5rem] text-center text-white">
          <p>squid</p> <p className="ml-[25%">game</p>
        </h1> */}

            {/* <Image
          className="main object-cover absolute bottom-0 scale-[1.1] left-[50%] -translate-x-1/2"
          src="/bg-main_upscaled.png"
          alt="Next.js logo"
          width={800}
          height={1000}
          priority
        /> */}
          </div>
          {/* <div  className="main bg-[url('/bg-main_upscaled.png')] bg-blac h-1/2 w-1/2 object-cover absolute bottom-3 scale-[1.1] left-[50%] -translate-x-1/2"></div> */}
          <Image
            ref={mainCharRef}
            className="main object-cover absolute bottom-3 scale-[1.1] left-[50%] -translate-x-1/2"
            style={{ transformStyle: "preserve-3d" }}
            src="/bg-main_upscaled.png"
            alt="Next.js logo"
            width={800}
            height={1000}
            priority
          />
          <div>
            <h1 className="name2 font-squid text-6xl leading-16 text-center text-[#EF428C text-pink-800 opacity- absolute bottom-7 left-1/2 -translate-x-1/2">
              upsurge <br /> <span className="ml-64">2k25</span>
            </h1>
            <h1 className="name1 font-squid text-6xl leading-16 text-center text-[#85073d] opacity-70 absolute bottom-7 left-1/2 -translate-x-1/2">
              upsurge <br /> <span className="ml-64">2k25</span>
            </h1>
            <h1 className="name font-squid text-6xl leading-16 text-center text-white absolute bottom-7 left-1/2 -translate-x-1/2">
              upsurge <br /> <span className="ml-64">2k25</span>
            </h1>
          </div>
        </div>
      </div>
      <div
        ref={scrollingContainerRef}
        className="h-[170vh] rounded-tl-3xl rounded-tr-3xl p-10 w-full bg-black text-white"
      >
        <div className="text-center">
          <h1 className="text-6xl font-squid mt-16 underline">Smackathon</h1>
          <p className="mt-5">
            A <span className="text-xl font-squid mx-3">24 Hrs</span> Hackathon
          </p>
          <RotateMask />
          <p className="w-[50%] mx-auto text-justif mt-10">
            Are you ready to innovate, collaborate, and push the boundaries of
            technology? Join us for an exhilarating 24-hour hackathon where
            brilliant minds converge to solve real-world problems and build
            amazing projects from scratch! Click Register to register now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
