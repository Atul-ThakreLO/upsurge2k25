import Image from "next/image";
import React from "react";
import { goodiesReward } from "../../../../data";
import GoodiesRewards from "./GoddiesReward";

const GoodiesDesktop = () => {
  return (
    <>
      {/* leftmost goodies image */}
      <div className="hidden sm:absolute sm:left-[10%] sm:top-[30%] sm:w-92 sm:h-92 sm:block">
        <Image
          src="/img/Goodies.png"
          alt="Goodies Items"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="hidden sm:grid grid-cols-2">
        {/* Middle Guard Image */}
        <div className="text-white hidden md:block items-center justify-center">
          <Image
            src="/img/guard-goodies.png"
            alt="Squid Game Middle Guard"
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative w-full min-h-[55vh]">
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-white flex flex-col justify-center space-y-4 text-lg md:text-xl">
            <GoodiesRewards />
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodiesDesktop;
