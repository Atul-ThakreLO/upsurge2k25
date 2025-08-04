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
      height: 500,
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
          width: 130,
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
    <div className="relative">
      <div
        ref={capsuleRef}
        onClick={handleToggle}
        className="bg-white/95 backdrop-blur-lg border border-white/30 rounded-[50px] cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative"
        style={{ width: "130px", height: "30px" }}
      >
        <div
          ref={menuContentRef}
          className="flex justify-center items-center w-full h-[30px] relative"
        >
          <div className="flex items-center text-sm md:text-lg h-full gap-3">
            <span className="font-semibold text-gray-800 text-base whitespace-nowrap select-none">
              Menu
            </span>
            <Image
              className=""
              src="/Logo.svg"
              alt="Menu logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
        <div
          ref={linksRef}
          className="w-full flex flex-col items-center justify-between mt-10  px-5 opacity-0"
        >
          {NavLinks.map((link, index) => (
            // <a
            //   key={link.name}
            //   ref={(el) => (linkRefs.current[index] = el)}
            //   href={link.href}
            //   onClick={(e) => handleLinkClick(e, link.name)}
            //   className="text-gray-800 font-medium text-sm px-3 py-2 rounded-xl transition-all duration-300 whitespace-nowrap opacity-0 hover:bg-indigo-500/10 hover:text-indigo-600"
            // >
            //   {link.name}
            // </a>
            <div
              key={link.name}
              className="hover:bg-gray-700 w-full py-5 text-center"
            //   onClick={(e) => handleLinkClick(e, link.name)}
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
    // </div>
  );
};

export default NavMenu;
