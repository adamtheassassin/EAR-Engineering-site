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
    FaCarBattery,
    FaPlugCirclePlus,
    FaPlugCircleBolt,
    FaHouseChimney,
    FaEarthAfrica,
    FaBoltLightning,
    FaCircleInfo,
    FaCircleCheck,
    FaClockRotateLeft,
    FaShieldHalved,
    FaScrewdriverWrench
} from "react-icons/fa6";

export default function SolarBatteryStoragePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const batteryFaqs = [
        { q: "Can I add batteries to my existing solar panels?", a: "In most cases yes, but it depends on your inverter. If your current inverter is a grid-tied only model it cannot manage a battery bank and will need to be replaced or supplemented with a battery inverter. We assess your existing setup and confirm what is needed before providing a quote." },
        { q: "How much battery storage do I need?", a: "This depends on how much electricity you use in the evenings and overnight, how long you want to be able to run during an outage, and your budget. We work this out from your actual usage data rather than guessing. A system that is right for your usage will always outperform an oversized one that costs more to purchase and sits partially unused." },
        { q: "How long do solar batteries last?", a: "Battery lifespan is measured in charge and discharge cycles rather than years, because how heavily you use the battery affects how long it lasts. Most quality lithium batteries are rated for several thousand cycles before their capacity drops to around 80% of the original. For a system cycling once per day, that typically translates to a useful lifespan of eight to fifteen years depending on the technology and usage pattern." },
        { q: "Do batteries require maintenance?", a: "Modern lithium battery systems require very little maintenance compared to older battery technologies. The main things to monitor are the battery's state of health over time and the accuracy of your inverter's charge settings. We check both as part of our annual solar maintenance visits." },
        { q: "What happens to the batteries during a power outage?", a: "During an outage, the system automatically switches to battery power and your property continues running from stored energy. How long the batteries last depends on their capacity and what you are running. Essential appliances on a well-sized system can typically run through a standard load shedding cycle and into the following morning before the panels start charging again." },
        { q: "Is battery storage worth it if load shedding improves?", a: "Yes. Even without load shedding as a factor, battery storage increases the proportion of your electricity that comes from your own panels rather than the grid. As Eskom tariffs continue to rise, every unit you self-consume rather than buy becomes more valuable. The financial case for battery storage is not dependent on load shedding continuing at current levels." },
        { q: "What areas do you cover?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Durbanville and Cape Town. Our base is in Somerset West so response times across the Helderberg are especially fast." },
        { q: "How do I get a quote?", a: "Call us on 021 855 4462 or send us a message. A more accurate quote can be given once we have assessed your property, existing setup and energy requirements in person." }
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
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Durbanville", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Battery Storage Installations",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Battery Storage Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery System Sizing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Battery Storage" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": batteryFaqs.map(faq => ({
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

            <title>Solar Battery Storage Installation Somerset West | EAR Engineering</title>
            <meta name="description" content="EAR Engineering installs solar battery storage systems for homes and businesses across Somerset West, Stellenbosch and the Helderberg. New installs and additions to existing solar." />
            <link rel="canonical" href="https://earengineering.co.za/services/solar/battery-storage" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Free Battery Quote"
                mobileCtaIcon={<FaCarBattery className="w-5 h-5" />}
            />

            <main className="flex-1 overflow-hidden">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Solar <span className="text-[#FFCA08]">Battery Storage</span> Installation
                        </>
                    }
                    subtitle="Solar panels generate electricity during the day. Without battery storage, that power is lost the moment the sun goes down or cloud cover reduces output."
                    image="/Background Images/Solarbackground residential.webp"
                    ctaText="Get a Free Battery Quote"
                    ctaIcon={<FaCarBattery className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Why Battery Storage Makes Financial Sense */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    Why Battery Storage Makes Financial Sense
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    A solar installation without battery storage still saves money, but it has a fundamental limitation. You only benefit from the power your panels produce while you are actively using it. For most households, the peak production window is during the middle of the day. The hours when demand is highest—typically evenings when everyone is home—are also when the panels are producing the least.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Battery storage bridges that gap. Instead of feeding surplus daytime generation back to the grid at a low feed-in tariff, you store it and use it yourself at times when it would otherwise cost you money to buy from Eskom. As electricity tariffs continue to rise, the value of every unit you store and self-consume increases alongside them.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    For businesses that previously relied on diesel generators during outages, the comparison is even more direct. A battery system replaces an ongoing, unpredictable fuel cost with a fixed capital investment that pays for itself over time and requires very little ongoing <Link href="/services/solar/solar-repair-maintenance" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">maintenance</Link> by comparison.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/solar_battery_zoom.png"
                                    alt="Lithium battery bank connected to solar inverter by EAR Engineering in Stellenbosch"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Services */}
                <section className="py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Our Battery Storage Installation Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We size and install battery systems correctly based on your actual electricity usage data, whether you are starting fresh or adding to an existing array.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "Part of a New Solar Installation", 
                                    icon: FaPlugCirclePlus, 
                                    desc: "The most straightforward way to add battery storage. We design and size the panels and batteries together to match your energy goals.",
                                    link: "/services/solar/solar-installation"
                                },
                                { 
                                    title: "Adding to Existing Solar", 
                                    icon: FaPlugCircleBolt, 
                                    desc: "If you already have solar panels, we can often add batteries. We assess your inverter compatibility and confirm what is needed before quoting."
                                },
                                { 
                                    title: "Commercial Battery Storage", 
                                    icon: FaEarthAfrica, 
                                    desc: "Larger battery systems for office parks, estates and factories. We carry out installations up to the capacity our commercial solar projects require."
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

                {/* Battery Considerations Table */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Battery Storage: Key Considerations
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Before choosing a battery system, here are the most important factors to understand:
                            </p>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c] w-1/3">Factor</th>
                                        <th className="py-5 px-6 font-bold text-lg">What It Means for You</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { factor: "Usable capacity", desc: "The amount of energy actually available to use (kWh). Bigger is not always better — right-sizing matters more." },
                                        { factor: "Cycle life", desc: "How many charge and discharge cycles the battery is rated for before capacity degrades. More cycles = longer life." },
                                        { factor: "Inverter compatibility", desc: "Not all batteries work with all inverters. We confirm compatibility before recommending any battery system." },
                                        { factor: "Warranty", desc: "We only install batteries with solid local warranty support so you are not left without recourse." },
                                        { factor: "Scalability", desc: "Can you add more batteries later? We design systems with future expansion in mind where possible." }
                                    ].map((row, i) => (
                                        <tr key={i} className={`hover:bg-cyan-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                            <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3">
                                                <FaCircleInfo className="text-[#FFCA08] flex-shrink-0" />
                                                {row.factor}
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 font-medium">
                                                {row.desc}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                How the Installation Process Works
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {[
                                { num: "1", title: "Assessment", desc: "We review your existing solar setup, electricity usage, and goals." },
                                { num: "2", title: "Recommendation", desc: "We recommend capacity and confirm compatibility, providing a quote." },
                                { num: "3", title: "Installation", desc: "We install the batteries, configure the inverter, and test the system." },
                                { num: "4", title: "Handover", desc: "We walk you through monitoring state of charge and overall system behaviour." }
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
                                We install solar battery storage systems across the Helderberg, Boland and greater Western Cape:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { loc: "Somerset West", path: "/somerset-west", desc: "New battery installs, additions to existing solar" },
                                { loc: "Stellenbosch", path: "/stellenbosch", desc: "Residential, estate and commercial battery storage" },
                                { loc: "Strand", path: "/strand", desc: "Residential battery storage installation" },
                                { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Residential battery systems" },
                                { loc: "Franschhoek", path: "/franschhoek", desc: "Estate, guesthouse and residential batteries" },
                                { loc: "Paarl", path: "/paarl", desc: "Residential and commercial battery installations" },
                                { loc: "Durbanville", path: "/Durbanville", desc: "Residential and agricultural battery storage" },
                                { loc: "Cape Town", path: "/cape-town", desc: "Residential and commercial battery storage" },
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
                                { title: "Honest Sizing", icon: FaScrewdriverWrench, desc: "We size systems based on your actual usage, not on what produces the biggest invoice." },
                                { title: "Qualified Installers", icon: FaShieldHalved, desc: "All battery installations are done by our qualified team and include proper electrical certification." },
                                { title: "Inverter Checks", icon: FaPlugCircleBolt, desc: "We assess inverter compatibility before recommending anything, so there are no surprises during installation." },
                                { title: "Climate Experience", icon: FaClockRotateLeft, desc: "Six years of solar experience across the Helderberg means we understand what systems work well over time." },
                                { title: "Local Support", icon: FaHouseChimney, desc: "We are a local business. If something needs attention after installation, you are not dealing with a national call centre." }
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
                    </div>
                </section>

                <Reviews />

                <FAQ faqs={batteryFaqs} />

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
