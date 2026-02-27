import { useState } from "react";
import { FaCircleCheck, FaMountain, FaWater, FaAnchor, FaTree, FaTrainTram, FaMonument, FaAppleWhole, FaMountainCity } from "react-icons/fa6";
import { IconType } from "react-icons";
import Image from "next/image";

type LocationData = {
    id: string;
    name: string;
    subRegion: string;
    description: string;
    image: string;
    icon: IconType;
};

const locations: LocationData[] = [
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
        id: "grabouw",
        name: "Grabouw",
        subRegion: "OVERBERG",
        description: "Expert engineering and maintenance solutions for agricultural and cold-storage facilities.",
        image: "/Location images/Grabouw.webp",
        icon: FaAppleWhole
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
        <section className="bg-[#F8F9FA] py-24 relative overflow-hidden text-[#111827]">
            {/* Background design elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCwgaGVpZ2h0PSc4JyBmaWxsPScjMDAwJyBmaWxsLW9wYWNpdHk9JzAuMDMnLz4KPHBhdGggZD0nTTAgMGg4cjh2LThIMHonIGZpbGw9JyMwMDAnIGZpbGwtb3BhY2l0eT0nMC4wMicvPgo8L3N2Zz4=')] opacity-50 z-0"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center">
                    {/* Left Column: Text & Location List */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#015CAB]">
                                Where We Help
                            </h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                We serve the greater Western Cape region. We're local, which means we're fast. We understand that in your business, every hour of downtime counts. Check your area below to see our commercial coverage zones.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 auto-rows-max content-start">
                            {locations.map((loc) => {
                                const isActive = activeLocation.id === loc.id;
                                return (
                                    <div key={loc.id} className="flex flex-col">
                                        <button
                                            onClick={() => setActiveLocation(loc)}
                                            className={`
                                            w-full text-left p-3 lg:p-4 rounded-xl border transition-all duration-300 flex flex-col xl:flex-row items-start xl:items-center gap-3 xl:gap-4
                                            ${isActive
                                                    ? 'bg-white border-[#015CAB] shadow-md shadow-[#015CAB]/10'
                                                    : 'bg-white/60 border-gray-200 hover:bg-white hover:border-gray-300'
                                                }
                                        `}
                                        >
                                            <div className={`p-2 xl:p-3 rounded-lg flex-shrink-0 ${isActive ? 'bg-[#015CAB] text-white' : 'bg-[#e6f0f9] text-[#015CAB]'}`}>
                                                <loc.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-sm xl:text-lg ${isActive ? 'text-[#015CAB]' : 'text-gray-900'}`}>
                                                    {loc.name}
                                                </h3>
                                                <p className="text-[10px] xl:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                                                    {loc.subRegion}
                                                </p>
                                            </div>
                                        </button>

                                        {/* Mobile Accordion Content */}
                                        <div
                                            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                                                <div className="relative h-48 w-full shrink-0">
                                                    <Image
                                                        src={loc.image}
                                                        alt={`${loc.name} service area`}
                                                        fill
                                                        sizes="(max-width: 1024px) 100vw, 10px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                                                        {loc.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Display Area */}
                    <div className="hidden lg:block lg:col-span-7">
                        <div className="relative w-full h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-gray-100 group">
                            {/* Decorative line matching image */}
                            <div className="absolute top-0 right-0 p-8 pt-0 pointer-events-none z-10 hidden md:block opacity-20">
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="stroke-[#015CAB]">
                                    <path d="M 200 50 C 150 50 150 150 100 150 L 0 150" strokeWidth="2" strokeDasharray="6 6" />
                                </svg>
                            </div>

                            <Image
                                src={activeLocation.image}
                                alt={`${activeLocation.name} service area`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority={true}
                                quality={85}
                            />
                            {/* Hidden prefetch for other locations to make transitions instant */}
                            <div className="hidden">
                                {locations.map(loc => (
                                    <Image
                                        key={`preload-${loc.id}`}
                                        src={loc.image}
                                        alt=""
                                        width={10}
                                        height={10}
                                        priority={false}
                                        loading="lazy"
                                    />
                                ))}
                            </div>

                            {/* Info Card */}
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                                        {activeLocation.name}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {activeLocation.description}
                                </p>
                            </div>

                            {/* Visual design accent on the card container's bottom border edge */}
                            <div className="absolute top-8 left-0 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#FFCA08] to-transparent opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
