"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Emergency from "@/components/Emergency";
import Trust from "@/components/Trust";
import Guarantee from "@/components/Guarantee";
import ServiceDetails from "@/components/ServiceDetails";
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
        <Reviews />
        <Services onOpenModal={() => setIsModalOpen(true)} />
        <Emergency onOpenModal={() => setIsModalOpen(true)} />
        <Trust />
        <Guarantee />
        <ServiceDetails />
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
