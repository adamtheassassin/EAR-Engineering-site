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
    FaHandshake,
    FaLocationDot,
    FaHouseChimney,
    FaCarBattery
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function StellenboschAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const stellenboschFaqs = [
        { q: "Do you really cover Stellenbosch?", a: "Yes. Our office is at 60 Abelia St, Somerset West, Cape Town, 7130, and Stellenbosch is a short drive up the R44. We work in Stellenbosch regularly for homes, wine farms, estates and businesses, and our team lives and works in the area. We are not a national company sending someone from far away." },
        { q: "How quickly can you get to an electrical fault in Stellenbosch?", a: "Stellenbosch is about half an hour from our base, so we get there often. For urgent faults, call us on 021 855 4462 and we will come out as soon as we can. When our schedule allows, we attend emergencies on the same day." },
        { q: "We run a wine farm and need electrical work on the cellar and outbuildings. Can you help?", a: "Yes. We do plenty of work on the farms and estates around Stellenbosch, from cellar and pump electrics to outbuildings, cottages and three-phase supply. We understand that downtime during harvest is costly, so we plan the work around your season and your operation." },
        { q: "My house in Dorp Street is old and the wiring worries me. What should we do?", a: "A lot of the older homes around Dorp Street and the historic centre still run on wiring that is decades out of date and was never built for today's load. We inspect the whole installation, tell you honestly what is safe and what is not, and sort out rewiring or upgrades in a way that respects an older property." },
        { q: "My DB board keeps tripping since load shedding started. What should I do?", a: "This is common across Stellenbosch. The surges that hit when the power comes back on wear out older boards and their breakers. Call us and we will come out, check the board, and tell you whether a repair, an upgrade, or surge protection is the right fix." },
        { q: "I am selling my property in Stellenbosch and need a COC. How long does it take?", a: "If the wiring is already sound, we can often issue the COC on the same visit. If repairs are needed first, the time depends on the work. Call us early in your sale so we have room to sort things out before your transfer date." },
        { q: "Do you do work on student housing and rental properties in Stellenbosch?", a: "Yes. Stellenbosch has a huge number of student rentals around the university, and landlords need safe, compliant wiring and a valid COC. We handle fault finding, repairs, COCs and full installs for rental properties, and we are happy to work with letting agents and managers." },
        { q: "Do you install solar in Stellenbosch?", a: "Yes. The Winelands get strong sun for most of the year, so solar works very well here. We install solar with battery backup for homes, guesthouses, estates and farms, which is a big help during load shedding and on properties that sit far from a reliable supply. A site visit lets us recommend the right system." },
        { q: "Can you install air conditioning in my Stellenbosch home or business?", a: "Yes. We supply and install split units and inverter air conditioners for homes, offices, guesthouses and businesses across Stellenbosch, including the Technopark area. We are not tied to one brand, so we recommend the unit that suits your space and budget." },
        { q: "What parts of Stellenbosch do you cover?", a: "We cover all of Stellenbosch, including the town centre and Dorp Street, Dalsig, Mostertsdrift, Brandwacht, Die Boord, Paradyskloof, Welgevonden Estate, Universiteitsoord, Cloetesville, Idas Valley, Technopark, and the surrounding wine farms and estates." }
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
        "areaServed": ["Stellenbosch", "Dalsig", "Mostertsdrift", "Brandwacht", "Die Boord", "Paradyskloof", "Welgevonden Estate", "Technopark"],
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
        "mainEntity": stellenboschFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Stellenbosch | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Stellenbosch and the Winelands, including wine farms, estates and Technopark. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/stellenbosch" />

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
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Stellenbosch</span>
                        </>
                    }
                    subtitle="When the wiring in your old Dorp Street home needs attention, your wine farm needs work done on the cellar, or you want solar fitted on an estate property, you want an electrician who knows Stellenbosch and the Winelands."
                    image="/Location images/StellenboschWC-Aerial.webp"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Know Stellenbosch */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    We Are the Electricians Who Know Stellenbosch
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Stellenbosch is a town of very different worlds. There are the historic homes around Dorp Street and the centre, the family suburbs of Dalsig and Mostertsdrift, the student rentals packed around the university, the Technopark business hub, and the wine farms and estates spread out across the valley.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Each one needs something different. The older homes often run on wiring that is decades past its prime and was never built for the load a modern household puts on it. The farms and estates need proper three-phase work for cellars, pumps and outbuildings, and they cannot afford long downtime during harvest.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    On every kind of property, the surges that come with load shedding wear out boards and damage appliances. Fitting <Link href="/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection at the DB board</Link> is one of the simplest and most useful upgrades we recommend, whether it is a student flat or a working farm.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/ac_background_stellenbosch.webp"
                                    alt="EAR Engineering air conditioning and electrical work in Stellenbosch"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in Stellenbosch */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Electrical Work Across Stellenbosch and the Farms
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From a student flat in town to a working cellar on a wine farm, here is the electrical work we handle around Stellenbosch:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Three-Phase & Farm Electrical", icon: FaWrench, desc: "Cellars, pumps, irrigation and outbuildings on the wine farms need three-phase work done by people who know that harvest cannot wait. We plan the job around your season.", link: "/electrical-services" },
                                { title: "Heritage Home Rewiring", icon: FaScrewdriverWrench, desc: "Many of the old homes around Dorp Street still run on wiring from another era. We rewire and upgrade them with care, so they are safe for a modern household without losing their character.", link: "/electrical-services" },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "Load shedding surges wear out boards across town and out on the farms. We replace failing boards and fit surge protection to keep your equipment safe.", link: "/db-board-upgrades-and-repairs" },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "Whether it is a family home, a student rental or a farm, you need a valid COC to sell or let. We inspect, repair, and issue the certificate.", link: "/coc" },
                                { title: "Generators for Farms & Business", icon: FaCarBattery, desc: "Wine farms, guesthouses and Technopark offices count on us for generators and changeover switches that keep the power on through an outage.", link: "/generator-installation" }
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
                                Serving Every Corner of Stellenbosch
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From the town centre to the farms in the valley, we cover all of Stellenbosch. Here are some of the areas we work in often:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Town Centre & Dorp Street", desc: "Heritage homes, rewiring, COCs, commercial electrical" },
                                { name: "Dalsig", desc: "Residential installations, solar, DB board upgrades" },
                                { name: "Mostertsdrift", desc: "Home wiring, surge protection, repairs" },
                                { name: "Die Boord", desc: "Residential electrical, solar and aircon installs" },
                                { name: "Paradyskloof", desc: "Home installations, backup power, fault finding" },
                                { name: "Welgevonden Estate", desc: "Estate-friendly electrical work, solar, generators" },
                                { name: "Universiteitsoord & Student Rentals", desc: "Compliant wiring, COCs for landlords, repairs" },
                                { name: "Technopark", desc: "Commercial electrical, maintenance, generators, COCs" },
                                { name: "Wine Farms & Estates", desc: "Cellar electrics, three-phase, pumps, outbuildings" }
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
                                    Solar makes a lot of sense in the Winelands, and the farms get the most out of it. A wine farm draws a great deal of power and often sits far from a strong, steady supply, so a solar system keeps the pumps, cellars and farmhouse running. We also fit <Link href="/solar-installation" className="text-[#FFCA08] underline font-bold">solar with battery backup</Link> on the larger residential roofs in suburbs like Dalsig and Die Boord.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    The valley gets properly hot once summer sets in. We fit aircons for offices and businesses in Technopark, for guesthouses out on the wine estates, and for homes that need to stay cool through a Stellenbosch heatwave, choosing each unit to match the size of the room. Here is how our <Link href="/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> work is done.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Stellenbosch keeps us busy in very different ways: rewiring a century-old home near Dorp Street one day, sorting out three-phase supply on a wine farm the next. Alongside that we handle tripping boards, surge damage, student rental compliance and <Link href="/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> for property sales.
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
                                    Getting to Us from Stellenbosch
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is at 60 Abelia St, Somerset West, Cape Town, 7130, a short drive south of Stellenbosch:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the town centre:</strong> Take the R44 south through the Winelands toward Somerset West. We are around half an hour away.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Technopark:</strong> Join the R44 heading south and follow it straight down to Somerset West and Heldervue.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the wine farms:</strong> Most of the estates feed onto the R44 or the M12, both of which bring you toward Somerset West.</span>
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

                <FAQ faqs={stellenboschFaqs} />

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
