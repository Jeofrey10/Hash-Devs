"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SurrealVortexBackground from "./SurrealVortexBackground";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"build" | "review" | "deploy">("build");

  // Physics-based spring 3D tilt tracking cursor coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Easing curve inspired by Agentcard / Linear / Apple [0.16, 1, 0.3, 1]
  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden bg-black flex flex-col justify-between"
    >
      {/* 1. Exact Video Animation: 3D Floating Surreal Vortex in Hash Devs Theme */}
      <SurrealVortexBackground />

      {/* Subtle Scanline / CRT Texture Overlay as seen in the video */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.14]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.8) 3px, rgba(0, 0, 0, 0.8) 4px)",
        }}
      />

      {/* Dynamic Ambient Background Glow in Signature Signal Green */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: smoothEase }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[750px] h-[240px] sm:h-[380px] lg:h-[450px] bg-signal-green/15 blur-[100px] sm:blur-[160px] pointer-events-none rounded-full z-[1]"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col items-center text-center relative z-10">
        
        {/* Status Pill: Smooth Slide-down & Pulse */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full border border-hairline bg-ink/90 backdrop-blur-md mb-5 sm:mb-6 md:mb-8 shadow-sm max-w-[92vw] overflow-hidden"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-green" />
          </span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-mist truncate">
            Digital Agency & Product Studio
          </span>
          <span className="text-hairline hidden xs:inline">|</span>
          <a
            href="#services"
            className="font-mono text-[10px] sm:text-xs text-signal-green hover:underline flex items-center gap-1 group shrink-0"
          >
            <span>Explore Services</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </motion.div>

        {/* 3D Extruded Block Typography (Exact visual typography from video + Hanken Grotesk) */}
        <div className="overflow-hidden mb-4 sm:mb-6 md:mb-8 max-w-6xl w-full px-2">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: smoothEase }}
            className="font-hanken font-semibold text-[44px] xs:text-[54px] sm:text-[80px] md:text-[116px] lg:text-[144px] tracking-[-0.065em] text-white leading-[0.94] uppercase select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
            style={{
              textShadow: "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)"
            }}
          >
            Hash <span className="text-signal-green" style={{
              textShadow: "0 1px 0 #3ddc57, 0 2px 0 #35c04b, 0 3px 0 #2ea842, 0 4px 0 #268f37, 0 5px 0 #1e752d, 0 6px 1px rgba(0,0,0,.3), 0 0 15px rgba(61,220,87,.4)"
            }}>Devs</span>
          </motion.h1>
        </div>

        {/* Subtitle from PDF */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: smoothEase }}
          className="font-hanken text-[14px] sm:text-[16px] md:text-[18px] text-mist/90 max-w-2xl mx-auto leading-[1.5] sm:leading-[1.55] mb-6 sm:mb-8 md:mb-10 px-4 drop-shadow-md"
        >
          Websites, applications, SEO, Meta ads, and creative design, planned
          around your business and the people you want to reach.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: smoothEase }}
          className="flex items-center w-full justify-center mb-8 sm:mb-12 md:mb-14 px-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold bg-signal-green text-black px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:bg-white hover:shadow-[0_0_28px_rgba(61,220,87,0.5)] active:scale-95"
          >
            Explore our services →
          </a>
        </motion.div>

        {/* Floating 3D Interactive Console Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.55, ease: smoothEase }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-5xl relative mt-4 perspective-[1200px]"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-b from-signal-green/30 via-signal-green/5 to-transparent blur-md pointer-events-none" />

          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative bg-ink/95 border border-hairline shadow-[0_32px_96px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-150 ease-out backdrop-blur-md"
          >
            <div
              style={{ transform: "translateZ(30px)" }}
              className="px-5 py-3.5 bg-ink-2 border-b border-hairline flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="font-mono text-xs text-mist flex items-center gap-2">
                <span className="text-signal-green animate-pulse">●</span>
                <span>hashdevs.cloud/runtime</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-mist">
                <button
                  onClick={() => setActiveTab("build")}
                  className={`px-2 py-0.5 transition-colors ${
                    activeTab === "build"
                      ? "text-signal-green border-b border-signal-green font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  ENGINE
                </button>
                <button
                  onClick={() => setActiveTab("review")}
                  className={`px-2 py-0.5 transition-colors ${
                    activeTab === "review"
                      ? "text-signal-green border-b border-signal-green font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  WORKFLOW
                </button>
                <button
                  onClick={() => setActiveTab("deploy")}
                  className={`px-2 py-0.5 transition-colors ${
                    activeTab === "deploy"
                      ? "text-signal-green border-b border-signal-green font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  DELIVERY
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              <div
                style={{ transform: "translateZ(45px)" }}
                className="md:col-span-7 font-mono text-xs sm:text-sm text-mist/90 space-y-3 overflow-x-auto"
              >
                <p className="text-mist/50">
                  // Hash Devs High-Performance Digital Stack
                </p>
                <p>
                  <span className="text-signal-green">const</span> agency ={" "}
                  <span className="text-white">new HashDevs</span>({`{`}
                </p>
                <p className="pl-4">
                  purpose:{" "}
                  <span className="text-signal-green">&quot;Turn interest into action&quot;</span>,
                </p>
                <p className="pl-4">
                  offer: [
                  <span className="text-white">&quot;Websites&quot;</span>,{" "}
                  <span className="text-white">&quot;Applications&quot;</span>,{" "}
                  <span className="text-white">&quot;SEO&quot;</span>,{" "}
                  <span className="text-white">&quot;Meta Ads&quot;</span>,{" "}
                  <span className="text-signal-green">&quot;Creative&quot;</span>]
                </p>
                <p className="pl-4">
                  clarityIndex: <span className="text-signal-green">1.0</span>,
                </p>
                <p className="pl-4">
                  guarantee: <span className="text-white">&quot;A shared project brief & clear scope&quot;</span>
                </p>
                <p>{`}`});</p>
                <div className="pt-2 text-mist/40 border-t border-hairline">
                  // Status: 5 Services Connected · 1 Direction
                </div>
                <p className="text-signal-green flex items-center gap-2">
                  <span>✔ Initialized client journey mapping</span>
                  <span className="animate-ping inline-flex h-1.5 w-1.5 rounded-full bg-signal-green" />
                </p>
              </div>

              <div
                style={{ transform: "translateZ(65px)" }}
                className="md:col-span-5 bg-ink-2/95 border border-hairline p-6 flex flex-col justify-between relative group shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-mist">
                    Identity Core
                  </span>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-signal-green/10 text-signal-green border border-signal-green/30">
                    Live Engine
                  </span>
                </div>

                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="py-6 flex items-center justify-center"
                >
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg
                      viewBox="0 0 140 100"
                      className="w-full h-full drop-shadow-[0_0_40px_rgba(61,220,87,0.4)]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48 10 L30 90"
                        stroke="#FFFFFF"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                      <path
                        d="M86 10 L68 90"
                        stroke="#3DDC57"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 36 L112 36"
                        stroke="#FFFFFF"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 66 L108 66"
                        stroke="#FFFFFF"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </motion.div>

                <div className="mt-4 pt-4 border-t border-hairline">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-mist">Client Target</span>
                    <span className="text-white font-semibold">100% On-Brand</span>
                  </div>
                  <div className="w-full bg-ink h-1.5 mt-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1.2, delay: 0.8, ease: smoothEase }}
                      className="bg-signal-green h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Marquee Ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="relative mt-20 marquee-wrapper overflow-hidden border-y border-signal-green/50 py-3.5 bg-black z-10"
      >
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-max marquee-track animate-marquee items-center">
          <div className="flex items-center gap-10 shrink-0 font-pixel text-xs sm:text-sm tracking-widest text-white uppercase pr-10">
            <span>WEBSITES</span> <span className="text-signal-green">✦</span>
            <span>APPLICATIONS</span> <span className="text-signal-green">✦</span>
            <span>SEO OPTIMIZATION</span> <span className="text-signal-green">✦</span>
            <span>META ADS</span> <span className="text-signal-green">✦</span>
            <span>GRAPHIC DESIGN</span> <span className="text-signal-green">✦</span>
            <span>LOGO DESIGN</span> <span className="text-signal-green">✦</span>
            <span>VIDEO EDITING</span> <span className="text-signal-green">✦</span>
            <span>CONVERSION ARCHITECTURE</span> <span className="text-signal-green">✦</span>
          </div>
          <div className="flex items-center gap-10 shrink-0 font-pixel text-xs sm:text-sm tracking-widest text-white uppercase pr-10" aria-hidden="true">
            <span>WEBSITES</span> <span className="text-signal-green">✦</span>
            <span>APPLICATIONS</span> <span className="text-signal-green">✦</span>
            <span>SEO OPTIMIZATION</span> <span className="text-signal-green">✦</span>
            <span>META ADS</span> <span className="text-signal-green">✦</span>
            <span>GRAPHIC DESIGN</span> <span className="text-signal-green">✦</span>
            <span>LOGO DESIGN</span> <span className="text-signal-green">✦</span>
            <span>VIDEO EDITING</span> <span className="text-signal-green">✦</span>
            <span>CONVERSION ARCHITECTURE</span> <span className="text-signal-green">✦</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
