import Image from "next/image";
import React from "react";

const RegisterButton = () => {
  return (
    <div className="relative drop-shadow-[0_0_20px_#f72561] border-pink-100 border-2  bg-pink-800 hover:bg-pink-900 text-pink-200 font-squid cursor-pointer font-bold tracking-widest px-10 py-5 rounded-lg text-xl transition-colors duration-300 overflow-hidden w-72 h-16 group">
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-x-full">
        Register Now
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0">
        <Image
          src={"/Logo.svg"}
          className="object-cover transition-opacity duration-200"
          alt="logo"
          width={100}
          height={100}
          priority
        />
      </span>
    </div>
  );
};

export default RegisterButton;
