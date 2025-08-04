if (typeof ProgressEvent === "undefined") {
  global.ProgressEvent = class ProgressEvent extends Event {
    constructor(type, eventInitDict = {}) {
      super(type, eventInitDict);
      this.lengthComputable = eventInitDict.lengthComputable || false;
      this.loaded = eventInitDict.loaded || 0;
      this.total = eventInitDict.total || 0;
    }
  };
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Upsurge 2K25",
  description:
    "Join us at Upsurge 2K25 – the ultimate TechFest organized by the CSE Department of YCCE. Experience innovation, competitions, workshops, and fun activities. Get ready to upsurge your potential!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
