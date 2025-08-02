import React from "react";
import RegisterButton from "../ui/register-button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-black to-170% to-pink-900 flex justify-center items-center gap-5">
      <div className="mt-14 md:mt-16 h-[85%] md:h-[85%] relative z-0 back-drop w-[90%] md:w-[80%] bg-no-repeat bg-cover bg-center bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1754128754/smackathon-hero-bg_bkpm7c.webp')] rounded-2xl after:rounded-2xl p-3 md:p-5">
        {/* <div className="absolute left-0 top-0"></div> */}
        <div className="relative h-full w-full z-10 flex flex-col justify-around items-center">
          {/* <div className="w-max p-5 bg-[#ffafde4a] backdrop-blur-[5px] pink-shadow-light border-pink-200 border-2 rounded-2xl mx-auto mt-10"> */}
          <div className="text-xl text-pink-100 text-center">
            <p>YCCE Techfest</p>
            <p>CSE & CSE(AIML) Department Present</p>
          </div>
          <div>
            <Image
              className="object-cover h-28 w-28"
              src={"https://res.cloudinary.com/dok1hsojb/image/upload/v1754128122/GG_Logo_u64bdb.webp"}
              alt="character"
              width={100}
              height={100}
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-squid text-pink-100 mt text-center ">
            Smackathon <br /> 24hrs
          </h1>
          {/* </div> */}
          <p className="text-pink-100 text-center text-4xl md:text-3xl leading-10">
            <span>On</span>
            <br />
            <span>22nd - 23rd August</span>
          </p>
          <div className="w-min mx-auto">
            <RegisterButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
