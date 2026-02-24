import React from 'react';

interface EmergencyProps {
    onOpenModal: () => void;
}

export default function Emergency({ onOpenModal }: EmergencyProps) {
    return (
        <section className="group relative py-6 md:py-8 overflow-hidden bg-gradient-to-r from-[#ff8533] to-[#ff5200] border-y border-white/20 shadow-[0_10px_30px_rgba(255,107,0,0.15)] z-20">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Shimmer light beam effect on hover */}
                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

                {/* Left Side: Icon & Text */}
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 flex-1">
                    {/* Glowing Icon */}
                    <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 shadow-inner border border-white/30 backdrop-blur-xl relative">
                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-25"></div>
                        <svg className="h-7 w-7 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white drop-shadow-sm leading-tight">
                            Power outage? AC down? Inverter fault?
                        </h2>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1 md:mt-1.5">
                            <p className="text-sm md:text-base font-medium text-white/95">
                                Don't wait. We have <span className="font-bold text-white drop-shadow-sm">technicians on standby</span>.
                            </p>
                            <span className="hidden md:inline-block text-white/50">•</span>
                            <div className="inline-flex items-center justify-center md:justify-start gap-1.5 opacity-85 text-xs md:text-sm font-medium text-white">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Rapid response during business hours
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: CTA Button */}
                <div className="flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
                    <button
                        onClick={onOpenModal}
                        className="w-full md:w-auto group/btn relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 md:py-3.5 text-base md:text-lg font-black text-[#ff6b00] shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-50 hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)] active:scale-95 whitespace-nowrap"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff6b00]"></span>
                        </span>
                        <span className="uppercase tracking-widest">Priority Request</span>
                        <svg className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
