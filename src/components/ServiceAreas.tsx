import { FaLocationDot as MapPin } from "react-icons/fa6";

export default function ServiceAreas() {
    const areas = [
        "Somerset West",
        "Strand",
        "Gordon's Bay",
        "Macassar",
        "Stellenbosch",
        "Kuils River",
        "Brackenfell",
        "Durbanville",
        "Bellville",
        "Parow",
        "Cape Town CBD",
        "Southern Suburbs"
    ];

    return (
        <section className="bg-gray-900 py-24 border-t border-gray-800 relative z-10 overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCwgaGVpZ2h0PSc4JyBmaWxsPScjZmZmJyBmaWxsLW9wYWNpdHk9JzAuMSIvPgo8cGF0aCBkPSdNMCAwaDhyOHYtOEgweicgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjA1Jy8+Cjwvc3ZnPg==')] opacity-20 filter invert"></div>
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-20">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 flex justify-center items-center gap-4">
                    <MapPin className="text-cyan-500 w-12 h-12" />
                    Where We Operate
                </h2>
                <p className="text-xl text-gray-300 font-medium mb-12">
                    Based in Somerset West, we offer comprehensive services across the Helderberg Basin and Greater Cape Town area.
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {areas.map((area, i) => (
                        <span key={i} className="bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md text-cyan-50 font-bold px-6 py-3 rounded-full border border-white/10 shadow-lg">
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
