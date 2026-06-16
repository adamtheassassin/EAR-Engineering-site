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

export default function GordonsBayAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const gordonsBayFaqs = [
        { q: "Are you actually close to Gordon's Bay?", a: "Yes. Our office is at 60 Abelia St, Somerset West, Cape Town, 7130, which is a short drive from Gordon's Bay. We are a local Helderberg team, so Gordon's Bay is one of the areas we cover all the time. We are not a national company sending someone from far away." },
        { q: "How quickly can you get to an electrical fault in Gordon's Bay?", a: "We are only a few minutes up the road in Somerset West, so we can usually get to Gordon's Bay quickly. For urgent faults, call us on 021 855 4462 and we will come out as soon as we can. When our schedule allows, we attend emergencies on the same day." },
        { q: "My home is close to the sea and the wiring keeps failing. What is going on?", a: "This is one of the most common problems we see in Gordon's Bay. The salty sea air slowly eats away at plugs, outdoor fittings, distribution boards and aircon units, especially the homes higher up that catch the wind off the water. We fit parts that stand up better to the sea air and check the areas that take the most strain." },
        { q: "My house is up on the mountainside and tricky to work on. Is that a problem?", a: "Not at all. A lot of Gordon's Bay homes sit on steep slopes with split levels and outdoor runs that need a bit of care. We work on these properties often and know how to handle the access and the longer cable runs that come with them." },
        { q: "My DB board keeps tripping since load shedding started. What should I do?", a: "Many Gordon's Bay homes have this issue. The surges that hit when the power comes back on wear out older boards and their breakers. Call us and we will come out, check the board, and tell you whether a repair, an upgrade, or surge protection is the right fix." },
        { q: "I am selling my property in Gordon's Bay and need a COC. How long does it take?", a: "If the wiring is already sound, we can often issue the COC on the same visit. If repairs are needed first, the time depends on the work. Call us early in your sale so we have room to sort things out before your transfer date." },
        { q: "Do you install solar in Gordon's Bay?", a: "Yes. Gordon's Bay gets plenty of sun, so a properly sized solar system cuts your bills and keeps your home running through load shedding. We install solar with battery backup for homes and businesses, and a quick site visit lets us recommend the right system for you." },
        { q: "Can you install air conditioning in my Gordon's Bay home or business?", a: "Yes. We supply and install split units and inverter air conditioners for homes, guesthouses and businesses across Gordon's Bay. We are not tied to one brand, so we recommend the unit that suits your space and budget." },
        { q: "Do you work on guesthouses and holiday homes in Gordon's Bay?", a: "Yes. Gordon's Bay has a lot of holiday homes and guesthouses around the harbour and Bikini Beach, and we do plenty of work in these. We handle fault finding, repairs, COCs, solar and full installs, and we are happy to work in with owners and managers." },
        { q: "What parts of Gordon's Bay do you cover?", a: "We cover all of Gordon's Bay, including the harbour and Bikini Beach areas, Harbour Island, Gordon's Bay Country Estate, Mountainside, Sunny Cove, Sea View and Temperance Town, among others." }
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
        "areaServed": ["Gordon's Bay", "Harbour Island", "Gordon's Bay Country Estate", "Mountainside", "Sunny Cove", "Sea View", "Temperance Town", "Bikini Beach"],
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
        "mainEntity": gordonsBayFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Gordon&apos;s Bay | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Gordon's Bay and the Helderberg. Based nearby in Somerset West. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/gordons-bay" />

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
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Gordon&apos;s Bay</span>
                        </>
                    }
                    subtitle="When your DB board keeps tripping in Mountainside, you need a COC before you sell your home near the harbour, or you want solar fitted on a mountainside property, you want an electrician who already knows Gordon's Bay."
                    image="/Location images/gordons bay.webp"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Know Gordon's Bay */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    We Are the Local Electricians Who Know Gordon&apos;s Bay
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Gordon&apos;s Bay packs a lot into a small town. There is the busy harbour and Bikini Beach, the homes climbing up the Mountainside with their big sea views, the newer builds at the country estate, and the older cottages around Temperance Town that have been there for generations.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    All that sea air comes at a cost for your electrics. Salt slowly wears down plugs, outdoor fittings, and DB boards, and the homes higher up the slope catch the worst of the wind off the water. We see corroded boards and failing outdoor units here often, so we fit parts that hold up better against the coast.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    The steep mountainside plots bring their own quirks too, with split levels and long outdoor cable runs. Add in the surges from each load shedding cycle, and fitting <Link href="/electrical-services/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection at the DB board</Link> becomes one of the smartest things you can do for a Gordon&apos;s Bay home.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/solar installation with panels.webp"
                                    alt="EAR Engineering solar installation on a home near Gordon's Bay"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in Gordon's Bay */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                The Work We Do in Gordon&apos;s Bay
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Whether your place is up the slope or down by the harbour, here is the electrical work we handle around Gordon&apos;s Bay:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Mountainside Installations & Wiring", icon: FaWrench, desc: "New builds, renovations and additions, including the split-level homes on the Mountainside that need longer, carefully planned cable runs to reach every room.", link: "/electrical-services" },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "Between the salt air off the bay and the surges from load shedding, boards here take a beating. We swap out tired boards and add surge protection to keep your appliances safe.", link: "/electrical-services/db-board-upgrades-and-repairs" },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "A valid COC is a must before you sell or rent in Gordon's Bay. We inspect the installation, repair anything that fails the check, and issue the certificate.", link: "/electrical-services/coc" },
                                { title: "Generator & Backup Power", icon: FaCarBattery, desc: "Homes at the country estate and businesses near the harbour rely on us for generators and changeover switches that keep things running when the grid drops.", link: "/electrical-services/generator-installation" },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "A dead circuit on a split-level mountainside home can be tricky to track down. We find the fault, fix it, and get there quickly from just up the road." }
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
                                Serving Every Corner of Gordon&apos;s Bay
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Being just up the road in Somerset West means we reach every part of Gordon&apos;s Bay quickly. Here are some of the areas we work in often:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Harbour & Bikini Beach", desc: "Guesthouses, holiday homes, COCs and salt-resistant repairs" },
                                { name: "Harbour Island", desc: "Residential electrical, fault finding, air conditioning" },
                                { name: "Gordon's Bay Country Estate", desc: "Estate-friendly electrical work, solar, generators" },
                                { name: "Mountainside", desc: "Split-level homes, long cable runs, DB board upgrades" },
                                { name: "Sunny Cove", desc: "Home installations, solar and backup power setups" },
                                { name: "Sea View", desc: "Residential wiring, surge protection, repairs" },
                                { name: "Temperance Town", desc: "Older homes, rewiring, COC for property sales" },
                                { name: "Hendon Park", desc: "Residential and small commercial electrical work" },
                                { name: "Town Centre", desc: "Shopfront and commercial electrical, maintenance, COCs" }
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
                                    The tricky part of solar in Gordon&apos;s Bay is the roofs. So many homes sit on the steep Mountainside slopes, and angling the panels to catch the afternoon sun safely takes proper planning and the right mounting. We have done plenty of these climbs, and we pair the panels with <Link href="/solar/solar-installation" className="text-[#FFCA08] underline font-bold">battery backup</Link> so the home keeps running when the power drops.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    The homes that catch the afternoon sun off the bay heat up quickly once summer arrives. We fit split units in family homes, quieter units for the guesthouses near Bikini Beach, and inverter aircons for offices, each one sized to cool the room without pushing your bill up. Here is more on our <Link href="/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> work.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Two things keep us busy in Gordon&apos;s Bay: the sea air that corrodes fittings and boards, and the steep plots that call for careful, longer cable runs. Alongside that we handle tripping boards, surge damage, full rewiring and <Link href="/electrical-services/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> for property sales.
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
                                    Getting to Us from Gordon&apos;s Bay
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is at 60 Abelia St, Somerset West, Cape Town, 7130, a short drive from Gordon&apos;s Bay:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the harbour:</strong> Head along Beach Road and the R44 toward Strand and Somerset West. We are about fifteen minutes away.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Mountainside:</strong> Drop down to the R44 and follow it through Strand toward Somerset West. It is a straightforward drive.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the country estate:</strong> Take Sir Lowry&apos;s Pass Road toward Somerset West and on to Heldervue. We are a few minutes from there.</span>
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

                <FAQ faqs={gordonsBayFaqs} />

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
