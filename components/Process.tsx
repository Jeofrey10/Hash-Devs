"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal, { StaggerContainer, StaggerItem } from "./Reveal";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Understand the goal",
      desc: "We discuss your audience, current challenges, and what you want the project to achieve.",
      deliverable: "A shared project brief",
    },
    {
      step: "02",
      title: "Agree on the plan",
      desc: "We define the scope, deliverables, timeline, and pricing before the project begins.",
      deliverable: "A clear scope of work",
    },
    {
      step: "03",
      title: "Build and review",
      desc: "We create the agreed work, share progress at key review points, and check the details before delivery.",
      deliverable: "Work you can review",
    },
    {
      step: "04",
      title: "Launch and improve",
      desc: "We prepare the handover and agree on any ongoing support, SEO work, or campaign management.",
      deliverable: "An agreed next step",
    },
  ];

  return (
    <section id="process" className="bg-black px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 border-b border-hairline relative overflow-hidden">
      {/* Dot grid accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-mist/60">04/</span>
              <div className="h-px w-8 bg-signal-green/40" />
              <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-signal-green">
                Roadmap & Engagement
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-hanken font-medium text-3xl sm:text-5xl lg:text-[54px] tracking-[-0.045em] text-white mb-5 leading-[1.08]">
              From first conversation <br />
              to a <span className="text-signal-green">confident launch.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-hanken text-[17px] text-mist/80 leading-[1.6]">
              A clear scope, reviewable progress, and decisions tied to your business goal.
            </p>
          </Reveal>
        </div>

        {/* Progress bar — horizontal connector */}
        <Reveal delay={0.2}>
          <div className="hidden lg:block mb-8">
            <div className="flex items-center gap-0">
              {steps.map((item, i) => (
                <React.Fragment key={item.step}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-signal-green rounded-full" />
                    <span className="font-mono text-[10px] text-signal-green/70 tracking-wider">{item.step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-hairline mx-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 4 Process Timeline Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
          {steps.map((item, index) => (
            <StaggerItem key={item.step}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="h-full bg-ink border border-hairline p-7 sm:p-8 flex flex-col justify-between hover:border-signal-green/40 transition-colors duration-500 relative group"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-6 h-px bg-signal-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                <div className="absolute top-0 right-0 h-6 w-px bg-signal-green scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-hanken text-4xl font-medium text-signal-green/30 group-hover:text-signal-green/50 transition-colors duration-500">
                      {item.step}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-green/40 group-hover:bg-signal-green group-hover:scale-150 transition-all duration-500" />
                  </div>

                  <h3 className="font-hanken text-xl font-medium text-white mb-3 tracking-[-0.035em] leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-hanken text-mist/70 text-[14px] leading-[1.65] mb-8">
                    {item.desc}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-4 border-t border-hairline/60">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist/40 block mb-1.5">
                    Deliverable
                  </span>
                  <span className="font-mono text-[11px] text-signal-green/80 font-medium tracking-wide">
                    {item.deliverable}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
