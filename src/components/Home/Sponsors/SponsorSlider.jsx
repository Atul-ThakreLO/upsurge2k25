'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./sponsor.css";

const sponsors = [
  "/shubi.png", "/vivo.png", "/TIME.png", "/Shahoverseas.png",
  "/dahiyamomos.png", "/gulsons.png", "/Dreamasia.png",
];

export default function SponsorSlider() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 5}s`,
    }));
    setSparkles(generated);
  }, []);

  return (
    <section className="sponsor-section items-center">
      
      <div className="sponsor-heading mt-5">
        <Image src="/sponhead.png" alt="VIP Sponsors" width={500} height={100} className="vip-heading" />
      </div>

      <div className="sparkle-background">
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.animationDelay,
              animationDuration: s.animationDuration,
            }}
          />
        ))}
      </div>
      <div className="sponsor-wrapper">
        {[...sponsors, ...sponsors].map((src, index) => (
          <div key={index} className="sponsor-item">
            <Image
              src={src}
              alt={`Sponsor ${index + 1}`}
              width={300}
              height={200}
              className="sponsor-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
