export default function Process() {
    const steps = [
        { num: "01", title: "Request a Free Quote", desc: "Share your electrical, aircon, or solar needs with us online or over the phone." },
        { num: "02", title: "1-Hour Callback", desc: "During business hours, we'll connect with you within 60 minutes to evaluate your needs." },
        { num: "03", title: "Transparent Scoping", desc: "We provide exactly what the installation entails, including timeline, materials, and cost upfront." },
        { num: "04", title: "Project-Managed Install", desc: "Quality execution by certified professionals. Signed off and strictly compliant." }
    ];

    return (
        <section className="bg-gray-50 py-24 border-t border-gray-100 relative overflow-hidden">
            {/* Background graphic */}
            <div className="absolute top-0 right-0 max-w-[50vw] h-full opacity-5 pointer-events-none pb-20">
                <div className="w-full h-full bg-[#015CAB] rounded-l-[100px] transform skew-x-12 translate-x-1/4"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Our Straightforward Process
                    </h2>
                    <p className="text-gray-600 font-medium text-lg">
                        No confusion, no delays. Know exactly what to expect from concept to COC.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition group text-center md:text-left">
                            <div className="text-5xl font-black text-[#015CAB] md:text-[#015CAB]/10 group-hover:text-[#015CAB] transition-colors mb-4">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
