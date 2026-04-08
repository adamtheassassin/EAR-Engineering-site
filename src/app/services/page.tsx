"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { FaBolt, FaRegSnowflake, FaSun, FaArrowRight } from "react-icons/fa6";

export default function ServicesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const categories = [
        {
            title: "Air Conditioning",
            icon: FaRegSnowflake,
            iconColor: "text-cyan-600",
            services: [
                { name: "AC Installation", href: "/services/ac-installation" },
                { name: "AC Repair", href: "/services/ac-installation" },
                { name: "AC Maintenance", href: "/services/ac-installation" },
                { name: "Commercial Air Conditioning", href: "/services/ac-installation" },
            ]
        },
        {
            title: "Solar Solutions",
            icon: FaSun,
            iconColor: "text-[#FFCA08]",
            services: [
                { name: "Solar Installation", href: "/services/solar-installation" },
                { name: "Battery Backup Systems", href: "/services/solar-installation" },
                { name: "Commercial Solar", href: "/services/solar-installation" },
                { name: "Solar System Upgrades", href: "/services/solar-installation" },
            ]
        },
        {
            title: "Electrical Services",
            icon: FaBolt,
            iconColor: "text-[#015CAB]",
            services: [
                { name: "Electrical Installations", href: "/services/electrical-services" },
                { name: "DB Board Upgrades", href: "/services/electrical-services" },
                { name: "COC Certificates", href: "/services/electrical-services" },
                { name: "Generator Installations", href: "/services/electrical-services/generator-installation" },
            ]
        }
    ];

    return (
        <>
            <title>Electrical, Aircon & Solar Services in Somerset West | EAR Engineering</title>
            <meta name="description" content="Browse our professional electrical, air conditioning, and solar installation services in Somerset West, Stellenbosch, and the Helderberg." />
            <link rel="canonical" href="https://earengineering.co.za/services" />

            <Header onOpenModal={() => setIsModalOpen(true)} />

            <main className="flex-1 bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Electrical, Aircon & Solar Services in Somerset West
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                            EAR Engineering provides reliable, compliant, and professional engineering solutions across <strong>Somerset West, Stellenbosch, and the greater Helderberg region</strong>. Select a category below to explore our specific services and find exactly what you need for your home or business.
                        </p>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        {categories.map((category, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`p-4 rounded-2xl bg-gray-50 flex-shrink-0 ${category.iconColor}`}>
                                        <category.icon className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {category.services.map((service, s_idx) => (
                                        <a
                                            key={s_idx}
                                            href={service.href}
                                            className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all font-semibold text-gray-700 hover:text-[#015CAB]"
                                        >
                                            {service.name}
                                            <FaArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#015CAB]" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
