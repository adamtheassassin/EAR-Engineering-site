"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

interface HeaderProps {
    onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
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
                        <a
                            href={CONTACT.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600 transition"
                        >
                            <MessageCircle className="w-5 h-5 text-green-500" />
                            WhatsApp
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
                        <a
                            href={CONTACT.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-green-50 text-green-600 rounded-full"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>
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
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t p-3 grid grid-cols-2 gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <a
                    href={CONTACT.phoneLink}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50 text-gray-900 font-semibold text-sm active:bg-gray-100"
                >
                    <Phone className="w-5 h-5 mb-1 text-cyan-600" />
                    Call Now
                </a>
                <a
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-green-50 text-green-700 font-semibold text-sm active:bg-green-100"
                >
                    <MessageCircle className="w-5 h-5 mb-1" />
                    WhatsApp
                </a>
            </div>
        </>
    );
}
