"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import Reviews from "@/components/Reviews";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/components/ServiceAreas";

export default function AreasPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <title>Areas We Serve | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides expert electrical, aircon, and solar solutions across the Western Cape. See the areas we serve." />
            
            <Header onOpenModal={() => setIsModalOpen(true)} />

            <main className="flex-1 bg-gray-50">
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-7xl text-center">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#e6f0f9] text-[#015CAB] font-bold text-sm mb-6 tracking-widest uppercase shadow-sm border border-[#015CAB]/10">
                            Our Service Radius
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                            Areas We <span className="text-[#015CAB]">Serve</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                            We're proud to provide professional electrical, solar, and air conditioning solutions to homes and businesses across the Western Cape. From residential properties to large commercial facilities, we've got you covered.
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {locations.map((loc) => (
                                <div key={loc.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col group">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={loc.image}
                                            alt={`${loc.name} service area`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-700 uppercase tracking-wider shadow-sm">
                                            {loc.subRegion}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-[#f0f4f8] text-[#015CAB] p-2.5 rounded-xl border border-blue-50">
                                                <loc.icon className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#015CAB] transition-colors">{loc.name}</h2>
                                        </div>
                                        <p className="text-gray-600 mb-8 flex-1 leading-relaxed">{loc.description}</p>
                                        <Link 
                                            href={`/areas/${loc.id}`}
                                            className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-gray-50 hover:bg-[#015CAB] hover:text-white text-[#015CAB] font-bold rounded-xl transition-all duration-300 border border-gray-100"
                                        >
                                            View {loc.name} Services
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Trust />
                <Reviews />
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
