"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RegisterButton from "../../ui/register-button";
import Image from "next/image";
import RegisterDialog from "../Register/register-dialog";

const Hero = () => {
  const heroRef = useRef(null);
  const gfgLogoRef = useRef(null);
  const logoRef = useRef(null);
  const dateRef = useRef(null);
  const buttonRef = useRef(null);
  const gradientRef = useRef(null);
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);
  const presentsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([logoRef.current, dateRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set([gradientRef.current, gfgLogoRef.current], {
        opacity: 0,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(gradientRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
      });

      tl.to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          // rotation: 360,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      tl.to(
        [gfgLogoRef.current, presentsRef.current],
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      tl.to(
        [headRef1.current, headRef2.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        dateRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      tl.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative w-full font-[Orbitron] md:h-screen bg-cover bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1754229663/smbg_upscaled_1_jvjcyn.webp')]  flex justify-center items-center">
      <div
        ref={gradientRef}
        className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black"
      />
      <div className="flex flex-col pt-20 md:pt-0 md:flex-row justify-evenly items-center h-full w-full relative z-10 gap-0">
        <div className="flex  md:flex-col order-1 md:order-[0] h-[70%] w-full md:w-[20%] items-center justify-center md:justify-end">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-xl text-white font-bold">Powered by</h3>
            <Image
              // ref={gfgLogoRef}
              // className="object-cover h-20 w-20 md:h-28 md:w-28 opacity-0 transform scale-70"
              src="/img/GFG_Logo.png"
              alt="character"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>

        <div className="relative h-full w-full md:w-[40%] z-10 flex flex-col justify-center items-center">
          <div className=" text-center pb-4 px-16">
            <h1 className="overflow-hidden custom-text-shadow text-4xl md:text-5xl font-bold text-white">
              <span
                className="inline-block transform translate-y-full opacity-0"
                ref={headRef1}
              >
                YCCE <span className="text-xl">x</span> CSE Techfest
              </span>
            </h1>
            <h1 className="overflow-hidden drop-shadow-[0_0_30px_#ff4da6] text-lg md:text-xl font-bold text-pink-100 mt-2">
              <span
                className="inline-block transform translate-y-full opacity-0"
                ref={headRef2}
              >
                In collaboration with
              </span>
            </h1>
          </div>
          <div className="mt-2 flex flex-col items-center">
            <Image
              ref={gfgLogoRef}
              className="object-cover rounded-full h-20 w-20 md:h-28 md:w-28 opacity-0 transform scale-70"
              src="https://res.cloudinary.com/dok1hsojb/image/upload/v1754205676/GFG_jsi10a.webp"
              alt="character"
              width={300}
              height={300}
              priority
            />
            <p
              ref={presentsRef}
              className="text-white text-xl text-center font-bold mt-5 opacity-0 transform scale-70"
            >
              Presents
            </p>
          </div>

          <div className="overflow-hidden">
            <Image
              ref={logoRef}
              className="object-cover h-36 w-7xl opacity-0 transform translate-y-12 scale-50"
              src="https://res.cloudinary.com/dok1hsojb/image/upload/v1754214816/logo_sm_zxxn4d.webp"
              alt="Logo"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="mt-8">
            <p
              ref={dateRef}
              className="text-pink-100 text-nowrap drop-shadow-[0_0_20px_#ff4da6] text-3xl md:text-5xl text-center opacity-0 transform translate-y-12"
            >
              22<sup>nd</sup> - 23<sup>rd</sup> August
            </p>
          </div>

          <div
            ref={buttonRef}
            className="w-min mx-auto mt-20 opacity-0 transform translate-y-12"
          >
            <RegisterDialog />
          </div>
        </div>
        <div className="flex md:flex-col order-1 h-[70%] w-full md:w-[20%] items-center justify-center md:justify-end">
          {/* <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-xl text-white font-bold">Co-Powered by</h3>
            <div className="h-20 aspect-square bg-white"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
