import Image from "next/image";
import { FaRegCircleCheck as CheckCircle2, FaShield as ShieldCheck, FaHelmetSafety as HardHat, FaIdBadge as FileBadge, FaFolderOpen as FolderGit2 } from "react-icons/fa6";

export default function Trust() {
    const points = [
        { title: "Founded 1994", desc: "Decades of trusted engineering experience.", icon: ShieldCheck },
        { title: "Local to Helderberg", desc: "Based in Somerset West, serving the broader Cape Town area.", icon: CheckCircle2 },
        { title: "Fully Compliant", desc: "COC issued where applicable for complete peace of mind.", icon: FileBadge },
        { title: "Owner-Led", desc: "Installs and complex projects directed by hands-on leadership.", icon: HardHat },
        { title: "Project Managed", desc: "Start-to-finish oversight, zero guesswork.", icon: FolderGit2 }
    ];

    const ImageBlock = () => (
        <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative group">
            <Image
                src="/Work Photos/electrical installation job somerset west.webp"
                alt="Electrical installation project in Somerset West"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#015CAB]/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#015CAB]/70 via-[#015CAB]/20 to-transparent"></div>

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
        <section className="bg-gray-50 py-20 px-4 border-b border-gray-100">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col">
                    <div className="inline-flex items-center text-[#015CAB] font-bold mb-4 tracking-wider uppercase text-sm border-b-2 border-[#015CAB]/20 pb-1 w-fit">
                        Why Choose Us
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        A Legacy of Excellence in Engineering
                    </h2>

                    {/* Mobile Only Image */}
                    <div className="md:hidden mb-8">
                        <ImageBlock />
                    </div>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                        Since our beginnings in Pretoria in 1994, to our move to Helderberg in 2006,
                        we've built our reputation on doing the job right the first time.
                    </p>

                    <div className="space-y-6">
                        {points.map((pt, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-[#015CAB]/30 transition-colors">
                                <div className="bg-[#015CAB]/5 p-3 rounded-lg text-[#015CAB] self-start">
                                    <pt.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">{pt.title}</h4>
                                    <p className="text-gray-600">{pt.desc}</p>
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
