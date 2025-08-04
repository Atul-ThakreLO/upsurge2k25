
import Hero from "@/components/smackathon/Hero/hero";
import LocateUs from "../../components/smackathon/LocateUs/locate-us";
import Tracks from "@/components/smackathon/tracks"
import Timeline from "@/components/smackathon/Timeline/TimelineItem";
import Rules from "../../components/smackathon/Rules/Rules";


const Page = () => {
  return (
    // <div className="h-screen w-full bg-no-repeat bg-cover bg-center bg-[url('/smbg.png')]">
    // </div>
    <main>
      <Hero />
      <Tracks/>
      <Timeline/>
{/*--<Section/>--*/}
    <Rules/>
      <LocateUs />
    </main>
  );
};

export default Page;
// https://i.pinimg.com/originals/3b/8e/1f/3b8e1f5ac3e25097d5e7400173f73378.gif
