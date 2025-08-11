import Image from "next/image";
import React, { forwardRef } from "react";

const HeroDesktop = forwardRef((props, refs) => {
  return (
    <div className="w-[100%] relative overflow-hidden  h-[101vh] flex justify-center">
      <div
        ref={refs.bgRef}
        className="bg scale-[1.1] h-screen w-[100%] object-cover bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1753938323/bg-back-ex_gyefjd.webp')] bg-no-repeat bg-center bg-cover"
      />
      {/* <div className="absolute top-10 scale-[1.4] bg-gradient-to-b from-black  to-transparent text-transparent bg-clip-text text-center text-9xl font-extrabold tracking-widest">
        <h1>YCCE X CSE</h1>
      </div> */}
      <div
        ref={refs.mainCharRef}
        className="main bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1753938415/bg-main_upscaled_i2tz06.webp')] scale-[1.1] md:w-1/2 h-[80vh] lg:h-[90vh] bg-center bg-no-repeat bg-cover absolute bottom-3"
      />
      <div>
        <h1 className="name2 font-squid text-8xl leading-24 text-center text-pink-800 absolute bottom-7 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-64">2k25</span>
        </h1>
        <h1 className="name1 font-squid text-8xl leading-24 text-center text-[#85073d] opacity-70 absolute bottom-7 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-64">2k25</span>
        </h1>
        <h1 className="name font-squid text-8xl leading-24 text-center text-white absolute bottom-7 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-64">2k25</span>
        </h1>
      </div>
    </div>
  );
});

HeroDesktop.displayName = "HeroDesktop";

export default HeroDesktop;
