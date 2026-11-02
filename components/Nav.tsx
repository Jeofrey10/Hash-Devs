"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HashLogo from "./HashLogo";

const navLinks = [
  { label: "Services", href: "#services", num: "01" },
  { label: "Interface", href: "#concept", num: "02" },
  { label: "Process", href: "#process", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-hairline py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center group relative z-50">
            <HashLogo className="h-7 md:h-8" />
          </a>

          {/* Center Links — editorial numbered style */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mist/80 hover:text-white transition-colors duration-300"
              >
                <span className="text-signal-green/60 group-hover:text-signal-green mr-1.5 transition-colors">
                  {link.num}
                </span>
                {link.label}
                {/* Underline on hover */}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-signal-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] bg-signal-green text-black px-5 py-2.5 transition-all duration-300 hover:bg-white active:scale-95 group"
            >
              <span>Start a project</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`w-5 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-mono text-sm uppercase tracking-[0.2em] text-mist hover:text-white transition-colors"
                >
                  <span className="text-signal-green mr-2">{link.num}/</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-4 font-mono text-xs uppercase tracking-wider bg-signal-green text-black px-6 py-3"
              >
                Start a project →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
