import Image from "next/image";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const HeroMobile = forwardRef((props, refs) => {
  const images = ["/hero/tguard.png", "/hero/sguard.png", "/hero/cguard.png"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);
  const glitchRef = useRef(null);

  const createGlitchEffect = () => {
    const tl = gsap.timeline();

    tl.set(imageRef.current, {
      filter: "hue-rotate(0deg) saturate(1) brightness(1)",
      transform: "scale(1.2)",
    })

      .to(imageRef.current, {
        duration: 0.05,
        filter: "hue-rotate(90deg) saturate(2) brightness(1.2)",
        x: "-48%",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.05,
        filter: "hue-rotate(-90deg) saturate(0.5) brightness(1.5)",
        x: "-52%",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.03,
        filter: "hue-rotate(180deg) saturate(3) brightness(0.8)",
        x: "-49%",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.02,
        filter: "hue-rotate(45deg) saturate(1.5) brightness(1.3)",
        x: "-51%",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.1,
        filter: "hue-rotate(0deg) saturate(1) brightness(1)",
        x: "-50%",
        ease: "power2.out",
      });

    return tl;
  };

  const createAdvancedGlitchEffect = () => {
    const tl = gsap.timeline();

    tl.set(imageRef.current, {
      filter: "contrast(1) brightness(1) saturate(1)",
    })

      .to(imageRef.current, {
        duration: 0.03,
        filter: "contrast(1.2) brightness(1.1) saturate(1.5) hue-rotate(10deg)",
        x: "-48%",
        y: "1px",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.02,
        filter:
          "contrast(0.8) brightness(1.3) saturate(0.7) hue-rotate(-15deg)",
        x: "-52%",
        y: "-2px",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.04,
        filter: "contrast(1.5) brightness(0.9) saturate(2) hue-rotate(25deg)",
        x: "-49%",
        y: "3px",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.02,
        filter: "contrast(1.1) brightness(1.2) saturate(1.2) hue-rotate(-8deg)",
        x: "-51%",
        y: "-1px",
        ease: "none",
      })
      .to(imageRef.current, {
        duration: 0.06,
        filter: "contrast(1) brightness(1) saturate(1) hue-rotate(0deg)",
        x: "-50%",
        y: "0px",
        ease: "power2.out",
      });

    return tl;
  };

  const changeImageWithGlitch = () => {
    const glitchAnimation =
      Math.random() > 0.5 ? createGlitchEffect() : createAdvancedGlitchEffect();

    glitchAnimation.play();

    gsap.delayedCall(0.08, () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeImageWithGlitch();
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    if (refs && refs.triggerImageChange) {
      refs.triggerImageChange.current = triggerImageChange;
    }
  }, [refs]);

  return (
    <div className="absolute top-0 left-0 h-screen scale-[1.2] w-full bg-no-repeat bg-center bg-cover bg-[url('/hero/bgmb.png')]">
      <div>
        <h1 className="name2 font-squid text-5xl leading-12 text-center text-pink-800 absolute top-52 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-30">2k25</span>
        </h1>
        <h1 className="name1 font-squid text-5xl leading-12 text-center text-[#85073d] opacity-70 absolute top-52 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-30">2k25</span>
        </h1>
        <h1 className="name font-squid text-5xl leading-12 text-center text-white absolute top-52 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-30">2k25</span>
        </h1>
      </div>

      <Image
        ref={(el) => {
          imageRef.current = el;
          // if (refs && refs.mainCharRef) {
          //   refs.mainCharRef.current = el;
          // }
        }}
        className="main object-cover absolute bottom-[13%] scale-[1.2] left-[50%] -translate-x-1/2 transition-opacity duration-200"
        style={{ transformStyle: "preserve-3d" }}
        src={images[currentImageIndex]}
        alt="character"
        width={800}
        height={1000}
        priority
      />

    </div>
  );
});

HeroMobile.displayName = "HeroMobile";

export default HeroMobile;
