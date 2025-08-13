"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { AlignJustify } from 'lucide-react';
import Image from "next/image";
import { NavLinks } from "../../../data";
import Link from "next/link";

const NavMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const capsuleRef = useRef(null);
  const linksRef = useRef(null);
  const menuContentRef = useRef(null);
  const linkRefs = useRef([]);
  const iconRef = useRef(null);

  useEffect(() => {
    // Set initial state for links
    gsap.set(linkRefs.current, { opacity: 0, y: 10 });
  }, []);

  const expandMenu = () => {
    const tl = gsap.timeline();

    tl.to(capsuleRef.current, {
      height: 400,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(capsuleRef.current, {
        width: 300,
        duration: 0.4,
        ease: "power2.out",
      })
      .fromTo(
        menuContentRef.current,
        {
          justifyContent: "flex-end",
        },
        {
          justifyContent: "center",
          duration: 0.3,
          ease: "power2.out",
        }
      )
      // Step 4: Show navigation links container
      .to(
        linksRef.current,
        {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.1"
      )
      // Step 5: Animate individual links with stagger
      .to(
        linkRefs.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );
  };

  const collapseMenu = () => {
    const tl = gsap.timeline();

    // Reverse the animation
    tl.to(linkRefs.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      stagger: 0.03,
      ease: "power2.in",
    })
      .to(
        linksRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        },
        "-=0.1"
      )
      .fromTo(
        menuContentRef.current,
        {
          justifyContent: "center",
        },
        {
        //   justifyContent: "flex-end",
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.1"
      )
      .to(
        capsuleRef.current,
        {
          width: 50,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.2"
      )
      .to(capsuleRef.current, {
        height: 30,
        duration: 0.3,
        ease: "power2.in",
      });
  };

  const handleToggle = () => {
    if (!isExpanded) {
      expandMenu();
    } else {
      collapseMenu();
    }
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (e, linkName) => {
    e.preventDefault();
    e.stopPropagation();

    gsap.to(e.currentTarget, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex items-center justify-center p-5">
<div className="relative w-fit">
  {/* Toggle Icon - OUTSIDE THE CAPSULE BOX */}
  <div
    onClick={handleToggle}
    className="cursor-pointer absolute top-0 left-0 z-20"
  >
    {isExpanded ? (
      <Image
        src="/option-X.png"
        alt="Close Icon"
        width={50}
        height={50}
        className="transition-all duration-300"
      />
    ) : (
      <Image
  src="/option-O.png"
  alt="Open Icon"
  width={50}
  height={50}
  className="transition-all duration-300 blink-glow"
/>

    )}
  </div>

  {/* Capsule expanding box */}
  <div
    ref={capsuleRef}
    className="bg-gray/95 backdrop-blur-lg border border-white/30 rounded-[50px] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative text-white"
    style={{
      width: isExpanded ? "300px" : "50px",
      height: isExpanded ? "400px" : "50px",
      marginLeft: isExpanded ? "-250px" : "0px", // push box right so image stays visible
      opacity: isExpanded ? 1 : 0,
      transition: "all 0.3s ease",
    }}
  >
    {/* Link section inside the box */}
    <div
      ref={linksRef}
      className="w-full flex flex-col items-center justify-between mt-10 px-5"
    >
      {NavLinks.map((link, index) => (
        <div
          key={link.name}
          className="hover:bg-pink-700 w-full py-5 text-center rounded-2xl"
        >
          <Link
            ref={(el) => (linkRefs.current[index] = el)}
            href={link.href}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default NavMenu;
