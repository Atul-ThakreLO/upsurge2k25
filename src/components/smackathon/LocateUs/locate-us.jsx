"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

const LocateUs = () => {
  const [zoomLevel, setZoomLevel] = useState(13);
  const iframeRef = useRef(null);

  // Complex clip-path that roughly matches the Fortnite island shape
  //   const islandClipPath = `polygon(
  //     15% 25%, 20% 20%, 25% 18%, 30% 17%, 35% 16%, 40% 15%, 45% 14%,
  //     50% 13%, 55% 12%, 60% 11%, 65% 12%, 70% 13%, 75% 15%, 80% 18%,
  //     85% 22%, 88% 27%, 90% 32%, 91% 37%, 92% 42%, 93% 47%, 94% 52%,
  //     95% 57%, 94% 62%, 93% 67%, 91% 72%, 88% 76%, 85% 79%, 82% 82%,
  //     78% 84%, 73% 86%, 68% 87%, 63% 88%, 58% 89%, 53% 89%, 48% 88%,
  //     43% 87%, 38% 85%, 33% 83%, 28% 80%, 24% 76%, 20% 71%, 17% 66%,
  //     15% 60%, 14% 54%, 13% 48%, 12% 42%, 13% 36%, 14% 30%, 15% 25%
  //   )`;

  const updateMapZoom = (newZoom) => {
    setZoomLevel(newZoom);
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      const newSrc = currentSrc.replace(/!4f[\d.]+/, `!4f${newZoom}.1`);
      iframeRef.current.src = newSrc;
    }
  };

  const zoomIn = () => {
    if (zoomLevel < 20) {
      updateMapZoom(zoomLevel + 1);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 1) {
      updateMapZoom(zoomLevel - 1);
    }
  };

  return (
    <section className="bg-black text-pink-100 py-20">
      <h1 className="text-3xl md:text-5xl font-squid text-center font-bold tracking-widest">
        Locate Us
      </h1>
      <div className="relative pb-8 md:pb-14">
        <div className="relative w-[90%] md:w-[70%] overflow-hidden mx-auto mt-20">
          <div className="absolute left-4 md:left-7 top-2  md:top-3 font-squid text-center ">
            <h1 className="text-xl md:text-5xl leading-2 md:leading-none">YCCE</h1>
            <p className="text-sm md:text-lg ">CSE</p>
          </div>
          <Image
            className="w-full"
            src={
              "https://res.cloudinary.com/dok1hsojb/image/upload/v1754125183/map-edited_wnrlxs.webp"
            }
            alt="character"
            width={500}
            height={500}
            priority
          />

          <div className="absolute inset-0 map-clip-path">
            <iframe
              ref={iframeRef}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d149991.04590478863!2d78.992161!3d21.087357000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495abf6622d6f%3A0x2bd70ec1faa74ad4!2sDepartment%20Of%20Computer%20Science%20And%20Engineering!5e1!3m2!1sen!2sin!4v1754082562440!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Overlay"
            ></iframe>
          </div>
        </div>
        <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          <a
            className="cursor-pointer"
            href="https://maps.app.goo.gl/gv5zbUJGv6ZHXf7Z7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-4 py-1 text-sm md:text-lg md:px-8 md:py-2 text-black bg-white hover:bg-gray-100 rounded-lg"
              type="button"
            >
              View on large Map
            </button>
          </a>
          <button
            onClick={zoomIn}
            disabled={zoomLevel >= 20}
            className="cursor-pointer py-1 px-3 md:py-2 md:px-4 text-sm md:text-lg bg-white hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg rounded flex items-center justify-center font-bold text-gray-700 transition-colors"
            title="Zoom In"
          >
            +
          </button>
          <button
            onClick={zoomOut}
            disabled={zoomLevel <= 1}
            className="cursor-pointer py-1 px-3 md:py-2 md:px-4 text-sm md:text-lg bg-white hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg rounded flex items-center justify-center font-bold text-gray-700 transition-colors"
            title="Zoom Out"
          >
            −
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocateUs;
