// import Events from "@/components/Home/events";
import Footer from "@/components/Home/Footer/Footer.jsx";
import Hero from "@/components/Home/Hero/hero";
import { FooterContactDetailsCosmos } from "../../data";
import Events from "@/components/Home/Events/events";
import SponsorSlider from "@/components/Home/Sponsors/SponsorSlider";
import HomeExport from "../components/Home/home-export.jsx";
import RefreshHome from "../components/Home/refresh-home.jsx";
//import TeamMembers from "@/components/Home/Team_Members/page";
import EventSchedule from "@/components/Home/Schedule/EventSchedule"

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <RefreshHome />
      <HomeExport />
      <div className="relative z-10">
        <SponsorSlider />
        <Events />
        <EventSchedule />
        {/* <TeamMembers /> */}
        {/* <div className="h-screen"></div> */}
      </div>
      <Footer footerDetails={FooterContactDetailsCosmos} />
    </div>
  );
}
