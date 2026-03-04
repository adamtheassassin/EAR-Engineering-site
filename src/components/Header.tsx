"use client";

import { useState, useEffect } from "react";
import { FaPhone as Phone, FaBars as Bars, FaXmark as XMark } from "react-icons/fa6";
import { CONTACT } from "@/lib/constants";

interface HeaderProps {
    onOpenModal: () => void;
    mobileCtaText?: string;
    mobileCtaIcon?: React.ReactNode;
}

export default function Header({ onOpenModal, mobileCtaText, mobileCtaIcon }: HeaderProps) {
    const [showSticky, setShowSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver;

        const initObserver = () => {
            const heroCta = document.getElementById("hero-cta");
            if (!heroCta) return;

            observer = new IntersectionObserver(
                ([entry]) => {
                    // Only show the sticky CTA if the hero CTA is not visible AND we've scrolled past it (top < 0)
                    setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
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
                            href="/"
                            className="font-semibold text-gray-700 hover:text-[#015CAB] transition text-sm lg:text-base whitespace-nowrap"
                        >
                            Home
                        </a>
                        <a
                            href="/services"
                            className="font-semibold text-gray-700 hover:text-[#015CAB] transition text-sm lg:text-base whitespace-nowrap"
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className="font-semibold text-gray-700 hover:text-[#015CAB] transition text-sm lg:text-base whitespace-nowrap"
                        >
                            Contact
                        </a>
                        <a
                            href={CONTACT.phoneLink}
                            className="flex items-center gap-1.5 font-semibold text-gray-700 hover:text-[#015CAB] transition text-sm lg:text-base whitespace-nowrap"
                        >
                            <Phone className="w-4 h-4 text-[#015CAB]" />
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
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2.5 text-gray-700 transition active:scale-95 flex items-center justify-center relative w-12 h-12"
                            aria-label="Menu"
                        >
                            <Bars className={`absolute transition-all duration-300 w-7 h-7 text-[#015CAB] ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                            <XMark className={`absolute transition-all duration-300 w-8 h-8 text-[#015CAB] ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col transition-all duration-300">
                        <a
                            href="/"
                            className="px-6 py-4 border-b border-gray-100 text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-[#015CAB] transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="/services"
                            className="px-6 py-4 border-b border-gray-100 text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-[#015CAB] transition-colors"
                        >
                            Our Services
                        </a>
                        <a
                            href="/services/electrical-services"
                            className="px-6 py-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#015CAB] transition-colors pl-10"
                        >
                            Electrical Services
                        </a>
                        <a
                            href="/services/solar-installation"
                            className="px-6 py-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#015CAB] transition-colors pl-10"
                        >
                            Solar Installation
                        </a>
                        <a
                            href="/services/ac-installation"
                            className="px-6 py-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#015CAB] transition-colors pl-10"
                        >
                            Air Conditioning
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-4 border-b border-gray-100 text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-[#015CAB] transition-colors flex items-center gap-3"
                        >
                            Contact
                        </a>
                        <a
                            href={CONTACT.phoneLink}
                            className="px-6 py-4 text-lg font-bold text-[#015CAB] hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                            <Phone className="w-5 h-5" /> Call {CONTACT.phone}
                        </a>
                    </div>
                )}
            </header>

            {/* Sticky Bottom Mobile CTA Bar */}
            <div
                className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <button
                    onClick={onOpenModal}
                    className="w-full py-4 bg-[#FFCA08] text-gray-900 rounded-xl font-bold text-lg shadow-lg active:bg-[#E5B507] transition-colors flex items-center justify-center gap-3"
                >
                    {mobileCtaIcon && <span>{mobileCtaIcon}</span>}
                    {mobileCtaText || "Free Quote"}
                </button>
            </div>
        </>
    );
}
