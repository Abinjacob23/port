import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { AnimatedBackground } from "./components/AnimatedBackground";

export default function App() {
  return (
    <main className="relative w-full min-h-screen bg-[#070707] font-['Inter',sans-serif] overflow-x-hidden">

    <AnimatedBackground />

    <Navbar />

    <div className="relative z-10 pt-24 max-w-[1440px] mx-auto">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />

    </div>

</main>
  );
}
