"use client";

import { useState, useEffect } from "react";
import { FaPhone as Phone } from "react-icons/fa6";
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
                    <div className="font-extrabold text-2xl tracking-tighter text-gray-900">
                        EAR <span className="text-cyan-600">Engineering</span>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href={CONTACT.phoneLink}
                            className="flex items-center gap-2 font-semibold text-gray-700 hover:text-cyan-600 transition"
                        >
                            <Phone className="w-5 h-5 text-cyan-600" />
                            {CONTACT.phone}
                        </a>
                        <button
                            onClick={onOpenModal}
                            className="px-6 py-2.5 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-700 transition shadow-sm"
                        >
                            Free Quote
                        </button>
                    </div>

                    {/* Mobile minimal right side */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={onOpenModal}
                            className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-bold text-sm shadow-sm"
                        >
                            Quote
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
                    className="w-full py-4 bg-yellow-400 text-gray-900 rounded-xl font-bold text-lg shadow-lg active:bg-yellow-500 transition-colors"
                >
                    Free Quote
                </button>
            </div>
        </>
    );
}
