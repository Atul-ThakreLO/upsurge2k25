

import Image from "next/image";

export default function Section() {
  return (
    <div><div className="relative z-[40] w-full h-[20vh] bg-[#0a0a0a]">


  <div className="absolute top-[-50px] left-0 w-full h-[100px] pointer-events-none z-50">
    <Image
      src="/timeline/grain.png" // or your tiles
      alt="blur overlay"
      fill
      className="object-top object-cover blur-3xl opacity-40 scale-180 overflow-hidden"
    />
  </div>

<div className="absolute bottom-[-20] left-0 w-full h-120 z-50 pointer-events-none"
     style={{
       backgroundImage: "linear-gradient(to top, transparent, #0a0a0a)"
     }}>
     </div>
  <div className="absolute top-0 left-0 w-full h-10 z-40 pointer-events-none overflow-visible"
       style={{
         backgroundImage: "linear-gradient(to bottom, rgba(10,10,10,0.6), rgba(10,10,10,1))"
       }}
  />
<div className="relative w-full h-[40vh] overflow-hidden z-40">
  <div className="absolute inset-0 backdrop-blur-lg bg-[#0a0a0f]"></div>
</div>


</div>
</div>
  );
}