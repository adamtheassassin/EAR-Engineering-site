"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { getWhatsAppLink } from "@/lib/constants";
import TrustedBy from "@/components/TrustedBy";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import Image from "next/image";
import {
    FaSnowflake,
    FaWrench,
    FaWind,
    FaArrowsRotate,
    FaBoltLightning,
    FaFileContract,
    FaBuilding,
    FaStore,
    FaBed,
    FaHouseChimney,
    FaUtensils,
    FaWarehouse,
    FaShieldHalved,
    FaChartLine,
    FaRegClock,
    FaHandshake,
    FaScaleBalanced,
    FaPhoneVolume,
    FaCircleCheck
} from "react-icons/fa6";

export default function CommercialACPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const commercialFaqs = [
        { q: "Do you offer maintenance contracts for businesses?", a: "Yes. We set up servicing on a schedule that fits your business, usually once or twice a year depending on how hard the units work. It keeps everything running through peak season and gives you one company to call for anything aircon related." },
        { q: "How do you work out what system a commercial space needs?", a: "We look at the size and layout of the space, how many people use it, how much heat comes in from the sun and equipment, and your trading hours. Getting this right matters even more in a commercial space, because an undersized system will run flat out and still struggle. We work it out during a free site visit." },
        { q: "Can you service the aircon across a whole estate or complex?", a: "Yes, this is a big part of what we do. We have been the sole aircon provider for De Zalze Estate for ten years, handling installs, servicing and repairs across the properties. If you manage multiple units, we can take that off your plate." },
        { q: "What happens if a unit breaks down in peak season?", a: "We treat commercial breakdowns as urgent. We carry common parts so a lot of faults are fixed on the first visit, and we work to get you cooling again as fast as possible." },
        { q: "Can you install ducted or multi-zone systems?", a: "Yes. For larger offices, retail floors and estates we install ducted and multi-unit systems that cool several areas and let you control each zone separately." },
        { q: "Will the work disrupt our trading hours?", a: "We plan around your schedule wherever we can, including early starts or quieter periods, so the work causes as little disruption to your customers and staff as possible." },
        { q: "Can commercial aircon run off solar?", a: "Yes, and it works well for businesses. Cooling demand is highest on hot, sunny days, which is exactly when a solar system produces the most power. Running your aircon off solar takes a real chunk off your electricity bill." },
        { q: "Which areas do you cover for commercial aircon?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Durbanville and Cape Town. Our base in Somerset West means a quick response across the Helderberg." }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": "EAR Engineering",
        "telephone": "021 855 4462",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "60 Abelia St, Somerset West",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "postalCode": "7130",
            "addressCountry": "ZA"
        },
        "currenciesAccepted": "ZAR",
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Durbanville", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Commercial Air Conditioning Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Air Conditioning Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Aircon Maintenance Contracts" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Aircon Repairs" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ducted and Multi-Unit Air Conditioning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aircon Replacements and Upgrades" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": commercialFaqs.map(faq => ({
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

            <title>Commercial Air Conditioning Somerset West & Stellenbosch | Office, Retail & Estate Aircon | EAR Engineering</title>
            <meta name="description" content="EAR Engineering installs, services and maintains commercial air conditioning for offices, retail, guesthouses and estates across Somerset West, Stellenbosch and the Helderberg. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/commercial-air-conditioning" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Get a Commercial Quote"
                mobileCtaIcon={<FaBuilding className="w-5 h-5" />}
            />

            <main className="flex-1 overflow-hidden">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    whatsappLink={getWhatsAppLink("Commercial Air Conditioning")}
                    title={
                        <>
                            <span className="text-[#FFCA08]">Commercial Air Conditioning</span> in Somerset West, Stellenbosch and the Helderberg
                        </>
                    }
                    subtitle="Keeping a business comfortable is not the same job as cooling a bedroom. Offices, shops, guesthouses and estates need systems that run all day, every day, and a contractor who keeps them running. That is the work we have been doing here for years."
                    image="/Work Photos/ac installation pool.webp"
                    ctaText="Get a Commercial Quote"
                    ctaIcon={<FaBuilding className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Downtime Costs You */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    When the Aircon Goes Down, So Does Your Business
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    In a shop, a warm day with no cooling sends customers back out the door. In an office, the work slows down and the complaints start. In a guesthouse, an uncomfortable room turns into a bad review that sits online for years. Air conditioning in a business is part of keeping the place running and protecting your reputation.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Commercial systems also run far harder than home units, so they need proper servicing to keep going. A planned maintenance schedule costs a fraction of an emergency callout in peak season, and it keeps your running costs predictable.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    We handle the full picture for businesses, from sizing and installing the right system to keeping it serviced and stepping in fast when something breaks.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/ac_background_stellenbosch.webp"
                                    alt="Commercial air conditioning installed by EAR Engineering in Stellenbosch"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commercial Services */}
                <section className="py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Commercial Air Conditioning Services
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Everything your business needs from one contractor, under one point of contact:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "System Design and Installation",
                                    icon: FaSnowflake,
                                    desc: "We assess your space, work out the cooling load properly, and recommend a system that fits how the space is used. Getting the sizing right from the start means lower running costs and even cooling across the whole area.",
                                    link: "/ac-installation"
                                },
                                {
                                    title: "Multi-Unit and Ducted Systems",
                                    icon: FaWind,
                                    desc: "For larger offices, retail floors and estates, we install multi-unit and ducted systems that cool several areas from one setup, with separate control over each zone."
                                },
                                {
                                    title: "Servicing and Maintenance Contracts",
                                    icon: FaFileContract,
                                    desc: "We set up regular servicing on a schedule that suits your business, so units are cleaned and checked before peak season rather than after they fail. One point of contact, one company that knows your site."
                                },
                                {
                                    title: "Repairs and Breakdowns",
                                    icon: FaWrench,
                                    desc: "When a unit goes down we treat it as urgent, because we know what it costs you to be without it. We carry common parts to get you running again quickly.",
                                    link: "/ac-repair"
                                },
                                {
                                    title: "Replacements and Upgrades",
                                    icon: FaArrowsRotate,
                                    desc: "Old commercial units are expensive to run and prone to failing. We advise honestly on when a replacement will pay for itself in lower electricity bills and fewer callouts."
                                },
                                {
                                    title: "Aircon Paired with Solar",
                                    icon: FaBoltLightning,
                                    desc: "Cooling is a big part of a commercial electricity bill, and it is needed most on hot, sunny days when your panels produce the most. Running your aircon off solar cuts that cost.",
                                    link: "/solar"
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

                {/* Sectors We Serve */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Businesses We Look After
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                We work across most kinds of commercial property in the Helderberg and Boland:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Offices", icon: FaBuilding, desc: "Comfortable, evenly cooled workspaces that keep staff productive without a huge electricity bill at the end of the month." },
                                { title: "Retail and Showrooms", icon: FaStore, desc: "Cooling that keeps customers in the store for longer and keeps stock in good condition through the heat." },
                                { title: "Guesthouses and Hotels", icon: FaBed, desc: "Quiet, reliable units that keep guests comfortable and your reviews where you want them." },
                                { title: "Estates and Rental Agencies", icon: FaHouseChimney, desc: "One contractor for every unit across the estate, with servicing handled quietly in the background." },
                                { title: "Restaurants and Hospitality", icon: FaUtensils, desc: "Systems built to cope with heat from the kitchen, full rooms and long trading hours." },
                                { title: "Warehouses and Workshops", icon: FaWarehouse, desc: "Cooling for larger spaces where a standard home unit simply will not cope." }
                            ].map((s, i) => (
                                <div key={i} className="flex gap-5 items-start bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-200 transition-colors">
                                    <div className="bg-white p-4 rounded-full shadow border border-gray-200 text-[#015CAB] flex-shrink-0">
                                        <s.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                        <p className="text-gray-600 font-medium text-sm leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Real Projects / De Zalze */}
                <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden z-10">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Work Photos/ac_background_stellenbosch.webp"
                            alt="Commercial air conditioning project in Stellenbosch"
                            fill
                            quality={90}
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-white/50 mix-blend-screen"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/40 to-gray-50"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-12 items-stretch">
                            <div className="flex flex-col">
                                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 uppercase md:normal-case">
                                    Real Projects.<br />Real Results.
                                </h2>
                                <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                                    We have been installing and maintaining air conditioning for businesses and estates across the Helderberg and Boland for over 18 years. Here is the kind of long-term work we do:
                                </p>

                                <div className="flex-grow">
                                    <div className="h-full bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-[#015CAB] transition-transform hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">De Zalze Estate, Stellenbosch</h3>
                                        <p className="text-gray-700 font-medium mb-4">
                                            For the past 10 years, EAR Engineering has been the sole air conditioning provider for De Zalze Estate, working through the estate's rental agency. Our role covers new installations for properties across the estate, routine servicing and maintenance, fault diagnosis and repairs, and fast breakdown support when something stops working.
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            The fact that De Zalze has kept us on exclusively for a decade tells you the kind of service we provide. Estates and rental agencies stay with us because we show up, we do the job properly, and we are easy to reach when they need us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-6">
                                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/20 group">
                                    <Image
                                        src="/Work Photos/ac installation pool.webp"
                                        alt="Estate air conditioning installation at De Zalze by EAR Engineering"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/90 via-[#015CAB]/40 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white space-y-2">
                                        <div className="inline-block px-3 py-1 bg-[#FFCA08] text-gray-900 text-sm font-bold rounded-lg mb-2 shadow-sm">Estate Management</div>
                                        <h4 className="text-3xl font-black">10 Year Partnership</h4>
                                        <p className="font-medium text-white/90">Sole provider of air conditioning installs, servicing and repairs across De Zalze Estate's rental properties.</p>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between flex-grow">
                                    <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                        If you run an estate, a rental portfolio or a commercial property and need a dependable air conditioning contractor, we would be glad to talk about what that could look like for you.
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-6 py-4 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 rounded-xl font-extrabold transition-all transform hover:scale-105 active:scale-95 shadow-xl w-full text-center"
                                    >
                                        Talk to Us About Your Site
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Maintenance Pays Off */}
                <section className="py-20 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Why a Maintenance Plan Pays for Itself
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                A serviced unit is cheaper to run and far less likely to fail you when you need it most. Here is what a regular plan does for your business:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Fewer Breakdowns", icon: FaShieldHalved, desc: "Most failures are caught and fixed during a routine visit, long before they leave a room, or a whole floor, without cooling." },
                                { title: "Lower Running Costs", icon: FaChartLine, desc: "A clean, well charged unit uses noticeably less electricity than a neglected one. Across a row of units, that adds up fast." },
                                { title: "Budgeting You Can Plan", icon: FaFileContract, desc: "A set servicing schedule means no surprise emergency bills in the middle of summer. You know what it costs and when it happens." }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#015CAB] p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                    <div className="w-12 h-12 bg-[#FFCA08] text-[#015CAB] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner mb-6">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-white mb-3">{item.title}</h3>
                                    <p className="text-blue-50 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                How We Work With Businesses
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Site Assessment", desc: "We visit your premises, look at the spaces and how they are used, and take proper measurements." },
                                { num: "2", title: "Proposal", desc: "You get a clear proposal with the right system or service plan and the full cost laid out." },
                                { num: "3", title: "Scheduling", desc: "We plan the work around your trading hours so we cause as little disruption as possible." },
                                { num: "4", title: "Install or Service", desc: "Our team does the work properly, tests everything, and cleans up before they leave." },
                                { num: "5", title: "Ongoing Support", desc: "We stay on as your contractor for servicing and any repairs, so you have one number to call." }
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
                                We install, service and repair commercial air conditioning across the Helderberg, Boland and greater Cape Town:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { loc: "Somerset West", path: "/somerset-west", desc: "Office, retail and guesthouse aircon" },
                                { loc: "Stellenbosch", path: "/stellenbosch", desc: "Estate, hospitality and office systems" },
                                { loc: "Strand", path: "/strand", desc: "Retail and small commercial aircon" },
                                { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Guesthouse and commercial cooling" },
                                { loc: "Franschhoek", path: "/franschhoek", desc: "Estate, hotel and restaurant systems" },
                                { loc: "Paarl", path: "/paarl", desc: "Commercial and industrial aircon" },
                                { loc: "Durbanville", path: "/durbanville", desc: "Office and retail air conditioning" },
                                { loc: "Cape Town", path: "/cape-town", desc: "Commercial installs and service contracts" },
                            ].map((location, i) => {
                                const activePaths = ["/somerset-west", "/stellenbosch", "/strand", "/gordons-bay", "/franschhoek", "/paarl", "/durbanville", "/cape-town"];
                                const isClickable = activePaths.includes(location.path);
                                const content = (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <FaCircleCheck className="w-4 h-4 text-[#FFCA08]" />
                                            <span className={`font-bold text-lg text-white transition-colors ${isClickable ? 'underline decoration-2 underline-offset-4 group-hover:text-[#FFCA08]' : ''}`}>{location.loc}</span>
                                        </div>
                                        <span className="text-sm text-blue-100 leading-relaxed">{location.desc}</span>
                                    </>
                                );

                                if (isClickable) {
                                    return (
                                        <Link key={i} href={`/areas${location.path}`} className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-colors border border-white/10 group flex flex-col gap-2">
                                            {content}
                                        </Link>
                                    );
                                }

                                return (
                                    <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/10 flex flex-col gap-2">
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Why Businesses Choose EAR Engineering
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { title: "10 Year Estate Partnership", icon: FaHandshake, desc: "De Zalze Estate has used us as their sole aircon provider for a decade. Businesses trust us because we show up and do the job properly." },
                                { title: "One Contractor, Three Trades", icon: FaBoltLightning, desc: "Aircon, electrical and solar under one roof, so the whole job is handled by one company you can hold accountable." },
                                { title: "We Work Around You", icon: FaRegClock, desc: "We schedule installs and services around your trading hours to keep disruption to your customers and staff to a minimum." },
                                { title: "Registered and Qualified", icon: FaShieldHalved, desc: "Every electrical connection is done by a registered electrician and every install is done to standard." },
                                { title: "Fast on Breakdowns", icon: FaPhoneVolume, desc: "We treat a commercial breakdown as urgent, because we know exactly what downtime is costing you." },
                                { title: "Honest Sizing and Advice", icon: FaScaleBalanced, desc: "We recommend the system that suits your space and budget, not the one with the best margin for us." }
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
                        <div className="text-center">
                            <span className="font-medium text-gray-600">Need a single home unit instead? See our <Link href="/ac-installation" className="text-[#015CAB] underline font-bold hover:text-[#013f75] transition-colors">air conditioning installation</Link> and <Link href="/ac-repair" className="text-[#015CAB] underline font-bold hover:text-[#013f75] transition-colors">aircon repair</Link> pages.</span>
                        </div>
                    </div>
                </section>

                <FAQ faqs={commercialFaqs} />

                <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
            </main>

            <Footer />

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                preselectedCategory="Aircon"
            />
        </>
    );
}
