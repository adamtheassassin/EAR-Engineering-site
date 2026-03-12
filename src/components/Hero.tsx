import Image from "next/image";
import { FaShield as ShieldCheck, FaPhone as Phone, FaArrowRight as ArrowRight, FaRegCircleCheck as CheckCircle2, FaBoltLightning as Zap, FaUserCheck as UserCheck, FaCertificate as BadgeCheck, FaClock as ClockAlert, FaWhatsapp } from "react-icons/fa6";
import { CONTACT } from "@/lib/constants";

interface HeroProps {
    onOpenModal: () => void;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    image?: string;
    ctaText?: string;
    ctaIcon?: React.ReactNode;
}

export default function Hero({ onOpenModal, title, subtitle, image = "/hero-engineering.png", ctaText, ctaIcon }: HeroProps) {
    const location = "Helderberg & Cape Town";

    return (
        <section className="relative overflow-hidden bg-[#015CAB] text-white lg:min-h-[calc(85vh-5rem)] flex items-start lg:items-center pt-10 pb-12 lg:pt-12 lg:pb-16 xl:pt-16 xl:pb-20">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#01418A]/80 to-transparent"></div>

            {/* Dynamic Background Pattern / Texture (subtle) */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCwgaGVpZ2h0PSc4JyBmaWxsPScjZmZmJyBmaWxsLW9wYWNpdHk9JzAuMScvPgo8cGF0aCBkPSdNMCAwaDhyOHYtOEgweicgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjA1JyAvPgo8L3N2Zz4=')]"></div>

            <div className="container mx-auto px-4 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">

                        <div className="inline-flex items-center bg-cyan-900/30 font-semibold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-base text-cyan-50 border border-cyan-400/30 w-fit">
                            <span className="flex w-2 h-2 bg-green-400 rounded-full mr-2 z-10 animate-pulse"></span>
                            Available for Service in {location}
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[4rem] 2xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            {title || (
                                <>
                                    <span className="block whitespace-nowrap">Professional Electrician</span>
                                    <span className="text-[#FFCA08] block whitespace-nowrap">in Somerset West</span>
                                </>
                            )}
                        </h1>

                        <div className="block lg:hidden w-full max-w-sm mx-auto aspect-[2/1] relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/10">
                            <Image
                                src={image}
                                alt="Professional Engineering Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/40 via-transparent to-transparent"></div>
                        </div>

                        <p className="text-lg md:text-xl lg:text-2xl text-cyan-50 leading-relaxed font-medium max-w-2xl">
                            {subtitle || "Specializing in Solar Installations, Air-conditioning & Electrical Compliance - serving the Helderberg and greater Western Cape for over 18 years."}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-2 lg:pt-4 w-full sm:w-auto">
                            <button
                                id="hero-cta"
                                onClick={onOpenModal}
                                className="w-full sm:w-auto px-6 lg:px-8 py-3.5 lg:py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-bold text-base lg:text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 group"
                            >
                                {ctaText || "Get a Free Quote"}
                                {ctaIcon ? (
                                    <span className="group-hover:rotate-12 transition-transform">{ctaIcon}</span>
                                ) : (
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                )}
                            </button>
                            <a
                                href={CONTACT.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] px-6 lg:px-8 py-3.5 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all shadow-md"
                            >
                                <FaWhatsapp className="w-6 h-6" /> WhatsApp
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs lg:text-sm font-medium text-cyan-100">
                            <ClockAlert className="w-4 h-4 lg:w-5 lg:h-5 text-[#FFCA08] flex-shrink-0" /> We’ll contact you within 1 hour (business hours).
                        </div>

                        <div className="hidden lg:grid grid-cols-2 gap-4 mt-5 lg:mt-6 border-t border-cyan-400/30 pt-4 lg:pt-5 w-full">
                            <div className="flex items-start lg:justify-start justify-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-[#FFCA08] flex-shrink-0" />
                                <span className="text-sm font-medium text-cyan-50">Since 1994</span>
                            </div>
                            <div className="flex items-start lg:justify-start justify-center gap-2">
                                <BadgeCheck className="w-5 h-5 text-[#FFCA08] flex-shrink-0" />
                                <span className="text-sm font-medium text-cyan-50">COC issued where applicable</span>
                            </div>
                            <div className="flex items-start lg:justify-start justify-center gap-2">
                                <UserCheck className="w-5 h-5 text-[#FFCA08] flex-shrink-0" />
                                <span className="text-sm font-medium text-cyan-50">Qualified & registered electricians</span>
                            </div>
                            <div className="flex items-start lg:justify-start justify-center gap-2">
                                <Zap className="w-5 h-5 text-[#FFCA08] flex-shrink-0" />
                                <span className="text-sm font-medium text-cyan-50">Same-day support</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-5 xl:col-span-5 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                        <div className="relative h-[400px] lg:h-[480px] xl:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
                            <Image
                                src={image}
                                alt="Professional Engineering Services"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                            {/* Gradient Overlay for better text separation if needed, though it's on the right */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/40 via-transparent to-transparent"></div>

                            {/* Floating Card Detail */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg transform transition-all duration-500 hover:translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#FFCA08] flex items-center justify-center shadow-inner">
                                        <Zap className="w-6 h-6 text-[#015CAB]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">Local Experts</p>
                                        <p className="text-cyan-100 text-sm">Serving Cape Town with precision</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FFCA08] rounded-full blur-[120px] opacity-20 -z-10 animate-pulse"></div>
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-400 rounded-full blur-[120px] opacity-20 -z-10 animate-pulse delay-700"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
