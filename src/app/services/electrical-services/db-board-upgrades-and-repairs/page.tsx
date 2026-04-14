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
    FaWrench,
    FaBoltLightning,
    FaScrewdriverWrench,
    FaShieldHalved,
    FaCircleExclamation,
    FaTriangleExclamation,
    FaClockRotateLeft,
    FaHandshake,
    FaBolt,
    FaCircleCheck
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function DBBoardUpgradesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dbFaqs = [
        { q: "Why does my DB board keep tripping?", a: "The most common reasons are an overloaded circuit, a faulty appliance drawing too much current, a failing breaker, or a wiring fault somewhere in the circuit. The first step is to identify which breaker is tripping and whether it happens when a specific appliance is switched on. We can diagnose the cause and fix it properly." },
        { q: "Is a tripping DB board dangerous?", a: "A breaker that trips occasionally as a result of a temporary overload is doing its job. A breaker that trips repeatedly, will not reset, or a board that shows signs of burning or overheating is a different matter and needs to be looked at as soon as possible. Do not ignore a burning smell or scorch marks near your board." },
        { q: "What is the difference between a repair and a replacement?", a: "A repair fixes a specific fault within an otherwise serviceable board. A replacement is needed when the board itself is outdated, undersized, or damaged to the point where repairing individual components is no longer practical or safe. We assess each board on its own merits and recommend what is genuinely needed rather than defaulting to replacement." },
        { q: "Do I need to upgrade my DB board if I am getting solar installed?", a: "Often yes. Solar panels and inverters add new circuits that need to be properly connected to your board. If your existing board does not have the capacity or the correct configuration for solar, an upgrade is required as part of the installation. We assess this during the initial site visit for any solar project." },
        { q: "How long does a DB board replacement take?", a: "Most residential board replacements are completed in a single day. Commercial replacements depend on the size and complexity of the installation. We will give you a clear timeline before we start so you can plan around any downtime." },
        { q: "Will my power be off during the work?", a: "Yes, for the duration of the work on the board your power will need to be off. For most repairs and upgrades this is a matter of a few hours. For full replacements it may be longer. We work as efficiently as possible to keep the downtime to a minimum and we will let you know in advance what to expect." },
        { q: "Do I get a COC after DB board work?", a: "Yes. A Certificate of Compliance is issued on completion of every DB board repair, upgrade or replacement we carry out. This is a legal requirement for electrical work in South Africa and is important for your insurance and any future property transaction." },
        { q: "Can an old DB board affect my insurance?", a: "Yes. Many insurers will not pay out on electrical-related claims if the installation is found to be non-compliant or if there is no valid COC. An outdated or faulty board that has not been inspected can leave you exposed. Getting it assessed and a COC issued puts you in a much stronger position." },
        { q: "What areas do you cover?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Durbanville and Cape Town. Our main base is in Somerset West so our response times across the Helderberg are especially fast." },
        { q: "How do I book an assessment?", a: "Call us or send a message. If your board is showing warning signs right now, let us know and we will treat it as a priority. For planned upgrades we will arrange a site visit at a time that suits you." }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ElectricalContractor",
        "name": "EAR Engineering",
        "telephone": "021 855 4462",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Abelia St, Heldervue",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "postalCode": "7130",
            "addressCountry": "ZA"
        },
        "currenciesAccepted": "ZAR",
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Durbanville", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "DB Board Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DB Board Repairs" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DB Board Upgrades" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DB Board Replacements" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surge Protection Installation" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": dbFaqs.map(faq => ({
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

            <title>DB Board Upgrades and Repairs in Somerset West and Stellenbosch | EAR Engineering</title>
            <meta name="description" content="DB board tripping or outdated? EAR Engineering repairs, upgrades and replaces distribution boards across Somerset West, Stellenbosch and the Helderberg. Get a quote." />
            <link rel="canonical" href="https://earengineering.co.za/services/electrical-services/db-board-upgrades-and-repairs" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Book Assessment"
                mobileCtaIcon={<FaWrench className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            DB Board Upgrades and Repairs in <span className="text-[#FFCA08]">Somerset West</span>, <span className="text-[#FFCA08]">Stellenbosch</span> and the Helderberg
                        </>
                    }
                    subtitle="Your distribution board is the heart of your property's electrical system. When it stops working, everything stops. We assess, repair and upgrade DB boards quickly, cleanly and completely to code."
                    image="/Work Photos/db_board_hero.png"
                    ctaText="Book a DB Board Assessment"
                    ctaIcon={<FaWrench className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Introduction Section using Cards */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Is Your DB Board Causing Problems?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <h3 className="text-xl font-extrabold text-white mb-4">Hidden Strains on Older Boards</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4">
                                    Most homeowners never think about their DB board until a breaker trips. Older properties in the Helderberg and Boland frequently have boards installed decades ago. They were not designed to handle modern electrical loads, let alone solar panels, a generator, or air conditioning running simultaneously.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <h3 className="text-xl font-extrabold text-white mb-4">Risks of Cheap Components</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4">
                                    Newer properties can also have issues. A board that was undersized for the property, fitted with cheap components, or installed without proper compliance can cause the same problems as a decades-old analogue board. Left too long, faulty breakers are a serious fire risk.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            If you are adding solar panels or a generator to your property, your DB board may need to be upgraded as part of that installation. See our <Link href="/services/solar-installation" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">solar installation services</Link>.
                        </div>
                    </div>
                </section>

                {/* Our DB Board Services */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Our DB Board Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We handle the full range of DB board work for residential and commercial clients:
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            {[
                                { title: "DB Board Repairs", icon: FaScrewdriverWrench, desc: "If a specific breaker is tripping repeatedly, a circuit has stopped working, or you've noticed unusual sounds/smells, we will diagnose the fault and repair it. We tell you honestly if a repair is all that is needed." },
                                { title: "DB Board Upgrades", icon: FaWrench, desc: "If your existing board is too small for your current load, we upgrade boards to modern standards with correctly rated breakers, proper earthing and surge protection where needed." },
                                { title: "DB Board Replacements", icon: FaCircleExclamation, desc: "Some boards are beyond repair or so outdated that replacement is the safer and more cost-effective option. We remove the old board and install a new one sized properly for your property." },
                                { title: "Surge Protection Installation", icon: FaBoltLightning, desc: "Power surges from the grid, load shedding switching events, or lightning can damage equipment. Surge protection fitted at the DB board level gives your entire property a layer of protection." }
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

                        <div className="mt-12 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-[#015CAB] mb-4">COC After DB Board Work</h3>
                            <p>Any DB board repair, upgrade or replacement requires a Certificate of Compliance to be issued on completion. Our registered electricians issue the COC as part of every job. Learn more about <Link href="/services/electrical-services/coc" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">what a COC involves</Link>.</p>
                        </div>
                    </div>
                </section>

                {/* Signs Your DB Board Needs Attention */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Signs Your DB Board Needs Attention
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Not sure whether your board needs a look? Here are the most common warning signs:
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100 mb-8">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Warning Sign</th>
                                        <th className="py-5 px-6 font-bold text-lg">What It Could Mean</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3"><FaTriangleExclamation className="text-red-500 w-5 h-5 flex-shrink-0" />Breakers trip frequently or without explanation</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Overloaded circuits, a faulty breaker, or a wiring problem</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3"><FaTriangleExclamation className="text-red-500 w-5 h-5 flex-shrink-0" />A breaker trips and will not reset</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">A fault on that circuit that needs to be found and fixed first</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3"><FaTriangleExclamation className="text-red-500 w-5 h-5 flex-shrink-0" />Burning smell or scorch marks near the board</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium font-bold text-red-600">Serious fault that needs immediate attention</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3"><FaTriangleExclamation className="text-orange-500 w-5 h-5 flex-shrink-0" />Lights flickering or appliances running inconsistently</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Loose connections or an overloaded circuit</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3"><FaTriangleExclamation className="text-red-500 w-5 h-5 flex-shrink-0" />Board feels warm to the touch</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">A sign of overloading or a failing component</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3"><FaTriangleExclamation className="text-orange-500 w-5 h-5 flex-shrink-0" />Board is very old or has no labels on the breakers</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">Likely outdated and worth having assessed</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3"><FaTriangleExclamation className="text-blue-500 w-5 h-5 flex-shrink-0" />Adding solar, generator or new circuits</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium">The existing board may not have capacity for the new load</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            If any of these sound familiar, do not wait for a bigger problem to develop. Call us and we will come out, assess the board, and give you a straight answer about what needs to be done.
                        </div>
                    </div>
                </section>

                {/* How the Process Works with Image */}
                <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden z-10">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    How the Process Works
                                </h2>
                                <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                                    Here is what to expect when you book a DB board assessment or repair with EAR Engineering:
                                </p>
                                <div className="space-y-6 mt-4">
                                    {[
                                        { num: "1", title: "Get in touch", desc: "Call us or send a message. If it sounds urgent, we treat it as a priority." },
                                        { num: "2", title: "Site assessment", desc: "We visit your property, inspect the board, and identify the root cause." },
                                        { num: "3", title: "Clear recommendation", desc: "We tell you exactly what we recommend and what it costs before we start." },
                                        { num: "4", title: "The work", desc: "Our registered electricians repair, label, and test everything." },
                                        { num: "5", title: "COC issued", desc: "We issue your Certificate of Compliance on completion." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFCA08] flex items-center justify-center font-bold text-gray-900 text-lg shadow-sm">
                                                {step.num}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                                                <p className="text-gray-600 font-medium text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-6">
                                <div className="flex-grow min-h-[500px] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/20 group">
                                    <Image
                                        src="/Work Photos/db_board_hands.png"
                                        alt="EAR Engineering electrician repairing a DB board with a screwdriver"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/90 via-[#015CAB]/40 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Costs Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                DB Board Costs
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                The cost depends on the type of work required and the size of your property. Here is a general guide:
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Service</th>
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Typical Application</th>
                                        <th className="py-5 px-6 font-bold text-lg">Approximate Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Fault finding and repair</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Tripping breaker, faulty circuit</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R800 to R2,500</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">DB board upgrade</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Adding circuits, solar or generator connection</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R3,500 to R8,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">DB board replacement, residential</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Old or undersized board</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R6,000 to R15,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">DB board replacement, commercial</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Larger or more complex installations</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">Quoted on assessment</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Surge protection installation</td>
                                        <td className="py-4 px-6 text-gray-600 font-medium border-r border-gray-100">Added to existing or new board</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R1,500 to R4,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            These are starting point estimates. A more accurate price can be given once we have inspected your board and understood what the job involves. All work includes a Certificate of Compliance on completion.
                        </div>
                    </div>
                </section>

                {/* Areas We Serve */}
                <section className="bg-[#015CAB] py-20 text-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="flex flex-col items-center justify-center space-y-8 text-center">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                                Areas We Cover
                            </h2>
                            <p className="text-lg font-medium text-white/90 leading-relaxed max-w-2xl">
                                EAR Engineering is based in Somerset West and carries out DB board work across the Helderberg, Boland and greater Western Cape:
                            </p>

                            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 text-left w-full justify-items-center">
                                {[
                                    { loc: "Somerset West", path: "/somerset-west", desc: "Main Base: Repairs, upgrades and replacements" },
                                    { loc: "Stellenbosch", path: "/stellenbosch", desc: "Residential, commercial and industrial board work" },
                                    { loc: "Strand", path: "/strand", desc: "Residential repairs, upgrades and replacements" },
                                    { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Residential and small commercial board work" },
                                    { loc: "Franschhoek", path: "/franschhoek", desc: "Estate, guesthouse and residential properties" },
                                    { loc: "Paarl", path: "/paarl", desc: "Residential and commercial across Paarl Valley" },
                                    { loc: "Durbanville", path: "/Durbanville", desc: "Residential and rural properties" },
                                    { loc: "Cape Town", path: "/cape-town", desc: "Residential and commercial DB board work" },
                                ].map((location, i) => (
                                    <div key={i} className="flex flex-col gap-1 w-full text-center md:text-left">
                                        <Link href={`/locations${location.path}`} className="flex flex-col hover:text-[#FFCA08] transition-colors group">
                                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                                <FaCircleCheck className="text-[#FFCA08] w-5 h-5 flex-shrink-0" />
                                                <span className="font-bold text-white text-lg group-hover:text-[#FFCA08] transition-colors">{location.loc}</span>
                                            </div>
                                            <span className="text-sm text-blue-200">{location.desc}</span>
                                        </Link>
                                    </div>
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
                                { title: "Registered Electricians", icon: FaShieldHalved, desc: "DB board work must be carried out by a registered electrician. Every job we do is signed off with a Certificate of Compliance." },
                                { title: "Honest Assessments", icon: FaHandshake, desc: "We tell you whether a repair, upgrade or replacement is the right call. We do not recommend more work than your board actually needs." },
                                { title: "18 Years Local", icon: FaClockRotateLeft, desc: "We have worked on DB boards in properties of every age and type across the Helderberg and Boland, and we know what to look for." },
                                { title: "Fast Urgent Response", icon: FaCircleExclamation, desc: "A burning smell or a board that will not reset is not something to leave. We respond quickly to urgent electrical faults." },
                                { title: "All Under One Roof", icon: FaBolt, desc: "If your DB board upgrade is part of a bigger project, we handle it all with no need to coordinate multiple contractors." }
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
                        <div className="mt-8 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            If your board upgrade is connected to a generator installation, we handle both together. Learn more about <Link href="/services/electrical-services/generator-installation" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">generator installation</Link>.
                        </div>
                    </div>
                </section>

                <Reviews />

                <FAQ faqs={dbFaqs} />

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
