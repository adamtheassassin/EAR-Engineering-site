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
    FaScrewdriverWrench,
    FaWrench,
    FaSnowflake,
    FaDroplet,
    FaVolumeHigh,
    FaTemperatureArrowDown,
    FaPlugCircleCheck,
    FaBoltLightning,
    FaBroom,
    FaGaugeHigh,
    FaShieldHalved,
    FaRegClock,
    FaPhoneVolume,
    FaCircleCheck,
    FaCircleExclamation,
    FaWind
} from "react-icons/fa6";

export default function ACRepairPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const acRepairFaqs = [
        { q: "My aircon is not cooling. What is the most likely problem?", a: "The most common cause is low refrigerant gas, often from a slow leak that has built up over time. A dirty filter or a failing compressor can also be behind it. We check the whole system rather than guessing, because simply topping up the gas without finding the leak means you will be calling us again in a month." },
        { q: "Do you repair aircons you did not install?", a: "Yes. We work on most makes and models no matter who fitted them. If you have any paperwork on the unit it helps, but we can work without it." },
        { q: "How much does an aircon repair cost?", a: "It depends entirely on what is wrong. A filter clean or clearing a blocked drain is a small job, while a new compressor is a much bigger one. We always give you a clear price after we have diagnosed the fault, before any work starts, so there are no surprises." },
        { q: "How often should I service my air conditioner?", a: "Once a year is enough for most homes. For rental properties, guesthouses and offices where the units run hard all summer, twice a year is better. Regular servicing keeps running costs down and catches small problems before they leave you without cooling on a hot day." },
        { q: "My aircon is leaking water inside. Is that serious?", a: "It is worth sorting quickly. It usually means a blocked drainage pipe or a frozen coil, and the water can damage walls, ceilings or furniture if it keeps going. The repair itself is normally straightforward once we find the cause." },
        { q: "Is it worth repairing an old aircon or should I replace it?", a: "It depends on the unit's age and the cost of the repair. If a unit is old, inefficient and needs an expensive part, a new inverter unit often makes more financial sense because it costs far less to run. We will give you an honest view either way." },
        { q: "Why has my electricity bill gone up even though the aircon still works?", a: "A unit that is low on gas or clogged with dust has to work much harder to cool the same room, and that effort shows up on your bill. A service usually brings it back to running efficiently." },
        { q: "What areas do you cover for aircon repairs?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Durbanville and Cape Town. We are based in Somerset West, so our response times across the Helderberg are quick." }
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
            "name": "Air Conditioning Repair and Servicing",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Conditioning Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aircon Fault Finding" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aircon Gas Regas" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Conditioning Servicing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aircon Maintenance" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": acRepairFaqs.map(faq => ({
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

            <title>AC Repair Somerset West, Strand & Stellenbosch | Aircon Repairs & Servicing Near Me | EAR Engineering</title>
            <meta name="description" content="Aircon not cooling, leaking or making a noise? EAR Engineering repairs and services air conditioners across Somerset West, Strand, Stellenbosch and the Helderberg. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/ac-repair" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Book an Aircon Repair"
                mobileCtaIcon={<FaScrewdriverWrench className="w-5 h-5" />}
            />

            <main className="flex-1 overflow-hidden">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    whatsappLink={getWhatsAppLink("Aircon Repair")}
                    title={
                        <>
                            Air Conditioning <span className="text-[#FFCA08]">Repair</span> in Somerset West, Strand and Stellenbosch
                        </>
                    }
                    subtitle="When your aircon stops cooling on the hottest day of the year, you want someone who can get out to you quickly and sort it properly. We repair and service air conditioners across the Helderberg, whether we installed them or not."
                    image="/Work Photos/ac_background_stellenbosch.webp"
                    ctaText="Book an Aircon Repair"
                    ctaIcon={<FaScrewdriverWrench className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* A Broken Aircon Costs You */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    When Your Aircon Stops Working, Everything Gets Harder
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    An air conditioner that has stopped cooling, started dripping water, or begun making a strange noise is telling you something is wrong. Left alone, a small fault usually turns into a bigger one. A unit that is low on gas keeps running and running, which pushes up your electricity bill and wears out the compressor, and the compressor is the most expensive part to replace.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    For a home, that means an uncomfortable bedroom or lounge right when you need the cooling most. For a guesthouse or office, it means uncomfortable guests and staff, and that reflects on you. The sooner we look at it, the cheaper and simpler the fix tends to be.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    We work on most makes and models, and we keep common parts on the van, so a lot of faults get sorted in a single visit.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/acinstallation hero.webp"
                                    alt="EAR Engineering technician repairing an air conditioner in Somerset West"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Repairs We Handle */}
                <section className="py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Air Conditioning Repairs We Handle
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Whatever your unit is doing, or not doing, we can find the cause and fix it:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Aircon Not Cooling",
                                    icon: FaTemperatureArrowDown,
                                    desc: "If your unit is running but the air coming out is warm or barely cool, it usually points to low refrigerant gas, a dirty filter, or a failing compressor. We find the actual cause instead of just topping up gas and sending you on your way."
                                },
                                {
                                    title: "Water Leaks",
                                    icon: FaDroplet,
                                    desc: "A unit dripping water inside the room normally means a blocked drainage pipe or a frozen coil. We clear the blockage, work out why it happened, and make sure it does not come straight back."
                                },
                                {
                                    title: "Strange Noises",
                                    icon: FaVolumeHigh,
                                    desc: "Rattling, grinding or buzzing sounds are worth checking early. They often mean a loose part or a fan motor starting to fail. Catching it now is far cheaper than waiting for it to seize up."
                                },
                                {
                                    title: "Gas Top-Ups and Regas",
                                    icon: FaSnowflake,
                                    desc: "A unit that has slowly lost its cooling power is often low on refrigerant. We look for the leak first, repair it, and then regas the system so you are not paying for gas that escapes again a month later."
                                },
                                {
                                    title: "Electrical Faults",
                                    icon: FaBoltLightning,
                                    desc: "A unit that trips the power, will not switch on, or shuts off by itself often has an electrical fault. Our registered electricians handle this side safely.",
                                    link: "/electrical-services"
                                },
                                {
                                    title: "Unit Will Not Switch On",
                                    icon: FaPlugCircleCheck,
                                    desc: "Sometimes the problem is the remote, the wiring, or the control board. We work through it step by step and tell you honestly whether a repair makes sense or a replacement is the better call.",
                                    link: "/ac-installation"
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

                {/* Servicing and Maintenance */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Aircon Servicing and Maintenance
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Most aircon breakdowns can be avoided. A unit that gets serviced once a year runs more efficiently, uses less electricity and lasts years longer. Here is what a service covers:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Filter and Coil Cleaning",
                                    icon: FaBroom,
                                    desc: "Dust and grime build up on the filters and coils, which makes the unit work harder and cool less. A proper clean restores the airflow and keeps your running costs down. It also keeps the air in the room cleaner, which matters if anyone in the home has allergies."
                                },
                                {
                                    title: "Gas and Pressure Check",
                                    icon: FaGaugeHigh,
                                    desc: "We check the refrigerant level and the pressures so the unit is cooling at full strength. Catching a slow gas leak early saves the compressor from running under strain and failing on you later."
                                },
                                {
                                    title: "Electrical and Component Check",
                                    icon: FaShieldHalved,
                                    desc: "We go over the wiring, connections and moving parts so nothing is working loose or starting to wear. Small things get tightened and sorted before they turn into a callout on a hot day."
                                },
                                {
                                    title: "Drainage Check",
                                    icon: FaDroplet,
                                    desc: "We make sure the drainage is running clear, so the unit is not going to start leaking water into the room a few weeks down the line."
                                }
                            ].map((m, i) => (
                                <div key={i} className="flex gap-6 items-start bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:border-blue-200 transition-colors">
                                    <div className="bg-white p-4 rounded-full shadow border border-gray-200 text-[#015CAB] flex-shrink-0">
                                        <m.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{m.title}</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            <p>For rental properties, guesthouses and estates where units run hard all season, twice a year works better. We set up servicing schedules so you are not the one keeping track of it. If you look after several units, take a look at our <Link href="/commercial-air-conditioning" className="text-[#015CAB] underline font-bold hover:text-[#013f75] transition-colors">commercial air conditioning services</Link>.</p>
                        </div>
                    </div>
                </section>

                {/* Common Problems Table */}
                <section className="py-20 bg-gray-50 border-t border-gray-200">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Common Aircon Problems and What They Usually Mean
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Here are the symptoms we get called out for most often and the faults usually behind them:
                            </p>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c] w-1/2">What You Notice</th>
                                        <th className="py-5 px-6 font-bold text-lg w-1/2">What It Usually Means</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { sign: "Unit runs but the room stays warm", ind: "Low refrigerant gas, a dirty filter or a failing compressor" },
                                        { sign: "Water dripping inside the room", ind: "Blocked drainage pipe or a frozen coil" },
                                        { sign: "Aircon trips the power when it starts", ind: "An electrical fault or a struggling compressor" },
                                        { sign: "Rattling or grinding noise", ind: "A loose part or a worn fan motor" },
                                        { sign: "Bad smell when the unit runs", ind: "Mould or dirt built up in the filters and coils" },
                                        { sign: "Unit switches off on its own", ind: "Overheating, a sensor fault or a wiring problem" },
                                        { sign: "Electricity bill higher than usual", ind: "The unit working too hard due to a dirty or undercharged system" }
                                    ].map((row, i) => (
                                        <tr key={i} className={`hover:bg-cyan-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                            <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3">
                                                <FaCircleExclamation className="text-[#FFCA08] flex-shrink-0" />
                                                {row.sign}
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 font-medium">
                                                {row.ind}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center text-lg text-gray-600 font-medium">
                            If your unit is doing any of these, call us on <a href="tel:0218554462" className="text-[#015CAB] font-bold underline">021 855 4462</a>. The sooner we look at it, the less it usually costs to put right.
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-white border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                How a Repair Works
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Get in Touch", desc: "Call or message us and tell us what your unit is doing. A photo of the unit or any error light helps." },
                                { num: "2", title: "Diagnosis", desc: "We come out, find the actual fault, and check the rest of the unit while we are there." },
                                { num: "3", title: "Clear Quote", desc: "We tell you what is wrong and what it costs before we do any work." },
                                { num: "4", title: "Repair", desc: "We fix it, often on the same visit, and test that it is cooling properly again." },
                                { num: "5", title: "Honest Advice", desc: "If a unit is old and the repair is throwing good money after bad, we will tell you straight." }
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
                        <p className="mt-12 text-center text-gray-600 font-medium max-w-2xl mx-auto">
                            Most home repairs are sorted in one visit. Older units, or ones that need a part ordered in, may need a quick follow-up.
                        </p>
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
                                We repair and service air conditioners across the Helderberg, Boland and greater Cape Town:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { loc: "Somerset West", path: "/somerset-west", desc: "Aircon repair, servicing and fault finding" },
                                { loc: "Stellenbosch", path: "/stellenbosch", desc: "Home, estate and commercial aircon repairs" },
                                { loc: "Strand", path: "/strand", desc: "Residential aircon repair and servicing" },
                                { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Residential aircon repair and regas" },
                                { loc: "Franschhoek", path: "/franschhoek", desc: "Estate and home aircon servicing" },
                                { loc: "Paarl", path: "/paarl", desc: "Residential and commercial aircon repairs" },
                                { loc: "Durbanville", path: "/durbanville", desc: "Home aircon repair and maintenance" },
                                { loc: "Cape Town", path: "/cape-town", desc: "Residential and commercial aircon repairs" },
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
                                Why Clients Choose EAR Engineering
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { title: "We Pick Up the Phone", icon: FaPhoneVolume, desc: "When your aircon dies in a heatwave, you do not want to be left on voicemail. We are local and we are reachable." },
                                { title: "18 Years in the Helderberg", icon: FaRegClock, desc: "We have been repairing and servicing aircons around here for a long time. We know the common faults and the local conditions." },
                                { title: "All Makes and Models", icon: FaScrewdriverWrench, desc: "We work on units no matter the brand or who installed them. You do not need to track down the original installer." },
                                { title: "Registered Electricians", icon: FaShieldHalved, desc: "The electrical side of an aircon repair is done by registered electricians, so it is safe and done right the first time." },
                                { title: "Honest About Repairs", icon: FaCircleCheck, desc: "If a clean is all your unit needs, that is what we charge you for. If it is beyond saving, we will say so rather than billing you for a repair that will not last." },
                                { title: "Repairs, Servicing and Installs", icon: FaWind, desc: "We handle the full life of your aircon, from a new install to yearly servicing and the odd repair.", link: "/ac-installation" }
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
                            <span className="font-medium text-gray-600">Looking for a brand new system instead? See our <Link href="/ac-installation" className="text-[#015CAB] underline font-bold hover:text-[#013f75] transition-colors">air conditioning installation</Link> page.</span>
                        </div>
                    </div>
                </section>

                <FAQ faqs={acRepairFaqs} />

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
