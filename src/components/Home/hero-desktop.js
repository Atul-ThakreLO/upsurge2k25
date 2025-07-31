import React, { forwardRef } from "react";

const HeroDesktop = forwardRef((props,refs) => {
  return (
    <div className="w-[100%] relative overflow-hidden  h-screen">
      <div
        ref={refs.bgRef}
        className="bg scale-[1.1] h-screen w-[100%] object-cover bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1753938323/bg-back-ex_gyefjd.webp')] bg-no-repeat bg-center bg-position-[center_bottom_-10rem bg-cover"
      ></div>
      <div
        ref={refs.mainCharRef}
        className="main bg-[url('https://res.cloudinary.com/dok1hsojb/image/upload/v1753938415/bg-main_upscaled_i2tz06.webp')] scale-[1.1] w-full md:w-1/2 h-[80vh] lg:h-[90vh] bg-center bg-no-repeat bg-cover absolute bottom-3 left-1/2 -translate-x-1/2"
      ></div>

      {/* <Image
            ref={mainCharRef}
            className="main object-cover absolute bottom-3 scale-[1.1] left-[50%] -translate-x-1/2"
            style={{ transformStyle: "preserve-3d" }}
            src="/bg-main_upscaled.png"
            alt="Next.js logo"
            width={800}
            height={1000}
            priority
          /> */}
      <div>
        <h1 className="name2 font-squid text-6xl leading-16 text-center text-[#EF428C text-pink-800 opacity- absolute bottom-7 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-64">2k25</span>
        </h1>
        <h1 className="name1 font-squid text-6xl leading-16 text-center text-[#85073d] opacity-70 absolute bottom-7 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-64">2k25</span>
        </h1>
        <h1 className="name font-squid text-6xl leading-16 text-center text-white absolute bottom-7 left-1/2 -translate-x-1/2">
          upsurge <br /> <span className="ml-64">2k25</span>
        </h1>
      </div>
    </div>
  );
});

HeroDesktop.displayName = "HeroDesktop";

export default HeroDesktop;
