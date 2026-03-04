"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import {
    FaBolt,
    FaHouse,
    FaWrench,
    FaShieldHalved,
    FaCarBattery,
    FaClockRotateLeft,
    FaUserTie,
    FaHandshake,
    FaCircleCheck,
    FaTruckFast,
    FaScrewdriverWrench
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function ElectricalServicesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const electricalFaqs = [
        { q: "Do I need a COC when selling my property?", a: "Yes. A Certificate of Compliance is a legal requirement when selling a property in South Africa. It confirms that the electrical installation has been inspected and is safe. If the inspection finds any issues, they need to be repaired before the certificate can be issued. We handle the full process, from inspection through to issuing the certificate." },
        { q: "How quickly can you respond to an electrical emergency?", a: "We aim to respond the same day when possible. For the Helderberg area specifically, our response times are fast because we are based in Somerset West. Call us directly for emergencies and we will get to you as quickly as we can." },
        { q: "My DB board keeps tripping. What does that mean?", a: "It usually means one of two things. Either a specific appliance or circuit is drawing more power than it should, or your board is overloaded and does not have enough capacity for your current electrical usage. In some cases it can indicate a fault somewhere in the wiring. We can come out, identify the cause, and tell you what needs to be done to fix it properly." },
        { q: "Can you install a generator for my home or business?", a: "Yes. We install standby generators and the changeover systems that allow you to switch safely between grid power and generator power. This is a common request from businesses, medical facilities and homeowners who cannot afford to be without power during load shedding. We can advise on the right generator size for your needs as part of the assessment." },
        { q: "Is your electrical work compliant with South African regulations?", a: "Yes. All our work is carried out to SANS standards by registered electricians. Where a COC is required, we issue one on completion. We do not cut corners on compliance because shoddy electrical work is a safety risk and can cause serious problems with insurance claims and property transactions." },
        { q: "Can you handle electrical maintenance for a portfolio of properties?", a: "Yes, and this is something we do regularly. We work with property management companies, estates and commercial clients on ongoing maintenance arrangements. If you manage multiple properties and need a reliable contractor who will respond quickly and document everything properly, get in touch and we can talk about what that looks like." },
        { q: "Do you do electrical work for new builds and renovations?", a: "Yes. We handle full electrical installations for new builds, as well as additions and renovations where existing wiring needs to be extended or upgraded. We work with homeowners, developers and contractors across the Helderberg and Boland." },
        { q: "Can you combine electrical work with solar or air conditioning?", a: "Yes. Because we offer all three services under one roof, we can look at your full electrical setup and make sure everything works together properly. Many of our clients use us for electrical, solar and air conditioning, which makes the whole process simpler and avoids the problems that come from having multiple contractors working on the same property." }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": electricalFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Electrician",
        "name": "EAR Engineering",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Somerset West",
            "addressRegion": "Western Cape",
            "addressCountry": "ZA"
        },
        "currenciesAccepted": "ZAR",
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Grabouw", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Electrical Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Electrical Installations and Wiring" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DB Board Upgrades and Repairs" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certificate of Compliance (COC)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generator Installation and Changeover" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fault Finding and Emergency Callouts" } }
            ]
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            <title>Qualified Electricians in Somerset West and Stellenbosch | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides professional electrical installations, DB board upgrades, COC certificates, generator setups, and fault finding across Somerset West, Stellenbosch, and the Helderberg." />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Free Electrical Quote"
                mobileCtaIcon={<FaBolt className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Qualified <span className="text-[#FFCA08]">Electricians</span>
                        </>
                    }
                    subtitle="Electrical problems are stressful. Whether your power has tripped and you cannot figure out why, your DB board is overloaded, or you need a reliable electrician for a new build, we get the job done correctly and safely."
                    image="/Work Photos/Electrician Somerset West Hero Image.webp"
                    ctaText="Free Electrical Assessment"
                    ctaIcon={<FaBolt className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Introduction Section using Cards */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Electrical Problems Do Not Wait. Neither Do We.
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#FFCA08] text-[#015CAB] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <FaTruckFast className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white">Fast Response Times</h3>
                                </div>
                                <p className="text-blue-50 font-medium leading-relaxed">
                                    A tripped circuit, a burning smell, or a DB board that keeps cutting out are not things you can put off. We offer clear communication about what needs to be done and fast response times for emergencies.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#FFCA08] text-[#015CAB] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <FaCircleCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white">Done to Standard</h3>
                                </div>
                                <p className="text-blue-50 font-medium leading-relaxed">
                                    Electrical work that is done poorly is a safety risk and can cause serious compliance issues. We ensure all repairs and installations meet the required standard so you aren’t dealing with the same problem in six months.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#FFCA08] text-[#015CAB] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <FaUserTie className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white">Reliable Professionals</h3>
                                </div>
                                <p className="text-blue-50 font-medium leading-relaxed">
                                    We work with homeowners, property managers, and commercial clients who cannot afford downtime. Whatever the job, it gets done by registered electricians and handed over correctly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Our Electrical Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We handle a wide range of electrical work for both residential and commercial clients. Here is what we offer:
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            {[
                                {
                                    title: "New Electrical Installations", icon: FaHouse, desc: (
                                        <>
                                            Building a new home, adding a room, or fitting out a commercial space? We handle full electrical installations from scratch, including all wiring, plug points, and DB board setup. We also offer complete <Link href="/services/ac-installation" className="text-[#015CAB] underline hover:text-[#013f75]">air conditioning installations</Link>.
                                        </>
                                    )
                                },
                                { title: "DB Board Upgrades & Repairs", icon: FaWrench, desc: "An old or overloaded DB board is a common cause of electrical problems. We assess and upgrade your board to handle your current load safely." },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "If something has stopped working and you don't know why, we'll find the fault and fix it. We offer emergency electrical callouts across the Helderberg and Boland." },
                                { title: "Certificate of Compliance (COC)", icon: FaShieldHalved, desc: "A COC is a legal requirement for property transactions. Our registered electricians inspect, repair, and issue the certificate without hassle." },
                                { title: "Generator Installations", icon: FaCarBattery, desc: "We install standby generators and safe changeover systems to provide reliable backup power when the grid goes down, keeping your home or business running." }
                            ].map((s, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-cyan-200 transition-colors group flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                                    <div className="bg-[#015CAB] p-4 rounded-xl text-white flex-shrink-0 group-hover:text-[#FFCA08] transition-colors">
                                        <s.icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-10 py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-extrabold text-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3 group"
                            >
                                Free Electrical Assessment
                                <FaBolt className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-white border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                How the Process Works
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                                Whether it is a quick fault-finding visit or a large commercial installation, here is what to expect:
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Get in Touch", desc: "Call or message us. For emergencies, call directly and we will get to you as fast as possible." },
                                { num: "2", title: "Assessment", desc: "We visit your property, assess the issue or requirements, and clearly explain what needs to be done." },
                                { num: "3", title: "Straightforward Quote", desc: "You receive a clear quote before any work starts. No surprises or hidden fees." },
                                { num: "4", title: "The Work", desc: "Our registered electricians carry out the job to the required standard, minimizing any disruption." },
                                { num: "5", title: "Sign-off & Documentation", desc: "Where a COC or other documentation is required, we issue it on completion for your records." },
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFCA08] flex items-center justify-center font-bold text-gray-900 text-xl shadow-md border-2 border-white">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center text-gray-600 font-medium">
                            For larger projects, we provide a clean timeline upfront. For emergency callouts, we aim to arrive the same day.
                        </div>
                    </div>
                </section>

                {/* Real Projects */}
                <section className="py-12 md:py-24 bg-white relative overflow-hidden z-10">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Location images/StellenboschWC-Aerial.webp"
                            alt="Electrical Installation Background"
                            fill
                            quality={90}
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-white/50 mix-blend-screen"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-12 items-stretch">
                            <div className="flex flex-col">
                                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 uppercase md:normal-case">
                                    Real Projects.<br />Real Results.
                                </h2>
                                <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                                    We have been the trusted electrical contractor for some of the Helderberg and Boland's most demanding clients. Here are two examples of the long-term relationships we have built:
                                </p>

                                <div className="flex-grow space-y-6">
                                    <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-[#015CAB] transition-transform hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Techno Park, Stellenbosch</h3>
                                        <p className="text-gray-700 font-medium mb-4">
                                            For over 16 years, EAR Engineering has been the go-to electrical contractor across multiple complexes at Techno Park in Stellenbosch. Our work there covers new electrical installations, ongoing maintenance, emergency breakdown services and the issuing of COC certificates. We have delivered consistently for more than a decade and a half.
                                        </p>
                                    </div>

                                    <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-[#FFCA08] transition-transform hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">JPS Property Management</h3>
                                        <p className="text-gray-700 font-medium">
                                            For over 12 years, we have handled electrical repairs for properties managed by JPS Property Management across greater Stellenbosch. Their portfolio includes hospitals, retirement centres, office blocks, and residential buildings. These are environments where an electrical fault simply cannot wait.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-6">
                                {/* Real Project Photo */}
                                <div className="flex-grow min-h-[300px] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/20 group">
                                    <Image
                                        src="/Work Photos/electrical work.webp"
                                        alt="Commercial Electrical Installation"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/90 via-[#015CAB]/40 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white space-y-2">
                                        <div className="inline-block px-3 py-1 bg-[#FFCA08] text-gray-900 text-sm font-bold rounded-lg mb-2 shadow-sm">Property Management</div>
                                        <h4 className="text-3xl font-black">Trusted Long-Term Partners</h4>
                                        <p className="font-medium text-white/90">Reliable electrical support for portfolios including residential blocks, commercial spaces, and healthcare facilities.</p>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between">
                                    <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                        If you manage a portfolio of properties or run a facility that depends on uninterrupted power, we understand what is at stake. Get in touch to discuss a maintenance arrangement.
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-6 py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-extrabold transition-all transform hover:scale-105 active:scale-95 shadow-xl w-full flex items-center justify-center gap-3 group text-center"
                                    >
                                        Free Electrical Assessment
                                        <FaBolt className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Residential vs Commercial */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Residential vs Commercial Electrical Work
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We cater to homes and businesses across the region. Here is a quick overview of the types of electrical tasks we handle in each category:
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Residential</th>
                                        <th className="py-5 px-6 font-bold text-lg">Commercial and Industrial</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">New home wiring and installations</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Factory and office electrical fit-outs</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">DB board upgrades and repairs</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Power distribution and DB board installations</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Plug points, lighting and circuits</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Lighting systems for large facilities</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Fault finding and emergency repairs</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Emergency breakdown and maintenance contracts</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">COC certificates for sales and rentals</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">COC certificates and compliance documentation</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Generator installation for home backup</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Standby generator and changeover systems</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Renovations and additions</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Retail, hospitality and complex electrical work</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Areas We Serve with GBP Embed */}
                <section className="bg-[#015CAB] py-20 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="overflow-hidden rounded-xl shadow-2xl h-[400px] w-full bg-white relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4023.9526587094174!2d18.820527300000002!3d-34.063464499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5947a717cc1%3A0x6ffb176a283db73e!2sEAR%20Engineering!5e0!3m2!1sen!2sza!4v1772199538942!5m2!1sen!2sza"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="space-y-6 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                                    Areas We Cover
                                </h2>
                                <p className="text-lg font-medium text-white/90 leading-relaxed mb-8">
                                    EAR Engineering is based in Somerset West and serves the Helderberg, Boland and greater Western Cape regularly:
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
                                    {[
                                        "Somerset West",
                                        "Stellenbosch",
                                        "Strand",
                                        "Franschhoek",
                                        "Gordon's Bay",
                                        "Paarl",
                                        "Cape Town",
                                        "Grabouw",
                                    ].map((location, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <FaCircleCheck className="text-[#FFCA08] w-5 h-5 flex-shrink-0" />
                                            <span className="font-bold text-white text-lg">{location}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Why Clients Choose EAR Engineering
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                                There are a lot of electricians advertising in the Western Cape. Here is why folks keep coming back to us:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { title: "Registered Electricians", icon: FaShieldHalved, desc: "All our work is carried out by qualified electricians. You get a COC where required for peace of mind." },
                                { title: "18 Years Experience", icon: FaClockRotateLeft, desc: "We know the area, local specs, and common problems, and we have a track record you can verify." },
                                { title: "We Show Up", icon: FaTruckFast, desc: "Property managers appreciate our consistency. When you call us with an emergency, we arrive on time." },
                                { title: "Honest Quotes", icon: FaHandshake, desc: "You know what the job will cost before we pick up a tool. No hidden fees." },
                                { title: "All Under One Roof", icon: FaBolt, desc: "Electrical, solar, and AC under one roof. You deal with one company to avoid contractor clashes." },
                                { title: "Long-Term Partners", icon: FaUserTie, desc: "Estates and large commercial hubs trust our long-term service agreements for seamless electrical continuity." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 items-center sm:items-start text-center sm:text-left hover:border-cyan-200 transition-colors group">
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <div className="bg-[#015CAB] p-3 rounded-xl text-white flex-shrink-0 group-hover:text-[#FFCA08] transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-10 py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-extrabold text-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3 group"
                            >
                                Free Electrical Assessment
                                <FaBolt className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                <Reviews />

                <FAQ faqs={electricalFaqs} />

                <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
            </main >

            <Footer />

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                preselectedCategory="Electrical"
            />
        </>
    );
}
