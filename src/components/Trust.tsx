import { FaRegCircleCheck as CheckCircle2, FaShield as ShieldCheck, FaHelmetSafety as HardHat, FaIdBadge as FileBadge, FaFolderOpen as FolderGit2 } from "react-icons/fa6";

export default function Trust() {
    const points = [
        { title: "Founded 1994", desc: "Decades of trusted engineering experience.", icon: ShieldCheck },
        { title: "Local to Helderberg", desc: "Based in Somerset West, serving the broader Cape Town area.", icon: CheckCircle2 },
        { title: "Fully Compliant", desc: "COC issued where applicable for complete peace of mind.", icon: FileBadge },
        { title: "Owner-Led", desc: "Installs and complex projects directed by hands-on leadership.", icon: HardHat },
        { title: "Project Managed", desc: "Start-to-finish oversight, zero guesswork.", icon: FolderGit2 }
    ];

    return (
        <section className="bg-gray-50 py-20 px-4 border-b border-gray-100">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center text-cyan-600 font-bold mb-4 tracking-wider uppercase text-sm border-b-2 border-cyan-200 pb-1">
                        Why Choose Us
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        A Legacy of Excellence in Engineering
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                        Since our beginnings in Pretoria in 1994, to our move to Helderberg in 2006,
                        we've built our reputation on doing the job right the first time.
                    </p>

                    <div className="space-y-6">
                        {points.map((pt, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-cyan-200 transition-colors">
                                <div className="bg-cyan-50 p-3 rounded-lg text-cyan-600 self-start">
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

                <div className="relative">
                    <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Using a generic building/engineering placeholder or solid brand color if no img given. The instructions didn't specify an image here, but a branded block creates visual balance. */}
                        <div className="w-full h-full bg-cyan-800 flex flex-col justify-center text-white p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCwgaGVpZ2h0PSc4JyBmaWxsPScjZmZmJyBmaWxsLW9wYWNpdHk9JzAuMScvPgo8cGF0aCBkPSdNMCAwaDhyOHYtOEgweicgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjA1JyAvPgo8L3N2Zz4=')]"></div>

                            <h3 className="text-4xl font-black mb-4 z-10 text-yellow-400">Since 1994</h3>
                            <p className="text-xl font-medium leading-relaxed z-10 opacity-90">
                                Over 30 years of specialized engineering solutions for homes and businesses. Trust the experts to manage your project from concept to certificate of compliance.
                            </p>

                            <div className="absolute bottom-12 right-12 z-10 opacity-20">
                                <ShieldCheck className="w-48 h-48" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
