"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { NavLinks } from "../../../data";
import Link from "next/link";

const NavMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const capsuleRef = useRef(null);
  const linksRef = useRef(null);
  const linkRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set(linkRefs.current, { opacity: 0, y: 12 });
    gsap.set(linksRef.current, { opacity: 0 });
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isExpanded &&
        capsuleRef.current &&
        !capsuleRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        collapseMenu();
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isExpanded]);

  const expandMenu = () => {
    const tl = gsap.timeline();
    tl.to(capsuleRef.current, {
      width: 280,
      height: 400,
      duration: 0.5,
      ease: "power3.out",
    })
      .to(
        linksRef.current,
        { opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      )
      .to(
        linkRefs.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.07,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
  };

  const collapseMenu = () => {
    const tl = gsap.timeline();

    tl.to(linkRefs.current, {
      opacity: 0,
      y: 12,
      duration: 0.25,
      stagger: 0.05,
      ease: "power2.in",
    })
      .to(linksRef.current, { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(capsuleRef.current, {
        width: 0,
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
  };

  const handleToggle = () => {
    if (isExpanded) {
      collapseMenu();
    } else {
      expandMenu();
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div
        ref={capsuleRef}
        className="absolute right-0 top-0 bg-gray/95 backdrop-blur-lg border border-white/30 rounded-[50px] shadow-xl overflow-hidden text-white"
        style={{ width: "0px", height: "0px" }}
      >
        {/* Links */}
        <div
          ref={linksRef}
          className="w-full flex flex-col items-center mt-12 px-4"
        >
          {NavLinks.map((link, index) => (
            <Link
              key={link.name}
              ref={(el) => (linkRefs.current[index] = el)}
              href={link.href}
              className="w-full py-3 text-center rounded-xl text-lg transition-all duration-300 hover:text-pink-400 hover:underline decoration-pink-400/70"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="relative z-30 cursor-pointer focus:outline-none"
        aria-label={isExpanded ? "Close Menu" : "Open Menu"}
      >
        {isExpanded ? (
          <Image
            src="/nav/option-X.png"
            alt="Close Icon"
            width={48}
            height={48}
            className="transition-transform duration-300 hover:scale-110"
          />
        ) : (
          <Image
            src="/nav/option-O.png"
            alt="Open Icon"
            width={48}
            height={48}
            className="transition-transform duration-300 hover:scale-110 blink-glow"
          />
        )}
      </button>
    </div>
  );
};

export default NavMenu;
