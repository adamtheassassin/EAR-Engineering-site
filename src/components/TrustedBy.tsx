import { FaBuilding, FaCity, FaIndustry, FaHospital, FaLandmark, FaHotel } from "react-icons/fa6";

export default function TrustedBy() {
    const icons = [
        { Icon: FaBuilding, name: "Building" },
        { Icon: FaCity, name: "City" },
        { Icon: FaIndustry, name: "Industry" },
        { Icon: FaHospital, name: "Hospital" },
        { Icon: FaLandmark, name: "Landmark" },
        { Icon: FaHotel, name: "Hotel" }
    ];

    return (
        <section className="bg-white py-16 md:py-20 border-b border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
                    Trusted By
                </p>

                <div className="w-full relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                    <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <div className="flex animate-marquee gap-16 md:gap-24 pr-16 md:pr-24 items-center min-w-full shrink-0">
                            {[...icons, ...icons].map((item, i) => (
                                <div key={i} className="flex items-center justify-center text-gray-400 hover:text-cyan-600 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                                    <item.Icon className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                            ))}
                        </div>

                        <div className="flex animate-marquee gap-16 md:gap-24 pr-16 md:pr-24 items-center min-w-full shrink-0" aria-hidden="true">
                            {[...icons, ...icons].map((item, i) => (
                                <div key={i} className="flex items-center justify-center text-gray-400 hover:text-cyan-600 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                                    <item.Icon className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
