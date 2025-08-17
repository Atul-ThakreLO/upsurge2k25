"use client";
import React from "react";
import Hero from "@/components/Home/Hero/hero";
import { usePathname } from "next/navigation";

const HomeExport = () => {
  const pathname = usePathname();
  return <Hero key={pathname} />;
};

export default HomeExport;
