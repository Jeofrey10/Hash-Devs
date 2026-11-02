import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import InterfaceConcept from "@/components/InterfaceConcept";
import ServicesBento from "@/components/ServicesBento";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-signal-green selection:text-black">
      <Nav />
      <Hero />
      <Intro />
      <InterfaceConcept />
      <ServicesBento />
      <Process />
      <ContactCTA />
      <Footer />
    </main>
  );
}
