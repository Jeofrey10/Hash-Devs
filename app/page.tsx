"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import InterfaceConcept from "@/components/InterfaceConcept";
import ServicesBento from "@/components/ServicesBento";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* High-tech brutalist loading screen */}
      <Preloader onComplete={() => setLoaded(true)} />

      <main
        className={`min-h-screen bg-black text-white selection:bg-signal-green selection:text-black transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-90"
        }`}
      >
        <Nav />
        <Hero />
        <Intro />
        <InterfaceConcept />
        <ServicesBento />
        <Process />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
