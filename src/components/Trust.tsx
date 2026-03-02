import Image from "next/image";
import { FaRegCircleCheck as CheckCircle2, FaShield as ShieldCheck, FaHelmetSafety as HardHat, FaIdBadge as FileBadge, FaFolderOpen as FolderGit2 } from "react-icons/fa6";

export default function Trust() {
    const points = [
        { title: "Founded 1994", desc: "Decades of trusted engineering experience.", icon: ShieldCheck },
        { title: "Local to Helderberg", desc: "Based in Somerset West, serving the broader Cape Town area.", icon: CheckCircle2 },
        { title: "Fully Compliant", desc: "COC issued where applicable for complete peace of mind.", icon: FileBadge },
        { title: "Owner-Led", desc: "Installs and complex projects directed by hands-on leadership.", icon: HardHat }
    ];

    const ImageBlock = () => (
        <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative group h-full">
            <Image
                src="/Work Photos/electrical installation job somerset west.webp"
                alt="Electrical installation project in Somerset West"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Fade from nothing at top to overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/80 via-[#015CAB]/40 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 pb-4 md:pb-10 text-white">
                <h3 className="text-2xl md:text-4xl font-black mb-2 md:mb-4 z-10 text-yellow-400">Since 1994</h3>
                <p className="text-sm md:text-xl font-medium leading-relaxed z-10 opacity-95 max-w-md">
                    Over 30 years of specialized engineering solutions for homes and businesses. Trust the experts to manage your project from concept to certificate of compliance.
                </p>

                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10 opacity-10">
                    <ShieldCheck className="w-24 h-24 md:w-48 md:h-48" />
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-gray-50 py-24 px-4 border-b border-gray-100">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                <div className="flex flex-col h-full">
                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                            A Legacy of Excellence in Engineering
                        </h2>

                        {/* Mobile Only Image */}
                        <div className="md:hidden mb-8">
                            <ImageBlock />
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Since our beginnings in Pretoria in 1994, to our move to Helderberg in 2006,
                            we've built our reputation on doing the job right the first time.
                        </p>
                    </div>

                    <div className="flex flex-col flex-grow gap-5">
                        {points.map((pt, i) => (
                            <div key={i} className="flex-1 flex items-center gap-5 p-5 lg:p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:border-[#015CAB]/30 transition-colors">
                                <div className="bg-[#015CAB]/5 p-3.5 rounded-xl text-[#015CAB] flex-shrink-0">
                                    <pt.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                                </div>
                                <div>
                                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{pt.title}</h4>
                                    <p className="text-gray-600 text-sm lg:text-base leading-snug">{pt.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <ImageBlock />
                </div>
            </div>
        </section>
    );
}
