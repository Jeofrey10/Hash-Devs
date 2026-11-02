"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ContactCTA() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Website Development",
    "Application Development",
    "SEO Optimization",
    "Meta Advertising",
    "Creative Design & Video",
  ];

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ink px-6 md:px-12 py-28 md:py-40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-signal-green/20 via-signal-green/5 to-transparent" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left Side */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-mist/60">05/</span>
              <div className="h-px w-8 bg-signal-green/40" />
              <span className="font-hanken font-medium text-[11px] tracking-[0.07em] uppercase text-signal-green">
                Start The Conversation
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-hanken font-medium text-4xl sm:text-5xl lg:text-[62px] tracking-[-0.045em] text-white leading-[1.07]">
              Let&apos;s talk about <br />
              your <span className="text-signal-green">next project.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-hanken text-[17px] text-mist/80 leading-[1.65] max-w-lg">
              Share your business goal, any existing website, app, or brand materials,
              your preferred timeline, and budget range. We can then discuss the right
              starting point.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-8 border-t border-hairline space-y-4">
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-wider">
                <span className="text-signal-green uppercase">Email</span>
                <span className="text-white">hello@hashdevs.com</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-wider">
                <span className="text-signal-green uppercase">Availability</span>
                <span className="text-mist/70">Taking on selected Q1/Q2 projects</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <Reveal variant="scale-in" delay={0.1}>
            <div className="bg-ink-2/80 border border-hairline p-8 sm:p-10 relative group hover:border-hairline transition-colors duration-500">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-10 h-px bg-signal-green/50" />
              <div className="absolute top-0 left-0 h-10 w-px bg-signal-green/50" />
              <div className="absolute bottom-0 right-0 w-10 h-px bg-signal-green/50" />
              <div className="absolute bottom-0 right-0 h-10 w-px bg-signal-green/50" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    className="py-16 text-center space-y-5"
                  >
                    <div className="w-14 h-14 bg-signal-green/10 border border-signal-green text-signal-green flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="font-pixel text-2xl uppercase text-white font-bold">
                      Project brief received
                    </h3>
                    <p className="text-mist/70 font-sans font-light text-sm max-w-md mx-auto leading-relaxed">
                      Thank you! We will review your goals and schedule a discovery consultation within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-mono text-[11px] text-signal-green uppercase tracking-wider hover:text-white transition-colors mt-2"
                    >
                      ← Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >
                    {/* Service Selection Chips */}
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50 block mb-3">
                        Services of interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {servicesList.map((svc) => (
                          <motion.button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            whileTap={{ scale: 0.95 }}
                            className={`font-mono text-[11px] px-3.5 py-2 border transition-all duration-300 ${
                              selectedServices.includes(svc)
                                ? "border-signal-green bg-signal-green text-black font-semibold"
                                : "border-hairline/60 bg-black/30 text-mist/70 hover:text-white hover:border-white/30"
                            }`}
                          >
                            {selectedServices.includes(svc) && "✓ "}{svc}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Input Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50 block mb-2">
                          Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Jane Doe"
                          className="w-full bg-black/40 border border-hairline/60 px-4 py-3 font-sans text-sm text-white placeholder:text-mist/30 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50 block mb-2">
                          Email / WhatsApp *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="jane@company.com"
                          className="w-full bg-black/40 border border-hairline/60 px-4 py-3 font-sans text-sm text-white placeholder:text-mist/30 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50 block mb-2">
                        Business goal & scope
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what you want the project to achieve..."
                        className="w-full bg-black/40 border border-hairline/60 px-4 py-3 font-sans text-sm text-white placeholder:text-mist/30 transition-all duration-300 resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50 block mb-2">
                          Preferred timeline
                        </label>
                        <select className="w-full bg-black/40 border border-hairline/60 px-4 py-3 font-mono text-[11px] text-mist/70 transition-all duration-300">
                          <option>Within 1 month</option>
                          <option>1 - 3 months</option>
                          <option>Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50 block mb-2">
                          Budget range
                        </label>
                        <select className="w-full bg-black/40 border border-hairline/60 px-4 py-3 font-mono text-[11px] text-mist/70 transition-all duration-300">
                          <option>$3,000 - $8,000</option>
                          <option>$8,000 - $20,000</option>
                          <option>$20,000+</option>
                        </select>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full font-mono text-[11px] uppercase tracking-[0.15em] font-semibold bg-signal-green text-black py-4 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 mt-2 group/btn"
                    >
                      <span>Send project brief</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
