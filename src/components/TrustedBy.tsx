import Image from "next/image";

export default function TrustedBy() {
    const logos = [
        { src: "/Client Logos/Asset+1@4xj.webp", alt: "Client Logo 1" },
        { src: "/Client Logos/De-Zalze-Logo-high-resolution-1.webp", alt: "Client Logo 2" },
        { src: "/Client Logos/Dros-Logo-Transparent_Cropped.webp", alt: "Client Logo 3" },
        { src: "/Client Logos/JPS-Logo-website-qcccyx66910i4xeragcnhoeye6idzwr43zi3t32lfk.webp", alt: "Client Logo 4" },
        { src: "/Client Logos/Val-de-Vine-logo.webp", alt: "Client Logo 5" }
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
                    Trusted By
                </p>

                <div className="w-full relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

                    <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <div className="flex animate-marquee gap-16 md:gap-24 pr-16 md:pr-24 items-center min-w-full shrink-0">
                            {[...logos, ...logos, ...logos].map((item, i) => (
                                <div key={`logo-1-${i}`} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer w-32 h-16 md:w-48 md:h-24 relative">
                                    <Image src={item.src} alt={item.alt} fill className="object-contain" />
                                </div>
                            ))}
                        </div>

                        <div className="flex animate-marquee gap-16 md:gap-24 pr-16 md:pr-24 items-center min-w-full shrink-0" aria-hidden="true">
                            {[...logos, ...logos, ...logos].map((item, i) => (
                                <div key={`logo-2-${i}`} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer w-32 h-16 md:w-48 md:h-24 relative">
                                    <Image src={item.src} alt={item.alt} fill className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
