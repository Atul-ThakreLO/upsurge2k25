"use client";

import React from "react";
import EventCardButton from "./EventCardButton";
import { Trophy, CreditCard, Users } from "lucide-react";

const EventCard = ({
  title,
  poster,
  description,
  prizePool,
  entryFees,
  teamMembers,
  registerLink,
}) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row border border-zinc-700 backdrop-blur-xs rounded-2xl bg-transparent shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-visible">
      <div className="w-full md:w-9/10 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
        <img
          src={poster}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-3 p-5 md:p-5 relative">
        <h2 className="text-3xl md:text-4xl md:hidden font-bold text-pink-700 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-md leading-relaxed break-words md:line-clamp-10 [hyphens:auto]">
          {description}
        </p>

        {/* Badges for Prize Pool, Entry Fees & Team Members */}
        <div className="flex flex-row flex-wrap gap-2 mt-1">
          {prizePool && (
            <span className="self-start inline-flex items-center gap-1 text-pink-500 border border-pink-500 px-3 py-1 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105">
              <Trophy className="w-4 h-4" /> Pool: ₹{prizePool}
            </span>
          )}
          {entryFees && (
            <span className="self-start inline-flex items-center gap-1 text-green-400 border border-green-400 px-3 py-1 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105">
              <CreditCard className="w-4 h-4" /> Fees: ₹{entryFees}
            </span>
          )}
          {teamMembers && (
            <span className="self-start inline-flex items-center gap-1 text-blue-400 border border-blue-400 px-3 py-1 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105">
              <Users className="w-4 h-4" /> {teamMembers} members
            </span>
          )}
        </div>

        <div className="mt-1 flex justify-center md:justify-start">
          <EventCardButton link={registerLink} />
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
