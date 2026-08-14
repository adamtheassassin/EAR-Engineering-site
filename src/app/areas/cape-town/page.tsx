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
import Trust from "@/components/Trust";
import {
    FaWrench,
    FaBoltLightning,
    FaScrewdriverWrench,
    FaShieldHalved,
    FaSolarPanel,
    FaSnowflake,
    FaMapLocationDot,
    FaLocationDot,
    FaHouseChimney,
    FaCarBattery
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function CapeTownAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const capeTownFaqs = [
        { q: "Do you really cover Cape Town?", a: "Yes. Our office is at 60 Abelia St, Somerset West, Cape Town, 7130, and we take on work right across the city for commercial and residential clients. We are a registered Cape Town team, not a national company sending someone from far away." },
        { q: "How quickly can you get into the city for a job?", a: "Most of Cape Town is around forty minutes from our base on the N2, so we book visits in advance where we can. For urgent faults, call us on 021 855 4462 and we will arrange to get someone out to you as soon as possible." },
        { q: "Do you do commercial and office electrical work?", a: "Yes. A big part of our city work is commercial, from office fit-outs and retail premises to industrial units. We handle installations, maintenance, generators, three-phase supply and COCs for businesses across Cape Town." },
        { q: "Do you work with body corporates and apartment blocks?", a: "Yes. We work with body corporates and managing agents on apartment blocks, especially around the Atlantic Seaboard and City Bowl. We handle shared electrical work, repairs, COCs and the kind of jobs that need to be coordinated across a building." },
        { q: "My building is old and the wiring is original. Should I be worried?", a: "Often, yes. A lot of the City Bowl and inner-city buildings still run on wiring that is decades old and was never built for today's demand. We inspect the installation, tell you honestly what is safe, and plan rewiring or upgrades around how the building is used." },
        { q: "I am selling or leasing a property in Cape Town and need a COC. How long does it take?", a: "If the wiring is already sound, we can often issue the COC on the same visit. If repairs are needed first, the time depends on the work. Call us early so we have room to sort things out before your deadline." },
        { q: "Do you install solar in Cape Town?", a: "Yes. The flat roofs on offices, warehouses and apartment blocks are ideal for solar, and a commercial system with battery backup protects you from load shedding while bringing down a heavy bill. We fit solar for businesses, body corporates and homes across the city." },
        { q: "Can you install air conditioning for offices and shops in Cape Town?", a: "Yes. We supply and install split units and inverter aircons for offices, shops and apartments, and we are comfortable handling multiple units across a commercial building. We recommend units that run quietly and keep the running costs down." },
        { q: "What parts of Cape Town do you cover?", a: "We cover the city broadly, including the CBD and City Bowl, the Atlantic Seaboard, the Southern Suburbs, Woodstock and Salt River, Observatory, Century City, Constantia, and the industrial areas around Epping and Montague Gardens." },
        { q: "How do I get a quote for electrical work in Cape Town?", a: "Call us on 021 855 4462 or send us a message. We will arrange a visit to your property and give you a clear price once we have seen what the job needs." }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ElectricalContractor",
        "name": "EAR Engineering",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "60 Abelia St, Somerset West",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "postalCode": "7130",
            "addressCountry": "ZA"
        },
        "telephone": "021 855 4462",
        "url": "https://earengineering.co.za",
        "currenciesAccepted": "ZAR",
        "areaServed": ["Cape Town", "City Bowl", "Atlantic Seaboard", "Southern Suburbs", "Woodstock", "Observatory", "Century City", "Constantia"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Electrical, Solar and AC Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Installations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DB Board Upgrades" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "COC Certificates" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generator Installations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Conditioning Installation" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": capeTownFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Cape Town | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Cape Town, for commercial, industrial and residential clients. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/cape-town" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Get Free Estimate"
                mobileCtaIcon={<FaLocationDot className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Cape Town</span>
                        </>
                    }
                    subtitle="When your office needs a fit-out, your apartment block needs a COC, or your business needs backup power and solar to ride out load shedding, you want a registered electrical team that works right across Cape Town."
                    image="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1000&auto=format&fit=crop"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Work Across Cape Town */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    Electricians Who Work Across Cape Town
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Cape Town is really many cities in one. There is the office and retail world of the CBD, the apartment blocks along the Atlantic Seaboard, the leafy homes of the Southern Suburbs, and the warehouses and factories out in Epping and Montague Gardens. Each one needs a different kind of electrical work.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    A lot of our city work is commercial, where downtime is expensive and the wiring has to be right the first time. We are comfortable with three-phase supply, generators and the coordination that comes with working in an occupied office block or a managed building.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    The older inner-city buildings carry their own challenges, with original wiring that was never built for modern demand, and the surges from load shedding wear out boards everywhere. Fitting <Link href="/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection at the DB board</Link> is one of the simplest ways to protect expensive equipment.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/generator-hero-new.png"
                                    alt="EAR Engineering generator and backup power installation for a Cape Town business"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in Cape Town */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Electrical Work Across Cape Town
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From an office fit-out to an apartment block or a warehouse, here is the electrical work we handle across the city:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Commercial & Office Installations", icon: FaWrench, desc: "Office fit-outs, retail premises and industrial units, wired and certified for the load a working business puts on its supply.", link: "/electrical-services" },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "Inner-city buildings and older homes often outgrow their boards. We upgrade boards that keep tripping and add surge protection to keep equipment safe.", link: "/db-board-upgrades-and-repairs" },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "Selling or leasing a property in Cape Town means you need a valid COC. We inspect the wiring, fix whatever fails, and issue the certificate.", link: "/coc" },
                                { title: "Generator Installations", icon: FaCarBattery, desc: "Offices, shops and industrial units rely on us for generators and changeover switches that keep the business running through an outage.", link: "/generator-installation" },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "A fault that takes out a floor of offices needs sorting fast. We trace the problem, fix it, and get the building back to normal." }
                            ].map((s, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#015CAB] transition-colors group flex flex-col">
                                    <div className="bg-[#e6f0f9] p-4 rounded-xl text-[#015CAB] w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#015CAB] group-hover:text-[#FFCA08] transition-colors">
                                        <s.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed mb-4 flex-1">
                                        {s.desc}
                                    </p>
                                    {s.link && (
                                        <Link href={s.link} className="text-[#015CAB] font-bold text-sm tracking-wide uppercase group-hover:underline">
                                            Learn More
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Serving Every Corner */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Working Right Across the City
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From the CBD to the industrial areas and the suburbs, here are some of the parts of Cape Town we work in:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "CBD & City Bowl", desc: "Office fit-outs, heritage rewiring, commercial COCs" },
                                { name: "Atlantic Seaboard", desc: "Apartment blocks, body corporate work, repairs" },
                                { name: "Southern Suburbs", desc: "Home installations, solar, DB board upgrades" },
                                { name: "Woodstock & Salt River", desc: "Commercial and light industrial electrical" },
                                { name: "Observatory", desc: "Residential wiring, COCs, fault finding" },
                                { name: "Century City", desc: "Offices, retail, generators and backup power" },
                                { name: "Constantia", desc: "Residential installs, solar, aircon" },
                                { name: "Epping & Montague Gardens", desc: "Three-phase, industrial installs, generators" },
                                { name: "Claremont & Newlands", desc: "Homes, offices, solar and aircon installs" }
                            ].map((area, i) => (
                                <div key={i} className="flex gap-4 items-start bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-200 transition-colors">
                                    <FaHouseChimney className="w-6 h-6 text-[#FFCA08] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-2 mb-2">{area.name}</h3>
                                        <p className="text-sm text-gray-600 font-medium leading-relaxed">{area.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solar, Aircon, and Electrical */}
                <section className="bg-[#015CAB] py-24 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSolarPanel className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Solar Installation</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Cape Town businesses carry heavy power bills, and the flat roofs on offices, warehouses and apartment blocks are perfect for solar. A commercial system with battery backup protects you from load shedding and pays for itself over time. We fit <Link href="/solar-installation" className="text-[#FFCA08] underline font-bold">solar systems</Link> for businesses, body corporates and homes across the city.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Offices, shops and apartments across Cape Town need cooling that runs quietly and does not blow the running costs. We supply and install split units and inverter aircons for commercial and residential clients, and we handle multiple units across a building. Here is more on our <Link href="/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> work.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Cape Town covers everything from century-old buildings in the City Bowl to industrial units in Epping and apartment blocks on the Atlantic Seaboard. Our registered electricians handle commercial installs, three-phase and industrial work, rewiring, surge damage and <Link href="/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> for sales and leases.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Here & Map */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                    Getting to Us from Cape Town
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is at 60 Abelia St, Somerset West, Cape Town, 7130, an easy run from the city along the N2:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the CBD and City Bowl:</strong> Take the N2 east toward the Helderberg and follow it to the Somerset West exits. Around forty minutes.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the Southern Suburbs:</strong> Join the M3 or N2 heading east, then stay on the N2 toward Somerset West.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Epping and Montague Gardens:</strong> Pick up the N1, link onto the R300, then the N2 down toward the Helderberg.</span>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <a href="https://maps.google.com/?q=60+Abelia+St,+Somerset+West,+Cape+Town,+7130" target="_blank" rel="noreferrer" className="inline-block bg-[#015CAB] hover:bg-[#01418a] text-white px-6 py-3 rounded-xl font-bold shadow-sm transition-colors">
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full h-[400px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps?q=60+Abelia+St,+Somerset+West,+Cape+Town,+7130&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <Trust />

                <Reviews />

                <FAQ faqs={capeTownFaqs} />

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
