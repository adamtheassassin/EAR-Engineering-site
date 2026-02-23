"use client";

import { useState, useEffect } from "react";
import { Settings, X, Type } from "lucide-react";

const FONTS = [
    "Inter",
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Poppins",
    "Oswald",
    "Raleway",
    "Nunito",
    "Ubuntu",
    "Playfair Display",
    "Merriweather",
    "Lora",
    "PT Sans",
    "Mukta",
    "Rubik",
    "Work Sans",
    "Fira Sans",
    "Quicksand",
    "Outfit",
];

export default function FontSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeFont, setActiveFont] = useState("Inter");

    useEffect(() => {
        if (activeFont === "Inter") {
            document.body.style.fontFamily = "";
            return;
        }

        const fontString = activeFont.replace(/\s+/g, "+");
        const linkId = `font-${fontString}`;

        if (!document.getElementById(linkId)) {
            const link = document.createElement("link");
            link.id = linkId;
            link.rel = "stylesheet";
            link.href = `https://fonts.googleapis.com/css2?family=${fontString}:wght@300;400;500;600;700;800;900&display=swap`;
            document.head.appendChild(link);
        }

        document.body.style.fontFamily = `"${activeFont}", sans-serif`;
    }, [activeFont]);

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {isOpen ? (
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-72 mb-4 overflow-hidden animate-in slide-in-from-bottom-4 flex flex-col max-h-[60vh]">
                    <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                        <h3 className="font-bold flex items-center gap-2 text-gray-800">
                            <Type className="w-4 h-4 text-cyan-600" />
                            Font Selector
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-700 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="overflow-y-auto p-2 hide-scrollbar">
                        {FONTS.map((font) => (
                            <button
                                key={font}
                                onClick={() => setActiveFont(font)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center ${activeFont === font
                                        ? "bg-cyan-50 text-cyan-700 font-bold"
                                        : "hover:bg-gray-100 text-gray-700 font-medium"
                                    }`}
                                style={{ fontFamily: font === "Inter" ? "" : `"${font}", sans-serif` }}
                            >
                                {font}
                                {activeFont === font && (
                                    <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            ) : null}

            <div className="flex justify-end">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-900 hover:bg-cyan-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 group"
                    title="Change Site Font"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Settings className="w-6 h-6 group-hover:rotate-45 transition-transform" />}
                </button>
            </div>
        </div>
    );
}
