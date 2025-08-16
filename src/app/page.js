// import Events from "@/components/Home/events";
import Footer from "@/components/Home/Footer/Footer.jsx";
import Hero from "@/components/Home/Hero/hero";
import { FooterContactDetailsCosmos } from "../../data";
import Events from "@/components/Home/Events/events";
import SponsorSlider from "@/components/Home/Sponsors/SponsorSlider";
import TeamMembers from "@/components/Home/Team_Members/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10">
        <Events />
        <SponsorSlider/>
         <TeamMembers/> 
            {/* <div className="h-screen"></div> */}
      </div>
      <Footer footerDetails={FooterContactDetailsCosmos} />
    </div>
  );
}
