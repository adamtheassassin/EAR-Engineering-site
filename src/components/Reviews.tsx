"use client";

import Script from "next/script";

export default function Reviews() {
    return (
        <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-100 relative">
            <div className="w-full">
                <div className="container mx-auto px-4 text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        Rated highly by homeowners and businesses in Helderberg & Cape Town.
                    </p>
                </div>

                {/* Elfsight Widget Wrapper with fixed min-height to prevent CLS */}
                <div className="w-full min-h-[400px] bg-white flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-50/50 flex animate-pulse items-center justify-center p-8 z-0">
                        <div className="w-8 h-8 rounded-full border-4 border-cyan-600 border-t-transparent animate-spin"></div>
                    </div>

                    <div className="relative z-10 w-full h-full p-2">
                        <div className="elfsight-app-d9e0cfca-b817-4cc5-a695-4d424dbb420b" data-elfsight-app-lazy></div>
                    </div>

                    <Script
                        src="https://elfsightcdn.com/platform.js"
                        strategy="lazyOnload"
                        id="elfsight-script"
                    />
                </div>
            </div>
        </section>
    );
}
