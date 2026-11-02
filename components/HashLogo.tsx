import React from "react";
import Image from "next/image";

export default function HashLogo({
  className = "h-8 w-auto",
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* High-resolution official logo image */}
      <Image
        src="/logo.png"
        alt="Hash Devs Logo"
        width={1024}
        height={384}
        priority
        className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-mono text-[10px] sm:text-[11px] text-mist/70 tracking-[0.2em] uppercase font-medium ml-1">
        DEVS
      </span>
    </div>
  );
}
