"use client";

import { Card } from "./card";
import { useEffect, useState } from "react";
import acmBg from "./public/images/acm-background-latest.png";
import cyberpunkBack from "./public/images/cyberpunk-back.png";
import Image from "next/image";

const InstagramIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hover:scale-110 transition-all duration-200"
  >
    <defs>
      <linearGradient
        id="instagram-gradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.583.072-4.949.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      fill="url(#instagram-gradient)"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hover:scale-110 transition-all duration-200"
  >
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="#0077B5"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hover:scale-110 transition-all duration-200"
  >
    <path
      d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.184 22 16.437 22 12.021 22 6.484 17.523 2 12 2z"
      fill="#090909ff"
    />
  </svg>
);

export function MemberCard({
  name,
  position,
  imageUrl,
  instagramUrl,
  linkedinUrl,
  githubUrl,
  comm,
  index,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 100);

    const flipTimer = setTimeout(() => {
      setIsFlipped(true);
    }, 1500 + index * 100);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(flipTimer);
    };
  }, [index]);

  return (
    <div
      className={`relative transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-12"
      }`}
      style={{
        width: "330px",
        height: "490px",
        perspective: "1000px",
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-1000 ease-in-out ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Card
          className="absolute inset-0 w-full h-full overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-400/30 hover:shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            filter: "drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage: `url(${
                cyberpunkBack && cyberpunkBack.src
                  ? cyberpunkBack.src
                  : cyberpunkBack
              })`,
            }}
          />
          <div className="absolute inset-0 border-2 border-purple-500/30" />
          {/* ACM Text Above Profile Image */}
        </Card>

        <Card
          className="absolute inset-0 w-full h-full overflow-hidden shadow-lg transition-transform duration-500 ease-out hover:scale-110 hover:shadow-cyan-500/50 hover:shadow-2xl hover:brightness-110"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))",
          }}
        >
          {/* Background Image - Full Card Coverage */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage: `url(${acmBg && acmBg.src ? acmBg.src : acmBg})`,
            }}
          />
          <div className="absolute top-7 bg-amber-600 left-0 w-44 -translate-x-12 z-20 py-1 -rotate-45">
            <p className="text-2xl text-center w-full">{comm
              }</p>
          </div>

          <div className="absolute inset-0 border-2 border-pink-500/30 group-hover:border-cyan-400/50" />

          {/* Content */}
          <div className="relative z-10 pt-6 pb-4 px-6 h-full flex flex-col text-blue">
            {/* Profile Image and Text Content */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div
                className={`transition-all w-60 h-70  duration-800 ease-out ${
                  isFlipped
                    ? "opacity-100 translate-y-0 rotate-0"
                    : "opacity-0 translate-y-8 rotate-3"
                }`}
                style={{ transitionDelay: isFlipped ? "200ms" : "0ms" }}
              >
                <Image
                  src={imageUrl || "/default-avatar.jpg"}
                  alt={`${name}'s profile picture`}
                  fill
                  sizes="(max-width: 768px) 96px, 256px"
                  className="rounded-lg border-3 border-white shadow-lg object-cover transition-all duration-300 group-hover:shadow-pink-500/30"
                  priority={true}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAhEQACAQIEBwAAAAAAAAAAAAABAgMABAUGIWGRobHB0f/aAAwDAQACEQMRAD8A0XGARFBBBHoKzcWg=="
                />
                {/* <img
                src={imageUrl || "/placeholder.svg"}
                alt={`${name} profile`}
                className="w-60 h-70 rounded-lg border-3 border-white shadow-lg object-cover transition-all duration-300 group-hover:shadow-pink-500/30 mt-2"
              /> */}
              </div>

              <h3
                className={`text-2xl font-bold mb-2 mt-1 font-mono text-center drop-shadow-lg text-purple-500 transition-all duration-700 ease-out ${
                  isFlipped
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                } group-hover:text-pink-400 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]`}
                style={{ transitionDelay: isFlipped ? "400ms" : "0ms" }}
              >
                {name}
              </h3>
              <p
                className={`text-xl text-center opacity-90 font-mono font-medium drop-shadow-md bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-600 ease-out ${
                  isFlipped
                    ? "opacity-90 translate-y-0"
                    : "opacity-0 translate-y-4"
                } group-hover:from-cyan-300 group-hover:to-pink-300`}
                style={{ transitionDelay: isFlipped ? "600ms" : "0ms" }}
              >
                {position}
              </p>
            </div>

            {/* Social Media Icons - Positioned at Bottom Left */}
            <div
              className={`flex gap-3 justify-start mb-0 transition-all duration-500 ease-out ${
                isFlipped
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-8 scale-75"
              }`}
              style={{ transitionDelay: isFlipped ? "800ms" : "0ms" }}
            >
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200 hover:drop-shadow-[0_0_10px_rgba(240,148,51,0.8)]"
                >
                  <InstagramIcon />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200 hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.8)]"
                >
                  <LinkedInIcon />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                >
                  <GithubIcon />
                </a>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
