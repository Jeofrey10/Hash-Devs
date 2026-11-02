"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HashLogo from "./HashLogo";
import Reveal from "./Reveal";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const footerLinks = [
  { label: "Services", href: "#services", num: "01" },
  { label: "Interface", href: "#concept", num: "02" },
  { label: "Process", href: "#process", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

export default function Footer() {
  const [coords, setCoords] = useState({ x: 640, y: 356 });
  const [scrollProgress, setScrollProgress] = useState(1.0);
  const [elapsed, setElapsed] = useState("00.0s");

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const sec = ((Date.now() - startTime) / 1000).toFixed(1);
      setElapsed(`${sec}s`);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll).toFixed(3);
        setScrollProgress(Math.min(1.0, Math.max(0, parseFloat(current))));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-black border-t border-hairline relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-signal-green/30 to-transparent" />

      <div className="pt-12 sm:pt-16 pb-0 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            {/* Logo + tagline */}
            <Reveal className="md:col-span-4">
              <HashLogo className="h-8 mb-5" />
              <p className="font-sans font-light text-mist/60 text-sm leading-[1.8] max-w-xs">
                Websites, applications, SEO, Meta ads, and creative design, planned around your business and the people you want to reach.
              </p>
            </Reveal>

            {/* Navigation */}
            <Reveal delay={0.1} className="md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/40 block mb-5">
                Navigation
              </span>
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group font-mono text-[11px] uppercase tracking-[0.12em] text-mist/60 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-signal-green/40 group-hover:text-signal-green transition-colors">{link.num}/</span>
                    {link.label}
                  </a>
                ))}
              </nav>
            </Reveal>

            {/* Contact info */}
            <Reveal delay={0.15} className="md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/40 block mb-5">
                Get in touch
              </span>
              <div className="space-y-3 font-mono text-[11px]">
                <div>
                  <span className="text-mist/40 block mb-1">Email</span>
                  <a href="mailto:hello@hashdevs.com" className="text-white hover:text-signal-green transition-colors">
                    hello@hashdevs.com
                  </a>
                </div>
                <div>
                  <span className="text-mist/40 block mb-1">Availability</span>
                  <span className="text-mist/70">Q1/Q2 projects</span>
                </div>
              </div>
            </Reveal>

            {/* Status */}
            <Reveal delay={0.2} className="md:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/40 block mb-5">
                Status
              </span>
              <div className="flex items-center gap-2 font-mono text-[11px] text-signal-green/70 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-green animate-pulse" />
                <span>Available</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-mist/50 hover:text-signal-green transition-colors duration-300 group"
              >
                <span>Start a project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            </Reveal>
          </div>

          {/* Bottom metadata bar */}
          <div className="pt-8 pb-12 border-t border-hairline/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-[10px] text-mist/30 tracking-wider">
              © {new Date().getFullYear()} Hash Devs. All rights reserved.
            </span>
            <span className="font-mono text-[10px] text-mist/30 tracking-wider">
              Built with precision.
            </span>
          </div>
        </div>
      </div>

      {/* Massive Bold "HASH DEVS" bottom banner matching reference image */}
      <div className="relative w-full overflow-hidden select-none border-t border-hairline/40 bg-black pt-6 sm:pt-10 pb-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: smoothEase }}
            viewport={{ once: true }}
            className="w-full flex items-baseline justify-center"
          >
            <h1 className="font-hanken font-semibold tracking-[-0.07em] text-white uppercase text-[15.5vw] sm:text-[15vw] lg:text-[14.5vw] leading-[0.84] text-center w-full whitespace-nowrap block drop-shadow-[0_10px_35px_rgba(255,255,255,0.08)]">
              HASH DEVS
            </h1>
          </motion.div>

          {/* Bottom telemetry HUD overlay like in reference image */}
          <div className="absolute right-6 sm:right-12 bottom-3 sm:bottom-5 z-20 flex items-center gap-6 font-mono text-[9px] sm:text-[10px] text-mist/50 uppercase tracking-widest bg-black/70 backdrop-blur-sm px-3 py-1.5 border border-hairline/40">
            <div className="flex items-center gap-2">
              <span className="text-mist/30">CURSOR X:</span>
              <span className="text-signal-green">{coords.x}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-mist/30">CURSOR Y:</span>
              <span className="text-signal-green">{coords.y}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-mist/30">SCROLL:</span>
              <span className="text-white">{scrollProgress.toFixed(3)}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-mist/30">TIME:</span>
              <span className="text-white">{elapsed}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
