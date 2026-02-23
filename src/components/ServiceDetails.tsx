"use client";

import { useState } from "react";
import { Zap, Snowflake, Sun } from "lucide-react";

export default function ServiceDetails() {
    const [activeTab, setActiveTab] = useState("Electrical");

    const tabs = [
        {
            id: "Electrical",
            icon: Zap,
            desc: "From minor fault finding to complete full DB board upgrades. Our certified electricians ensure strict compliance.",
            points: [
                "Certificate of Compliance (COC)",
                "DB Board upgrades and rewiring",
                "Geyser timer & isolator installation",
            ],
            imgCol: "bg-blue-100"
        },
        {
            id: "Aircon",
            icon: Snowflake,
            desc: "Installation, repairs, and deep maintenance of Split and Ducted Air Conditioning for residential and commercial spaces.",
            points: [
                "Gas top-ups and leak detection",
                "Split-system and cassette setups",
                "Preventative maintenance plans",
            ],
            imgCol: "bg-cyan-100"
        },
        {
            id: "Solar",
            icon: Sun,
            desc: "Custom-designed solar & inverter solutions to counter loadshedding. Using high-quality tier 1 panels and lithium cells.",
            points: [
                "Hybrid inverter integration",
                "Battery backup configurations",
                "SSEG municipal registration",
            ],
            imgCol: "bg-yellow-100"
        }
    ];

    const active = tabs.find(t => t.id === activeTab)!;

    return (
        <section className="bg-white py-24 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Inside Our Offerings
                    </h2>
                    <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                        Get to know what we do best. Dive into the specifics.
                    </p>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center mb-10">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition whitespace-nowrap ${activeTab === tab.id
                                    ? "bg-gray-900 text-white shadow-md ring-2 ring-gray-900 ring-offset-2"
                                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <tab.icon className="w-5 h-5" /> {tab.id}
                        </button>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 shadow-inner flex flex-col md:flex-row gap-8 items-center min-h-[350px]">
                    <div className={`hidden md:flex w-1/3 aspect-square rounded-2xl shadow-sm ${active.imgCol} items-center justify-center relative overflow-hidden`}>
                        <active.icon className="w-32 h-32 opacity-20" />
                    </div>
                    <div className="w-full md:w-2/3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-3">
                            <active.icon className="w-8 h-8 text-cyan-600 md:hidden" />
                            {active.id} Services
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                            {active.desc}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {active.points.map((pt, i) => (
                                <li key={i} className="flex gap-2 items-center text-gray-900 font-semibold p-3 bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-cyan-500">
                                    <div className="w-2 h-2 rounded-full bg-cyan-600 min-w-2"></div>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm text-gray-500 font-medium">
                            * More customized solutions available upon request.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
