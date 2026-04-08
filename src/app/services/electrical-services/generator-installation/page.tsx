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
    FaBolt,
    FaHouse,
    FaWrench,
    FaShieldHalved,
    FaCarBattery,
    FaClockRotateLeft,
    FaUserTie,
    FaHandshake,
    FaCircleCheck,
    FaTruckFast,
    FaScrewdriverWrench,
    FaSun
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function GeneratorInstallationPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const generatorFaqs = [
        { q: "What is a changeover switch and why do I need one?", a: "A changeover switch is the system that safely disconnects your property from the municipal grid before connecting it to your generator. This is essential for safety. Without one, generator power can back-feed into the grid and seriously injure or kill utility workers working on the lines. It is also a legal requirement. We install manual and automatic changeover systems depending on your needs." },
        { q: "How quickly does the generator kick in when the power goes out?", a: "With an automatic transfer switch, the generator starts and your property switches over within a matter of seconds. Most clients experience only a brief flicker before power is restored. Manual changeover systems require you to start the generator yourself, which takes a few minutes." },
        { q: "What fuel does a standby generator use?", a: "Most standby generators installed in South Africa run on petrol or diesel. Diesel generators are generally more fuel-efficient and better suited for regular or extended use, which is why they are the more common choice for commercial and industrial applications. Petrol generators are often used for smaller residential applications. We will advise on the best option for your situation during the assessment." },
        { q: "How much fuel will my generator use during load shedding?", a: "Fuel consumption depends on the size of the generator and how hard it is working. A smaller residential generator running essential appliances will use significantly less fuel than a large commercial unit running at full capacity. We will give you a realistic estimate of running costs as part of your proposal." },
        { q: "Does a generator installation require a Certificate of Compliance?", a: "Yes. Because a generator installation involves electrical work including the changeover system and wiring connections, a Certificate of Compliance is required. Our registered electricians handle this as part of every installation. Do not use any installer who cannot provide a COC on completion." },
        { q: "Can I install a generator myself?", a: "The generator itself can be purchased independently, but the electrical work including the changeover system must be done by a registered electrician. Attempting to connect a generator without a proper changeover switch is dangerous and illegal. It also voids most generator warranties and your property insurance." },
        { q: "How often does a generator need to be serviced?", a: "Most generator manufacturers recommend a service every 200 to 250 running hours, or at least once a year even if the generator has not been used heavily. Regular servicing ensures the generator will start reliably when you need it. We offer servicing for generators we install as well as existing units." },
        { q: "Can a generator and a solar system work together?", a: "Yes, and this is an increasingly popular combination. Solar handles your day-to-day energy needs and reduces your electricity bill, while the generator provides backup for extended outages or periods of bad weather when your solar batteries are depleted. If this is your long-term plan, it is important to design both systems to work together from the start." },
        { q: "What areas do you cover?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Grabouw and Cape Town. Our main base is in Somerset West, so our response times across the Helderberg are especially fast." },
        { q: "How do I get a quote?", a: "Get in touch and we will arrange a free site visit. We assess your property and power requirements, and come back to you with a clear proposal. No cost, no obligation." }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ElectricalContractor",
        "name": "EAR Engineering",
        "address": "Somerset West, Western Cape, South Africa",
        "telephone": "076 973 7329",
        "currenciesAccepted": "ZAR",
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Grabouw", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Generator Installation Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Generator Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Generator Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Generator Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Changeover Switch Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generator Servicing" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": generatorFaqs.map(faq => ({
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

            <title>Generator Installation Somerset West and Stellenbosch | EAR Engineering</title>
            <meta name="description" content="EAR Engineering installs standby generators and changeover systems for homes and businesses in Somerset West, Stellenbosch and the Helderberg. Free quote today." />
            <link rel="canonical" href="https://earengineering.co.za/services/electrical-services/generator-installation" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Free Quote"
                mobileCtaIcon={<FaCarBattery className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Generator Installation in <span className="text-[#FFCA08]">Somerset West</span>
                        </>
                    }
                    subtitle="Load shedding doesn't have to run your life. We install reliable standby generators and automatic changeover systems for homes and businesses so your power stays on."
                    image="/Work Photos/generator-hero-new.png"
                    ctaText="Get a Free Generator Quote"
                    ctaIcon={<FaCarBattery className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Introduction Section using Cards */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Stop Letting Load Shedding Run Your Life
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <h3 className="text-xl font-extrabold text-white mb-4">The Impact on Homes</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4">
                                    For homeowners, load shedding means security systems going offline, food spoiling in the fridge and freezer, working from home becoming impossible, and the constant mental load of checking the schedule before making plans.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <h3 className="text-xl font-extrabold text-white mb-4">The Impact on Business</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4">
                                    For businesses, it means lost trading hours, equipment that cannot run, staff who cannot work, and customers who go elsewhere. Unplanned downtime is a direct cost to your bottom line.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            A properly installed standby generator changes all of that. The power goes out, the generator starts, and within seconds your property is running normally again. For a long-term energy solution that also reduces your electricity bill, see our solar installation services.
                        </div>
                    </div>
                </section>

                {/* Services We Offer */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Our Generator Installation Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We offer a complete generator installation service from start to finish. Here is what we cover:
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            {[
                                { title: "Residential Generator Installation", icon: FaHouse, desc: "We install standby generators for homes across the Helderberg and Boland. Whether you want to run essential appliances or power your entire home, we size and install the right unit." },
                                { title: "Commercial Generator Installation", icon: FaUserTie, desc: "For businesses, retail spaces and guesthouses. We install commercial generators sized to keep your operations running through any stage of load shedding." },
                                { title: "Industrial Generator Installation", icon: FaWrench, desc: "Large facilities, factories and industrial properties require serious solutions. We install and commission large standby systems for high-dependency clients." },
                                { title: "Changeover Switch Systems", icon: FaBolt, desc: "The changeover system ensures your property switches to generator power safely automatically, and switches back when the grid returns. Essential for safety." },
                                { title: "Maintenance & Servicing", icon: FaScrewdriverWrench, desc: "We offer maintenance and servicing for installed generators to make sure they start reliably and run efficiently when you need them most." }
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

                        <div className="flex justify-center text-center max-w-3xl mx-auto text-gray-700 font-medium">
                            <p>Our registered electricians handle all the electrical compliance and certification for every installation. See our <Link href="/services/electrical-services" className="text-[#015CAB] underline hover:text-[#013f75]">electrical services</Link>.</p>
                        </div>
                    </div>
                </section>

                {/* Choosing the Right Generator */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Choosing the Right Generator
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Getting the sizing right starts with understanding what you actually need to power. We carry out a full load assessment so you don't overpay for an oversized unit or struggle with an undersized one.
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100 mb-8">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Property Type</th>
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Typical Power Needs</th>
                                        <th className="py-5 px-6 font-bold text-lg">What to Consider</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Small home / townhouse</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Lights, fridge, TV, Wi-Fi</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">A smaller generator is usually sufficient for essentials</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Larger family home</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Full lighting, fridge, appliances, security</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Size depends on whether you include geysers and stoves</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Office or retail space</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Computers, POS systems, AC</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Trading hours and appliance load determine the right size</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Restaurant or guesthouse</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Kitchen equipment, large fridges/freezers</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Cold storage and cooking equipment are main drivers</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Industrial facility</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Heavy machinery, full facility power</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Requires detailed load assessment before sizing</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Costs Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Generator Installation Costs
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                The table below gives a general starting point. Your actual cost depends on generator size, changeover type, and installation complexity—confirmed via a free site assessment.
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Installation Type</th>
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Best For</th>
                                        <th className="py-5 px-6 font-bold text-lg">Approx. Starting Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Small residential</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Essentials only, smaller home</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R25,000 to R50,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Mid-size residential</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Larger family home, full backup</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R50,000 to R100,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Small commercial</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Office, retail, guesthouse</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R80,000 to R200,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Large commercial</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Restaurants, larger offices, estates</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R200,000 to R500,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Industrial</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Factories, hospitals, large facilities</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R500,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Real Projects (Generator vs Solar) */}
                <section className="py-12 md:py-24 bg-white relative overflow-hidden z-10">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 uppercase md:normal-case">
                                    Generator vs Solar:<br />Which is Right for You?
                                </h2>
                                <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                                    Both solve load shedding, but serve different needs. A generator has a lower upfront cost but ongoing fuel costs and produces noise. Solar costs more upfront, but runs silently for free and reduces your monthly electricity bill. Many clients choose both for maximum resilience.
                                </p>
                                <div className="mt-4 text-left">
                                    <p className="text-xl text-gray-700 font-medium">
                                        <Link href="/services/solar-installation" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">
                                            See our solar installation services
                                        </Link> for more information on solar and battery backup systems.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-6">
                                <div className="flex-grow min-h-[300px] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/20 group">
                                    <Image
                                        src="/Work Photos/electrical work.webp"
                                        alt="Commercial Generator Installation"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/90 via-[#015CAB]/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white space-y-2">
                                        <h4 className="text-3xl font-black">Reliable Power Guarantee</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                How the Process Works
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Free Assessment", desc: "We visit your property and identify the best location for the generator and changeover panel." },
                                { num: "2", title: "Proposal & Sizing", desc: "You get a clear proposal showing the right generator size, changeover system and full cost." },
                                { num: "3", title: "Scheduling", desc: "Once approved, we order equipment and arrange a convenient installation date for you." },
                                { num: "4", title: "Installation", desc: "We mount the changeover panel, connect all the wiring, test the system and automatic switchover." },
                                { num: "5", title: "Electrical Sign-off", desc: "Work is completed and certified by a registered electrician, presenting your Certificate of Compliance." },
                                { num: "6", title: "Handover", desc: "We walk you through exactly how your system works, checking fuel levels and basic maintenance." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
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

                {/* Areas We Serve */}
                <section className="bg-[#015CAB] py-20 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="flex flex-col items-center justify-center space-y-8 text-center">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                                Areas We Cover
                            </h2>
                            <p className="text-lg font-medium text-white/90 leading-relaxed max-w-2xl">
                                EAR Engineering installs generators across the Helderberg, Boland and greater Western Cape:
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full justify-items-center">
                                {[
                                    { loc: "Somerset West", path: "/somerset-west" },
                                    { loc: "Stellenbosch", path: "/stellenbosch" },
                                    { loc: "Strand", path: "/strand" },
                                    { loc: "Gordon's Bay", path: "/gordons-bay" },
                                    { loc: "Franschhoek", path: "/franschhoek" },
                                    { loc: "Paarl", path: "/paarl" },
                                    { loc: "Grabouw", path: "/grabouw" },
                                    { loc: "Cape Town", path: "/cape-town" },
                                ].map((location, i) => (
                                    <Link href={`/locations${location.path}`} key={i} className="flex items-center gap-3 hover:text-[#FFCA08] transition-colors w-full justify-center md:justify-start">
                                        <FaCircleCheck className="text-[#FFCA08] w-5 h-5 flex-shrink-0" />
                                        <span className="font-bold text-white text-lg">{location.loc}</span>
                                    </Link>
                                ))}
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
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { title: "Registered Electricians", icon: FaShieldHalved, desc: "Generator installations involve serious electrical work. Done by qualified electricians with a COC." },
                                { title: "Proper Load Assessments", icon: FaWrench, desc: "We size your generator correctly from the start. No underpowered units, no wasted fuel." },
                                { title: "18 Years Local", icon: FaClockRotateLeft, desc: "We know the Helderberg and Boland area well, with a strong track record you can verify." },
                                { title: "Honest Quotes", icon: FaHandshake, desc: "You know what the job will cost before we pick up a tool. No hidden fees or surprises." },
                                { title: "All Under One Roof", icon: FaBolt, desc: "Electrical, solar, and generators all handled seamlessly by the same knowledgeable team." },
                                { title: "Post-Installation Support", icon: FaUserTie, desc: "Generator problems can disrupt operations. We answer the phone and show up after the job is done." }
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

                <FAQ faqs={generatorFaqs} />

                <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
            </main>

            <Footer />

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                preselectedCategory="Electrical"
            />
        </>
    );
}
