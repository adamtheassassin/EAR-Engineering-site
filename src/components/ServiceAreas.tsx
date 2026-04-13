"use client";
import { useState } from "react";
import { FaMountain, FaWater, FaAnchor, FaTree, FaTrainTram, FaMonument, FaHouseChimney, FaMountainCity } from "react-icons/fa6";
import { IconType } from "react-icons";
import Image from "next/image";

export type LocationData = {
    id: string;
    name: string;
    subRegion: string;
    description: string;
    image: string;
    icon: IconType;
};

export const locations: LocationData[] = [
    {
        id: "somerset-west",
        name: "Somerset West",
        subRegion: "HELDERBERG",
        description: "Our home base. Serving the Helderberg basin with rapid response times for commercial and residential needs.",
        image: "/Location images/Helderberg_Mountain_in_Somerset_West.webp",
        icon: FaMountain
    },
    {
        id: "strand",
        name: "Strand",
        subRegion: "HELDERBERG",
        description: "Providing top-tier electrical and HVAC services to coastal properties and businesses in the Strand area.",
        image: "/Location images/Strand_Western_Cape.webp",
        icon: FaWater
    },
    {
        id: "gordons-bay",
        name: "Gordon's Bay",
        subRegion: "HELDERBERG",
        description: "Beautiful coastal town where we manage solar, electrical, and HVAC installations with precision.",
        image: "/Location images/gordons bay.webp",
        icon: FaAnchor
    },
    {
        id: "stellenbosch",
        name: "Stellenbosch",
        subRegion: "WINELANDS",
        description: "Serving the Winelands with enterprise-grade solutions for farms, estates, and the university district.",
        image: "/Location images/StellenboschWC-Aerial.webp",
        icon: FaTree
    },
    {
        id: "franschhoek",
        name: "Franschhoek",
        subRegion: "WINELANDS",
        description: "Premium service for hospitality, world-class wine farms, and luxury estates in the Franschhoek valley.",
        image: "/Location images/franschhoek.webp",
        icon: FaTrainTram
    },
    {
        id: "paarl",
        name: "Paarl",
        subRegion: "WINELANDS",
        description: "Comprehensive coverage across Paarl for agricultural, commercial, and residential projects.",
        image: "/Location images/paarl-touring.webp",
        icon: FaMonument
    },
    {
        id: "durbanville",
        name: "Durbanville",
        subRegion: "NORTHERN SUBURBS",
        description: "Providing premium residential, commercial, and agricultural and electrical engineering solutions to the Durbanville area.",
        image: "/Location images/Durbanville.webp",
        icon: FaHouseChimney
    },
    {
        id: "cape-town",
        name: "Cape Town",
        subRegion: "CITY CENTER",
        description: "Full coverage across the Mother City for all major commercial, industrial, and residential needs.",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1000&auto=format&fit=crop",
        icon: FaMountainCity
    }
];

export default function ServiceAreas() {
    const [activeLocation, setActiveLocation] = useState<LocationData>(locations[0]);

    return (
        <section className="bg-white py-24 relative overflow-hidden text-[#111827]">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:items-center">
                    {/* Left Column: Text & Location List */}
                    <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#015CAB]">
                                Where We Help
                            </h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
                                We serve the greater Western Cape region. We&apos;re local, which means we&apos;re fast. Check your area below to see our commercial coverage zones.
                            </p>
                        </div>

                        {/* MOBILE GRID ONLY (2x4) */}
                        <div className="grid grid-cols-2 gap-3 md:hidden">
                            {locations.map((loc) => (
                                <div key={`mob-${loc.id}`} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col items-center text-center justify-center gap-2">
                                    <div className="p-2.5 rounded-lg bg-[#e6f0f9] text-[#015CAB] flex-shrink-0">
                                        <loc.icon className="w-5 h-5" />
                                    </div>
                                    <div className="mt-1">
                                        <h3 className="font-bold text-gray-900 text-sm">{loc.name}</h3>
                                        <p className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase mt-1">
                                            {loc.subRegion}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* DESKTOP LIST ONLY (md+) */}
                        <div className="hidden md:grid grid-cols-2 gap-3 auto-rows-max content-start">
                            {locations.map((loc) => {
                                const isActive = activeLocation.id === loc.id;
                                return (
                                    <button
                                        key={loc.id}
                                        onClick={() => setActiveLocation(loc)}
                                        className={`
                                            w-full text-left p-3 lg:p-4 rounded-[1.25rem] border transition-all duration-300 flex items-center gap-4
                                            ${isActive
                                                ? 'bg-white border-[#015CAB] shadow-lg shadow-[#015CAB]/10'
                                                : 'bg-white/60 border-gray-200 hover:bg-white hover:border-gray-300'
                                            }
                                        `}
                                    >
                                        <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${isActive ? 'bg-[#015CAB] text-white' : 'bg-[#e6f0f9] text-[#015CAB]'}`}>
                                            <loc.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-lg ${isActive ? 'text-[#015CAB]' : 'text-gray-900'}`}>
                                                {loc.name}
                                            </h3>
                                            <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mt-0.5">
                                                {loc.subRegion}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Display Area (IMAGE ONLY ON DESKTOP) */}
                    <div className="hidden md:block md:col-span-7">
                        <div className="relative w-full h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-gray-100 group">
                            <Image
                                src={activeLocation.image}
                                alt={`${activeLocation.name} service area`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority={true}
                                quality={85}
                            />
                            {/* Info Card - Overlayed on Image */}
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 z-10">
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                                    {activeLocation.name}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {activeLocation.description}
                                </p>
                            </div>
                            <div className="absolute top-8 left-0 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#FFCA08] to-transparent opacity-50 z-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
