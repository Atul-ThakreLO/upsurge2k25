import Events from "@/components/Home/events";
import Hero from "@/components/Home/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10">
        <Events />
        <Events />
      </div>
    </div>
  );
}
