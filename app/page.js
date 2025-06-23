"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import SupportSection from "@/components/SupportSection";
import LegalitySection from "@/components/LegalitySection";
import ImpactSection from "@/components/ImpactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white scroll-smooth" id="top">
      <section id="HeroSection"><HeroSection /></section>
      <section id="ProgramsSection"><ProgramsSection /></section>
      <section id="SupportSection"><SupportSection /></section>
      <section id="LegalitySection"><LegalitySection /></section>
      <section id="ImpactSection"><ImpactSection /></section>
      <section id="ContactForm"><ContactForm /></section>
    </main>
  );
}
