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

export default function FranschhoekAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const franschhoekFaqs = [
        { q: "Do you really cover Franschhoek?", a: "Yes. Our office is at 60 Abelia St, Somerset West, Cape Town, 7130, and we travel out to the Franschhoek valley regularly for homes, wine farms, estates and hospitality clients. We are a Helderberg team that knows the Winelands well, not a national company sending someone from far away." },
        { q: "How quickly can you get to Franschhoek for a fault?", a: "Franschhoek is around forty minutes from our base, so we plan visits in advance where we can. For urgent faults, call us on 021 855 4462 and we will get someone out to you as soon as we can." },
        { q: "We run a guesthouse and cannot have the power tripping mid-stay. Can you help?", a: "Yes. We do a lot of work for guesthouses, hotels and restaurants in Franschhoek. We upgrade boards that are struggling under the load, fit surge protection, and install generators or solar with battery backup so your guests never notice when the grid goes down." },
        { q: "My home in the valley is an older Cape Dutch property. Is the wiring a worry?", a: "Often, yes. Many of the older homes around the village still run on wiring that was never built for the demands of a modern household. We inspect the whole installation, tell you honestly what is safe, and handle rewiring or upgrades in a way that respects an older building." },
        { q: "Do you do work on wine farms and estates around Franschhoek?", a: "Yes. We handle cellar electrics, pumps, three-phase supply, outbuildings and cottages on the farms and estates in the valley. We understand that harvest cannot wait, so we plan the work around your season." },
        { q: "I am selling a property in Franschhoek and need a COC. How long does it take?", a: "If the wiring is already sound, we can often issue the COC on the same visit. If repairs are needed first, the time depends on the work. Call us early in your sale so we have room to sort things out before transfer." },
        { q: "Do you install solar in Franschhoek?", a: "Yes. The valley gets strong sun for most of the year, so solar works very well here. We install solar with battery backup for homes, guesthouses, restaurants and wine farms, which keeps your power steady and your bills down. A site visit lets us recommend the right system." },
        { q: "Can you install air conditioning in my Franschhoek home or business?", a: "Yes. We fit quiet, efficient units for guest rooms and restaurants, climate control for tasting rooms, and split units for homes across the valley. We are not tied to one brand, so we recommend what suits the space and the budget." },
        { q: "What parts of Franschhoek do you cover?", a: "We cover the whole valley, including Franschhoek village and Main Road, Huguenot, Groendal, La Motte, Wemmershoek, Dieu Donne, Pearl Valley, and the wine farms toward Boschendal and the Berg River." },
        { q: "How do I get a quote for electrical work in Franschhoek?", a: "Call us on 021 855 4462 or send us a message. We will arrange a visit to your property and give you a clear price once we have seen what the job needs." }
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
        "areaServed": ["Franschhoek", "Huguenot", "Groendal", "La Motte", "Wemmershoek", "Dieu Donne", "Pearl Valley", "Boschendal"],
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
        "mainEntity": franschhoekFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Franschhoek | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Franschhoek and the Winelands, for homes, wine farms, estates and hospitality. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/franschhoek" />

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
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Franschhoek</span>
                        </>
                    }
                    subtitle="When your guesthouse needs backup power before a busy weekend, an old village home needs rewiring, or your wine farm needs work done on the cellar, you want an electrician who knows Franschhoek and the Winelands."
                    image="/Location images/franschhoek.webp"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Know Franschhoek */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    We Are the Electricians Who Know Franschhoek
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Franschhoek lives on hospitality and wine. The valley is full of guesthouses, hotels and restaurants along Main Road, working wine farms spread out toward Boschendal, and high-end estate homes tucked in among the vines. Each of them leans hard on a power supply that simply has to keep working.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    A restaurant cannot have the power cut out during service, and a guesthouse cannot leave its visitors in the dark. That is a different kind of pressure to a normal home, and it shapes the way we plan the work, from backup power to boards that can take the load.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    Many of the older homes around the village still run on wiring from a different time, and the surges from each load shedding cycle wear out boards across the valley. Fitting <Link href="/electrical-services/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection at the DB board</Link> is one of the simplest things we do to protect a property here.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/solar_commercial.png"
                                    alt="EAR Engineering commercial solar installation on an estate near Franschhoek"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in Franschhoek */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Electrical Work Across the Franschhoek Valley
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From a village cottage to a hotel kitchen or a working cellar, here is the electrical work we handle around Franschhoek:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Installations & Wiring", icon: FaWrench, desc: "New builds, restaurant fit-outs and guesthouse upgrades, wired to handle the steady demand of a busy hospitality property.", link: "/electrical-services" },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "A guesthouse or restaurant cannot afford a board that trips mid-service. We upgrade tired boards and add surge protection so your power stays steady.", link: "/electrical-services/db-board-upgrades-and-repairs" },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "Selling an estate home or letting out a guest cottage in Franschhoek means you need a valid COC. We inspect, repair, and issue it.", link: "/electrical-services/coc" },
                                { title: "Generator & Backup Power", icon: FaCarBattery, desc: "Restaurants, hotels and wine farms rely on us for generators and changeover switches that keep the kitchen and cellar running through an outage.", link: "/electrical-services/generator-installation" },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "When something trips on a busy weekend in the valley, we trace the fault and get you back up and running quickly." }
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
                                Serving the Whole Franschhoek Valley
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From the village to the farms at the far end of the valley, here are some of the areas we work in around Franschhoek:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Franschhoek Village & Main Road", desc: "Guesthouses, restaurants, COCs and heritage rewiring" },
                                { name: "Huguenot", desc: "Residential installations, solar, DB board upgrades" },
                                { name: "Groendal", desc: "Home wiring, repairs, COC for property sales" },
                                { name: "La Motte", desc: "Estate homes, solar, backup power" },
                                { name: "Wemmershoek", desc: "Rural and residential electrical, fault finding" },
                                { name: "Dieu Donne", desc: "Hillside homes, solar and aircon installs" },
                                { name: "Pearl Valley", desc: "Estate-friendly electrical work, solar, generators" },
                                { name: "Boschendal & Wine Farms", desc: "Cellar electrics, three-phase, pumps, outbuildings" },
                                { name: "Berg River Farms", desc: "Agricultural electrical, backup power, maintenance" }
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
                                    Franschhoek runs on hospitality, and a hotel or restaurant uses power right through the day. A solar system with battery backup keeps the bills down and keeps service going when the grid drops, which matters a great deal when you have guests booked in. We fit <Link href="/solar/solar-installation" className="text-[#FFCA08] underline font-bold">solar systems</Link> on village properties, wine farms and estate homes across the valley.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Summers in the valley get hot, and guests expect their rooms to stay cool and quiet. We fit efficient units for guesthouses and hotels, climate control for restaurants and tasting rooms, and split units for homes. Here is more on our <Link href="/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> work.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    The valley mixes old Cape Dutch homes with high-end estates and working wine farms. Our registered electricians handle careful rewiring of older buildings, full installs on new estate homes, three-phase work for cellars, and <Link href="/electrical-services/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> for property sales.
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
                                    Getting to Us from Franschhoek
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is at 60 Abelia St, Somerset West, Cape Town, 7130. From the Franschhoek valley it is a straightforward drive through the Winelands:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the village:</strong> Take the R45 and Helshoogte Pass toward Stellenbosch, then the R44 south to Somerset West. Around forty minutes.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Pearl Valley:</strong> Join the R45 toward Paarl, pick up the N1 and then the R44 down to Somerset West.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the wine farms:</strong> Most of the estates feed onto the R45, which connects you toward Stellenbosch and Somerset West.</span>
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

                <FAQ faqs={franschhoekFaqs} />

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
