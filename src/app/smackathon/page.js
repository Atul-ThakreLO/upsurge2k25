
import Hero from "@/components/smackathon/Hero/hero";
import React from "react";
import LocateUs from "../../components/smackathon/LocateUs/locate-us";
import Tracks from "@/components/smackathon/tracks"

const Page = () => {
  return (
    // <div className="h-screen w-full bg-no-repeat bg-cover bg-center bg-[url('/smbg.png')]">
    // </div>
    <main>
      <Hero />
      <Tracks/>
      <LocateUs />
    </main>
  );
};

export default Page;
// https://i.pinimg.com/originals/3b/8e/1f/3b8e1f5ac3e25097d5e7400173f73378.gif
