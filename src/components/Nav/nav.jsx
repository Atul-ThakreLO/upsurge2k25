import Image from "next/image";
import React from "react";
import NavMenu from "./nav-menu";

const Nav = () => {
  return (
    <nav className="fixed z-50 w-full">
      <div className="relative w-[90%] mt-5 mx-auto flex justify-between items-center">
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
        <div className="absolute right-0 top-2 flex gap-3">       
           {/* <Image
            className=""
            src="/Logo.svg"
            alt="Menu logo"
            width={50}
            height={50}
            priority
          /> */}
          <NavMenu/>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
