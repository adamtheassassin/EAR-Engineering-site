"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Emergency from "@/components/Emergency";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Trust from "@/components/Trust";

import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main className="flex-1">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <TrustedBy />
        <Reviews />
        <Services onOpenModal={() => setIsModalOpen(true)} />
        <Emergency onOpenModal={() => setIsModalOpen(true)} />
        <WhoWeWorkWith />
        <Trust />

        <Process />
        <ServiceAreas />
        <FAQ />
        <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
