"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import RotateMask from "./Mask/rotate-mask";
import HeroDesktop from "./hero-desktop";
import HeroMobile from "./hero-mobile";

const Hero = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   console.log(window.innerWidth);

  //   const checkDevice = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   checkDevice();
  //   window.addEventListener("resize", checkDevice);
  //   return () => window.removeEventListener("resize", checkDevice);
  // }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////// Animation /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////

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
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: fixedContainer,
        pinSpacing: false,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
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
      if (window.innerWidth < 768) return;
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
    if (window.innerWidth < 768) return;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseStopTimer = null;
    const MOUSE_IDLE_DELAY = 100;

    const checkMouseStopped = (currentX, currentY) => {
      if (mouseStopTimer) {
        clearTimeout(mouseStopTimer);
      }

      if (lastMouseX === currentX && lastMouseY === currentY) {
        return;
      }

      lastMouseX = currentX;
      lastMouseY = currentY;

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
        left: `25%`,
        x: `${xMove * 0.4}%`,
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
        <div className="block md:hidden">
          <HeroMobile />
        </div>
        <div className="hidden md:block">
          <HeroDesktop ref={{ bgRef, mainCharRef }} />
        </div>
      </div>
      <div
        ref={scrollingContainerRef}
        className="h-[170vh] rounded-tl-3xl rounded-tr-3xl p-10 w-full bg-black text-white"
      >
        <div className="text-center">
          <h1 className="md:text-6xl font-squid mt-16 underline">Smackathon</h1>
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
