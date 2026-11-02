"use client";

import React from "react";
import Reveal, { StaggerContainer, StaggerItem } from "./Reveal";

export default function Intro() {
  return (
    <section className="bg-ink px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 border-b border-hairline relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-6">
          <Reveal delay={0}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-mist/60">01/</span>
              <div className="h-px w-8 bg-signal-green/40" />
              <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-signal-green">
                Unified Delivery
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-hanken font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-0.045em] text-white leading-[1.08]">
              One connected <br />
              <span className="text-signal-green">digital experience.</span>
            </h2>
          </Reveal>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8 lg:space-y-10">
          <Reveal delay={0.15}>
            <p className="font-hanken text-[15px] sm:text-[17px] text-mist/90 leading-[1.65] max-w-lg">
              We bring development, creative design, and digital marketing together,
              helping customers discover your business, understand your offer, and
              take the next step.
            </p>
          </Reveal>

          {/* 3 Metric Pills — artcraft editorial numbering */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-hairline" staggerDelay={0.12}>
            {[
              { num: "01", label: "DEVELOP", desc: "Code & systems" },
              { num: "02", label: "DESIGN", desc: "Visual identity" },
              { num: "03", label: "GROW", desc: "Reach & convert" },
            ].map((item) => (
              <StaggerItem key={item.num}>
                <div className="group border border-hairline p-5 bg-black/30 hover:border-signal-green/40 transition-all duration-400 card-hover-lift">
                  <span className="font-mono text-2xl font-bold text-signal-green/80 block mb-3 group-hover:text-signal-green transition-colors">
                    {item.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white font-medium block mb-1">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] text-mist/50 tracking-wide">
                    {item.desc}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
