import Image from "next/image";
import React from "react";
import RotatingHeader from "./RotatingHeader";
import GoodiesMobile from "./GoodiesMobile";
import GoodiesDesktop from "./GoodiesDesktop";

const Goodies = () => {
  return (
    <div className="relative w-full min-h-[50vh]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/goodies-bg.jpg"
          alt="Squid Game Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/1ss0 to-black/90" />
      </div>

      <RotatingHeader />
      <GoodiesMobile />
      <GoodiesDesktop />
    </div>
  );
};

export default Goodies;
