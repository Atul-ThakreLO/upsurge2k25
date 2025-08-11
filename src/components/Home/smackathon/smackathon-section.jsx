import React, { useRef } from "react";
import RotateMask from "../Mask/rotate-mask";
import Link from "next/link";
import RegisterButton from "../../ui/register-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelCanvas from "../../utils/model-canvas";
import Mask from "../Mask/mask";

const SmackathonSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const modelRef = useRef(null);
  const infoRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        infoRef.current,
        buttonRef.current,
      ],
      {
        y: 200,
        opacity: 0.5,
      }
    );

    gsap.to([titleRef.current, subtitleRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reset resume reset",
        markers: true,
      },
    });

    gsap.to([infoRef.current, buttonRef.current], {
      y: 0,
      duration: 0.8,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "60% 90%",
        toggleActions: "play reset resume reset",
        markers: true,
      },
    });

    gsap.fromTo(
      modelRef.current,
      {
        y: 200,
        filter: "blur(20px)",
        opacity: 0.5,
      },
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "40% 90%",
          toggleActions: "play reset resume reset",
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-[2] text-center h-full flex flex-col justify-around items-center"
    >
      <div>
        <div className="overflow-hidden">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-squid mt-5 md:mt-16 underline"
          >
            Smackathon
          </h1>
        </div>
        <div className="overflow-hidden">
          <p ref={subtitleRef} className="mt-8 text-lg md:text-xl">
            A{" "}
            <span className="text-2xl md:text-3xl font-squid mx-3">24 Hrs</span>{" "}
            Hackathon
          </p>
        </div>
      </div>
      <div
        ref={modelRef}
        className="w-full md:mt-10 mx-auto md:w-1/2 h-[40%] md:h-1/2 relative cursor-none"
      >
        {/* <RotateMask /> */}
        <ModelCanvas path={"/3d/squid_game_-_guards.glb"}>
          <Mask
            modelPath={
              "https://res.cloudinary.com/dok1hsojb/image/upload/v1753940672/mask_ajtjmf.glb"
            }
          />
        </ModelCanvas>
      </div>
      <div>
        <p
          ref={infoRef}
          className=" md:w-[50%] mx-auto text-sm md:text-xl mt-10"
        >
          Are you ready to innovate, collaborate, and push the boundaries of
          technology? Join us for an exhilarating 24-hour hackathon where
          brilliant minds converge to solve real-world problems and build
          amazing projects from scratch! Click Register to register now
        </p>
      </div>

      <div ref={buttonRef} className="w-min mx-auto mt-20">
        <Link href="/smackathon">
          <RegisterButton />
        </Link>
      </div>
    </div>
  );
};

export default SmackathonSection;
