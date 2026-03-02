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
import { FaSolarPanel, FaBatteryFull, FaWrench, FaBuilding, FaCircleCheck, FaBoltLightning, FaShieldHalved, FaClockRotateLeft, FaUserTie, FaPlug, FaMapLocationDot } from "react-icons/fa6";
import Image from "next/image";

export default function SolarInstallationPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const solarFaqs = [
        { q: "What is included in a solar installation?", a: "A full installation from EARE Engineering includes solar panels, an inverter, battery storage, all wiring and electrical connections, a Certificate of Compliance, and a handover showing you how to use and monitor your system. We handle everything in-house." },
        { q: "Will my solar system keep the power on during load shedding?", a: "Yes, as long as you have battery storage included in your system. When the grid goes off, your batteries supply power to your home or business. The size of your batteries determines how long you can run and which appliances you can use during an outage." },
        { q: "How long does installation take?", a: "Most residential installations take one to two days on site. From your first enquiry to a fully working system, you are usually looking at two to three weeks. This depends on equipment availability and your property. Larger commercial jobs take longer." },
        { q: "Do I need permission from the municipality to install solar?", a: "It depends on your municipality and the size of your system. For most residential installations in the Western Cape, the requirements are manageable. We handle all the necessary paperwork and applications on your behalf so you do not have to worry about it." },
        { q: "What is a Certificate of Compliance (COC)?", a: "A COC is a document issued by a registered electrician that confirms your electrical installation meets the required safety standards. It is important for your insurance and for the safety of everyone in the building. Every installation we do includes a COC." },
        { q: "Can I start with just a battery backup and add solar panels later?", a: "Yes. We design our systems with expansion in mind. If you want to start with a battery backup system and add solar panels later, we will make sure the initial installation is set up in a way that makes the upgrade simple and affordable." },
        { q: "How much does solar installation cost in the Western Cape?", a: "A basic battery backup system starts from around R25,000. A mid-size residential solar system with battery storage typically falls between R100,000 and R180,000. Commercial systems vary widely depending on size. The only accurate way to get a price is through a site assessment, which we offer for free." },
        { q: "Do you also do electrical and air conditioning work?", a: "Yes. EARE Engineering offers electrical installations and maintenance, air conditioning installation and servicing, and solar installation all under one roof. Many of our clients use us for all three services." }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": solarFaqs.map(faq => ({
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
        "@type": "ElectricalContractor",
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
            "name": "Solar Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hybrid Solar Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery Backup Systems" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Solar Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar System Upgrades" } }
            ]
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            <title>Solar Installation Somerset West and Stellenbosch | EAR Engineering</title>
            <meta name="description" content="EAR Engineering installs solar systems with battery backup for homes and businesses in Somerset West, Stellenbosch and the Helderberg. Get a free quote today." />

            <Header onOpenModal={() => setIsModalOpen(true)} />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Solar Installation
                        </>
                    }
                    subtitle="We install solar power systems for homes, businesses and commercial properties across Somerset West, Stellenbosch and the Helderberg."
                />

                <TrustedBy />

                {/* Our Solar Services Include */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Our Solar Installation Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We offer a full solar installation service from start to finish. You do not need to deal with multiple contractors or figure out the technical side yourself. We assess your property, design the right system, install everything properly, and hand it over with full certification.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            {[
                                { title: "Hybrid Solar Systems", icon: FaSolarPanel, desc: "Connects to the grid and uses solar panels to generate power during the day. Any extra power goes into your batteries for night time or during outages." },
                                { title: "Battery Backup Systems", icon: FaBatteryFull, desc: "A great starting point if you aren't ready for full solar. We install the batteries and inverter so your essential appliances keep running." },
                                { title: "Commercial Installations", icon: FaBuilding, desc: "We install commercial solar systems up to 100kW for businesses, estates, farms, and offices to dramatically cut electricity costs." },
                                { title: "System Upgrades", icon: FaWrench, desc: "Already have a system? We can assess and expand it by adding more panels, upgrading batteries, or replacing old inverters." }
                            ].map((s, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-cyan-200 transition-colors group flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="bg-cyan-50 p-4 rounded-xl text-[#015CAB] flex-shrink-0 group-hover:bg-[#015CAB] group-hover:text-white transition-colors">
                                        <s.icon className="w-8 h-8" />
                                    </div>
                                    <div>
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
                                Free Solar Inspection
                                <FaBoltLightning className="w-5 h-5 group-hover:rotate-12 transition-transform" />
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
                                Going solar with EARE Engineering is a straightforward process. Here is what to expect from start to finish:
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Free Site Assessment", desc: "We visit your property, check your roof and electricity usage, and understand what you need." },
                                { num: "2", title: "Custom Proposal", desc: "We provide a proposal showing what we recommend, costs, and expected savings." },
                                { num: "3", title: "Approval & Scheduling", desc: "Once you approve, we handle any paperwork and schedule your installation." },
                                { num: "4", title: "Installation Day", desc: "Our team installs panels, inverter, batteries and wiring. Usually takes 1-2 days for homes." },
                                { num: "5", title: "Compliance Testing", desc: "Our registered electricians sign off the installation and issue your COC." },
                                { num: "6", title: "Handover", desc: "We show you how your system works, how to check monitoring, and provide support." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4">
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
                    </div>
                </section>

                {/* Real Projects */}
                <section className="py-12 md:py-24 bg-white relative overflow-hidden z-10">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Background Images/Solarbackground residential.webp"
                            alt="Background Solar Panels"
                            fill
                            quality={90}
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-white/50 mix-blend-screen"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-gray-50"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 uppercase md:normal-case">
                                    Real Projects.<br />Real Results.
                                </h2>
                                <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                                    We have been working in the Helderberg and Boland for a long time, and our client list speaks for itself. We believe in providing tangible references for our work.
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-[#015CAB] transition-transform hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Val De Vie Estate, Stellenbosch</h3>
                                        <p className="text-gray-700 font-medium">
                                            We are currently installing a 100kW commercial solar system at Val De Vie Estate in Stellenbosch. This is a large-scale project that will significantly reduce the estate's electricity costs and provide reliable power during load shedding.
                                        </p>
                                    </div>

                                    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-[#FFCA08] transition-transform hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Residential & Commercial References</h3>
                                        <p className="text-gray-700 font-medium">
                                            We can point you to various solar installations we have done in your specific area, from standard home setups in Somerset West and Strand to premium guesthouses in Franschhoek.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                {/* Decorational illustration */}
                                <div className="aspect-[4/3] bg-[#015CAB]/95 backdrop-blur-md rounded-[2rem] overflow-hidden p-8 flex flex-col justify-end relative shadow-2xl border border-white/10">
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCwgaGVpZ2h0PSc4JyBmaWxsPScjZmZmJyBmaWxsLW9wYWNpdHk9JzAuMScvPgo8cGF0aCBkPSdNMCAwaDhyOHYtOEgweicgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjA1JyAvPgo8L3N2Zz4=')] opacity-20"></div>
                                    <FaSolarPanel className="text-white/10 w-64 h-64 absolute -top-10 -right-10" />
                                    <div className="relative z-10 text-white space-y-2">
                                        <div className="inline-block px-3 py-1 bg-[#FFCA08] text-gray-900 text-sm font-bold rounded-lg mb-2 shadow-sm">Commercial Project Highlight</div>
                                        <h4 className="text-3xl font-black">100kW System</h4>
                                        <p className="font-medium text-cyan-50">Providing energy independence and sustainability for premium residential estates.</p>
                                    </div>
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
                                There are a lot of solar companies out there right now. Here is why our clients come back to us and refer us to others.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {[
                                { title: "18 Years Experience", icon: FaClockRotateLeft, desc: "We know this area, we know the local suppliers, and we know what works here." },
                                { title: "Qualified Electricians", icon: FaShieldHalved, desc: "All our electrical work is done by registered electricians and comes with a COC." },
                                { title: "Everything Under One Roof", icon: FaBoltLightning, desc: "Electrical, solar, and air conditioning—all managed by one company to make things simple." },
                                { title: "No Disappearing Acts", icon: FaUserTie, desc: "We are a local business. When you call us six months after installation, we pick up." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-cyan-50 p-3 rounded-xl text-[#015CAB] flex-shrink-0">
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
                                Free Solar Inspection
                                <FaBoltLightning className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Price Estimation */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Solar Installation Costs in South Africa
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Solar installation costs depend on the size of your system and your specific property. Your actual cost will be confirmed after our free site assessment.
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg">System Type</th>
                                        <th className="py-5 px-6 font-bold text-lg">Best For</th>
                                        <th className="py-5 px-6 font-bold text-lg whitespace-nowrap">Approx. Starting Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900">Battery backup only</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Load shedding cover for the basics</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R25,000 to R50,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900">Small residential solar</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Smaller homes and townhouses</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R60,000 to R100,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900">Mid-size residential solar</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Average family home</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R100,000 to R180,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900">Large residential solar</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Bigger homes, high usage</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R180,000 to R300,000+</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900">Small commercial solar</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Offices, guesthouses, retail</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R150,000 to R400,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900">Large commercial solar</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Estates, farms, factories</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R400,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            <p className="mb-2">These figures include equipment and installation. A proper quote can only be given after we assess your property. Be careful of any company that gives you a price without visiting your site first.</p>
                            <p>Most clients find that their solar system pays for itself over time through lower electricity bills and savings on generator fuel.</p>
                        </div>
                    </div>
                </section>

                {/* Introduction / Load Shedding Section */}
                <section className="py-20 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Reliable Solar Power for Your Home or Business
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                    <FaPlug className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">The Cost of Outages</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    South Africans have been dealing with load shedding for years. Candles and power banks only go so far. Businesses lose money every time the power goes off, families are frustrated, and electricity prices keep climbing.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <FaBatteryFull className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Uninterrupted Power</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    A solar system with battery backup changes all of that. When the grid goes down, your batteries kick in and your lights stay on. Your fridge stays cold, your business keeps operating, and you use far less grid electricity.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="w-14 h-14 bg-yellow-100 text-[#d49a00] rounded-full flex items-center justify-center mb-6">
                                    <FaMapLocationDot className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Ideal for the Cape</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Western Cape clients are in a great position for solar. The region gets abundant sunshine throughout the year, meaning panels produce energy reliably, making your investment work incredibly hard.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Areas We Serve with GBP Embed */}
                <section className="bg-[#015CAB] py-20 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            <div className="overflow-hidden rounded-xl shadow-2xl h-[400px] w-full bg-white relative">
                                {/* GBP Map Embed */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4023.9526587094174!2d18.820527300000002!3d-34.063464499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5947a717cc1%3A0x6ffb176a283db73e!2sEAR%20Engineering!5e1!3m2!1sen!2sza!4v1772199538942!5m2!1sen!2sza"
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
                                    Locations We Serve
                                </h2>
                                <p className="text-lg font-medium text-white/90 leading-relaxed mb-8">
                                    EAR Engineering is based in the Helderberg and we offer reputable solar installations, electrical, and HVAC services for homeowners and businesses in the surrounding areas.
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
                                        "Grabouw"
                                    ].map((area, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <FaCircleCheck className="text-white w-5 h-5 flex-shrink-0" />
                                            <span className="font-bold text-white text-lg">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Reviews />

                <FAQ faqs={solarFaqs} />

                <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
            </main>

            <Footer />

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
