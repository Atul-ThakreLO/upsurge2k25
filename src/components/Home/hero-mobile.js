import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import { useGSAP } from "@gsap/react";

const HeroMobile = () => {
  const images = [
    "https://res.cloudinary.com/dok1hsojb/image/upload/v1754073752/triangle-guard_ydj8dl.webp",
    "https://res.cloudinary.com/dok1hsojb/image/upload/v1754073752/square-guard_mkvqyz.webp",
    "https://res.cloudinary.com/dok1hsojb/image/upload/v1754076217/circle-guard_qtg02u.webp",
    // "https://res.cloudinary.com/dok1hsojb/image/upload/v1753938306/sguard_jhetrh.webp",
    // "https://res.cloudinary.com/dok1hsojb/image/upload/v1753938306/cguard_gxzesl.webp",
    // "https://res.cloudinary.com/dok1hsojb/image/upload/v1753938306/cguard_gxzesl.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const createGlitchEffect = () => {
    const tl = gsap.timeline();

    tl.set(imageRef.current, {
      filter: "hue-rotate(0deg) saturate(1) brightness(1)",
      x: 0,
      y: 0,
      scale: 1.2,
    })
      .to(imageRef.current, {
        duration: 0.04,
        filter: "hue-rotate(90deg) saturate(1.8) brightness(1.1)",
        x: -15,
        y: 2,
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.03,
        filter: "hue-rotate(-45deg) saturate(0.7) brightness(1.3)",
        x: 10,
        y: -1,
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.02,
        filter: "hue-rotate(120deg) saturate(2) brightness(0.9)",
        x: -8,
        y: 1,
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.08,
        filter: "hue-rotate(0deg) saturate(1) brightness(1)",
        x: 0,
        y: 0,
        ease: "power2.out",
      });

    return tl;
  };

  const createAdvancedGlitchEffect = () => {
    const tl = gsap.timeline();

    tl.set(imageRef.current, {
      filter: "contrast(1) brightness(1) saturate(1)",
      x: 0,
      y: 0,
      scale: 1.2,
    })
      .to(imageRef.current, {
        duration: 0.02,
        filter: "contrast(1.3) brightness(1.2) saturate(1.4) hue-rotate(15deg)",
        x: -12,
        y: 2,
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.03,
        filter:
          "contrast(0.8) brightness(1.4) saturate(0.6) hue-rotate(-20deg)",
        x: 8,
        y: -2,
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.02,
        filter: "contrast(1.6) brightness(0.8) saturate(1.8) hue-rotate(30deg)",
        x: -5,
        y: 3,
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.06,
        filter: "contrast(1) brightness(1) saturate(1) hue-rotate(0deg)",
        x: 0,
        y: 0,
        ease: "power2.out",
      });

    return tl;
  };

  const changeImageWithGlitch = () => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const glitchAnimation =
      Math.random() > 0.5 ? createGlitchEffect() : createAdvancedGlitchEffect();

    gsap.delayedCall(0.06, () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    });

    gsap.delayedCall(0.15, () => {
      isAnimatingRef.current = false;

      gsap.set(imageRef.current, {
        x: 0,
        y: 0,
        scale: 1.2,
        filter: "none",
      });
    });

    glitchAnimation.play();
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      changeImageWithGlitch();
    }, 3500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        x: 0,
        y: 0,
        scale: 1.2,
      });
    }
  }, []);

  useGSAP(() => {
    [imageRef.current, titleRef.current].forEach((el) => {
      gsap.set(el, {
        scale: 0.6,
      });
    });
    gsap.from(imageRef.current, {
      duration: 0.5,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".ghanta",
        start: "5% 20%",
        end: "50% 5%",
        scrub: 2,
      },
    });
    gsap.from(titleRef.current, {
      duration: 0.5,
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".ghanta",
        start: "5% 20%",
        end: "50% 5%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dok1hsojb/image/upload/v1753938305/tguard_uieiv4.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dok1hsojb/image/upload/v1753938306/sguard_jhetrh.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dok1hsojb/image/upload/v1753938306/cguard_gxzesl.webp"
        />
      </Head>

      <div className="absolute top-0 left-0 h-screen scale-[1.2] w-full bg-gradient-to-b from-white via-10% via-black to-170% to-pink-900">
        <div className="absolute top-40 sm:top-52 left-1/2 -translate-x-1/2">
          <h1
            ref={titleRef}
            className="font-squid name2 text-5xl leading-12 text-center text-white relative"
          >
            upsurge <br /> <span className="ml-30">2k25</span>
          </h1>
        </div>

        <div className="absolute h-[55%] w-full bottom-[5%] left-1/2 -translate-x-1/2">
          <Image
            ref={imageRef}
            className="object-cover scale-[1.2] transition-opacity duration-200 mx-auto"
            src={images[currentImageIndex]}
            alt="character"
            width={320}
            height={240}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HeroMobile;
