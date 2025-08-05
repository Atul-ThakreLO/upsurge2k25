"use client";

// Imports
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Prizepool.module.css";
import GlitchText from "./GlitchText";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images from the public directory
const backgroundImageUrl = "/smackathon-assets/bg.png";
const circleIconUrl = "/smackathon-assets/circleg.png";
const squareIconUrl = "/smackathon-assets/squareg.png";
const triangleIconUrl = "/smackathon-assets/triangleg.png";

export default function Prizepool() {
  const contentRef = useRef(null);
  const prizePoolRef = useRef(null);
  const prizePoolAmountRef = useRef(null);
  const victoryQuoteRef = useRef(null);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);
  const chooseQuoteRef = useRef(null);
  const cashPrizeRef = useRef(null);
  const certificateRef = useRef(null);

  useEffect(() => {
    const countUp = (element, targetValue) => {
      let obj = { val: 0 };
      gsap.to(obj, {
        val: targetValue,
        duration: 1.2,
        ease: "power3.out",
        onUpdate: () => {
          element.textContent = "₹" + Math.floor(obj.val).toLocaleString();
        },
      });
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Set initial state
    gsap.set(
      [
        prizePoolRef.current,
        victoryQuoteRef.current,
        chooseQuoteRef.current,
        firstCardRef.current,
        secondCardRef.current,
        thirdCardRef.current,
        cashPrizeRef.current,
        certificateRef.current,
      ],
      { opacity: 0 }
    );

    gsap.set([victoryQuoteRef.current, chooseQuoteRef.current], {
      clipPath: "inset(0 100% 0 0)",
    });

    gsap.set(
      [firstCardRef.current, secondCardRef.current, thirdCardRef.current],
      {
        scale: 0.8,
        rotation: 5,
      }
    );

    gsap.set([cashPrizeRef.current, certificateRef.current], {
      rotationX: -90,
      transformPerspective: 800,
      transformOrigin: "center top",
    });

    // Neon Glow Pulse animation
    const glowPulse = (target, delay = 0, color = "rgba(255, 215, 0, 0.6)") => {
      gsap.to(target, {
        boxShadow: `0 0 20px 6px ${color}`,
        scale: 1.03,
        duration: 1.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    };

    // Floating effect for PRIZE POOL only
    const float = (target, delay = 0) => {
      gsap.to(target, {
        y: "+=12",
        duration: 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    };

    // Animation timeline
    tl.to(prizePoolRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "expo.out",
      onStart: () => {
        countUp(prizePoolAmountRef.current, 30000);
      },
    })
      .to(
        victoryQuoteRef.current,
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.7,
          ease: "expo.out",
        },
        "+=0.1"
      )
      .to(
        firstCardRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          onStart: () => {
            const el = firstCardRef.current.querySelector(".prize-amount");
            countUp(el, 15000);
          },
          onComplete: () =>
            glowPulse(firstCardRef.current, 0.3, "rgba(255, 215, 0, 0.6)"), // Gold
        },
        "+=0.3"
      )
      .to(
        secondCardRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          onStart: () => {
            const el = secondCardRef.current.querySelector(".prize-amount");
            countUp(el, 10000);
          },
          onComplete: () =>
            glowPulse(secondCardRef.current, 0.5, "rgba(192, 192, 192, 0.6)"), // Silver
        },
        "-=0.5"
      )
      .to(
        thirdCardRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          onStart: () => {
            const el = thirdCardRef.current.querySelector(".prize-amount");
            countUp(el, 5000);
          },
          onComplete: () =>
            glowPulse(thirdCardRef.current, 0.7, "rgba(205, 127, 50, 0.6)"), // Bronze
        },
        "-=0.5"
      )
      .to(
        chooseQuoteRef.current,
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.6,
          ease: "expo.out",
        },
        "+=0.15"
      )
      .to(
        cashPrizeRef.current,
        {
          opacity: 1,
          rotationX: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "+=0.2"
      )
      .to(
        certificateRef.current,
        {
          opacity: 1,
          rotationX: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "+=0.05"
      );

    // Only floating for prize pool heading
    float(prizePoolRef.current, 1.5);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImageUrl}
          alt="Cyberpunk arena"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/100"></div>
        <div className="absolute inset-0 cyber-grid"></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative mt-16 z-10 flex flex-col justify-center items-center px-4 py-8 min-h-screen"
      >
        <div ref={prizePoolRef} className="text-center mb-8">
          <h1
            className={`${styles.gameOfSquidsFont} text-4xl md:text-6xl font-bold text-[#FB074F] glow-pulse mb-4 tracking-wider`}
          >
            PRIZE POOL
          </h1>
          <div
            ref={prizePoolAmountRef}
            className={`${styles.gameOfSquidsFont} text-3xl md:text-5xl font-bold text-[#FB074F] glow-pulse tracking-wider`}
          >
            ₹0
          </div>
        </div>

        <div ref={victoryQuoteRef} className="text-center mb-12 max-w-2xl">
          <GlitchText
            text="Victory comes at a price. But for the last ones standing - the prize is everything"
            className={`${styles.warriorFont} text-lg md:text-xl text-gray-300 leading-relaxed`}
          />
        </div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 w-full max-w-4xl">
          {/* 1st */}
          <div
            ref={firstCardRef}
            className="prize-card rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-all duration-300 border border-yellow-500"
            style={{ background: "linear-gradient(145deg, #FFD700, #b8860b)" }}
          >
            <img
              src={squareIconUrl}
              alt="1st"
              className="w-16 h-20 mx-auto mb-3"
            />
            <div
              className={`${styles.gameOfSquidsFont} text-md`}
              style={{ color: "#241a00" }}
            >
              🥇 1st Place
            </div>
            <div
              className={`${styles.gameOfSquidsFont} text-3xl font-bold tracking-wide prize-amount`}
              style={{ color: "#241a00" }}
            >
              ₹0
            </div>
            <div className="font-tech text-sm" style={{ color: "#241a00" }}>
              Ultimate Winner
            </div>
          </div>

          {/* 2nd */}
          <div
            ref={secondCardRef}
            className="prize-card rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-all duration-300 border border-gray-300"
            style={{ background: "linear-gradient(145deg, #C0C0C0, #6e7b8b)" }}
          >
            <img
              src={triangleIconUrl}
              alt="2nd"
              className="w-16 h-20 mx-auto mb-3"
            />
            <div
              className={`${styles.gameOfSquidsFont} text-md`}
              style={{ color: "#2e2e2e" }}
            >
              🥈 2nd Place
            </div>
            <div
              className={`${styles.gameOfSquidsFont} text-3xl font-bold tracking-wide prize-amount`}
              style={{ color: "#2e2e2e" }}
            >
              ₹0
            </div>
            <div className="font-tech text-sm" style={{ color: "#2e2e2e" }}>
              Runner-Up
            </div>
          </div>

          {/* 3rd */}
          <div
            ref={thirdCardRef}
            className="prize-card rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-all duration-300 border border-orange-400"
            style={{ background: "linear-gradient(145deg, #cd7f32, #a0522d)" }}
          >
            <img
              src={circleIconUrl}
              alt="3rd"
              className="w-16 h-20 mx-auto mb-3"
            />
            <div
              className={`${styles.gameOfSquidsFont} text-md`}
              style={{ color: "#3b1f0f" }}
            >
              🥉 3rd Place
            </div>
            <div
              className={`${styles.gameOfSquidsFont} text-3xl font-bold tracking-wide prize-amount`}
              style={{ color: "#3b1f0f" }}
            >
              ₹0
            </div>
            <div className="font-tech text-sm" style={{ color: "#3b1f0f" }}>
              2nd Runner-Up
            </div>
          </div>
        </div>

        {/* Quote */}
        <div ref={chooseQuoteRef} className="text-center mb-8 max-w-3xl">
          <GlitchText
            text="Choose wisely. Play fair - or don't. Only the game decides who survives."
            className={`${styles.warriorFont} text-lg md:text-xl text-gray-300 leading-relaxed`}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-col md:flex-row gap-8 text-center">
          <div
            ref={cashPrizeRef}
            className="text-lg md:text-xl font-bold tracking-wider"
          >
            <GlitchText
              text="CASH PRIZES"
              className={`${styles.gameOfSquidsFont} text-cyber-teal`}
            />
          </div>
          <div
            ref={certificateRef}
            className="text-lg md:text-xl font-bold tracking-wider"
          >
            <GlitchText
              text="CERTIFICATES"
              className={`${styles.gameOfSquidsFont} text-[#FB074F]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
