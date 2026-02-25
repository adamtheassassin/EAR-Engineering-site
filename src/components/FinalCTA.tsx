import { FaFileLines as FileText, FaPhone as Phone } from "react-icons/fa6";

interface FinalCTAProps {
    onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
    return (
        <section className="bg-[#FFCA08] py-20 text-gray-900 border-t border-[#E5B507] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCwgaGVpZ2h0PSc4JyBmaWxsPScjZmZmJyBmaWxsLW9wYWNpdHk9JzAuMSIvPgo8cGF0aCBkPSdNMCAwaDhyOHYtOEgweicgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjA1Jy8+Cjwvc3ZnPg==')] pointer-events-none filter invert"></div>

            <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                    Ready to Get Started?
                </h2>
                <p className="text-xl md:text-2xl font-bold mb-10 opacity-90">
                    Professional electrical, aircon & solar in Helderberg + Cape Town.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        onClick={onOpenModal}
                        className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-5 rounded-2xl font-black text-xl transition-transform transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-3"
                    >
                        <FileText className="w-6 h-6" /> Free Quote
                    </button>
                    <a href="tel:0769737329" className="w-full sm:w-auto bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md border-2 border-gray-900 px-8 py-5 rounded-2xl font-black text-xl transition-all shadow-md flex items-center justify-center gap-3">
                        <Phone className="w-6 h-6" /> 076 973 7329
                    </a>
                </div>

                <p className="mt-8 font-semibold text-gray-800 tracking-wide text-sm opacity-90">
                    * 1-Hour Callbacks during business hours. Call for immediate emergencies.
                </p>
            </div>
        </section>
    );
}
