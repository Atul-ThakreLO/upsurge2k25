'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./sponsor.css";

const sponsors = [
  "/sponsors/shubi.png", "/sponsors/vivo.png", "/sponsors/TIME.png", "/sponsors/Shahoverseas.png",
  "/sponsors/dahiyamomos.png", "/sponsors/gulsons.png", "/sponsors/Dreamasia.png","/sponsors/TruScholar.png",
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
      
      <div className="sponsor-heading mt-32">
        <Image src="/sponsors/sponhead.png" alt="VIP Sponsors" width={500} height={100} className="vip-heading" />
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
      <div className="sponsor-wrapper mt-20">
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
