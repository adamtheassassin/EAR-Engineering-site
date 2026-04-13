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
import Link from "next/link";
import Image from "next/image";
import {
    FaScrewdriverWrench,
    FaWrench,
    FaPlugCircleCheck,
    FaCarBattery,
    FaPlugCircleXmark,
    FaBroom,
    FaChartLine,
    FaShieldHalved,
    FaHouseChimney,
    FaCircleCheck,
    FaCircleExclamation,
    FaToolbox,
    FaBoltLightning
} from "react-icons/fa6";

export default function SolarRepairMaintenancePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const solarFaqs = [
        { q: "How often should a solar system be serviced?", a: "For most residential systems in the Western Cape, an annual maintenance visit is sufficient. Systems on properties with heavy dust, nearby trees or significant bird activity may benefit from more frequent panel cleaning. Commercial systems that are running harder and have more at stake financially are often serviced twice a year. We can advise on the right schedule for your specific system during the first visit." },
        { q: "My electricity bill has gone up since I got solar. What could be causing this?", a: "This is one of the most common reasons people call us. It usually points to one of a few things: panels that need cleaning and are producing less than they should, a string fault where one or more panels have stopped contributing to the array, an inverter that is not operating at full efficiency, or battery degradation meaning you are drawing more from the grid at night than you were previously. A diagnostic visit will identify the cause." },
        { q: "Can you repair a system that was not installed by EAR Engineering?", a: "Yes. We assess, repair and maintain solar systems regardless of who originally installed them. We will need access to any documentation you have about the system, such as the installation certificate, inverter model and battery specifications, but we can work with what is available." },
        { q: "One of my solar panels looks cracked. Do I need to replace it?", a: "Not always, but it depends on the extent of the damage. A minor crack may not significantly affect output, while a heavily damaged panel can reduce performance and in some cases create a safety risk. We assess damaged panels on site and give you a clear recommendation on whether replacement is necessary." },
        { q: "My inverter is showing an error code. What should I do?", a: "Write down the error code if you can and call us. Inverter error codes vary by brand and model, but most indicate something specific about the nature of the fault. In some cases the issue can be resolved remotely or with a simple reset. In others, a site visit is needed. Either way, do not ignore a persistent error code as it can indicate a developing fault that will worsen over time." },
        { q: "How long does a solar panel last?", a: "Quality solar panels typically carry a 25-year performance guarantee, during which they are warranted to produce at least 80% of their original rated output. With proper maintenance, many panels continue performing well beyond that. The inverter and batteries have shorter lifespans and are more likely to require attention or replacement during the system's life." },
        { q: "Is panel cleaning worth doing?", a: "Yes, particularly in the Western Cape where dust, pollen and bird activity are common. Studies on similar climates show that dirty panels can lose between 5% and 15% of their output compared to clean ones. On a well-sized residential system, that loss adds up to a meaningful amount of energy bought from the grid each year. Annual cleaning at a minimum is a worthwhile investment." },
        { q: "What areas do you cover for solar repairs?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Grabouw and Cape Town. Our base is in Somerset West so our response times across the Helderberg are especially fast." },
        { q: "How do I get a quote for a repair or maintenance visit?", a: "Call us on 021 855 4462 or send us a message. Describe what you have noticed and we will arrange a visit. A more accurate quote for any repair work can be given once we have assessed the system in person." }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ElectricalContractor",
        "name": "EAR Engineering",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Abelia St, Heldervue",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "postalCode": "7130",
            "addressCountry": "ZA"
        },
        "telephone": "021 855 4462",
        "currenciesAccepted": "ZAR",
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Grabouw", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Solar Repair and Maintenance Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Panel Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Panel Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Panel Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inverter Troubleshooting" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery Fault Diagnosis" } }
            ]
        }
    };

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

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <title>Solar Panel Repair and Maintenance | EAR Engineering</title>
            <meta name="description" content="Solar system underperforming? EAR Engineering repairs and maintains solar panels, inverters and batteries across Somerset West, Stellenbosch and the Helderberg." />
            <link rel="canonical" href="https://earengineering.co.za/services/solar/solar-repair-maintenance" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Book a Repair"
                mobileCtaIcon={<FaScrewdriverWrench className="w-5 h-5" />}
            />

            <main className="flex-1 overflow-hidden">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Solar Panel <span className="text-[#FFCA08]">Repair and Maintenance</span> in Somerset West, Stellenbosch and the Helderberg
                        </>
                    }
                    subtitle="A solar system is a long-term investment. If your electricity bill has crept back up or your app shows lower output, it is worth having it looked at."
                    image="/Background Images/Solarbackground residential.webp"
                    ctaText="Schedule an Inspection"
                    ctaIcon={<FaScrewdriverWrench className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Not Performing Costing You Money */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    A Solar System That Is Not Performing Is Costing You Money
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    One of the less obvious risks of owning a <Link href="/services/solar" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">solar system</Link> is that underperformance is often invisible. Your lights still work, your inverter still shows green, and life carries on normally. But if your panels are dirty, a connection has degraded, a panel has been damaged, or your inverter is running below capacity, your system is producing less energy than it should be.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Every unit it falls short is a unit you are buying from the grid at Eskom's current tariff. For homeowners, this erodes the monthly saving that made the investment worthwhile. For businesses that installed solar specifically to reduce operating costs and eliminate diesel generator spend, an underperforming system means those savings are not materialising as expected.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    Regular maintenance is the most cost-effective way to protect your system's output and extend its lifespan. And when something does go wrong, getting it diagnosed and repaired quickly limits the financial impact.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/solar_maintenance_hero.png"
                                    alt="Solar panel cleaning and maintenance carried out by EAR Engineering"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solar Repair Services */}
                <section className="py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Solar Repair Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We diagnose and repair faults across all parts of a solar installation:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "Fault Diagnosis & Assessment", 
                                    icon: FaChartLine, 
                                    desc: "If your system is not performing as expected and you are not sure why, we start with a full assessment. We check panel output, inverter performance, and wiring."
                                },
                                { 
                                    title: "Solar Panel Repair & Replacement", 
                                    icon: FaWrench, 
                                    desc: "Panels can be damaged by hail, debris, or extreme weather. A cracked panel produces less energy. We assess, repair or replace damaged panels."
                                },
                                { 
                                    title: "Wiring and Connection Repairs", 
                                    icon: FaPlugCircleCheck, 
                                    desc: "Connections can corrode or work loose over time, causing intermittent faults. We inspect and repair wiring and connections as part of routine maintenance."
                                },
                                { 
                                    title: "Inverter Troubleshooting", 
                                    icon: FaPlugCircleXmark, 
                                    desc: "Error codes, sudden shutdowns, or a humming inverter producing less than it should. We troubleshoot and provide inverter replacements where needed.",
                                    link: "/services/solar/inverter-installation"
                                },
                                { 
                                    title: "Battery Fault Diagnosis", 
                                    icon: FaCarBattery, 
                                    desc: "Batteries not charging fully, discharging too quickly, or triggering errors. We assess battery health and carry out replacements where needed.",
                                    link: "/services/solar/battery-storage"
                                }
                            ].map((s, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#015CAB] transition-colors group flex flex-col">
                                    <div className="bg-[#e6f0f9] p-4 rounded-xl text-[#015CAB] w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#015CAB] group-hover:text-[#FFCA08] transition-colors">
                                        <s.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-1">
                                        {s.desc}
                                    </p>
                                    {s.link && (
                                        <Link href={s.link} className="inline-flex items-center text-[#015CAB] font-bold text-sm tracking-wide uppercase group-hover:underline">
                                            Learn More &rarr;
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solar Maintenance Services */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Solar Maintenance Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Routine maintenance keeps your system producing at full capacity and catches small issues before they become expensive ones. We offer maintenance visits for both residential and commercial solar systems:
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { 
                                    title: "Panel Cleaning", 
                                    icon: FaBroom, 
                                    desc: "Dust, pollen, and grime accumulate on panels and reduce the amount of light reaching the cells. We clean panels safely using appropriate methods that do not damage the surface."
                                },
                                { 
                                    title: "System Performance Check", 
                                    icon: FaChartLine, 
                                    desc: "We review your system's production data, check that output matches what it should be given current conditions, and flag any underperforming strings."
                                },
                                { 
                                    title: "Electrical and Connection Inspection", 
                                    icon: FaShieldHalved, 
                                    desc: "We inspect all accessible wiring, connections, isolators and earthing to confirm they are in good condition and properly secured. Essential for older systems."
                                },
                                { 
                                    title: "Inverter and Battery Health Check", 
                                    icon: FaToolbox, 
                                    desc: "We check inverter logs for error codes, confirm battery state of health, and verify that the system is switching correctly between solar, battery and grid."
                                }
                            ].map((m, i) => (
                                <div key={i} className="flex gap-6 items-start bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:border-blue-200 transition-colors">
                                    <div className="bg-white p-4 rounded-full shadow border border-gray-200 text-[#015CAB] flex-shrink-0">
                                        <m.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{m.title}</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Warning Signs Table */}
                <section className="py-20 bg-gray-50 border-t border-gray-200">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Warning Signs Your Solar System Needs Attention
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Not all solar faults announce themselves clearly. Here are the most common signs that your system needs a closer look:
                            </p>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c] w-1/2">Warning Sign</th>
                                        <th className="py-5 px-6 font-bold text-lg w-1/2">What It Could Indicate</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { sign: "Electricity bill has increased despite having solar", ind: "Reduced panel output, inverter fault or battery issue" },
                                        { sign: "Monitoring app shows lower output than usual", ind: "Dirty panels, shading, a faulty panel or string fault" },
                                        { sign: "Inverter showing error codes or flashing lights", ind: "Inverter fault, grid connection issue or overheating" },
                                        { sign: "Batteries not lasting as long during outages", ind: "Battery degradation or a charging fault" },
                                        { sign: "Visible damage to panels", ind: "Physical damage reducing output or creating a safety risk" },
                                        { sign: "System not switching to battery during outages", ind: "Inverter configuration issue or battery fault" },
                                        { sign: "No data showing on monitoring system", ind: "Communication fault, inverter issue or connectivity problem" }
                                    ].map((row, i) => (
                                        <tr key={i} className={`hover:bg-cyan-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                            <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3">
                                                <FaCircleExclamation className="text-[#FFCA08] flex-shrink-0" />
                                                {row.sign}
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 font-medium">
                                                {row.ind}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center text-lg text-gray-600 font-medium">
                            If any of these apply to your system, call us and we will arrange a visit. The sooner a fault is identified, the less it typically costs to fix.
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
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Get in Touch", desc: "Call or message us. Share monitoring data if you have it." },
                                { num: "2", title: "Assessment", desc: "We visit, inspect the system, and identify the fault." },
                                { num: "3", title: "Clear Quote", desc: "We tell you the issue and cost before work begins." },
                                { num: "4", title: "Repair", desc: "We complete the agreed work and test the system." },
                                { num: "5", title: "Report", desc: "We give you a summary and flag anything to watch." }
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
                        <p className="mt-12 text-center text-gray-600 font-medium max-w-2xl mx-auto">
                            Most residential repair and maintenance visits are completed in a single appointment. More complex faults on larger commercial systems may require a follow-up visit.
                        </p>
                    </div>
                </section>

                {/* Areas We Cover */}
                <section className="bg-[#015CAB] py-20 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                                Areas We Cover
                            </h2>
                            <p className="text-lg font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
                                We carry out solar panel repairs and maintenance across the Helderberg, Boland and greater Western Cape:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { loc: "Somerset West", path: "/somerset-west", desc: "Solar repair, maintenance, fault diagnosis" },
                                { loc: "Stellenbosch", path: "/stellenbosch", desc: "Residential, estate and commercial repairs" },
                                { loc: "Strand", path: "/strand", desc: "Residential solar repair and maintenance" },
                                { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Residential solar repair and replacement" },
                                { loc: "Franschhoek", path: "/franschhoek", desc: "Estate and residential solar maintenance" },
                                { loc: "Paarl", path: "/paarl", desc: "Residential and commercial solar repairs" },
                                { loc: "Grabouw", path: "/grabouw", desc: "Residential and agricultural systems" },
                                { loc: "Cape Town", path: "/cape-town", desc: "Residential and commercial repairs" },
                            ].map((location, i) => (
                                <Link key={i} href={`/areas${location.path}`} className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-colors border border-white/10 group flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <FaCircleCheck className="text-[#FFCA08] w-4 h-4" />
                                        <span className="font-bold text-white text-lg group-hover:text-[#FFCA08] transition-colors">{location.loc}</span>
                                    </div>
                                    <span className="text-sm text-blue-100 leading-relaxed">{location.desc}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Why Clients Choose EAR Engineering
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { title: "Work On All Systems", icon: FaScrewdriverWrench, desc: "We work on all systems, not just ones we installed. If your system was installed by another company, we can still assess, repair and maintain it." },
                                { title: "Qualified Electricians", icon: FaShieldHalved, desc: "Qualified electricians carry out all electrical work on solar systems, including wiring repairs and inverter replacements. Every job is certified." },
                                { title: "Experienced Diagnosis", icon: FaChartLine, desc: "We know what we are looking at. Six years of solar installation experience means we understand how systems are designed and where faults develop." },
                                { title: "Honest Advice", icon: FaCircleCheck, desc: "If a panel just needs cleaning rather than replacing, we will tell you. We do not recommend work that is not genuinely needed." },
                                { title: "Fast Turnaround", icon: FaBoltLightning, desc: "A solar system that is not working properly is not delivering your return. We treat repair jobs with the same urgency as new installations." }
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
                        <div className="mt-12 text-center">
                            <span className="font-medium text-gray-600">Need specific electrical assistance? Explore <Link href="/services/electrical-services" className="text-[#015CAB] underline font-bold hover:text-[#013f75] transition-colors">all electrical work on solar systems</Link>.</span>
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
                preselectedCategory="Solar"
            />
        </>
    );
}
