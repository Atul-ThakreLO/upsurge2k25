// import Events from "@/components/Home/events";
import Footer from "@/components/Home/Footer/Footer.jsx";
import Hero from "@/components/Home/Hero/hero";
import { FooterContactDetailsCosmos } from "../../data";
import Events from "@/components/Home/Events/events";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10">
        <Events />
        <Footer footerDetails={FooterContactDetailsCosmos} />
      </div>
    </div>
  );
}
