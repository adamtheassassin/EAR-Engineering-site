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

export default function DurbanvilleAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const durbanvilleFaqs = [
        { q: "Do you really cover Durbanville?", a: "Yes. Our office is at 60 Abelia St, Somerset West, Cape Town, 7130, and we regularly take on work in Durbanville and the northern suburbs for homes, estates and businesses. We are a registered Cape Town team, not a national company sending someone from far away." },
        { q: "How quickly can you get to Durbanville for a fault?", a: "Durbanville is around forty minutes from our base, so we book visits in advance where we can. For urgent faults, call us on 021 855 4462 and we will arrange to get someone out to you as soon as possible." },
        { q: "My DB board keeps tripping since load shedding started. What should I do?", a: "This is very common in Durbanville. The surges that hit when the power comes back on wear out older boards and their breakers. Call us and we will come out, check the board, and tell you whether a repair, an upgrade, or surge protection is the right fix." },
        { q: "I am selling my home in Durbanville and need a COC. How long does it take?", a: "If the wiring is already sound, we can often issue the COC on the same visit. If repairs are needed first, the time depends on the work. Call us early in your sale so we have room to sort things out before transfer." },
        { q: "Do you work in the lifestyle estates around Durbanville?", a: "Yes. We work in estates including Graanendal, Clara Anna Fontein and the developments around Sonstraal and Vierlanden. We are used to the access and compliance requirements that most estates set for contractors." },
        { q: "Do you install solar in Durbanville?", a: "Yes. The family homes and newer estates in Durbanville tend to have generous roofs, which suits solar well. A system with battery backup keeps your home running through load shedding and brings down a bill that climbs every year. A site visit lets us recommend the right size system." },
        { q: "Can you install air conditioning in my Durbanville home or business?", a: "Yes. The northern suburbs get hot, dry summers well away from the sea breeze. We fit split units and inverter aircons for homes, offices and shops, sized to cool the space without pushing your bill up. We recommend the unit that suits you." },
        { q: "Do you do commercial electrical work in Durbanville?", a: "Yes. We handle electrical work for offices, shops and commercial premises around the Durbanville town centre and the surrounding business areas, including maintenance, generators and COCs." },
        { q: "What parts of Durbanville do you cover?", a: "We cover all of Durbanville, including Durbanville Central, Sonstraal and Sonstraal Heights, Vierlanden, Eversdal, Kenridge, Pinehurst, Aurora, the lifestyle estates, and the wine farms up in the Tygerberg hills." },
        { q: "How do I get a quote for electrical work in Durbanville?", a: "Call us on 021 855 4462 or send us a message. We will arrange a visit to your property and give you a clear price once we have seen what the job needs." }
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
        "areaServed": ["Durbanville", "Sonstraal", "Vierlanden", "Eversdal", "Kenridge", "Pinehurst", "Aurora", "Graanendal"],
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
        "mainEntity": durbanvilleFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Durbanville | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Durbanville and the northern suburbs, for homes, estates and businesses. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/durbanville" />

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
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Durbanville</span>
                        </>
                    }
                    subtitle="When your DB board keeps tripping in Sonstraal, you need a COC before you sell in Vierlanden, or you want solar on your family home, you want a registered electrician who covers Durbanville and the northern suburbs."
                    image="/Location images/Durbanville.webp"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Know Durbanville */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    Electricians Who Cover Durbanville
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Durbanville is one of the most established corners of the northern suburbs. It runs from older family homes in Sonstraal and Eversdal to the newer lifestyle estates going up around Vierlanden, a busy town centre, and the wine farms tucked into the Tygerberg hills.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    The older suburbs are where we spend a lot of our time. Homes that were wired decades ago are now running pools, ovens, geysers and aircons all at once, and the original board was never meant to carry that. When it starts tripping, that is usually the sign it needs attention.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    On top of that, the surges that come with every load shedding cycle wear out boards across the area. Fitting <Link href="/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection at the DB board</Link> is one of the most practical upgrades we recommend for any Durbanville home.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/db_board_hero.png"
                                    alt="EAR Engineering electrician upgrading a DB board in Durbanville"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in Durbanville */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Electrical Work Across Durbanville
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From an established family home to a new estate build or a shopfront in town, here is the electrical work we handle around Durbanville:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Installations & Wiring", icon: FaWrench, desc: "New builds, renovations and additions, from estate homes in Vierlanden to commercial premises around the Durbanville town centre.", link: "/electrical-services" },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "Older homes here often outgrow the board they were built with. We upgrade boards that keep tripping and add surge protection to keep your appliances safe.", link: "/db-board-upgrades-and-repairs" },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "You need a valid COC to sell or rent a property in Durbanville. We inspect the wiring, fix whatever fails, and issue the certificate.", link: "/coc" },
                                { title: "Generator Installations", icon: FaCarBattery, desc: "For family homes and businesses around Durbanville, we install generators and changeover switches so you keep your power through an outage.", link: "/generator-installation" },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "When a circuit dies or a board will not reset, we trace the fault and put it right, so your home is back to normal as quickly as possible." }
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
                                Serving Every Corner of Durbanville
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From the older suburbs to the new estates and the wine farms on the hills, here are some of the areas we work in around Durbanville:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Durbanville Central", desc: "Homes, shops, offices, COCs and commercial electrical" },
                                { name: "Sonstraal & Sonstraal Heights", desc: "Residential installations, solar, DB board upgrades" },
                                { name: "Vierlanden", desc: "Estate homes, new builds, solar and backup power" },
                                { name: "Eversdal", desc: "Home wiring, repairs, COC for property sales" },
                                { name: "Kenridge", desc: "Residential electrical, surge protection, generators" },
                                { name: "Pinehurst", desc: "Home installations, solar and aircon installs" },
                                { name: "Aurora", desc: "Residential wiring, fault finding, repairs" },
                                { name: "Graanendal & Clara Anna Fontein", desc: "Estate-friendly electrical work, solar, generators" },
                                { name: "Durbanville Hills Wine Farms", desc: "Cellar electrics, three-phase, pumps, outbuildings" }
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
                                    The family homes and newer estates in Durbanville tend to have generous roofs, which makes them well suited to solar. A system with battery backup keeps your home running through load shedding and brings down a bill that climbs every year. We size and fit <Link href="/solar-installation" className="text-[#FFCA08] underline font-bold">solar systems</Link> for homes and businesses across the northern suburbs.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    The northern suburbs get hot, dry summers, well away from the sea breeze that cools the coast. We fit split units and inverter aircons for homes, offices and shops around Durbanville, each one sized to cool the space without running your bill up. Here is more on our <Link href="/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> work.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Durbanville runs from established family suburbs to new lifestyle estates, a busy commercial centre, and the wine farms up in the Tygerberg hills. Our registered electricians handle home rewiring, estate installs, commercial work, surge damage and <Link href="/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> for property sales.
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
                                    Getting to Us from Durbanville
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is at 60 Abelia St, Somerset West, Cape Town, 7130. From Durbanville it is a clear run down the highways:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Durbanville Central:</strong> Take the R300 south, join the N2 toward the Helderberg, and follow it to Somerset West. Around forty minutes.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Eversdal and Kenridge:</strong> Pick up the N1, link onto the R300, then the N2 down toward Somerset West.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From the estates:</strong> Most feed onto the R300, which connects straight to the N2 and on to the Helderberg.</span>
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

                <FAQ faqs={durbanvilleFaqs} />

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
