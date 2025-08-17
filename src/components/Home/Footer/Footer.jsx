"use client";

import React from "react";
import Image from "next/image";
import StaticMoneyPile from "./StaticMoneyPile";
import { FooterSocialLinks, NavLinks } from "../../../../data";

const Footer = ({ footerDetails }) => {
  return (
    <footer className="relative w-full text-white py-24 font-mono overflow-hidden">
      {/* <FallingMoney /> */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/squid-bg.png"
          alt="Squid Game Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/50 to-black/10" />
      </div>

      <section className="z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Column 1: Logos + Socials */}
        <div className="aspect-video rounded-lg">
          <div className="flex flex-col justify-between h-full p-6">
            <div className="flex justify-around items-center h-full">
              {[
                "/img/Upsurge_Logo-rm.png",
                "/img/Cosmos Logo.png",
                "/img/ACM Final.png",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Sponsor Logo ${i + 1}`}
                  width={`${i == 0 ? 125 : 100}`}
                  height={`${i == 0 ? 125 : 100}`}
                  // style={{ height: "auto", width: "auto" }}
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

        {/* Column 2: Navigation */}
        <nav
          className="space-y-6 text-center md:text-left md:block hidden"
          aria-label="Footer Navigation"
        >
          <h2 className="text-xl font-bold text-[#d43b81] tracking-widest">
            NAVIGATION
          </h2>
          <ul className="space-y-3">
            {NavLinks.map(
              (link) => (
                <li
                  key={link}
                  className="group relative flex items-center gap-2"
                >
                  <a
                    href={`${link.href.toLowerCase()}`}
                    className="text-white/90 group-hover:text-pink-400 transition"
                  >
                    {link.name}
                  </a>

                  <img
                    src="/gif/bullet.gif"
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

      {/* Divider
      <div className="relative my-13 h-0.5 mx-10 bg-[#d43b81] rounded-full shadow-[0_0_20px_5px_rgba(255,0,128,0.8)]">
        <div className="absolute inset-0 bg-[#d43b81] blur-md opacity-80 animate-pulse rounded-full" />
      </div> */}

      {/* Bottom Bar */}
      <div className="text-center mt-13 text-sm text-gray-400 leading-6">
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

      {/* Bottom Money Stack */}
      <StaticMoneyPile />
    </footer>
  );
};

export default Footer;
