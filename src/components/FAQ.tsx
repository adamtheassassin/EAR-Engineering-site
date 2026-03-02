"use client";

import { useState } from "react";
import { FaChevronDown as ChevronDown, FaCircleQuestion as MessageCircleQuestion } from "react-icons/fa6";

interface FAQProps {
    faqs?: { q: string, a: string }[];
}

export default function FAQ({ faqs: customFaqs }: FAQProps) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const defaultFaqs = [
        { q: "Do you supply Certificates of Compliance (COC)?", a: "Yes, we are fully licensed to inspect your electrical installation and issue a COC upon passing all safety and compliance checks." },
        { q: "How quickly can you respond to an emergency?", a: "During business hours, we prioritize urgent breakdowns (like power outages or critical faults) and aim to have a technician on-site as fast as possible." },
        { q: "Are your solar installations registered with the municipality?", a: "We manage the SSEG registration process to ensure your new solar setup is entirely legal and compliant with local municipal regulations." },
        { q: "Do you offer warranties on your work?", a: "Yes, we provide workmanship warranties on our installations. The specific timeframe depends on the project details, which we outline transparently beforehand." },
        { q: "Do you handle commercial projects?", a: "Absolutely. We manage large-scale commercial electrical, refrigeration, and solar projects with dedicated project management." },
        { q: "How long does a typical solar installation take?", a: "Most residential solar installations take between 1 to 3 days, depending on the system size and roof complexity." },
        { q: "Can you fix an air conditioner installed by someone else?", a: "Yes, our technicians are trained to fault-find and repair air conditioners and refrigeration units from most major brands, regardless of who installed them." },
        { q: "Is there a call-out fee?", a: "Yes, a standard call-out fee applies for fault finding and diagnostics. Once the issue is identified, we provide a transparent quote for the necessary repairs. Free quotes apply to new installations." }
    ];

    const faqs = customFaqs || defaultFaqs;

    return (
        <section className="bg-white py-24 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3">
                        <MessageCircleQuestion className="w-12 h-12 md:w-10 md:h-10 text-[#015CAB]" />
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        Everything you need to know about working with EAR Engineering.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === i ? 'border-[#015CAB]/50 shadow-md ring-2 ring-[#015CAB]/10 ring-offset-2' : 'border-gray-200 hover:border-[#015CAB]/30'}`}>
                            <button
                                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center bg-gray-50 focus:outline-none focus:bg-white transition-colors"
                                aria-expanded={openIdx === i}
                            >
                                <span className={`font-bold text-lg pr-4 ${openIdx === i ? 'text-[#015CAB]' : 'text-gray-900'}`}>{faq.q}</span>
                                <div className={`p-1 rounded-full transition-colors ${openIdx === i ? 'bg-[#015CAB]/10 text-[#015CAB]' : 'bg-gray-200 text-gray-500'}`}>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out bg-white`}
                                style={{ maxHeight: openIdx === i ? '500px' : '0' }}
                            >
                                <div className="p-6 text-gray-700 leading-relaxed font-medium bg-gradient-to-b from-white to-gray-50">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
