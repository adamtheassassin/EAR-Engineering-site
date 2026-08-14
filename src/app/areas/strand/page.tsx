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

export default function StrandAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const strandFaqs = [
        { q: "Are you actually close to Strand?", a: "Yes. Our office is at 60 Abelia St, Somerset West, Cape Town, 7130, which is right next door to Strand. We are a local team that lives and works in the Helderberg, so Strand is one of the areas we get to most often. We are not a national company sending someone from far away." },
        { q: "How quickly can you get to an electrical fault in Strand?", a: "Because we are only a few minutes from Strand, we can usually get to you fast. For urgent faults, call us on 021 855 4462 and we will come out as soon as we can. When our schedule allows, we attend emergencies on the same day." },
        { q: "My place is near the beach and things keep rusting and failing. Can you help?", a: "Yes, and this is one of the most common things we see in Strand. The salty sea air wears down electrical fittings, plugs, distribution boards and outdoor units faster than it does inland. We fit corrosion-resistant parts where it makes sense and check the spots that take the most punishment from the sea air." },
        { q: "My DB board keeps tripping since load shedding started. What should I do?", a: "Lots of homes in Strand have this problem. The power surges that hit when the grid switches back on put real strain on older boards and wear out the breakers. Give us a call and we will come out, look at the board, and tell you whether a repair, an upgrade, or surge protection is the right fix for your home." },
        { q: "I am selling my flat in Strand and need a COC. How long does it take?", a: "If the wiring is already in good shape, we can often issue the COC on the same visit. If something needs fixing first, the time depends on the work involved. Call us early in your sale so we have room to sort out any issues before your transfer date." },
        { q: "Do you install solar in Strand?", a: "Yes. Strand gets strong sun through most of the year, so a well set up solar system pays you back nicely and keeps your lights on through load shedding. We install solar with battery backup for both homes and businesses in the area. A quick site visit lets us recommend the right size system for you." },
        { q: "Can you install air conditioning in my Strand home or business?", a: "Yes. We supply and install split units and inverter air conditioners for homes, offices and shops across Strand. We are not tied to one brand, so we recommend the unit that actually suits your space and your budget." },
        { q: "Do you work on holiday flats and rental units in Strand?", a: "Yes. The Strand beachfront has a lot of holiday flats and rentals, and we handle plenty of work in these. We do fault finding, repairs, COCs for rentals and full installs, and we are happy to work in with building managers and body corporates." },
        { q: "What parts of Strand do you cover?", a: "We cover all of Strand, including the beachfront, Greenways, Rusthof, Broadlands, Onverwacht, Van Ryneveld, Strand North and Strand South, and the areas around Strand Halt, among others." },
        { q: "How do I get a quote for electrical work in Strand?", a: "Call us on 021 855 4462 or send us a message. We will set up a visit to your property and give you a clear price once we have seen what the job needs." }
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
        "areaServed": ["Strand", "Greenways", "Rusthof", "Broadlands", "Onverwacht", "Van Ryneveld", "Strand North", "Strand South"],
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
        "mainEntity": strandFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Strand | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Strand and the Helderberg. Based minutes away in Somerset West. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/strand" />

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
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Strand</span>
                        </>
                    }
                    subtitle="When your DB board keeps tripping in Greenways, you need a COC before you sell your beachfront flat, or you want solar on your home in Rusthof, you want an electrician who is already right around the corner in Strand."
                    image="/Location images/Strand_Western_Cape.webp"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Know Strand */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    We Are the Local Electricians Who Know Strand
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Strand is a real mix of places. You have the busy beachfront with its rows of holiday flats, the family suburbs of Rusthof and Broadlands, the newer homes going up around Greenways, and the older parts of town where some of the wiring has not been touched in decades.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Living by the sea looks great, but it is hard on your electrics. The salty air eats away at plugs, outdoor fittings, and DB boards faster than it does anywhere inland. We see corroded boards and failing outdoor units in Strand all the time, so we fit parts that hold up better against the sea air.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    On top of that, the surges that come with every load shedding cycle wear out older boards quickly. One of the most useful things we can do for a Strand home is fit <Link href="/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection at the DB board</Link> so a single spike does not take out your appliances.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/electrical installation job somerset west.webp"
                                    alt="EAR Engineering electrician working on an installation near Strand"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in Strand */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                What We Handle Around Strand
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From beachfront flats to family homes inland, here is the electrical work we take care of around Strand:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Installations & Wiring", icon: FaWrench, desc: "Wiring for new builds and renovations, from holiday flats on the beachfront to homes in Greenways. We pick fittings that cope with the damp, salty air close to the sea.", link: "/electrical-services" },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "Salt air and surges are a rough combination for boards near the coast. We replace corroded boards and worn breakers, then add surge protection so one spike does not cost you a fridge.", link: "/db-board-upgrades-and-repairs" },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "Selling or renting out a flat in Strand means you need a valid COC. We check the wiring, fix whatever fails, and hand you the certificate.", link: "/coc" },
                                { title: "Holiday Flat & Body Corporate Work", icon: FaHandshake, desc: "The beachfront is full of holiday lets and sectional title blocks. We do repairs, COCs and shared electrical work for owners, building managers and body corporates." },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "When a circuit dies or a board trips and won't reset, we trace the fault and put it right. We are only minutes away, so we reach you fast." }
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
                                Serving Every Corner of Strand
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Sitting just next door in Somerset West means we reach every part of Strand in minutes. Here are some of the areas we work in often:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Strand Beachfront", desc: "Holiday flats, rentals, COCs, fault finding and salt-resistant repairs" },
                                { name: "Greenways", desc: "Residential installations, solar, DB board upgrades" },
                                { name: "Rusthof", desc: "Home wiring, repairs, COC for property sales" },
                                { name: "Broadlands", desc: "DB board upgrades, surge protection, generators" },
                                { name: "Onverwacht", desc: "Residential electrical, fault finding, air conditioning" },
                                { name: "Van Ryneveld", desc: "Home installations, solar and backup power setups" },
                                { name: "Strand North", desc: "Residential and small commercial electrical work" },
                                { name: "Strand South", desc: "Beachside homes, COCs, solar and aircon installs" },
                                { name: "Strand Halt & Main Road", desc: "Shopfront and commercial electrical, maintenance, COCs" }
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
                                    Out near the sea, the real enemy of solar is not cloud, it is rust. Cheap mounting rails and clamps corrode within a few seasons of salt air, so we fit coastal-grade hardware that holds up on a beachfront roof. The flat roofs on so many Strand flats and holiday rentals suit a tidy panel layout, and we pair it with <Link href="/solar-installation" className="text-[#FFCA08] underline font-bold">battery backup</Link> so your lights stay on through load shedding.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Beachfront flats soak up the summer heat and hold it well into the evening. We fit split units and inverter aircons in homes, holiday lets and shopfronts along the Main Road, and we are happy to roll out matching units across a whole block for a body corporate. Take a look at how our <Link href="/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> work is done.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Living by the sea is hard on your wiring. A lot of our time in Strand goes into replacing plugs, fittings and boards that the salt air has eaten away, on top of the everyday tripping circuits, rewiring and <Link href="/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> people need when they sell.
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
                                    Getting to Us from Strand
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is at 60 Abelia St, Somerset West, Cape Town, 7130, only a short drive from Strand:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the Strand beachfront:</strong> Head up Beach Road and along Main Road toward Somerset West. We are roughly ten minutes away.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Greenways:</strong> Take Broadway Boulevard toward the N2, then into Somerset West. It is a quick, easy drive.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Rusthof and Broadlands:</strong> Follow Broadlands Road toward Somerset West and on to Heldervue. We are a few minutes from there.</span>
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

                <FAQ faqs={strandFaqs} />

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
