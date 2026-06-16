import { FaBolt as Zap, FaWind as Wind, FaSun as Sun, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

interface ServicesProps {
    onOpenModal: (category?: "Electrical" | "Aircon" | "Solar") => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
    const services = [
        {
            title: "Electrical",
            icon: Zap,
            iconColor: "text-[#015CAB]",
            topBgColor: "bg-[#015CAB]",
            titleColor: "text-white",
            descColor: "text-blue-50",
            watermarkColor: "text-blue-100 opacity-30",
            description: "Comprehensive home and commercial electrical services tailored to safety and compliance.",
            urgentProblems: "e.g. Tripping power, burnt outlets, compliance certs",
            sliverColor: "border-l-[#015CAB]",
            bulletColor: "bg-[#015CAB]",
            hoverBg: "hover:bg-blue-50/40",
            hoverText: "hover:text-[#015CAB]",
            features: [
                { name: "Electrical Installations", href: "/electrical-services" },
                { name: "DB Board Upgrades & Repairs", href: "/electrical-services/db-board-upgrades-and-repairs" },
                { name: "COC Certificates", href: "/electrical-services/coc" },
                { name: "Generator Installations", href: "/electrical-services/generator-installation" }
            ],
            href: "/electrical-services",
            linkText: "View Electrical Services"
        },
        {
            title: "Aircon",
            icon: Wind,
            iconColor: "text-cyan-600",
            topBgColor: "bg-cyan-600",
            titleColor: "text-white",
            descColor: "text-cyan-50",
            watermarkColor: "text-cyan-100 opacity-30",
            description: "Fast cooling solutions to keep your home comfortable or business running without disruption.",
            urgentProblems: "e.g. AC leaking water, not cooling, strange noises",
            sliverColor: "border-l-cyan-600",
            bulletColor: "bg-cyan-600",
            hoverBg: "hover:bg-cyan-50/40",
            hoverText: "hover:text-cyan-600",
            features: [
                { name: "AC Installation", href: "/ac-installation" },
                { name: "AC Repair & Servicing", href: "/ac-repair" },
                { name: "Commercial Air Conditioning", href: "/commercial-air-conditioning" }
            ],
            href: "/ac-installation",
            linkText: "View Aircon Services"
        },
        {
            title: "Solar",
            icon: Sun,
            iconColor: "text-[#FFCA08]",
            topBgColor: "bg-[#FFCA08]",
            titleColor: "text-gray-900",
            descColor: "text-gray-800",
            watermarkColor: "text-yellow-100 opacity-50",
            description: "Beat loadshedding with robust inverter and solar installations designed for efficiency.",
            urgentProblems: "e.g. Inverter beeping, batteries not holding charge",
            sliverColor: "border-l-[#FFCA08]",
            bulletColor: "bg-[#FFCA08]",
            hoverBg: "hover:bg-amber-50/40",
            hoverText: "hover:text-amber-600",
            features: [
                { name: "Solar Installation", href: "/solar/solar-installation" },
                { name: "Battery Backup Solutions", href: "/solar/battery-storage" },
                { name: "Inverter Installation", href: "/solar/inverter-installation" },
                { name: "Off-Grid Solar", href: "/solar/off-grid-solar" },
                { name: "Solar Repair & Maintenance", href: "/solar/solar-repair-maintenance" }
            ],
            href: "/solar",
            linkText: "View Solar Services"
        }
    ];

    return (
        <section className="pt-10 pb-20 md:pt-14 md:pb-28 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Choose Your Service
                    </h3>
                    <p className="text-xl text-gray-600">
                        Expert solutions delivered safely, efficiently, and compliantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((svc, i) => (
                        <section key={i} aria-label={`${svc.title} Services`} className="bg-white border rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col group relative overflow-hidden">

                            {/* TOP HALF (Tinted) */}
                            <div className={`p-8 pb-6 relative ${svc.topBgColor}`}>
                                <div className={`absolute right-4 top-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500 ${svc.watermarkColor}`}>
                                    <svc.icon className="w-28 h-28" />
                                </div>
                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-black/5 bg-white ${svc.iconColor} shrink-0`}>
                                        <svc.icon className="w-7 h-7" />
                                    </div>
                                    <h2 className={`text-3xl font-bold ${svc.titleColor}`}>{svc.title}</h2>
                                </div>
                                <p className={`relative z-10 min-h-[48px] ${svc.descColor}`}>
                                    {svc.description}
                                </p>
                            </div>

                            {/* BOTTOM HALF (White) */}
                            <div className="p-8 pt-6 flex-1 flex flex-col bg-white overflow-hidden">
                                <div className="mb-8 flex-1">
                                    <div className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Common Issues</div>
                                    <div className={`text-gray-700 bg-gray-50 border p-3 rounded-lg text-sm mb-6 border-l-4 ${svc.sliverColor}`}>
                                        <span className="font-semibold block mb-1 text-gray-900">Urgent?</span>
                                        {svc.urgentProblems}
                                    </div>

                                    <ul className="space-y-2.5">
                                        {svc.features.map((feature, j) => (
                                            <li key={j}>
                                                <Link
                                                    href={feature.href}
                                                    className={`group/item flex items-center justify-between p-2.5 -mx-2.5 rounded-xl border border-transparent ${svc.hoverBg} hover:border-black/5 transition-all text-gray-700 font-semibold`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${svc.bulletColor} group-hover/item:scale-125 transition-transform`}></div>
                                                        <span className={`transition-colors duration-200 ${svc.hoverText}`}>
                                                            {feature.name}
                                                        </span>
                                                    </div>
                                                    <FaChevronRight className="w-3 h-3 text-gray-400 group-hover/item:text-gray-600 group-hover/item:translate-x-1 transition-all" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-3 relative z-10">
                                    <button
                                        onClick={() => onOpenModal(svc.title as "Electrical" | "Aircon" | "Solar")}
                                        className="w-full py-4 text-center rounded-xl bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 font-extrabold transition shadow-md"
                                    >
                                        Get Free Estimate
                                    </button>
                                    <Link
                                        href={svc.href}
                                        className="w-full py-3.5 text-center flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-gray-700 font-bold hover:border-[#015CAB] hover:text-[#015CAB] transition-colors"
                                    >
                                        {svc.linkText}
                                    </Link>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#015CAB] hover:bg-[#01488c] text-white font-extrabold rounded-xl transition-all shadow-md hover:shadow-lg"
                    >
                        See All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
