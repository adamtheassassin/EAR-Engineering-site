"use client";

import { useState, useEffect } from "react";
import { FaPhone as Phone, FaBars as Bars } from "react-icons/fa6";
import { CONTACT } from "@/lib/constants";

interface HeaderProps {
    onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver;

        const initObserver = () => {
            const heroCta = document.getElementById("hero-cta");
            if (!heroCta) return;

            observer = new IntersectionObserver(
                ([entry]) => {
                    setShowSticky(!entry.isIntersecting);
                },
                { threshold: 0, rootMargin: "0px" }
            );

            observer.observe(heroCta);
        };

        // Small delay to ensure the DOM is fully rendered
        const timer = setTimeout(initObserver, 100);

        return () => {
            clearTimeout(timer);
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm h-16 md:h-20 transition-all">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <img
                            src="/EAR Engineering Menu Logo.png"
                            alt="EAR Engineering"
                            className="h-14 md:h-18 w-auto object-contain"
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href={CONTACT.phoneLink}
                            className="flex items-center gap-2 font-semibold text-gray-700 hover:text-[#015CAB] transition"
                        >
                            <Phone className="w-5 h-5 text-[#015CAB]" />
                            {CONTACT.phone}
                        </a>
                        <button
                            onClick={onOpenModal}
                            className="px-6 py-2.5 bg-[#015CAB] text-white rounded-lg font-bold hover:bg-[#01418A] transition shadow-sm"
                        >
                            Free Quote
                        </button>
                    </div>

                    {/* Mobile minimal right side */}
                    <div className="md:hidden flex items-center gap-2">
                        <a
                            href={CONTACT.phoneLink}
                            className="p-2.5 text-[#015CAB] transition active:scale-95"
                            aria-label="Call EAR Engineering"
                        >
                            <Phone className="w-6 h-6" />
                        </a>
                        <button
                            className="p-2.5 text-gray-700 transition active:scale-95"
                            aria-label="Menu"
                        >
                            <Bars className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Sticky Bottom Mobile CTA Bar */}
            <div
                className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <button
                    onClick={onOpenModal}
                    className="w-full py-4 bg-[#FFCA08] text-gray-900 rounded-xl font-bold text-lg shadow-lg active:bg-[#E5B507] transition-colors"
                >
                    Free Quote
                </button>
            </div>
        </>
    );
}
