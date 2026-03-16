"use client";

import React from "react";
import Image from "next/image";
import { FaHouse, FaBuilding, FaShieldHalved, FaSolarPanel } from "react-icons/fa6";

export default function WhoWeWorkWith() {
    const cards = [
        {
            title: "Homeowners",
            icon: FaHouse,
            description: "We handle electrical installations, COC certificates, air-conditioning, and solar. Everything done neatly and to SANS standards.",
        },
        {
            title: "Commercial & Industrial",
            icon: FaBuilding,
            description: "We respond quickly, work to a clear plan, and keep everything documented and compliant.",
        },
        {
            title: "Estate & Property Managers",
            icon: FaShieldHalved,
            description: "We understand the high standards and long-term reliability that come with looking after other people's properties.",
        },
        {
            title: "Solar Projects",
            icon: FaSolarPanel,
            description: "Done properly, registered and authorised the right way, we have experience with large commercial systems as well as smaller residential installations.",
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-zinc-50 text-slate-900 overflow-hidden relative z-10">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Background Images/trees_background.png"
                    alt="Background Trees"
                    fill
                    quality={90}
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-white/90 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-50/80 to-zinc-50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#015CAB] tracking-tight">
                        Who We Work With
                    </h2>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-outfit font-semibold opacity-90">
                        Whether you're a homeowner with a tripped DB board, a property manager keeping multiple buildings running, or a business owner who needs solar installed before the next load shedding season, you've found the right team.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-7xl mx-auto">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-slate-200/60 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(1,92,171,0.08)] hover:border-[#015CAB]/30 flex flex-col text-center shadow-sm"
                        >
                            <div className="mx-auto h-16 w-16 rounded-2xl bg-[#015CAB] shadow-[0_4px_12px_rgba(1,92,171,0.25)] flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                                <card.icon className="text-3xl text-white group-hover:text-[#FFCA08] transition-colors duration-300 drop-shadow-sm" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-[#015CAB] transition-colors">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom text */}
                <div className="text-center max-w-4xl mx-auto pt-4">
                    <p className="text-xl md:text-2xl text-slate-800 font-bold tracking-tight">
                        If it involves electricity, air-conditioning, or solar in the Helderberg, Boland, or Western Cape, we are the team to call.
                    </p>
                </div>

            </div>
        </section>
    );
}
