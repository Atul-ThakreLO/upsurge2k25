"use client";
import Image from "next/image";
import { goodiesReward } from "../../../../data";
import GoodiesRewards from "./GoddiesReward";

const GoodiesMobile = () => {
  return (
    <div className="flex flex-col items-center text-white md:hidden overflow-hidden pb-20 md:pb-0">
      <div className="relative w-[200px] h-[200px]">
        <div className="absolute inset-0 rounded-full bg-pink-500/40 blur-3xl animate-pulse"></div>
        <Image
          src="/img/Goodies.png"
          alt="Goodies Items"
          fill
          style={{ objectFit: "contain" }}
          className="relative z-10"
        />
      </div>
      <div className="flex flex-col text-left space-y-2 px-4 mt-5 text-sm">
        <GoodiesRewards />
      </div>
    </div>
  );
};

export default GoodiesMobile;
