import Image from "next/image";
import React from "react";
import { goodiesReward } from "../../../../data";
import GoodiesRewards from "./GoddiesReward";

const GoodiesDesktop = () => {
  return (
    <>
      {/* leftmost goodies image */}
      <div className="hidden sm:absolute sm:left-[10%] sm:top-[30%] sm:w-92 sm:h-92 sm:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-pink-500/40 blur-3xl animate-pulse"></div>
          <Image
            src="/img/Goodies.png"
            alt="Goodies Items"
            fill
            style={{ objectFit: "contain" }}
            className="relative z-10"
          />
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-2">
        {/* Middle Guard Image */}
        <div className="text-white hidden md:flex items-center justify-end">
          <Image
            className="relative -right-[70%] -translate-x-1/2 -z-[1]"
            src="/img/guard-goodies.png"
            alt="Squid Game Middle Guard"
            width={500}
            height={500}
          />
        </div>
        <div className="relative w-full min-h-[55vh]">
          <div className="absolute right-15 top-1/2 transform -translate-y-1/2 text-white flex flex-col justify-center space-y-4 text-lg md:text-xl">
            <GoodiesRewards />
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodiesDesktop;
