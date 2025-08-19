import Schedule from "@/components/Schedule/page";

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



export default function Home() {
    return(
        <div className="font-mono">
        <Schedule/>
        </div>

    );
}