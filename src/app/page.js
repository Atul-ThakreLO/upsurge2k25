import Events from "@/components/Home/events";
import Footer from "@/components/Home/Footer/Footer";
import Hero from "@/components/Home/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10">
        <Events />
        <Events />
      </div>
      <Footer />
    </div>
  );
}
