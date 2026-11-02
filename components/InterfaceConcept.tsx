"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function InterfaceConcept() {
  const [selectedTime, setSelectedTime] = useState("10:30");
  const timeSlots = ["09:00", "10:30", "14:00"];

  return (
    <section id="concept" className="bg-black px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 border-b border-hairline relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header — endcap.design typography */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-8 bg-signal-green/40" />
              <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-mist/60">
                02/ <span className="text-signal-green">Live Preview</span>
              </span>
              <div className="h-px w-8 bg-signal-green/40" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-hanken font-medium text-2xl sm:text-4xl lg:text-[50px] tracking-[-0.045em] text-white mb-3 sm:mb-5 leading-[1.1]">
              Website + app <br className="hidden sm:block" />
              <span className="text-signal-green">interface concept.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-hanken text-[14px] sm:text-[16px] text-mist/80 max-w-lg mx-auto leading-[1.6] px-4">
              Real interactive mockup demonstrating synchronized state across browser and mobile devices.
            </p>
          </Reveal>
        </div>

        {/* Coded Interactive Mockup Showcase */}
        <Reveal variant="scale-in" delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Desktop Browser Frame */}
            <div className="bg-ink border border-hairline p-6 sm:p-8 relative z-10 w-full sm:w-[85%] group hover:border-signal-green/30 transition-colors duration-500">
              {/* Top Browser Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-400/60 transition-colors duration-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-400/60 transition-colors duration-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-signal-green/60 transition-colors duration-500" />
                  <div className="ml-3 bg-black/60 border border-hairline px-3 py-1">
                    <span className="font-mono text-[10px] text-mist/70">https://yourbusiness.com/booking</span>
                  </div>
                </div>
                <div className="hidden sm:flex gap-4 font-mono text-[10px] text-mist/60 uppercase tracking-wider">
                  <span className="hover:text-white transition-colors cursor-pointer">Services</span>
                  <span className="hover:text-white transition-colors cursor-pointer">About</span>
                  <span className="text-signal-green cursor-pointer">Get in touch</span>
                </div>
              </div>

              {/* Desktop Mockup Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <h3 className="font-hanken font-medium text-2xl sm:text-3xl text-white tracking-[-0.035em] leading-tight">
                    Good service. <br />
                    <span className="text-signal-green">Easy booking.</span>
                  </h3>
                  <p className="text-mist/70 text-[14px] font-hanken leading-[1.6]">
                    Find the right service and choose a time that works for you.
                  </p>
                  <button className="group/btn font-hanken text-[13px] font-medium bg-white text-black px-5 py-3 hover:bg-signal-green transition-colors duration-300 flex items-center gap-2">
                    <span>Book a consultation</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>

                {/* Consultation Selector Box */}
                <div className="md:col-span-5 bg-ink-2 border border-hairline p-5 space-y-4 hover:border-signal-green/20 transition-colors duration-500">
                  <div className="font-mono text-[10px] text-white/90 uppercase tracking-[0.15em] flex justify-between items-center">
                    <span>Choose your visit</span>
                    <span className="text-signal-green flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-signal-green animate-pulse" />
                      Active
                    </span>
                  </div>
                  <div className="font-sans text-xs text-mist/60">Consultation</div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-mist/40 block tracking-wider">Available times</span>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          whileTap={{ scale: 0.95 }}
                          className={`font-mono text-xs py-2.5 text-center transition-all duration-300 border ${
                            selectedTime === time
                              ? "border-signal-green bg-signal-green text-black font-semibold"
                              : "border-hairline text-mist hover:text-white hover:border-white/30"
                          }`}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-hairline font-mono text-[10px] text-signal-green/80 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
                    <span>A simple next step.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Synchronized Phone Frame */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: smoothEase }}
              viewport={{ once: true }}
              className="sm:absolute sm:right-0 sm:bottom-[-20px] z-20 w-full sm:w-[270px] mt-6 sm:mt-0 bg-black border border-hairline p-5 rounded-[18px] hover:border-signal-green/30 transition-colors duration-500"
            >
              {/* Phone Notch */}
              <div className="w-14 h-1 bg-white/10 rounded-full mx-auto mb-4" />

              <div className="font-mono text-[10px] text-mist/50 uppercase tracking-[0.2em] mb-1.5">
                Your booking
              </div>
              <div className="font-pixel text-lg font-bold text-white mb-3">
                Consultation
              </div>

              <div className="bg-ink-2 border border-hairline p-3 mb-4 rounded">
                <span className="font-mono text-[9px] text-mist/40 block mb-1 tracking-wider">Select a time</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTime}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-base font-bold text-signal-green"
                  >
                    {selectedTime}
                  </motion.div>
                </AnimatePresence>
                <span className="font-mono text-[8px] text-mist/30 tracking-wide">Synchronized with desktop view</span>
              </div>

              <button className="w-full font-mono text-[11px] uppercase font-medium bg-signal-green text-black py-2.5 rounded transition-all duration-300 hover:bg-white text-center active:scale-95">
                Continue
              </button>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
