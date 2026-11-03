"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING ENGINE...");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Stage-based loading progression
    const stages = [
      { at: 20, text: "LOADING TYPOGRAPHY & ASSETS..." },
      { at: 45, text: "COMPILING 3D VORTEX SCENE..." },
      { at: 75, text: "SYNCING CONSOLE & VIEWPORTS..." },
      { at: 92, text: "PREPARING INTERFACE..." },
      { at: 100, text: "SYSTEM READY" },
    ];

    let current = 0;
    const interval = setInterval(() => {
      // Natural non-linear increment
      const increment = Math.floor(Math.random() * 8) + 3;
      current = Math.min(100, current + increment);
      setProgress(current);

      const matchedStage = stages.find((s) => current <= s.at);
      if (matchedStage) {
        setStatusText(matchedStage.text);
      } else {
        setStatusText("SYSTEM READY");
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 350);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-6 select-none overflow-hidden"
        >
          {/* Subtle background grid & radial glow */}
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute w-[450px] h-[300px] bg-signal-green/10 blur-[140px] rounded-full pointer-events-none" />

          {/* Center Brand & Loader Container */}
          <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
            
            {/* Logo Mark with Pulse */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 relative flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="Hash Devs Logo"
                width={220}
                height={80}
                priority
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_24px_rgba(61,220,87,0.35)]"
              />
            </motion.div>

            {/* Brutalist Progress Bar Container */}
            <div className="w-full bg-ink border border-hairline p-1 mb-4 shadow-2xl relative overflow-hidden">
              <motion.div
                className="h-2 bg-signal-green shadow-[0_0_14px_rgba(61,220,87,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Status & Numeric Readout */}
            <div className="w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-mist">
              <span className="flex items-center gap-1.5 truncate pr-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse shrink-0" />
                <span className="text-mist/70 truncate">{statusText}</span>
              </span>
              <span className="text-signal-green font-semibold shrink-0">
                {progress}%
              </span>
            </div>

            {/* Micro Agency Meta Bar */}
            <div className="mt-8 pt-4 border-t border-hairline/60 w-full flex items-center justify-between font-mono text-[9px] text-mist/40 uppercase tracking-widest">
              <span>HASH DEVS ENGINE</span>
              <span>v2.4 // STABLE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
