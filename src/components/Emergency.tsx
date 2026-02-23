interface EmergencyProps {
    onOpenModal: () => void;
}

export default function Emergency({ onOpenModal }: EmergencyProps) {
    return (
        <section className="bg-[#ff6b00] text-white py-12 md:py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -m-16 opacity-10">
                <svg fill="currentColor" width="200" height="200" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm1 16h-2v-2h2v2zm0-4h-2V9h2v5z" /></svg>
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 shadow-sm text-shadow">
                    Power outage? AC down? Inverter fault?
                </h2>
                <p className="text-xl md:text-2xl font-semibold opacity-90 mb-8 tracking-wide">
                    Don't wait. We have technicians available.
                </p>
                <button
                    onClick={onOpenModal}
                    className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-transform transform hover:scale-105 active:scale-95 shadow-xl inline-flex items-center gap-2 tracking-wide uppercase"
                >
                    Priority Request
                </button>
                <p className="mt-6 text-sm md:text-base font-medium opacity-80 backdrop-blur-sm inline-block px-4 py-1 rounded-full bg-black/10">
                    * Rapid response during standard business hours
                </p>
            </div>
        </section>
    );
}
