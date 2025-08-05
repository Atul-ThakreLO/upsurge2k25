import Events from "@/components/Home/events";
import Footer from "@/components/Home/Footer/Footer";
import Hero from "@/components/Home/Hero/hero";
import { FooterContactDetailsCosmos } from "../../data";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10">
        <Events />
      </div>
      <Footer footerDetails={FooterContactDetailsCosmos} />
    </div>
  );
}
