"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const [step, setStep] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Focus trap
    useEffect(() => {
        if (!isOpen) {
            setStep(1);
            setIsSuccess(false);
            return;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            // Basic focus trap can be implemented here if full standard needed
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden"; // Prevent background scroll

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 transition-opacity">
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl relative"
            >
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {isSuccess ? (
                    <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">Request Received</h2>
                        <p className="text-gray-600 mb-6">
                            Thank you! We'll contact you within 1 hour (during business hours) to discuss your free quote.
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 transition"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col h-full hide-scrollbar">
                        <div className="mb-6 border-b pb-4">
                            <h2 id="modal-title" className="text-xl font-bold text-gray-900">Request a Free Quote</h2>
                            <div className="flex gap-2 mt-4">
                                {[1, 2, 3].map(s => (
                                    <div key={s} className={`h-2 flex-1 rounded-full ${step >= s ? 'bg-cyan-600' : 'bg-gray-200'}`} />
                                ))}
                            </div>
                        </div>

                        <div className="flex-1">
                            {step === 1 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-gray-800">1. What service do you need?</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {["Electrical", "Aircon & Refrigeration", "Solar"].map(service => (
                                            <label key={service} className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-cyan-600 hover:bg-cyan-50 transition">
                                                <input type="radio" name="service" required value={service} className="w-5 h-5 text-cyan-600" />
                                                <span className="ml-3 font-medium text-gray-900">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <label className="flex items-center mt-4 p-4 bg-red-50 border border-red-100 rounded-lg cursor-pointer">
                                        <input type="checkbox" name="emergency" className="w-5 h-5 text-red-600" />
                                        <span className="ml-3 font-medium text-red-800">This is an emergency (Priority Support)</span>
                                    </label>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                    <h3 className="font-semibold text-gray-800">2. Tell us more</h3>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Describe the issue or project</label>
                                        <textarea required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none min-h-[100px]" placeholder="e.g. My inverter is beeping..."></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Timeframe</label>
                                        <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none bg-white">
                                            <option>As soon as possible</option>
                                            <option>Within a week</option>
                                            <option>Planning phase</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                    <h3 className="font-semibold text-gray-800">3. Your details</h3>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Full Name</label>
                                        <input type="text" required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                                        <input type="tel" required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Email Address</label>
                                        <input type="email" required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Area / Suburb</label>
                                        <input type="text" required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" placeholder="e.g. Somerset West" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 flex justify-between gap-3">
                            {step > 1 ? (
                                <button type="button" onClick={() => setStep(s => s - 1)} className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-2">
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>
                            ) : <div></div>}

                            {step < 3 ? (
                                <button type="button" onClick={() => setStep(s => s + 1)} className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-700 flex items-center gap-2 transition ml-auto">
                                    Next <ArrowRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button type="submit" className="px-6 py-3 bg-[#ff6b00] text-white rounded-lg font-bold hover:bg-[#e66000] flex items-center gap-2 transition ml-auto shadow-md">
                                    Submit Request <CheckCircle className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
