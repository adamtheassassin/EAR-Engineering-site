"use client";

import { FaShield as ShieldCheck, FaPhone as Phone, FaArrowRight as ArrowRight, FaRegCircleCheck as CheckCircle2, FaBoltLightning as Zap, FaList as LayoutList, FaCertificate as BadgeCheck, FaClock as ClockAlert } from "react-icons/fa6";
import { CONTACT } from "@/lib/constants";

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-cyan-600 text-white min-h-[90vh] flex items-center md:min-h-0 md:py-32 py-20">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-700/80 to-transparent"></div>

            {/* Dynamic Background Pattern / Texture (subtle) */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCwgaGVpZ2h0PSc4JyBmaWxsPScjZmZmJyBmaWxsLW9wYWNpdHk9JzAuMScvPgo8cGF0aCBkPSdNMCAwaDhyOHYtOEgweicgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjA1JyAvPgo8L3N2Zz4=')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

                    <div className="inline-flex items-center bg-cyan-900/30 font-semibold px-4 py-2 rounded-full text-base text-cyan-50 border border-cyan-400/30">
                        <span className="flex w-2 h-2 bg-green-400 rounded-full mr-2 z-10 animate-pulse"></span>
                        Available for Service in Helderberg + Cape Town
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        Fast, Project-Managed <br className="hidden lg:block" />
                        <span className="text-yellow-400">Electrical, Aircon & Solar</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-cyan-50 leading-relaxed font-medium">
                        From urgent breakdowns to new installations — tailored solutions, on time & on budget.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
                        <button
                            id="hero-cta"
                            onClick={onOpenModal}
                            className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-xl font-bold text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 group"
                        >
                            Get a Free Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href={CONTACT.phoneLink}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all border border-white/20"
                        >
                            <Phone className="w-5 h-5" /> Call Now
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                        <ClockAlert className="w-5 h-5 text-yellow-300" /> We’ll contact you within 1 hour (during business hours).
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t border-cyan-400/30 pt-8">
                        <div className="flex items-start gap-2">
                            <ShieldCheck className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                            <span className="text-sm font-medium text-cyan-50">Since 1994</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                            <span className="text-sm font-medium text-cyan-50">COC issued where applicable</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <LayoutList className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                            <span className="text-sm font-medium text-cyan-50">Project-managed installs</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Zap className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                            <span className="text-sm font-medium text-cyan-50">Same-day support when available</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
