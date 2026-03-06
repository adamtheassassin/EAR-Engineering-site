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
import HomeMap from "@/components/HomeMap";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<"Electrical" | "Aircon" | "Solar" | "">("");

  const openModal = (category?: "Electrical" | "Aircon" | "Solar" | "") => {
    setModalCategory(category || "");
    setIsModalOpen(true);
  };

  return (
    <>
      <title>EAR Engineering | Fast HVAC, Electrical & Solar in Cape Town</title>
      <meta name="description" content="EAR Engineering provides expert project-managed electrical, aircon & solar solutions in Helderberg and Cape Town. On time, on budget, with a 1-hour callback promise." />
      <Header onOpenModal={() => openModal()} />

      <main className="flex-1">
        <Hero onOpenModal={() => openModal()} />
        <TrustedBy />
        <Reviews />
        <Services onOpenModal={(cat) => openModal(cat)} />
        <Emergency onOpenModal={() => openModal()} />
        <WhoWeWorkWith />
        <Trust />

        <Process />
        <ServiceAreas />
        <FAQ />
        <FinalCTA onOpenModal={() => openModal()} />
        <HomeMap />
      </main>

      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedCategory={modalCategory}
      />
    </>
  );
}
