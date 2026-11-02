"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Search, Target, Palette } from "lucide-react";
import Reveal, { StaggerContainer, StaggerItem } from "./Reveal";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ServicesBento() {
  const services = [
    {
      id: "01",
      title: "Website development",
      tagline: "Turn interest into action.",
      desc: "Websites that explain your offer and guide visitors towards an enquiry, booking, or purchase, with a clear experience across devices.",
      tags: ["Business websites", "Landing pages", "Website redesigns"],
      icon: <Globe className="w-5 h-5" />,
      colSpan: "lg:col-span-3",
    },
    {
      id: "02",
      title: "Application development",
      tagline: "Make everyday tasks easier.",
      desc: "Applications shaped around your customers or team, from customer portals to tools that simplify a business process.",
      tags: ["Interface design", "User journeys", "Dev & testing"],
      icon: <Smartphone className="w-5 h-5" />,
      colSpan: "lg:col-span-3",
    },
    {
      id: "03",
      title: "SEO optimization",
      tagline: "Help customers discover you.",
      desc: "Technical and content improvements that help your website communicate clearly with people and search engines.",
      tags: ["Technical SEO", "Keyword research", "Content"],
      icon: <Search className="w-5 h-5" />,
      colSpan: "lg:col-span-2",
    },
    {
      id: "04",
      title: "Meta advertising",
      tagline: "Put your offer in front of people.",
      desc: "Facebook and Instagram campaigns that connect the audience, message, and destination. Performance data guides improvements.",
      tags: ["Campaign setup", "Creative direction"],
      icon: <Target className="w-5 h-5" />,
      colSpan: "lg:col-span-2",
    },
    {
      id: "05",
      title: "Creative Design & Video",
      tagline: "Consistent visual identity.",
      desc: "Graphic design, distinctive logos, and edited videos that bring a consistent visual identity to your brand and campaigns.",
      tags: ["Graphic design", "Logo design", "Video"],
      icon: <Palette className="w-5 h-5" />,
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <section id="services" className="bg-ink px-6 md:px-12 py-28 md:py-40 border-b border-hairline relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-mist/60">03/</span>
                <div className="h-px w-8 bg-signal-green/40" />
                <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-signal-green">
                  Core Capabilities
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-hanken font-medium text-3xl sm:text-5xl lg:text-[54px] tracking-[-0.045em] text-white leading-[1.08]">
                Five services. <span className="text-signal-green">One direction.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="font-hanken text-[15px] sm:text-[17px] text-mist/80 max-w-md leading-[1.6]">
              Start with a focused project or connect our services around a shared business goal.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5" staggerDelay={0.08}>
          {services.map((item) => (
            <StaggerItem key={item.id} className={item.colSpan}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="h-full bg-ink-2/80 border border-hairline p-7 sm:p-8 flex flex-col justify-between hover:border-signal-green/40 transition-colors duration-500 group relative overflow-hidden"
              >
                {/* Subtle corner accent on hover */}
                <div className="absolute top-0 left-0 w-8 h-px bg-signal-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute top-0 left-0 h-8 w-px bg-signal-green scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                <div>
                  {/* Top ID + Icon row */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-hairline/60">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-mist/50 group-hover:text-signal-green/70 transition-colors duration-300">
                      [{item.id}]
                    </span>
                    <div className="p-2.5 border border-hairline/60 bg-black/40 group-hover:border-signal-green/30 group-hover:text-signal-green text-mist/60 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>

                  <div className="font-hanken font-medium text-[11px] text-signal-green uppercase tracking-[0.05em] mb-2.5">
                    {item.tagline}
                  </div>
                  <h3 className="font-hanken font-medium text-xl sm:text-2xl text-white tracking-[-0.035em] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-hanken text-mist/70 text-[14px] leading-[1.6] mb-8">
                    {item.desc}
                  </p>
                </div>

                {/* Deliverable Tags */}
                <div className="pt-5 border-t border-hairline/60 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-1 bg-black/50 border border-hairline/40 text-mist/60 group-hover:text-mist/80 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
