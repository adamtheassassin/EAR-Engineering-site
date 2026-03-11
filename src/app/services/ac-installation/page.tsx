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
import {
    FaSnowflake,
    FaWrench,
    FaToolbox,
    FaArrowsRotate,
    FaRegClock,
    FaShieldHalved,
    FaScaleBalanced,
    FaBoltLightning,
    FaHandshake,
    FaPhoneVolume,
    FaCircleCheck,
    FaWind
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function ACInstallationPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const acFaqs = [
        { q: "What is included in an air conditioning installation?", a: "Our installation service includes supplying the unit, fitting it in the right position, running all the pipework and electrical connections, testing the system, and handing it over with a full explanation of how to use it. We handle everything from start to finish." },
        { q: "How do I know what size unit I need?", a: "Unit size is based on the size of the room, the ceiling height, how much sun the room gets, and how you use the space. Getting this wrong means the unit either struggles to cool the room or runs inefficiently. We work this out properly during our free site assessment so you get the right unit from the start." },
        { q: "What is the difference between a split unit and an inverter air conditioner?", a: "A standard split unit runs at full power until it reaches the set temperature, then switches off. An inverter unit adjusts its output continuously, which uses less electricity and keeps a more consistent temperature. For most homes and offices used daily, an inverter unit is the better long-term choice." },
        { q: "How often should my air conditioner be serviced?", a: "For most residential units, once a year is sufficient. For units in rental properties, guesthouses or commercial spaces that are used more heavily, twice a year is better. Regular servicing keeps the unit running efficiently, catches small problems before they become expensive, and extends the life of the system." },
        { q: "Can you service a unit that was not installed by EAR Engineering?", a: "Yes. We work on most makes and models regardless of who installed them. If you are unsure of the service history or suspect a problem, we can do a full inspection and give you an honest assessment of the unit's condition." },
        { q: "How long does installation take?", a: "A single residential unit typically takes half a day to install. Larger jobs with multiple units or more complex electrical requirements will take longer. We will always give you a clear timeframe before we start." },
        { q: "Do you install air conditioning for rental properties and estates?", a: "Yes, and this is a significant part of what we do. We work with rental agencies and estate management companies across the Helderberg and Boland, including serving as the exclusive air conditioning provider for De Zalze Estate for the past 10 years. If you manage multiple properties and need a reliable contractor, get in touch." },
        { q: "Can I pair my air conditioning with solar to save on running costs?", a: "Yes, and it works very well in the Western Cape. Air conditioning tends to be used most on hot, sunny days, which is exactly when your solar panels are producing the most power. Running your aircon from solar reduces what it costs to keep your home or office cool." }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": acFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": "EAR Engineering",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Somerset West",
            "addressRegion": "Western Cape",
            "addressCountry": "ZA"
        },
        "currenciesAccepted": "ZAR",
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Durbanville", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Air Conditioning Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Air Conditioning Installations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servicing and Preventative Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fault Finding and Repairs" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Replacements and Upgrades" } }
            ]
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            <title>Air Conditioning Installation Somerset West and Stellenbosch | EAR Engineering</title>
            <meta name="description" content="EAR Engineering installs, services and repairs air conditioning systems across Somerset West, Stellenbosch and the Helderberg. Get a free quote today." />
            <link rel="canonical" href="https://earengineering.co.za/services/ac-installation" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Free Air Conditioning Quote"
                mobileCtaIcon={<FaWind className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            <span className="text-[#FFCA08]">Air Conditioning</span> Installation
                        </>
                    }
                    subtitle="Summers in the Western Cape are no joke. Whether you are trying to sleep in a stuffy bedroom, keep an office productive through a heatwave, or make a guesthouse comfortable for guests, the right air conditioning system makes all the difference."
                    image="/Work Photos/acinstallation hero.webp"
                    ctaText="Free Air Conditioning Quote"
                    ctaIcon={<FaWind className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Services We Offer */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Air Conditioning Services We Offer
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We offer a complete service from supply and installation through to ongoing maintenance and repairs. Here is what we do:
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            {[
                                { title: "New Installations", icon: FaSnowflake, desc: "We install split unit and inverter air conditioning systems for homes, offices, guesthouses, estates and commercial properties. Every installation includes all the electrical connections and a proper handover so you know how to get the best out of your system." },
                                { title: "Servicing & Maintenance", icon: FaToolbox, desc: "A well-serviced air conditioner runs more efficiently, lasts longer and costs less to run. We offer scheduled servicing for residential and commercial clients. This is especially important for rental properties and estates where systems are used heavily and any breakdown affects paying guests or tenants." },
                                { title: "Fault Finding and Repairs", icon: FaWrench, desc: "If your air conditioner is not cooling properly, making unusual noises, leaking or not switching on, we can diagnose and fix the problem. We work on most makes and models and carry common parts so we can sort most faults in a single visit." },
                                {
                                    title: "Replacements and Upgrades", icon: FaArrowsRotate, desc: (
                                        <>
                                            Older air conditioning units can be expensive to run and unreliable to fix. If your system is aging, we will give you an honest assessment of whether a repair is worthwhile or whether a replacement makes more financial sense. Pairing a new inverter air conditioner with a solar system can cut your running costs significantly. See our <Link href="/services/solar-installation" className="text-[#015CAB] underline hover:text-[#013f75]">solar installation services</Link>.
                                        </>
                                    )
                                }
                            ].map((s, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-cyan-200 transition-colors group flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                                    <div className="bg-[#015CAB] p-4 rounded-xl text-white flex-shrink-0 group-hover:text-[#FFCA08] transition-colors">
                                        <s.icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-10 py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-extrabold text-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3 group"
                            >
                                Free Air Conditioning Quote
                                <FaWind className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Get the Right System Installed Properly the First Time
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#FFCA08] text-[#015CAB] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <FaWind className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white">The Cost of Poor Installation</h3>
                                </div>
                                <p className="text-blue-50 font-medium leading-relaxed">
                                    A lot of air conditioning problems start at the installation stage. A unit that is too small runs constantly, while a unit that is too large cycles inefficiently. A system installed incorrectly will cost more to run and cause problems down the line.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#FFCA08] text-[#015CAB] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <FaCircleCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white">Done Right the First Time</h3>
                                </div>
                                <p className="text-blue-50 font-medium leading-relaxed">
                                    Getting it right from the start saves you money on electricity, avoids unnecessary repairs, and means your system lasts as long as it should. That starts with choosing the right unit for your space and having it installed correctly.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#FFCA08] text-[#015CAB] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <FaScaleBalanced className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white">Brand-Neutral Advice</h3>
                                </div>
                                <p className="text-blue-50 font-medium leading-relaxed">
                                    We recommend the unit that suits your space and budget rather than pushing a specific brand. Because we also handle <Link href="/services/electrical-services" className="text-[#FFCA08] underline decoration-2 underline-offset-4 hover:text-white transition-colors">electrical work</Link> and <Link href="/services/solar-installation" className="text-[#FFCA08] underline decoration-2 underline-offset-4 hover:text-white transition-colors">solar</Link>, we ensure everything works seamlessly together.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Split Units vs Inverter Air Conditioners */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Split Units vs Inverter Air Conditioners
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Two of the most common questions we get are about the difference between a standard split unit and an inverter air conditioner, and which one is right for a particular space. Here is a simple breakdown:
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Feature</th>
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Standard Split Unit</th>
                                        <th className="py-5 px-6 font-bold text-lg">Inverter Air Conditioner</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">How it works</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Runs at full power until the set temperature is reached, then switches off</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Adjusts its power output continuously to maintain the temperature</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Running cost</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Uses more electricity because it cycles on and off at full power</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Uses less electricity because it runs at lower power once cooled</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Purchase price</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Lower upfront cost</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Slightly higher upfront cost</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Best for</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Spaces used occasionally or on a tight budget</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Spaces used daily where running costs matter</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Noise level</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Can be noisier due to on/off cycling</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Generally quieter and more consistent</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 text-center text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            <p>For most homes and offices in the Western Cape where air conditioning is used regularly, an inverter unit is the better long-term choice. The slightly higher upfront cost is usually recovered quickly through lower electricity bills. We will help you work out which option makes more sense for your situation during our free site assessment.</p>
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                How the Process Works
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                                Getting a new air conditioning system installed is a straightforward process. Here is what to expect:
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Free Assessment", desc: "We visit your property, look at the spaces you want to cool, and understand how you use them. This helps us recommend the right system size and type." },
                                { num: "2", title: "Custom Proposal", desc: "We provide a clear proposal showing the unit we recommend, the full installation cost, and what the job involves." },
                                { num: "3", title: "Scheduling", desc: "Once you are happy with the proposal, we arrange a convenient installation date." },
                                { num: "4", title: "Installation Day", desc: "Our team installs the unit, handles all the electrical connections, tests everything, and cleans up before they leave. Most single-unit residential installations are done in half a day." },
                                { num: "5", title: "Handover", desc: "We show you how to use and maintain your new system and leave you with our contact details for any future service or support needs." },
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-start">
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
                        <div className="mt-12 text-center text-gray-600 font-medium">
                            For larger commercial installations or multiple units, we will give you a clear timeline upfront so you can plan around it.
                        </div>
                    </div>
                </section>

                {/* Real Projects */}
                <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden z-10">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Work Photos/ac_background_stellenbosch.webp"
                            alt="Air Conditioning Installation Job"
                            fill
                            quality={90}
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-white/50 mix-blend-screen"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/40 to-gray-50"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
                        {/* Note: The user requested image and cards are aligned top to bottom for both left and right sections. Using items-start */}
                        <div className="grid md:grid-cols-2 gap-12 items-stretch">
                            <div className="flex flex-col">
                                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 uppercase md:normal-case">
                                    Real Projects.<br />Real Results.
                                </h2>
                                <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                                    We have been installing and maintaining air conditioning systems across the Helderberg and Boland for over 18 years. Here is an example of the kind of long-term work we do:
                                </p>

                                <div className="flex-grow">
                                    <div className="h-full bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-[#015CAB] transition-transform hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">De Zalze Estate, Stellenbosch</h3>
                                        <p className="text-gray-700 font-medium mb-4">
                                            For the past 10 years, EAR Engineering has been the sole air conditioning installation and maintenance provider for De Zalze Estate, working through the estate's rental agency. Our role covers new system installations for properties across the estate, routine servicing and preventative maintenance, fault diagnostics and repairs, and rapid-response breakdown support when something stops working.
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            The fact that De Zalze has appointed us exclusively for a decade reflects the kind of service we provide. Estates and rental agencies trust us because we show up, we do the job properly, and we are easy to reach when they need us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-6">
                                {/* Real Project Photo */}
                                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/20 group">
                                    <Image
                                        src="/Work Photos/ac installation pool.webp"
                                        alt="Estate Air Conditioning Installation at De Zalze"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/90 via-[#015CAB]/40 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white space-y-2">
                                        <div className="inline-block px-3 py-1 bg-[#FFCA08] text-gray-900 text-sm font-bold rounded-lg mb-2 shadow-sm">Estate Management</div>
                                        <h4 className="text-3xl font-black">10 Year Partnership</h4>
                                        <p className="font-medium text-white/90">Sole provider of air conditioning installations, preventative maintenance and repairs for De Zalze Estate's rental properties.</p>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between flex-grow">
                                    <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                        If you manage a rental portfolio, an estate or a commercial property and need a dependable air conditioning contractor, we would be glad to talk about what that could look like for you.
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-6 py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-extrabold transition-all transform hover:scale-105 active:scale-95 shadow-xl w-full text-center"
                                    >
                                        Contact Us for Estate Services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Installation Costs */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Air Conditioning Installation Costs
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                The cost of an air conditioning installation depends on the type of unit, the size of the space, and how complex the installation is. The table below gives a general starting point. Your actual quote will be confirmed after a free site assessment.
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg">Installation Type</th>
                                        <th className="py-5 px-6 font-bold text-lg">Best For</th>
                                        <th className="py-5 px-6 font-bold text-lg whitespace-nowrap">Approx. Starting Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900">Single split unit</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Bedroom, study or small lounge</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R8,000 to R15,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900">Single inverter unit</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Living areas, home office, daily use spaces</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R12,000 to R19,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900">Multi-room residential</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Larger homes, multiple rooms</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R25,000 to R60,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900">Small commercial</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Office, retail space, guesthouse room</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R15,000 to R40,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900">Larger commercial</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Office parks, estates, multiple units</td>
                                        <td className="py-4 px-6 text-[#015CAB] font-bold">R40,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            <p>These figures include supply, installation and electrical connections. Servicing and maintenance plans are quoted separately based on the number of units and visit frequency. The only accurate way to get a price is through a site visit, which we offer at no charge.</p>
                        </div>
                    </div>
                </section>

                {/* Areas We Serve with GBP Embed */}
                <section className="bg-[#015CAB] py-20 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="overflow-hidden rounded-xl shadow-2xl h-[400px] w-full bg-white relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4023.9526587094174!2d18.820527300000002!3d-34.063464499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5947a717cc1%3A0x6ffb176a283db73e!2sEAR%20Engineering!5e0!3m2!1sen!2sza!4v1772199538942!5m2!1sen!2sza"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="space-y-6 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                                    Locations We Serve
                                </h2>
                                <p className="text-lg font-medium text-white/90 leading-relaxed mb-8">
                                    EAR Engineering is based in the Helderberg and we offer reputable solar installations, electrical, and HVAC services for homeowners and businesses in the surrounding areas.
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
                                    {[
                                        "Somerset West",
                                        "Stellenbosch",
                                        "Strand",
                                        "Franschhoek",
                                        "Gordon's Bay",
                                        "Paarl",
                                        "Cape Town",
                                        "Durbanville",
                                    ].map((location, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <FaCircleCheck className="text-[#FFCA08] w-5 h-5 flex-shrink-0" />
                                            <span className="font-bold text-white text-lg">{location}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Why Clients Choose EAR Engineering
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                                There are plenty of air conditioning companies in the Western Cape. Here is why homeowners, estates and property managers keep coming back to us:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { title: "18 Years Experience", icon: FaRegClock, desc: "We know the area, we know the conditions, and we have a track record you can check." },
                                { title: "Qualified Team", icon: FaShieldHalved, desc: "Every installation is done properly and every electrical connection is handled by a registered electrician." },
                                { title: "Brand-Neutral Advice", icon: FaScaleBalanced, desc: "We recommend the right unit for your needs and your budget, not the one with the best margin for us." },
                                { title: "All Under One Roof", icon: FaBoltLightning, desc: "Electrical, solar and air conditioning under one roof. You deal with one company and one point of contact for all three services." },
                                { title: "Long-Term Relationships", icon: FaHandshake, desc: "De Zalze Estate has trusted us as their sole provider for 10 years. That kind of relationship does not happen without consistent quality." },
                                { title: "We Pick Up The Phone", icon: FaPhoneVolume, desc: "We are a local business and we stand behind our work. When you need us after the installation, we are reachable." }
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

                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-10 py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-extrabold text-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3 group"
                            >
                                Free Air Conditioning Quote
                                <FaWind className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                <Reviews />

                <FAQ faqs={acFaqs} />

                <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
            </main >

            <Footer />

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                preselectedCategory="Aircon"
            />
        </>
    );
}
