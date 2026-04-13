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
    FaClipboardCheck,
    FaHouse,
    FaHouseChimneyUser,
    FaSolarPanel,
    FaCarBattery,
    FaTriangleExclamation,
    FaCircleExclamation,
    FaShieldHalved,
    FaClockRotateLeft,
    FaWrench,
    FaHandshake,
    FaBolt,
    FaUserTie,
    FaCircleCheck
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function COCPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cocFaqs = [
        { q: "What is an electrical Certificate of Compliance?", a: "A COC is a document issued by a registered electrician confirming that the electrical installation on a property has been inspected and meets the safety standards required by South African law. It covers the fixed electrical installation, meaning the wiring, DB board, plug points, light fittings and similar components, but not individual appliances." },
        { q: "Is a COC legally required when selling a property?", a: "Yes. A valid electrical COC is a legal requirement for property transfers in South Africa. The seller must provide one. Without it, the transfer cannot be registered. If your existing COC was issued more than two years ago, or if electrical work has been carried out since it was issued, a new one will be needed." },
        { q: "How long does a COC last?", a: "A COC does not have a fixed expiry date, but it becomes invalid if any electrical work is carried out on the property after it is issued, or if a significant amount of time has passed and the installation has changed. For property sales, most conveyancers require a COC that is no more than two years old. When in doubt, a fresh inspection gives everyone peace of mind." },
        { q: "Can any electrician issue a COC?", a: "No. Only a registered electrician who is registered with the Department of Labour as an approved inspection authority can legally issue a COC in South Africa. Always check that the person issuing your certificate is properly registered. EAR Engineering's electricians are fully registered and qualified to issue COCs." },
        { q: "What happens if my property fails the inspection?", a: "The electrician will give you a clear list of what needs to be repaired or replaced before the certificate can be issued. We quote for the repairs, carry out the work once approved, and then issue the certificate. It is not a pass or fail situation so much as a process of getting the installation to the required standard." },
        { q: "Do I need a new COC if I have just had solar or a generator installed?", a: "Yes. Any new electrical work requires a COC for that work. If we carry out the solar or generator installation, we include the COC as part of the job. If the work was done by someone else, we can carry out the inspection and issue the certificate." },
        { q: "How quickly can you do a COC inspection?", a: "We aim to accommodate urgent requests wherever possible. For properties where a transfer or tenancy is time-sensitive, call us directly and explain the situation. We will do our best to get to you as quickly as we can." },
        { q: "Do you issue COCs for commercial properties?", a: "Yes. We issue COCs for residential and commercial properties. Commercial inspections are typically more involved and are quoted based on the size and complexity of the installation." },
        { q: "What areas do you cover?", a: "We cover Somerset West, Strand, Gordon's Bay, Stellenbosch, Franschhoek, Paarl, Grabouw and Cape Town. Our main base is in Somerset West, so our response times across the Helderberg are especially fast." },
        { q: "How do I get started?", a: "Call us or send a message and we will arrange a convenient time for the inspection. Let us know if there is a deadline we should be aware of and we will do our best to work around it." }
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
        "areaServed": ["Somerset West", "Strand", "Gordon's Bay", "Stellenbosch", "Franschhoek", "Paarl", "Grabouw", "Cape Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Electrical Compliance Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Certificate of Compliance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "COC Inspection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Repairs for Compliance" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": cocFaqs.map(faq => ({
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

            <title>Electrical Certificate of Compliance (COC) Somerset West | EAR Engineering</title>
            <meta name="description" content="Need an electrical COC in Somerset West or Stellenbosch? EAR Engineering issues compliance certificates for homes and businesses across the Helderberg. Book today." />
            <link rel="canonical" href="https://earengineering.co.za/services/electrical-services/coc" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Book COC"
                mobileCtaIcon={<FaClipboardCheck className="w-5 h-5" />}
            />

            <main className="flex-1">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            Electrical Certificate of Compliance (COC) in <span className="text-[#FFCA08]">Somerset West</span> and <span className="text-[#FFCA08]">Stellenbosch</span>
                        </>
                    }
                    subtitle="Whether your property is going on the market, a tenant is moving in, you've had electrical work done, or your insurer needs one, we inspect and issue COCs quickly and correctly."
                    image="/Work Photos/coc_hero_image.png"
                    ctaText="Book Your COC Inspection"
                    ctaIcon={<FaClipboardCheck className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Introduction Section using Cards */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Need a COC? Here Is How to Get It Sorted.
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <h3 className="text-xl font-extrabold text-white mb-4">A Straightforward Process</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4">
                                    A lot of people only think about their COC when something is forcing them to act—usually a property transfer that cannot proceed without one, or a landlord or insurer asking for documentation. Getting a COC doesn't have to be complicated. You call a registered electrician, they inspect the installation, fix anything that does not meet the required standard, and issue the certificate.
                                </p>
                            </div>

                            <div className="bg-[#015CAB] p-8 rounded-2xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left border border-[#01418A]">
                                <h3 className="text-xl font-extrabold text-white mb-4">Timing Matters</h3>
                                <p className="text-blue-50 font-medium leading-relaxed mb-4">
                                    The part that catches people out is using an electrician who is not registered to issue COCs, or leaving it too late before a transfer deadline. Both create unnecessary stress and delays. We handle COC inspections regularly across the Helderberg and Boland and we understand that timing often matters.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            Our registered electricians also handle all electrical repairs and installations if work is needed before your COC can be issued. See <Link href="/services/electrical-services" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">our electrical services</Link>.
                        </div>
                    </div>
                </section>

                {/* When Do You Need a COC? */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                When Do You Need a COC?
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                There are four main situations where a COC is required or strongly recommended:
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            {[
                                { title: "Selling a Property", icon: FaHouse, desc: "A valid electrical COC is a legal requirement when selling a property in South Africa. The seller is responsible for providing one, and the transfer process cannot be completed without it. If your existing COC is more than two years old, or if any electrical work has been done since it was issued, a new one will be required." },
                                { title: "Renting Out a Property", icon: FaHouseChimneyUser, desc: "Landlords are required to ensure their rental properties are electrically compliant. A COC gives you documentation that the installation has been inspected and meets the required safety standard. It also protects you as a landlord if an electrical fault causes damage or injury on the property." },
                                { title: "After New Electrical Work", icon: FaWrench, desc: "Any time new electrical work is carried out on a property, a COC should be issued for that work. This applies to new installations, additions, DB board upgrades, solar installations and generator connections. If we carry out the work, we issue the COC as part of the job." },
                                { title: "Insurance Purposes", icon: FaShieldHalved, desc: "Many insurers require proof of electrical compliance, particularly when insuring older properties or after an electrical-related claim. A valid COC is the document that provides that proof. If your insurer has asked for one, we can arrange an inspection quickly." }
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

                        <div className="mt-12 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            Note: This includes <Link href="/services/solar-installation" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">solar installations</Link> and <Link href="/services/electrical-services/generator-installation" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">generator installations</Link>.
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-white border-t border-gray-200 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                How the Process Works
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Getting your COC from EAR Engineering is straightforward:
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Get in touch", desc: "Call us or send a message. Tell us roughly how old the property is and whether any electrical work has been done recently. This helps us give you an idea of what to expect." },
                                { num: "2", title: "Schedule the inspection", desc: "We arrange a time to visit the property and carry out the inspection. For most properties this takes an hour or two." },
                                { num: "3", title: "Inspection and assessment", desc: "Our registered electrician inspects the electrical installation and identifies anything that does not meet the current standard." },
                                { num: "4", title: "Repairs if needed", desc: "If any issues are found, we provide a clear quote for the repairs required before the certificate can be issued. Once you approve, we carry out the work." },
                                { num: "5", title: "COC issued", desc: "Once the installation meets the required standard, we issue your Certificate of Compliance. You receive the documentation you need for your sale, rental, insurance or records." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-start bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
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
                        <div className="mt-12 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            In straightforward cases where the installation is already compliant, the certificate can be issued on the same visit. Where repairs are needed, the timeline depends on what is required.
                        </div>
                    </div>
                </section>

                {/* What if the Inspection Finds Problems? */}
                <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden z-10">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 uppercase md:normal-case">
                                    What If The Inspection Finds Problems?
                                </h2>
                                <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                                    This is the question most people are anxious about. The honest answer is that older properties in particular often have some items that need attention before a COC can be issued. This is not unusual and it is not a disaster.
                                </p>
                                <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                                    When our electrician finds something that needs to be fixed, we will tell you clearly what it is, why it matters, and what it will cost to repair. You will not be presented with a surprise invoice. We give you the information you need to make a decision, carry out the agreed repairs, and then issue the certificate.
                                </p>
                                <div className="mt-4 text-left">
                                    <p className="text-lg text-gray-700 font-medium mb-4">
                                        <strong>Common issues include:</strong> outdated DB boards, missing earth connections, non-compliant wiring, and incorrectly installed plug points or light fittings. Most are straightforward to fix.
                                    </p>
                                    <p className="text-lg text-gray-700 font-medium">
                                        We also handle <Link href="/services/electrical-services" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">DB board upgrades</Link> and rewiring as part of the same job.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-6">
                                <div className="flex-grow min-h-[400px] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/20 group">
                                    <Image
                                        src="/Work Photos/db_board_inspection.png"
                                        alt="EAR Engineering electrician inspecting a DB board during a COC inspection"
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
                                COC Costs
                            </h2>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                The cost of a COC inspection depends on the size of the property and whether any repairs are needed. Here is a general guide:
                            </p>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Service</th>
                                        <th className="py-5 px-6 font-bold text-lg">Approximate Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">COC inspection, small residential property</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R800 to R1,500</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">COC inspection, larger residential property</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">R1,500 to R3,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">COC inspection, commercial property</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">Quoted on assessment</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100">Electrical repairs before COC (if needed)</td>
                                        <td className="py-4 px-6 font-bold text-[#015CAB]">Quoted separately after inspection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center max-w-3xl mx-auto text-lg text-gray-700 font-medium">
                            These figures cover the inspection and the certificate itself. If repairs are needed before the certificate can be issued, those are quoted separately and clearly before any work begins. Call us for a more accurate estimate based on your property.
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
                                EAR Engineering issues COC certificates for properties across the Helderberg, Boland and greater Western Cape:
                            </p>

                            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 text-left w-full justify-items-center">
                                {[
                                    { loc: "Somerset West", path: "/somerset-west", desc: "Main Base: Residential, rental, commercial" },
                                    { loc: "Stellenbosch", path: "/stellenbosch", desc: "Residential, wine estates, commercial portfolios" },
                                    { loc: "Strand", path: "/strand", desc: "Residential and commercial properties" },
                                    { loc: "Gordon's Bay", path: "/gordons-bay", desc: "Residential and holiday homes" },
                                    { loc: "Franschhoek", path: "/franschhoek", desc: "Estates, guesthouses and residential properties" },
                                    { loc: "Paarl", path: "/paarl", desc: "Residential and commercial across Paarl Valley" },
                                    { loc: "Grabouw", path: "/grabouw", desc: "Residential and rural properties" },
                                    { loc: "Cape Town", path: "/cape-town", desc: "Residential and commercial properties" },
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
                                { title: "Registered Electricians", icon: FaShieldHalved, desc: "Only a registered electrician can legally issue a COC in South Africa. Every inspection we carry out is done by a qualified, registered electrician." },
                                { title: "18 Years Local", icon: FaClockRotateLeft, desc: "We have issued COCs for hundreds of properties across the Helderberg and Boland area, from townhouses to commercial buildings." },
                                { title: "Repairs In-House", icon: FaWrench, desc: "If the inspection finds issues, we fix them ourselves. Save time and avoid coordinating multiple contractors from start to certificate." },
                                { title: "Honest About Work", icon: FaHandshake, desc: "We tell you clearly what is required and what it will cost before any repair work starts. No inflated defect lists or unnecessary work." },
                                { title: "Understand Timelines", icon: FaClockRotateLeft, desc: "We know that a COC is often needed quickly because a transfer or tenancy is waiting. We do our best to accommodate urgent requests." },
                                { title: "All Under One Roof", icon: FaBolt, desc: "Electrical, solar, and COCs seamlessly handled so we sign off the exact system we install with utmost confidence." }
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

                <FAQ faqs={cocFaqs} />

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
