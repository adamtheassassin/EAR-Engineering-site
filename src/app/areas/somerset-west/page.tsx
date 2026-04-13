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
    FaClockRotateLeft,
    FaHandshake,
    FaLocationDot,
    FaHouseChimney,
    FaCarBattery
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function SomersetWestAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const somersetFaqs = [
        { q: "Are you actually based in Somerset West?", a: "Yes. Our office is on Abelia Street in Heldervue, Somerset West. We are not a national company dispatching contractors from elsewhere. Our team lives and works in the Helderberg and Somerset West is our primary area." },
        { q: "How quickly can you respond to an electrical fault in Somerset West?", a: "Because we are based in Heldervue, we can reach most parts of Somerset West quickly. For urgent faults, call us directly on 021 855 4462 and we will get to you as fast as we can. We offer same-day attendance for emergencies when our schedule allows." },
        { q: "Do you work in the secure estates around Somerset West?", a: "Yes. We work regularly in estates including Sitari Country Estate, Erinvale Golf Estate, Croydon Vineyard, Paardevlei and others across Somerset West. We are familiar with the access and compliance requirements that most estates have for contractors." },
        { q: "My DB board keeps tripping since load shedding started. What should I do?", a: "This is a very common problem in Somerset West. Repeated load shedding cycles and the power surges that happen when the grid is restored put strain on older DB boards and can cause breakers to fail. Call us and we will come out, assess the board, and tell you whether a repair, upgrade or surge protection installation is the right solution." },
        { q: "I am selling my property in Somerset West and need a COC. How long does it take?", a: "For straightforward properties where the installation is already compliant, we can often issue the COC on the same visit. If repairs are needed first, the timeline depends on what is required. Call us early in your sale process so we have enough time to work around any transfer deadline." },
        { q: "Do you install solar systems in Somerset West?", a: "Yes. Somerset West is an excellent area for solar given the sunshine hours in the Helderberg. We install hybrid solar systems with battery backup for homes and businesses across the area. A site visit gives us the information needed to recommend the right system for your property." },
        { q: "Can you install air conditioning in my Somerset West home or office?", a: "Yes. We install split unit and inverter air conditioners for residential and commercial clients across Somerset West. We are brand-neutral and recommend the right unit for your space and budget." },
        { q: "Do you work on commercial properties in Somerset West?", a: "Yes. We handle electrical work for commercial and retail properties across Somerset West, including around the Somerset Mall precinct, Waterstone Village, Techno Park and the Main Road commercial strip. We also have a long track record of working with property management companies in the area." },
        { q: "What suburbs of Somerset West do you cover?", a: "We cover all of Somerset West, including Heldervue, Parel Vallei, Heritage Park, Sitari Country Estate, Erinvale, Paardevlei, Somerset Ridge, Schonenberg, Croydon, Firgrove, Sir Lowry's Pass Village and Somerset West Central, among others." },
        { q: "How do I get a quote for electrical work in Somerset West?", a: "Call us on 021 855 4462 or send us a message. We will arrange a visit to your property and give you a clear quote once we have seen what the job involves." }
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
        "url": "https://earengineering.co.za",
        "currenciesAccepted": "ZAR",
        "areaServed": ["Somerset West", "Heldervue", "Parel Vallei", "Heritage Park", "Sitari Country Estate", "Erinvale", "Paardevlei", "Somerset Ridge"],
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
        "mainEntity": somersetFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Somerset West | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Somerset West and the Helderberg. Based in Heldervue. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/somerset-west" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Get a Quote"
                mobileCtaIcon={<FaLocationDot className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Somerset West</span>
                        </>
                    }
                    subtitle="Whether your DB board is tripping in Parel Vallei, you need a COC before a property transfer in Erinvale, or you are looking to install solar on your home in Heldervue, you need an electrician who actually knows Somerset West."
                    image="/Location images/Helderberg_Mountain_in_Somerset_West.webp"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Know Somerset West */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    Local Electricians Who Know Somerset West
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Somerset West is not one neighbourhood. It covers more than 65 suburbs, from the upmarket security estates of Sitari Country Estate and Croydon Vineyard to the established family suburbs of Heritage Park and Somerset Ridge, the bustling retail precinct around Somerset Mall, and the wine estate properties stretching toward Vergelegen and Lourensford.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Older suburbs like Heldervue and Firgrove often have electrical installations that have not been updated in decades. Many homes in these areas are still running on DB boards that were installed when the household had a fraction of today's electrical load.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    The Somerset West City Improvement District has flagged power surge damage as one of the most common electrical complaints in the area, particularly in homes that do not have <Link href="/services/electrical-services/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection fitted at the DB board</Link>. It is one of the most practical upgrades we recommend for any Somerset West home.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/somerset_van.png"
                                    alt="EAR Engineering van parked in Heldervue, Somerset West"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in SW */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Electrical Services We Offer in Somerset West
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We cover the full range of electrical work for residential and commercial clients across Somerset West:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Installations & Wiring", icon: FaWrench, desc: "New builds, renovations and additions across Somerset West, from townhouses in Paardevlei to commercial fit-outs in the Techno Park." },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "Outdated boards are a common issue in Somerset West's older suburbs. If your board keeps tripping, we assess and fix it properly." },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "A valid COC is a legal requirement if you are selling or renting a property in Somerset West. We inspect, repair, and issue the certificate.", link: "/services/electrical-services/coc" },
                                { title: "Generator Installations", icon: FaCarBattery, desc: "For homes in Heritage Park and businesses near Waterstone Village, we install generators and changeover systems for reliable backup power." },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "We offer fault finding and emergency response across Somerset West, with fast turnaround times because we are already based in the area." }
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
                                Serving Every Corner of Somerset West
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Our Heldervue base puts us within easy reach of every part of Somerset West. Here are some of the areas we work in regularly:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Heldervue (Our Base)", desc: "Residential electrical, DB boards, solar, COCs" },
                                { name: "Parel Vallei", desc: "Residential installations, fault finding, COC for property sales" },
                                { name: "Heritage Park", desc: "DB board upgrades, surge protection, generators" },
                                { name: "Sitari Country Estate", desc: "Estate-compliant electrical work, solar, air conditioning" },
                                { name: "Erinvale Golf Estate", desc: "High-end residential electrical, solar systems" },
                                { name: "Paardevlei", desc: "Residential and commercial electrical work" },
                                { name: "Schonenberg", desc: "Residential installations, generator and solar setups" },
                                { name: "Techno Park & Audas", desc: "Commercial electrical, maintenance, COC certificates" },
                                { name: "Firgrove", desc: "Residential and rural electrical work" }
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
                                    Somerset West sits in one of the best locations in the country for solar power. The Helderberg's sunshine hours are consistently high, which means a well-designed solar system produces energy reliably and delivers strong returns. We install <Link href="/services/solar-installation" className="text-[#FFCA08] underline font-bold">solar systems with battery backup</Link> to help you reduce bills and protect against load shedding.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Somerset West summers are warm and increasingly hot. Whether you need a split unit installed in a Parel Vallei home, an inverter air conditioner for an office in Waterstone Village, or a full setup for a guesthouse, our <Link href="/services/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> team supplies, installs and maintains systems that suit your budget.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    From modern estates in Sitari to decades-old properties in Heldervue, our registered electricians cover all of Somerset West. We handle everything from tripping DB boards and power surges to wiring new builds and issuing <Link href="/services/electrical-services/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> for property sales.
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
                                    Getting to Us from Somerset West
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is located at Abelia Street, Heldervue. We are easy to reach from all parts of Somerset West:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Somerset Mall:</strong> Head along Main Road toward Strand, turn into Heldervue. We are a short drive from the mall.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Parel Vallei:</strong> Take Victoria Road toward Heldervue. We are approximately five minutes away.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Sitari Country Estate:</strong> Take Lourens River Road toward Somerset West central. Heldervue is a straightforward drive from the R44.</span>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <a href="https://maps.google.com/?q=Abelia+St,+Heldervue,+Cape+Town,+7130" target="_blank" rel="noreferrer" className="inline-block bg-[#015CAB] hover:bg-[#01418a] text-white px-6 py-3 rounded-xl font-bold shadow-sm transition-colors">
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full h-[400px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2977759882205!2d18.8252277!3d-34.061882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc47cfebd0b955%3A0xc6cb5aeb3c2c1a6b!2sAbelia%20St%2C%20Heldervue%2C%20Cape%20Town%2C%207130%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1714470000000!5m2!1sen!2sus" 
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

                <FAQ faqs={somersetFaqs} />

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
