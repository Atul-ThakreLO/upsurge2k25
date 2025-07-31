import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="fixed z-50 w-full">
      <div className="w-[90%] mt-5 mx-auto flex justify-between items-center">
        <div>
          <Image
            className="w-24 md:w-36"
            src="https://res.cloudinary.com/dok1hsojb/image/upload/v1753939835/sglogo_yrrcuv.webp"
            alt="Squid Game Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <div>
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
    </div>
  );
};

export default Nav;
