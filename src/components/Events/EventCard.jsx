"use client";

import React from "react";
import EventCardButton from "./EventCardButton";

const EventCard = ({ title, poster = "/poster.png", description }) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row border border-zinc-700 backdrop-blur-xs rounded-2xl bg-transparent shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-visible">
      <div className="w-full md:w-1/2 overflow-hidden md:m-4 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4 p-5 md:p-8 relative">
        <h2 className="text-3xl md:text-4xl md:hidden font-bold text-pink-700 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-md leading-relaxed break-words text-justify">
          {description}
        </p>
        <div className="mt-auto flex justify-center md:justify-start">
          <EventCardButton />
        </div>

        <div
          className="hidden md:block absolute -bottom-20 -right-10 w-40 h-40 group cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full h-full transition-transform duration-500 group-hover:rotate-y-180"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front side */}
            <img
              src="/gif/card.gif"
              alt="Squid Game Mask"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                backfaceVisibility: "hidden",
              }}
            />
            {/* Back side */}
            <img
              src="/gif/invitation-card.gif"
              alt="Squid Game Mask Back"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;