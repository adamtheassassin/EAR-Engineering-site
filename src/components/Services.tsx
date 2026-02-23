import { Zap, Snowflake, Sun } from "lucide-react";

interface ServicesProps {
    onOpenModal: () => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
    const services = [
        {
            title: "Electrical",
            icon: Zap,
            color: "bg-blue-50 text-blue-600",
            description: "Comprehensive home and commercial electrical services tailored to safety and compliance.",
            urgentProblems: "e.g. Tripping power, burnt outlets, compliance certs",
            features: [
                "DB Board Upgrades & Fault Finding",
                "New Installations & Rewiring",
                "COC Inspections & Issuing",
                "Lighting & Power Point Additions"
            ]
        },
        {
            title: "Aircon & Refrigeration",
            icon: Snowflake,
            color: "bg-cyan-50 text-cyan-600",
            description: "Fast cooling solutions to keep your home comfortable or business running without disruption.",
            urgentProblems: "e.g. AC leaking water, not cooling, strange noises",
            features: [
                "Split & Ducted System Installations",
                "Maintenance & Deep Cleaning",
                "Commercial Refrigeration Repairs",
                "Gas Re-gassing & Leak Detection"
            ]
        },
        {
            title: "Solar Backup",
            icon: Sun,
            color: "bg-yellow-50 text-yellow-600",
            description: "Beat loadshedding with robust inverter and solar installations designed for efficiency.",
            urgentProblems: "e.g. Inverter beeping, batteries not holding charge",
            features: [
                "Inverter & Battery Backup Systems",
                "Solar Panel Installs & Upgrades",
                "System Diagnostics & Repair",
                "SSEG Registration Assistance"
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
                        <div key={i} className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col group relative overflow-hidden">
                            <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500`}>
                                <svc.icon className="w-48 h-48" />
                            </div>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${svc.color}`}>
                                <svc.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                            <p className="text-gray-600 mb-6 border-b pb-6 min-h-[80px]">
                                {svc.description}
                            </p>

                            <div className="mb-8 flex-1">
                                <div className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Common Issues</div>
                                <div className="text-gray-700 bg-gray-50 border p-3 rounded-lg text-sm mb-6 border-l-4 border-l-cyan-600">
                                    <span className="font-semibold block mb-1">Urgent?</span>
                                    {svc.urgentProblems}
                                </div>

                                <ul className="space-y-3">
                                    {svc.features.map((feature, j) => (
                                        <li key={j} className="flex flex-start gap-3 text-gray-700 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={onOpenModal}
                                className="w-full py-4 text-center rounded-xl bg-gray-900 hover:bg-cyan-600 text-white font-bold transition shadow-md z-10"
                            >
                                Request Free Quote
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
