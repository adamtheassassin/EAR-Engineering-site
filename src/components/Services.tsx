import { FaBolt as Zap, FaRegSnowflake as Snowflake, FaSun as Sun } from "react-icons/fa6";

interface ServicesProps {
    onOpenModal: () => void;
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
            features: [
                "Electrical design and new installations",
                "Power distribution, DB boards, lighting & plug circuits",
                "Standby generator installation and changeover systems",
                "Testing, commissioning & COC certificates"
            ]
        },
        {
            title: "Aircon",
            icon: Snowflake,
            iconColor: "text-cyan-600",
            topBgColor: "bg-cyan-600",
            titleColor: "text-white",
            descColor: "text-cyan-50",
            watermarkColor: "text-cyan-100 opacity-30",
            description: "Fast cooling solutions to keep your home comfortable or business running without disruption.",
            urgentProblems: "e.g. AC leaking water, not cooling, strange noises",
            features: [
                "Split unit and inverter air-conditioning systems",
                "Residential and estate installations",
                "Commercial and office air-conditioning",
                "Preventative maintenance and breakdown support"
            ]
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
            features: [
                "Hybrid solar systems",
                "Battery backup solutions",
                "Commercial solar installations up to 100kW",
                "Solar system upgrades and expansions"
            ]
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Choose Your Service
                    </h2>
                    <p className="text-xl text-gray-600">
                        Expert solutions delivered safely, efficiently, and compliantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((svc, i) => (
                        <div key={i} className="bg-white border rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col group relative overflow-hidden">

                            {/* TOP HALF (Tinted) */}
                            <div className={`p-8 pb-6 relative ${svc.topBgColor}`}>
                                <div className={`absolute right-4 top-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500 ${svc.watermarkColor}`}>
                                    <svc.icon className="w-28 h-28" />
                                </div>
                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-black/5 bg-white ${svc.iconColor} shrink-0`}>
                                        <svc.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className={`text-3xl font-bold ${svc.titleColor}`}>{svc.title}</h3>
                                </div>
                                <p className={`relative z-10 min-h-[48px] ${svc.descColor}`}>
                                    {svc.description}
                                </p>
                            </div>

                            {/* BOTTOM HALF (White) */}
                            <div className="p-8 pt-6 flex-1 flex flex-col bg-white overflow-hidden">
                                <div className="mb-8 flex-1">
                                    <div className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Common Issues</div>
                                    <div className="text-gray-700 bg-gray-50 border p-3 rounded-lg text-sm mb-6 border-l-4 border-l-[#015CAB]">
                                        <span className="font-semibold block mb-1">Urgent?</span>
                                        {svc.urgentProblems}
                                    </div>

                                    <ul className="space-y-3">
                                        {svc.features.map((feature, j) => (
                                            <li key={j} className="flex flex-start gap-3 text-gray-700 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#015CAB] mt-2 flex-shrink-0"></div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={onOpenModal}
                                    className="w-full py-4 text-center rounded-xl bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 font-bold transition shadow-md z-10"
                                >
                                    Request Free Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
