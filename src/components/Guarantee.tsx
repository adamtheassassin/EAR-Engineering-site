import { ShieldCheck, Target, Search, Clock, LucideIcon } from "lucide-react";

export default function Guarantee() {
    const guarantees: { title: string; desc: string; icon: LucideIcon }[] = [
        { title: "1-Hour Callback Promise", desc: "During business hours, our team will respond to your free quote request within 60 minutes.", icon: Clock },
        { title: "Transparent Scope", desc: "No hidden fees. We detail exactly what will be done before any work begins.", icon: Search },
        { title: "On-Time, On-Budget", desc: "Project-managed execution means we stick to agreed schedules and costs.", icon: Target },
        { title: "Workmanship Warranty", desc: "We stand by our work. Detailed warranty information is provided for every installation.", icon: ShieldCheck }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                    The EAR Engineering Guarantee
                </h2>
                <p className="text-xl text-gray-600 mb-16">
                    We don’t just deliver a service; we deliver peace of mind.
                </p>

                <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                    {guarantees.map((g, i) => (
                        <div key={i} className="flex gap-4 text-left p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-cyan-50 transition border border-gray-100 hover:border-cyan-200">
                            <div className="flex-shrink-0 text-cyan-600 bg-white p-3 shadow-sm rounded-xl h-fit">
                                <g.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{g.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{g.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
