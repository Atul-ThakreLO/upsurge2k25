"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import RotateMask from "../Mask/rotate-mask";
import HeroDesktop from "./hero-desktop";
import HeroMobile from "./hero-mobile";
import RegisterButton from "../../ui/register-button";
import Link from "next/link";
import SmackathonSection from "../smackathon/smackathon-section";
import { usePathname } from "next/navigation";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
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

  const pathname = usePathname();

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Page restored from cache → force recalculation
        ScrollTrigger.refresh(true);
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // scroll animation
  useGSAP(() => {
    if (pathname !== "/") return;
    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars?.id?.startsWith("hero-")) t.kill();
    });
    if (tlRef.current) tlRef.current.kill();

    const fixedContainer = fixedContainerRef.current;
    const scrollingContainer = scrollingContainerRef.current;
    const container = containerRef.current;

    if (!fixedContainer || !scrollingContainer) return;
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        id: "hero-main",
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

    // tlRef.current.fromTo(
    //   scrollingContainer,
    //   {
    //     y: "100vh",
    //     // opacity: 0.9,
    //   },
    //   {
    //     y: "0vh",
    //     // opacity: 1,
    //     ease: "none",
    //     duration: 1,
    //   }
    // );

    [bgRef.current, mainCharRef.current].forEach((item, i) => {
      if (window.innerWidth < 768) return;
      tlRef.current.to(item, {
        duration: 0.5,
        scale: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          id: `hero-scale-${i}`,
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 3,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

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
        // left: `25%`,
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
    <div ref={containerRef} className="h-[200vh] md:h-[210vh]">
      <div ref={fixedContainerRef} className="relative h-[100vh]">
        <div className="block md:hidden">
          <HeroMobile />
        </div>
        <div className="hidden md:block">
          <HeroDesktop ref={{ bgRef, mainCharRef }} />
        </div>
      </div>
      <div
        ref={scrollingContainerRef}
        // style={{ transform: "translateY(100vh)" }}
        className="h-[100vh] md:h-[110vh] relative rounded-tl-3xl rounded-tr-3xl p-10 w-full bg-no-repeat bg-cover bg-center bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1753982566/smackathon-section-bg_cvaumo.webp')] text-white"
      >
        <div className="absolute z-[1] w-full h-full left-0 top-0 bg-gradient-to-b from-black/70 via-black/50 to-black/100"></div>
        <SmackathonSection />
      </div>
    </div>
  );
};

export default Hero;
