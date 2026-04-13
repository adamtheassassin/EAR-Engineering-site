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
    FaSolarPanel,
    FaWrench,
    FaCarBattery,
    FaPlugCircleBolt,
    FaHouseSignal,
    FaCircleCheck,
    FaHouseChimney,
    FaMoneyBillTrendUp
} from "react-icons/fa6";

export default function SolarParentPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const solarFaqs = [
        { q: "How do I know if solar is worth it for my property?", a: "The starting point is your current electricity bill and how it has changed over the past few years. If your costs have been climbing and you expect them to keep climbing, solar gives you a way to lock in a significant portion of your energy costs at a fixed capital investment rather than paying an ever-increasing tariff indefinitely. The Western Cape's sunshine hours make systems here particularly effective, and a site visit gives us the information we need to give you a realistic picture of what a system would cost and what it would save over time." },
        { q: "What is the difference between a hybrid system and an off-grid system?", a: "A hybrid system is connected to the municipal grid and uses solar panels and batteries to reduce your grid reliance and provide backup during outages. An off-grid system has no grid connection at all and relies entirely on solar and battery storage to meet your energy needs. Hybrid systems suit most homes and businesses. Off-grid is typically for rural or remote properties where grid connection is impractical or unavailable." },
        { q: "Can I add batteries to my existing solar installation?", a: "Yes. If you already have solar panels but no battery storage, adding batteries is a straightforward upgrade in most cases. We assess your existing system, check that the inverter is compatible, and install the batteries correctly. This is one of the most common requests we receive from clients who installed solar before load shedding became as severe as it is now." },
        { q: "How long does a solar installation last?", a: "Quality solar panels typically carry a 10-year product warranty and a 25-year performance guarantee. Inverters have a shorter lifespan, typically 10 to 15 years, and batteries vary depending on the technology and how heavily they are cycled. A well-maintained system should serve you reliably for 20 to 25 years." },
        { q: "Do you handle commercial solar installations?", a: "Yes. We install commercial solar systems up to 100kW for offices, retail properties, guesthouses, wine estates, farms and other commercial clients. Our current project at Val De Vie Estate in Stellenbosch is an example of the scale we work at on the commercial side." },
        { q: "What happens if my solar system stops working?", a: "Call us. We carry out fault diagnosis on solar systems and can identify whether the issue is with the panels, the inverter, the batteries or the electrical connections. Most faults can be diagnosed and repaired in a single visit." },
        { q: "Do you service solar systems installed by other companies?", a: "Yes. We carry out repairs, maintenance and upgrades on solar systems regardless of who originally installed them. If your system is underperforming or you are not sure it was installed correctly, we can assess it and tell you what needs attention." },
        { q: "What areas do you cover?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Grabouw and Cape Town. Our base is in Somerset West so our response times across the Helderberg are especially fast." },
        { q: "How do I get started?", a: "Call us on 021 855 4462 or send us a message. We will ask a few questions about your property and energy needs, arrange a site visit, and come back to you with a clear recommendation and a quote once we have seen what is involved." }
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
            "name": "Solar Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Panel Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Panel Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Battery Storage" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Inverter Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Off-Grid Solar" } }
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

            <title>Solar Power Solutions Somerset West | EAR Engineering</title>
            <meta name="description" content="EAR Engineering offers solar installation, battery storage, inverter and off-grid solar solutions across Somerset West, Stellenbosch and the Helderberg." />
            <link rel="canonical" href="https://earengineering.co.za/services/solar" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Get a Solar Quote"
                mobileCtaIcon={<FaSolarPanel className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Solar Power Solutions in <span className="text-[#FFCA08]">Somerset West</span>, Stellenbosch and the Helderberg
                        </>
                    }
                    subtitle="Electricity is getting more expensive every year. Solar changes that equation. We design and install solar power solutions, battery storage, and off-grid systems across the Boland."
                    image="/Work Photos/solar_parent_hero.png"
                    ctaText="Talk to EAR Engineering About Solar"
                    ctaIcon={<FaSolarPanel className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* The Real Cost Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                The Real Cost of Depending on the Grid
                            </h2>
                            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
                                Most people think about their electricity bill in terms of what they pay each month. But the more useful question is what that bill will look like in five or ten years if nothing changes. 
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl border border-[#01418A] flex flex-col">
                                <FaMoneyBillTrendUp className="w-10 h-10 text-[#FFCA08] mb-6" />
                                <h3 className="text-2xl font-extrabold text-white mb-4">Businesses & Commercial</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4 flex-1">
                                    Businesses face this pressure acutely. Many have turned to diesel generators as a stopgap, but diesel is not cheap. Running a generator through load shedding adds up fast—easily tens of thousands of rand a year on fuel alone. Solar with battery backup eliminates that recurring cost and replaces unpredictable fuel spend with a fixed, once-off capital investment.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl border border-[#01418A] flex flex-col">
                                <FaHouseChimney className="w-10 h-10 text-[#FFCA08] mb-6" />
                                <h3 className="text-2xl font-extrabold text-white mb-4">Residential Homes</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4 flex-1">
                                    A solar system that offsets most of your electricity usage locks in a large portion of your energy costs at today's price, shielding you from future increases. In the Western Cape, where sunshine hours are consistently high throughout the year, systems here produce energy reliably and the financial returns are among the strongest in the country.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Solar Power Services - Hub Links */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Our Solar Power Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We offer a full range of solar services for residential, commercial and industrial clients. Each service below has its own dedicated page with more detail, pricing guidance and FAQs:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "Solar Installation", 
                                    icon: FaSolarPanel, 
                                    desc: "A complete solar installation includes panels, inverter, battery storage and all electrical connections. We handle the design from start to finish.",
                                    link: "/services/solar/solar-installation",
                                    linkText: "See our solar installation service"
                                },
                                { 
                                    title: "Repair & Maintenance", 
                                    icon: FaWrench, 
                                    desc: "Existing solar systems need attention over time. Panels can be damaged or inverters fail. We diagnose faults, repair, and conduct maintenance.",
                                    link: "/services/solar/solar-repair-maintenance",
                                    linkText: "See our repair and maintenance service"
                                },
                                { 
                                    title: "Battery Storage", 
                                    icon: FaCarBattery, 
                                    desc: "Battery storage turns a solar system into a load shedding solution. We install storage as part of a new system or an addition to an existing one.",
                                    link: "/services/solar/battery-storage",
                                    linkText: "See our battery storage service"
                                },
                                { 
                                    title: "Inverter Installation", 
                                    icon: FaPlugCircleBolt, 
                                    desc: "The inverter is the core of any system. Upgrading to a newer model improves a system's performance and reliability significantly.",
                                    link: "/services/solar/inverter-installation",
                                    linkText: "See our inverter installation service"
                                },
                                { 
                                    title: "Off-Grid Solar", 
                                    icon: FaHouseSignal, 
                                    desc: "Not every property is connected to the municipal grid. We design and install off-grid systems sized to cover your full independent energy needs.",
                                    link: "/services/solar/off-grid-solar",
                                    linkText: "See our off-grid solar service"
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
                                    <Link href={s.link} className="inline-flex items-center text-[#015CAB] font-bold text-sm tracking-wide uppercase group-hover:underline">
                                        {s.linkText} &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Which Solution is Right For You Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Which Solar Solution Is Right for You?
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Not sure where to start? This table gives a quick overview of which service suits different situations.
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100 mb-8">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Your Situation</th>
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">What You Need</th>
                                        <th className="py-5 px-6 font-bold text-lg">Where to Start</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">No solar yet, want to get started</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Full solar installation with battery backup</td>
                                        <td className="py-4 px-6 font-bold"><Link href="/services/solar/solar-installation" className="text-[#015CAB] hover:underline">Solar Installation page</Link></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Have solar but it is not performing well</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Fault diagnosis, repair or panel replacement</td>
                                        <td className="py-4 px-6 font-bold"><Link href="/services/solar/solar-repair-maintenance" className="text-[#015CAB] hover:underline">Repair and Maintenance page</Link></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Have solar panels but no battery</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Battery storage added to existing system</td>
                                        <td className="py-4 px-6 font-bold"><Link href="/services/solar/battery-storage" className="text-[#015CAB] hover:underline">Battery Storage page</Link></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Inverter is old, failing or underspecified</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Inverter replacement or upgrade</td>
                                        <td className="py-4 px-6 font-bold"><Link href="/services/solar/inverter-installation" className="text-[#015CAB] hover:underline">Inverter Installation page</Link></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Rural or remote property, no grid</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Fully independent off-grid solar system</td>
                                        <td className="py-4 px-6 font-bold"><Link href="/services/solar/off-grid-solar" className="text-[#015CAB] hover:underline">Off-Grid Solar page</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center text-lg text-gray-600 font-medium">
                            If you are still not sure which applies to you, call us on <strong>021 855 4462</strong> and we will ask a few questions and point you in the right direction.
                        </div>
                    </div>
                </section>

                {/* Real Solar Projects Split Layout */}
                <section className="py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                                <Image
                                    src="/Work Photos/solar_commercial.png"
                                    alt="Commercial solar installation"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    Real Solar Projects in the Helderberg and Boland
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6 text-lg">
                                    We currently have a 100kW commercial solar system underway at Val De Vie Estate in Stellenbosch. This is a large-scale installation designed to significantly reduce the estate's electricity costs and provide reliable power during load shedding. It is one of a growing number of commercial and estate solar projects we have completed across the Western Cape.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    We also install residential solar systems across Somerset West, Strand, Gordon's Bay, Franschhoek, Paarl and Grabouw. From a battery backup setup in a Parel Vallei townhouse to a full hybrid system on a working farm near Grabouw, each project is designed around the specific property and the client's actual energy needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Clients Choose EAR Engineering */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Why Clients Choose EAR Engineering for Solar
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { title: "Six Years Experience", desc: "Six years of solar installation experience across the Helderberg and Boland." },
                                { title: "In-House Team", desc: "All solar work done by our own qualified team, not subcontracted out." },
                                { title: "Proper Certification", desc: "Every installation includes proper electrical certification and a Certificate of Compliance." },
                                { title: "Full Lifecycle", desc: "We cover the full solar lifecycle, from new installations to repairs, battery upgrades and inverter replacements." },
                                { title: "All Under One Roof", desc: "If your solar installation requires electrical upgrades or pairs well with an energy-efficient air conditioning system, we handle it all." },
                                { title: "Honest Advice", desc: "We size your system to match your actual energy needs, not to maximise the sale." }
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 text-center items-center hover:border-cyan-200 transition-colors group">
                                    <div className="bg-[#015CAB] p-3 rounded-full text-white flex-shrink-0 group-hover:text-[#FFCA08] transition-colors">
                                        <FaCircleCheck className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
                            Looking for more? See our general <Link href="/services/electrical-services" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">electrical upgrades</Link> and <Link href="/services/ac-installation" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">air conditioning</Link> services.
                        </div>
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
                                We install and service solar systems locally across the following areas:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { loc: "Somerset West", path: "/somerset-west", desc: "Full installations, battery storage, repairs, off-grid" },
                                { loc: "Stellenbosch", path: "/stellenbosch", desc: "Residential, wine estate and commercial solar projects" },
                                { loc: "Strand", path: "/strand", desc: "Residential solar installation and battery backup" },
                                { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Residential and small commercial solar" },
                                { loc: "Franschhoek", path: "/franschhoek", desc: "Residential, guesthouse and estate solar systems" },
                                { loc: "Paarl", path: "/paarl", desc: "Residential and commercial across the Paarl Valley" },
                                { loc: "Grabouw", path: "/grabouw", desc: "Residential, agricultural and off-grid solar solutions" },
                                { loc: "Cape Town", path: "/cape-town", desc: "Residential and commercial solar installations" },
                            ].map((location, i) => (
                                <Link key={i} href={`/locations${location.path}`} className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-colors border border-white/10 group flex flex-col gap-2">
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
