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

export default function PaarlAreaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const paarlFaqs = [
        { q: "Do you really cover Paarl?", a: "Yes. Our office is at 60 Abelia St, Somerset West, Cape Town, 7130, and we work in Paarl regularly for homes, farms, packhouses and businesses. We are a Helderberg team that knows the Boland well, not a national company sending someone from far away." },
        { q: "How quickly can you get to Paarl for a fault?", a: "Paarl is around thirty-five minutes from our base, so we plan visits ahead where we can. For urgent faults, call us on 021 855 4462 and we will get someone out to you as soon as we can." },
        { q: "We run a packhouse and cannot lose power to our cold storage. Can you help?", a: "Yes. We do a lot of work for farms and packhouses in Paarl. We install generators and changeover switches, fit solar with battery backup, and make sure your boards and three-phase supply can carry the load, so cold storage and production keep running when the grid drops." },
        { q: "Do you do three-phase and industrial electrical work?", a: "Yes. A lot of Paarl runs on three-phase, from farm pumps and motors to packhouse and factory equipment. We handle three-phase supply, motor and pump work, and commercial installs, on top of everyday home wiring." },
        { q: "My DB board keeps tripping since load shedding started. What should I do?", a: "This is common across Paarl. The surges that hit when the power comes back on wear out older boards and their breakers. Call us and we will come out, check the board, and tell you whether a repair, an upgrade, or surge protection is the right fix." },
        { q: "I am selling my property in Paarl and need a COC. How long does it take?", a: "If the wiring is already sound, we can often issue the COC on the same visit. If repairs are needed first, the time depends on the work. Call us early in your sale so we have room to sort things out before transfer." },
        { q: "Do you install solar in Paarl?", a: "Yes. Paarl gets long, hot, sunny days, which makes it strong for solar. The big roofs on farm sheds and packhouses are ideal, and we also fit systems on homes across the suburbs. A solar system with battery backup cuts your bills and keeps you running through load shedding." },
        { q: "Can you install air conditioning in my Paarl home or business?", a: "Yes. Paarl summers are some of the hottest in the Cape. We fit split units and inverter aircons for homes, offices and shops, and we are comfortable with larger setups for commercial premises. We recommend the unit that suits the space and the budget." },
        { q: "What parts of Paarl do you cover?", a: "We cover all of Paarl, including Paarl Central and Main Street, Courtrai, Northern Paarl, Southern Paarl, Klein Parys, Denneburg, Val de Vie and Boschenmeer estates, and the surrounding farms and packhouses." },
        { q: "How do I get a quote for electrical work in Paarl?", a: "Call us on 021 855 4462 or send us a message. We will arrange a visit to your property and give you a clear price once we have seen what the job needs." }
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
        "areaServed": ["Paarl", "Courtrai", "Northern Paarl", "Southern Paarl", "Klein Parys", "Denneburg", "Val de Vie", "Boschenmeer"],
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
        "mainEntity": paarlFaqs.map(faq => ({
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

            <title>Electrical, Solar & Aircon Services in Paarl | EAR Engineering</title>
            <meta name="description" content="EAR Engineering provides electrical, solar and air conditioning services across Paarl and the Boland, for homes, farms, packhouses and businesses. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/areas/paarl" />

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
                            Electrical, Solar and Air Conditioning Services in <span className="text-[#FFCA08]">Paarl</span>
                        </>
                    }
                    subtitle="When your packhouse needs reliable backup power, a farm needs three-phase work on its pumps, or you need a COC before selling your home, you want an electrician who understands how Paarl really works."
                    image="/Location images/paarl-touring.webp"
                    ctaText="Contact EAR Engineering"
                    ctaIcon={<FaLocationDot className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Local Electricians Who Know Paarl */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    We Are the Electricians Who Know Paarl
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Paarl is a working town. Around its homes and long Main Street sit fruit farms, wine cellars, packhouses and light industry, and a lot of that runs on three-phase power and heavier equipment than you find in a normal house.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    That changes what an electrician needs to handle here. A tripping circuit in a packhouse during the picking season, or a pump that will not start on a farm, costs real money by the hour. We plan our work around keeping these operations running, not just fixing the immediate fault.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    The older suburbs carry their own issues too, with boards that have not kept up with the modern household, and the surges from load shedding wear them out faster. Fitting <Link href="/db-board-upgrades-and-repairs" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">surge protection at the DB board</Link> is one of the most useful upgrades we do, whether it is a home or a warehouse.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/electrical work.webp"
                                    alt="EAR Engineering electrician working on a commercial installation in Paarl"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services We Offer in Paarl */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Electrical Work Across Paarl
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From a family home to a farm pump or a packhouse line, here is the electrical work we handle around Paarl:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Installations & Wiring", icon: FaWrench, desc: "New builds, farm sheds, packhouses and commercial premises, wired for the heavier loads that agriculture and industry put on a supply.", link: "/electrical-services" },
                                { title: "DB Board Upgrades & Repairs", icon: FaBoltLightning, desc: "Older boards are common in Paarl's established suburbs and out on the farms. We replace boards that keep tripping and add surge protection to keep equipment safe.", link: "/db-board-upgrades-and-repairs" },
                                { title: "COC Certificates", icon: FaShieldHalved, desc: "You need a valid COC to sell or rent a property in Paarl. We inspect the wiring, fix whatever fails, and issue the certificate.", link: "/coc" },
                                { title: "Generator Installations", icon: FaCarBattery, desc: "Farms, packhouses and businesses count on us for generators and changeover switches that keep cold storage and production running through an outage.", link: "/generator-installation" },
                                { title: "Fault Finding & Emergencies", icon: FaScrewdriverWrench, desc: "A fault that stops a farm or a production line cannot wait. We trace the problem, fix it, and get you back up and running." }
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
                                Serving Every Corner of Paarl
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                From the suburbs along Main Street to the farms on the edge of town, here are some of the areas we work in around Paarl:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Paarl Central & Main Street", desc: "Homes, shops, offices, COCs and commercial electrical" },
                                { name: "Courtrai", desc: "Residential installations, solar, DB board upgrades" },
                                { name: "Northern Paarl", desc: "Home wiring, repairs, COC for property sales" },
                                { name: "Southern Paarl", desc: "Residential and rural electrical, backup power" },
                                { name: "Klein Parys", desc: "Home installations, solar and aircon installs" },
                                { name: "Denneburg", desc: "Residential electrical, surge protection, repairs" },
                                { name: "Val de Vie Estate", desc: "Estate-friendly electrical work, solar, generators" },
                                { name: "Boschenmeer Estate", desc: "Residential installs, solar, backup power" },
                                { name: "Farms & Packhouses", desc: "Three-phase, pumps, cold storage, generators" }
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
                                    Paarl gets long, hot, sunny days, and the big roofs on farm sheds, packhouses and warehouses are ideal for solar. A system with battery backup cuts the heavy power bills these operations carry and keeps cold storage going through load shedding. We also fit <Link href="/solar-installation" className="text-[#FFCA08] underline font-bold">solar systems</Link> on homes right across the suburbs.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaSnowflake className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Paarl summers are some of the hottest in the Cape. We fit split units and inverter aircons for homes, offices and shops, and we are comfortable with the larger setups that commercial premises need to keep staff and stock cool. Here is more on our <Link href="/ac-installation" className="text-[#FFCA08] underline font-bold">air conditioning</Link> work.
                                </p>
                            </div>
                            <div>
                                <div className="bg-[#FFCA08] text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <FaBoltLightning className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                                <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                    Paarl mixes fruit farms, packhouses and light industry in with its homes. Our registered electricians handle three-phase supply, motor and pump work, and commercial installs, as well as everyday home wiring, surge damage and <Link href="/coc" className="text-[#FFCA08] underline font-bold">Certificates of Compliance (COC)</Link> for property sales.
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
                                    Getting to Us from Paarl
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    EAR Engineering is at 60 Abelia St, Somerset West, Cape Town, 7130, a straightforward drive south of Paarl:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Paarl Central:</strong> Take the N1 toward Cape Town, then head for Stellenbosch and pick up the R44 south to Somerset West. Around thirty-five minutes.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Southern Paarl:</strong> Join the R45 toward Stellenbosch, then follow the R44 down to Somerset West.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FaMapLocationDot className="text-[#015CAB] w-6 h-6 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium"><strong>From Val de Vie:</strong> Head onto the R301 and R45 toward Stellenbosch, then the R44 to Somerset West.</span>
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

                <FAQ faqs={paarlFaqs} />

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
