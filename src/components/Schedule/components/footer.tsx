"use client";

import React from "react";
import Image from "next/image";
import { FooterSocialLinks } from "../../../../data";


type FooterItem = {
  name: string;
  position: string;
  tel: string;
  phone: string;
};

type FooterProps = {
  footerDetails: FooterItem[];
};



const Footer = ({ footerDetails }: { footerDetails: any[] }) => {
  return (
    <footer className="relative w-full text-white font-mono overflow-hidden z-20 px-4 sm:px-10">

  <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 py-16">
    {/* Column 1: Logos + Socials */}
    <div className="aspect-video rounded-lg">
      <div className="flex flex-col justify-between h-full p-6">
        <div className="flex justify-around items-center h-full">
          {[ "/img/Upsurge_Logo-rm.png", "/img/Cosmos Logo.png", "/img/ACM Final.png" ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Sponsor Logo ${i + 1}`}
              width={`${i == 0 ? 125 : 100}`}
              height={`${i == 0 ? 125 : 100}`}
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
        <div className="text-sm mt-4 flex flex-col items-center justify-center">
          <span className="font-semibold text-white mb-2">Follow Us:</span>
          <div className="flex items-center justify-center space-x-4">
            {FooterSocialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.alt}
                className="text-[#d43b81] transition hover:scale-110 hover:text-pink-500 hover:drop-shadow-[0_0_6px_#ff4da6]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

     <nav
              className="space-y-6 text-center md:text-left md:block hidden"
              aria-label="Footer Navigation"
            >
              <h2 className="text-xl font-bold text-[#d43b81] tracking-widest">
                NAVIGATION
              </h2>
              <ul className="space-y-3">
                {["Home", "Smackathon", "Schedule", "Events", "Teams"].map(
                  (link) => (
                    <li
                      key={link}
                      className="group relative flex items-center gap-2"
                    >
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-white/90 group-hover:text-pink-400 transition"
                      >
                        {link}
                      </a>
    
                      <img
                        src="/svg/bullet.gif"
                        alt="gif"
                        className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out"
                      />
                    </li>
                  )
                )}
              </ul>
            </nav>
    
            {/* Column 3: Contact & Location */}
            <address className="not-italic space-y-6 text-sm text-center md:text-left">
              <div>
                <h2 className="text-xl font-bold text-[#d43b81] tracking-widest">
                  FIND US
                </h2>
                <p className="mt-2 text-gray-300">
                  CSE Dept, YCCE College, Wanadongri, Nagpur
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#d43b81] tracking-widest">
                  CONTACT
                </h2>
                <div className="relative w-full max-w-sm mx-auto md:mx-0 mt-4 rounded-md overflow-hidden shadow-lg">
                  <Image
                    src="/img/game-card.jpg"
                    alt="Contact Card Background"
                    fill
                    className="absolute object-cover inset-0 z-0"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <div className="relative z-20 px-4 py-6 text-white space-y-4">
                    {footerDetails.map(({ name, position, tel, phone }, i) => (
                      <div
                        key={i}
                        className={`${
                          i != footerDetails.length - 1
                            ? "border-b border-white/10"
                            : ""
                        } pb-2`}
                      >
                        <strong className="text-lg text-[#0d152b]">{name}</strong>
                        <br />
                        <span className="text-sm">{position}</span>
                        <br />
                        <a
                          href={tel}
                          className="text-sm text-pink-200 hover:underline"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </address>
          </section>

  {/* Bottom Text Bar */}
  <div className="text-center mt-10 text-sm text-gray-400 leading-6 z-20">
    &copy; 2025 Department of Computer Science and Engineering, YCCE.
    <br />
    Developed by <span className="text-yellow-400">Website Team CSE</span>.
    <br />
    <a
      href="https://drive.google.com/file/d/1--gJQ99KVrr83m0NxV-0THayvesLrQ_T/view?usp=drive_link"
      className="text-red-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Privacy Policy
    </a>{" "}
    |{" "}
    <a
      href="https://drive.google.com/file/d/1rx1nGnWxxPpl5lxqS9IXL1yJsn94sn0W/view?usp=drive_link"
      className="text-red-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      No Refund Policy
    </a>
  </div>
</footer>

  );
};

export default Footer;
