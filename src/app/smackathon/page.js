import Hero from "@/components/smackathon/Hero/hero";
import LocateUs from "../../components/smackathon/LocateUs/locate-us";
import Tracks from "@/components/smackathon/tracks";
import Timeline from "@/components/smackathon/Timeline/TimelineItem";
import Rules from "../../components/smackathon/Rules/Rules";
import FAQ from "@/components/smackathon/FAQ/faq";
import Brochure from "../../components/smackathon/Brochure/brochure";{/*import Ddajki from "@/components/smackathon/animate/ddajki"*/}
import Footer from "@/components/Home/Footer/Footer";
import Prizepool from "@/components/smackathon/Prizepool/PrizePool";
import Goodies from "../../components/smackathon/Goodies/Goodies";
import { FooterContactDetailsACM } from "../../../data";
// app/smackathon/page.js

export const metadata = {
  title: "Smackathon 2K25",
  description:
    "Participate in Smackathon 2K25, a thrilling 24-hour hackathon hosted during YCCE’s Upsurge TechFest by the CSE Department. Build, innovate, and compete!",
  keywords: [
    "Smackathon 2K25",
    "YCCE Hackathon",
    "Upsurge 2025",
    "24 hour coding event",
    "CSE TechFest YCCE",
    "Hackathon Nagpur",
    "Tech events 2025",
  ],
  openGraph: {
    title: "Smackathon 2K25 – 24-Hour Hackathon at YCCE Upsurge",
    description:
      "Join Smackathon 2K25 during YCCE’s Upsurge TechFest. Code non-stop, innovate, and win!",
    url: "https://yourdomain.com/smackathon",
    siteName: "Upsurge 2K25",
    images: [
      {
        url: "https://res.cloudinary.com/dok1hsojb/image/upload/v1754211923/smackathon_logo_eiljkg.webp",
        width: 1200,
        height: 630,
        alt: "Smackathon 2K25 Hackathon Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smackathon 2K25 – 24-Hour Hackathon at YCCE Upsurge",
    description:
      "Smackathon 2K25 is YCCE’s signature hackathon event. Join now and showcase your coding skills!",
    images: [
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1754211923/smackathon_logo_eiljkg.webp",
    ],
  },
};

const Page = () => {
  return (
    // <div className="h-screen w-full bg-no-repeat bg-cover bg-center bg-[url('/smbg.png')]">
    // </div>
    <main>
      <Hero />
      <Brochure />
      <Prizepool/>
      <Goodies />
      <Tracks />
      <Timeline />
      <Rules />
      <FAQ />

      <LocateUs />
      {/*<Ddajki/>*/}
<Footer footerDetails={FooterContactDetailsACM} />
    </main>
  );
};

export default Page;
// https://i.pinimg.com/originals/3b/8e/1f/3b8e1f5ac3e25097d5e7400173f73378.gif
