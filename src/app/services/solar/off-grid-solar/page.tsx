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
    FaSolarPanel,
    FaBatteryFull,
    FaPlugCircleBolt,
    FaHouseChimney,
    FaEarthAfrica,
    FaShieldHalved,
    FaScrewdriverWrench,
    FaWrench,
    FaCircleInfo,
    FaCircleCheck
} from "react-icons/fa6";

export default function SolarOffGridPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const offGridFaqs = [
        { q: "How much does an off-grid solar system cost?", a: "Off-grid systems are more expensive than equivalently sized grid-tied or hybrid systems because they need to cover your full energy needs independently, requiring larger battery banks and more careful system design. The cost depends heavily on your energy usage, the size of the property and the quality of components specified. A realistic quote can only be given after a proper site assessment and load analysis." },
        { q: "How do I know if my property is suitable for off-grid solar?", a: "The main factors are the solar resource at your location, your energy usage, whether you have suitable space for panels and batteries, and how your off-grid costs compare to the cost of connecting to the grid. Rural and remote properties in the Western Cape generally have an excellent solar resource, which works strongly in favour of off-grid viability." },
        { q: "What happens on cloudy days or during winter?", a: "A well-designed off-grid system accounts for seasonal variation in solar production. Battery capacity is sized to carry you through overcast periods, and the system design factors in the reduced winter sunshine hours of the Western Cape. For properties where extended low-sunlight periods are a genuine concern, a backup generator can be included as a secondary source to charge the batteries when solar generation is insufficient." },
        { q: "Do I need a backup generator with an off-grid system?", a: "Not always. It depends on your location, your energy needs and how much risk you are comfortable with. For a farm or agricultural operation where a power gap has real operational consequences, a backup generator is often worth including. For a weekend cottage with lower stakes, the battery sizing alone may be sufficient. We discuss this during the design phase." },
        { q: "Can an off-grid system power everything in my home or farm?", a: "Yes, with the right system size. Off-grid systems can power anything a grid connection can power, including high-demand appliances, agricultural equipment and irrigation pumps, as long as the system is designed with that load in mind. The key is accurate load assessment at the start of the design process." },
        { q: "How long do off-grid batteries last?", a: "Battery lifespan depends on the technology used and how heavily the batteries are cycled. For an off-grid system that cycles the batteries daily, most quality lithium battery systems are rated for several thousand cycles, which typically translates to eight to fifteen years of useful life before capacity drops significantly." },
        { q: "Is an off-grid solar installation certified?", a: "Yes. All electrical work in our off-grid installations is carried out by registered electricians and a Certificate of Compliance is issued on completion. This applies regardless of whether the property has a municipal grid connection." },
        { q: "How do I get started?", a: "Call us on 021 855 4462 or send us a message. Off-grid projects require more detailed planning than standard solar installations, so the first step is a conversation about your property, your energy needs and your goals. From there we can assess whether off-grid is the right solution and what a site visit would involve." }
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
        "areaServed": ["Durbanville", "Franschhoek", "Paarl", "Somerset West", "Stellenbosch", "Western Cape"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Off Grid Solutions",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Off-Grid Solar Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Off-Grid System Design" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agricultural Solar" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Property Solar" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": offGridFaqs.map(faq => ({
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

            <title>Off-Grid Solar Power Solutions Western Cape | EAR Engineering</title>
            <meta name="description" content="EAR Engineering designs and installs off-grid solar systems for farms, smallholdings and remote properties across the Western Cape. Call 021 855 4462." />
            <link rel="canonical" href="https://earengineering.co.za/services/solar/off-grid-solar" />

            <Header
                onOpenModal={() => setIsModalOpen(true)}
                mobileCtaText="Free Off-Grid Quote"
                mobileCtaIcon={<FaPlugCircleBolt className="w-5 h-5" />}
            />

            <main className="flex-1 overflow-hidden">
                <Hero
                    onOpenModal={() => setIsModalOpen(true)}
                    title={
                        <>
                            <span className="text-[#FFCA08]">Off-Grid Solar</span> Power Solutions in the Western Cape
                        </>
                    }
                    subtitle="For properties where grid connection is impractical or expensive, generating your own power legally and sustainably makes long-term financial sense."
                    image="/Background Images/Solarbackground residential.webp"
                    ctaText="Get a Free Off-Grid Quote"
                    ctaIcon={<FaPlugCircleBolt className="w-5 h-5" />}
                />

                <TrustedBy />

                {/* Who is it for? */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">
                            <div className="flex flex-col">
                                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                    Who Off-Grid Solar Is Right For
                                </h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4 text-lg">
                                    Not every property is connected to the municipal grid. Farms, smallholdings, remote cottages, agricultural operations and rural properties across the Western Cape often sit outside the reach of Eskom's infrastructure, or face connection costs that make grid power impractical. For these properties, an off-grid solar system is not a lifestyle choice. It is the most practical and cost-effective way to have reliable electricity.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                                    Even for properties that could connect to the grid, there is a growing number of clients who choose off-grid or near-off-grid systems as a deliberate financial decision. When you factor in the rising cost of grid electricity, generating your own power independently makes strong financial sense.
                                </p>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    Sometimes a <Link href="/services/solar" className="text-[#015CAB] underline hover:text-[#013f75] font-bold">hybrid system</Link> that dramatically reduces grid reliance is the better answer. We will tell you which makes more sense for your situation.
                                </p>
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/Work Photos/solar_off_grid_setup.png"
                                    alt="Off-grid solar panel array installed on a farm near Durbanville, Western Cape"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* What we cover in off grid */}
                <section className="py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                What We Cover in an Off-Grid Installation
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "System Design and Sizing", 
                                    icon: FaScrewdriverWrench, 
                                    desc: "Off-grid sizing requires careful planning. We size the panels, batteries and inverter to work reliably through your typical usage patterns and seasonal variations."
                                },
                                { 
                                    title: "Solar Panel Installation", 
                                    icon: FaSolarPanel, 
                                    desc: "Often roof-mounted on a farmhouse or ground-mounted arrays where a larger footprint is needed. We assess the best option."
                                },
                                { 
                                    title: "Battery Storage", 
                                    icon: FaBatteryFull, 
                                    desc: "We size the battery bank to cover your overnight needs and provide a meaningful buffer for cloudy periods."
                                },
                                { 
                                    title: "Off-Grid Inverter", 
                                    icon: FaPlugCircleBolt, 
                                    desc: "Off-grid systems require specialized inverters that manage battery cycles and regulate frequency independently of the utility grid."
                                },
                                { 
                                    title: "Electrical Certification", 
                                    icon: FaShieldHalved, 
                                    desc: "All wiring and distribution board connections are carried out by registered electricians and legally certified on completion for insurance.",
                                    link: "/services/electrical-services/coc"
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

                {/* Off grid vs Hybrid */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#015CAB] mb-6">
                                Off-Grid vs Hybrid: Understanding the Difference
                            </h2>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#015CAB] text-white">
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Factor</th>
                                        <th className="py-5 px-6 font-bold text-lg border-r border-[#01488c]">Off-Grid System</th>
                                        <th className="py-5 px-6 font-bold text-lg">Hybrid System</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { factor: "Grid connection", off: "None — fully independent", hyb: "Connected but minimised" },
                                        { factor: "Power source", off: "Solar and batteries only", hyb: "Solar, batteries and grid as backup" },
                                        { factor: "Low sunlight fallback", off: "Relies on battery reserves or backup generator", hyb: "Can draw from grid as a fallback" },
                                        { factor: "Best for", off: "Remote properties without grid access", hyb: "Urban and suburban properties on the grid" },
                                        { factor: "System sizing", off: "Must cover 100% of needs", hyb: "Can be sized more conservatively" }
                                    ].map((row, i) => (
                                        <tr key={i} className={`hover:bg-cyan-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                            <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-100 flex items-center gap-3">
                                                <FaCircleInfo className="text-[#FFCA08] flex-shrink-0" />
                                                {row.factor}
                                            </td>
                                            <td className="py-4 px-6 text-[#015CAB] font-bold border-r border-gray-100">{row.off}</td>
                                            <td className="py-4 px-6 text-gray-600 font-medium">{row.hyb}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-center text-gray-600 font-medium">
                            Need a hybrid system with grid backup? Check out our <Link href="/services/electrical-services/generator-installation" className="text-[#015CAB] underline font-bold hover:text-[#013f75] transition-colors">backup generator</Link> and grid solutions.
                        </div>
                    </div>
                </section>

                {/* How the Process Works */}
                <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                How the Process Works
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { num: "1", title: "Initial Consultation", desc: "We discuss your property, needs and location to assess off-grid viability." },
                                { num: "2", title: "Site Assessment", desc: "We visit your property, evaluate solar resources and assess where panels go." },
                                { num: "3", title: "System Design", desc: "We produce a system fully sized to your needs and calculate costs." },
                                { num: "4", title: "Installation", desc: "Our team installs panels, batteries, inverters and off-grid connections." },
                                { num: "5", title: "Commissioning", desc: "We test the complete system to ensure it meets your energy needs reliably." },
                                { num: "6", title: "Handover", desc: "We walk you through system maintenance and issue a COC." }
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
                                We design and install off-grid solar systems across the Western Cape, predominantly for rural and agricultural properties:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { loc: "Durbanville and Elgin Valley", path: "#", desc: "Farms, orchards, smallholdings and rural residential" },
                                { loc: "Franschhoek", path: "#", desc: "Wine farms, rural estates and remote cottages" },
                                { loc: "Paarl", path: "#", desc: "Agricultural operations and rural properties" },
                                { loc: "Sir Lowry's Pass", path: "#", desc: "Remote residential and agricultural properties" },
                                { loc: "Somerset West Outskirts", path: "/somerset-west", desc: "Smallholdings and semi-rural residential" },
                                { loc: "Broader Western Cape", path: "#", desc: "We assess remote projects on a case-by-case basis" },
                            ].map((location, i) => (
                                location.path !== "#" ? (
                                    <Link key={i} href={`/areas${location.path}`} className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-colors border border-white/10 group flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <FaCircleCheck className="text-[#FFCA08] w-4 h-4" />
                                            <span className="font-bold text-white text-lg group-hover:text-[#FFCA08] transition-colors">{location.loc}</span>
                                        </div>
                                        <span className="text-sm text-blue-100 leading-relaxed">{location.desc}</span>
                                    </Link>
                                ) : (
                                    <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/10 flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <FaCircleCheck className="text-[#FFCA08] w-4 h-4" />
                                            <span className="font-bold text-white text-lg">{location.loc}</span>
                                        </div>
                                        <span className="text-sm text-blue-100 leading-relaxed">{location.desc}</span>
                                    </div>
                                )
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
                                { title: "Custom Design", icon: FaScrewdriverWrench, desc: "We design off-grid systems from scratch based on your actual energy needs, not a standard template. Getting sizing right is critical." },
                                { title: "Rural Experience", icon: FaEarthAfrica, desc: "Six years of solar experience across varied property types, including rural/agricultural where demands are different." },
                                { title: "Proper Certification", icon: FaShieldHalved, desc: "Every off-grid installation is properly certified regardless of whether the property is on the municipal grid." },
                                { title: "Honest Advice", icon: FaWrench, desc: "If a hybrid system makes more financial sense for your property, we will tell you." },
                                { title: "Local Helderberg Base", icon: FaHouseChimney, desc: "We are based in the Helderberg, putting us within reasonable distance of most rural properties we service." }
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

                <FAQ faqs={offGridFaqs} />

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
