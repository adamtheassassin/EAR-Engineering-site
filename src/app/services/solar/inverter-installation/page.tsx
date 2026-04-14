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
    FaPlugCircleBolt,
    FaPlugCircleCheck,
    FaScrewdriverWrench,
    FaWrench,
    FaShieldHalved,
    FaHouseChimney,
    FaCircleInfo,
    FaCircleCheck
} from "react-icons/fa6";

export default function SolarInverterInstallationPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const inverterFaqs = [
        { q: "How do I know if my inverter needs replacing?", a: "The most common signs are persistent error codes on the inverter display, the inverter shutting down unexpectedly, output that is consistently lower than expected given available sunshine, or the unit failing to start at all. If you are seeing any of these, it is worth having the inverter assessed before assuming the panels are the problem." },
        { q: "Can I upgrade my inverter to add battery storage later?", a: "It depends on your current inverter. A grid-tied only inverter cannot manage battery storage and would need to be replaced with a hybrid model. Some hybrid inverters can have batteries added later without any changes to the inverter itself. We can check your current model and confirm whether an upgrade or replacement is needed." },
        { q: "How long does an inverter last?", a: "Most quality solar inverters have a rated lifespan of ten to fifteen years. Some last longer with good maintenance, and some fail earlier depending on operating conditions, installation quality and the demands placed on them. An inverter approaching ten years of age is worth monitoring closely, particularly if your system is a critical part of your energy setup." },
        { q: "Does the inverter brand matter?", a: "The brand matters in terms of reliability, local warranty support and the availability of parts and firmware updates. We work with well-supported brands that have proper local representation in South Africa, which matters significantly when something needs attention years after installation. We will advise on the options available within your budget." },
        { q: "What is the difference between a hybrid and a grid-tied inverter?", a: "A hybrid inverter can manage solar panels, battery storage and a grid connection simultaneously, switching between them intelligently based on what is available and what you need. A grid-tied inverter connects your panels to the grid only, with no battery management capability. If outage protection or maximum self-consumption are priorities, a hybrid inverter is the right choice." },
        { q: "My inverter is showing an error code. What should I do?", a: "Note down the error code and call us. Most inverter manufacturers use specific codes that point to a defined fault type. Some can be resolved with a reset, others indicate a hardware fault that needs attention. Do not ignore persistent error codes as they can indicate a developing problem that will worsen if left." },
        { q: "Do you work on inverters from other brands?", a: "We work with most of the commonly used inverter brands in South Africa. If you are not sure whether we work with your brand, call us and we will confirm. For very old or obscure models, parts availability can sometimes be a limiting factor, in which case we will discuss replacement options with you." },
        { q: "What areas do you cover?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Durbanville and Cape Town. Our base is in Somerset West so response times across the Helderberg are especially fast." },
        { q: "How do I get a quote?", a: "Call us on 021 855 4462 or send us a message. A more accurate quote can be given once we have assessed your system and confirmed the right inverter for your setup." }
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
            "name": "Inverter Installations",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Inverter Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hybrid Inverter Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grid-Tied Inverter Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inverter Replacement" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": inverterFaqs.map(faq => ({
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

            <title>Solar Inverter Installation Somerset West | EAR Engineering</title>
            <meta name="description" content="EAR Engineering installs and replaces solar inverters for homes and businesses across Somerset West, Stellenbosch and the Helderberg. Brand-neutral advice and certified installations." />
            <link rel="canonical" href="https://earengineering.co.za/services/solar/inverter-installation" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Free Inverter Quote"
                mobileCtaIcon={<FaPlugCircleBolt className="w-5 h-5" />}
            />

            <main className="flex-1 overflow-hidden">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Solar <span className="text-[#FFCA08]">Inverter Installation</span>
                        </>
                    }
                    subtitle="The inverter is the core of any solar power system. Without a correctly sized and installed inverter, the rest of your solar system cannot function."
                    image="/Background Images/Solarbackground residential.webp"
                    ctaText="Get a Free Inverter Quote"
                    ctaIcon={<FaPlugCircleBolt className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* When Do You Need an Inverter? */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    When Do You Need a New or Replacement Inverter?
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    There are two main situations where inverter installation becomes relevant. The first is a new solar installation where an inverter is being specified and fitted as part of the complete system. The second is an existing installation where the original inverter has failed, is underperforming, or needs to be upgraded.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Inverters typically have a lifespan of ten to fifteen years, making them the component most likely to require replacement. An inverter that is failing will often show error codes, produce less than it should, or stop working entirely.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    Replacing an ageing or underperforming inverter is often one of the most cost-effective ways to improve the output and reliability of an <Link href="/services/solar/solar-repair-maintenance" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">existing solar system</Link> without replacing the panels themselves.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/solar_inverter_close.png"
                                    alt="Solar hybrid inverter installed by EAR Engineering in a Somerset West home"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Inverters */}
                <section className="py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Types of Solar Inverters We Install
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "Hybrid Inverters", 
                                    icon: FaPlugCircleCheck, 
                                    desc: "Manages solar panels, battery storage, and the grid. Decides in real time whether to use solar, charge batteries, or draw from the grid. The standard choice for battery integration."
                                },
                                { 
                                    title: "Grid-Tied Inverters", 
                                    icon: FaPlugCircleBolt, 
                                    desc: "Connects panels directly to the grid. Surplus goes to the municipal grid, but there is no outage protection. A lower-cost entry point for pure bill reduction."
                                },
                                { 
                                    title: "Inverter Replacements & Upgrades", 
                                    icon: FaWrench, 
                                    desc: "We perform full replacements of old failing units or upgrades to hybrid models to accommodate new batteries, including all electrical rewiring.",
                                    link: "/services/solar/battery-storage"
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

                {/* Inverter Choice Table */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Choosing the Right Inverter
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                The right inverter depends on several factors. Here is a straightforward overview:
                            </p>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Inverter Type</th>
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Best For</th>
                                        <th className="py-5 px-6 font-bold text-lg">Battery Compatible</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { type: "Hybrid inverter", best: "Most residential and commercial systems", bat: "Yes — designed for battery integration" },
                                        { type: "Grid-tied inverter", best: "Bill reduction focus, no outage cover needed", bat: "No — grid only" },
                                        { type: "Inverter upgrade", best: "Existing system being expanded or modernised", bat: "Depends on new model selected" }
                                    ].map((row, i) => (
                                        <tr key={i} className={`hover:bg-cyan-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                            <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3">
                                                <FaCircleInfo className="text-[#FFCA08] flex-shrink-0" />
                                                {row.type}
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">{row.best}</td>
                                            <td className="py-4 px-6 text-gray-600 font-medium">{row.bat}</td>
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
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { num: "1", title: "Assessment", desc: "We review your solar system design, load requirements and goals." },
                                { num: "2", title: "Recommendation", desc: "We recommend the right inverter and provide a clear quote before work begins." },
                                { num: "3", title: "Installation", desc: "We wire the inverter, connect it to panels/batteries and configure it." },
                                { num: "4", title: "Testing & Handover", desc: "We confirm all modes work and walk you through the monitor/display." }
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
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { loc: "Somerset West", path: "/somerset-west", desc: "New inverter installations and replacements" },
                                { loc: "Stellenbosch", path: "/stellenbosch", desc: "Residential, estate and commercial inverters" },
                                { loc: "Strand", path: "/strand", desc: "Residential inverter installation and replacement" },
                                { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Residential inverter installations" },
                                { loc: "Franschhoek", path: "/franschhoek", desc: "Estate and residential inverter work" },
                                { loc: "Paarl", path: "/paarl", desc: "Residential and commercial inverter installations" },
                                { loc: "Durbanville", path: "/Durbanville", desc: "Residential and agricultural solar inverter work" },
                                { loc: "Cape Town", path: "/cape-town", desc: "Residential and commercial inverter installations" },
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
                                { title: "Brand Neutral", icon: FaScrewdriverWrench, desc: "We recommend the inverter that suits your system and budget, not a specific brand we are prioritised to push." },
                                { title: "Qualified Electricians", icon: FaShieldHalved, desc: "Qualified electricians carry out all inverter installations. Every connection to the DB board is legally certified." },
                                { title: "Full System Knowledge", icon: FaPlugCircleBolt, desc: "Because we install complete solar systems, we know how the inverter needs to interact with your panels and batteries." },
                                { title: "All Systems Maintained", icon: FaWrench, desc: "We work on systems we did not install. If your inverter has failed on a system by another company, we can replace it." },
                                { title: "Honest Sizing", icon: FaHouseChimney, desc: "We size inverters to match your actual load and generation, not to maximise the final sale value." }
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
                        <div className="mt-12 text-center">
                            <span className="font-medium text-gray-600">Need specific electrical assistance? Explore our <Link href="/services/electrical-services/coc" className="text-[#015CAB] underline font-bold hover:text-[#013f75] transition-colors">COC Certificates services</Link>.</span>
                        </div>
                    </div>
                </section>

                <Reviews />

                <FAQ faqs={inverterFaqs} />

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
