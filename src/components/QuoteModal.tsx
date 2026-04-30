"use client";

import { useState, useEffect, useRef } from "react";
import { FaXmark as X, FaCircleCheck as CheckCircle, FaArrowRight as ArrowRight, FaArrowLeft as ArrowLeft } from "react-icons/fa6";

export type ServiceCategory = "Electrical" | "Aircon" | "Solar" | "";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    preselectedCategory?: ServiceCategory;
}

export default function QuoteModal({ isOpen, onClose, preselectedCategory }: QuoteModalProps) {
    const defaultStep = preselectedCategory ? 2 : 1;
    const [step, setStep] = useState(defaultStep);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form state
    const [category, setCategory] = useState<ServiceCategory>(preselectedCategory || "");
    const [subService, setSubService] = useState("");
    const [details, setDetails] = useState("");
    const [timeframe, setTimeframe] = useState("As soon as possible");

    // AC installation specific state
    const [acType, setAcType] = useState("");
    const [acBrand, setAcBrand] = useState("Not sure");


    // Contact state
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [area, setArea] = useState("");

    const modalRef = useRef<HTMLDivElement>(null);

    // Categories
    const categories: ServiceCategory[] = ["Electrical", "Aircon", "Solar"];

    // Sub-services depending on category
    const subServicesMap: Record<string, string[]> = {
        "Electrical": [
            "New Installation / Wiring",
            "DB Board Replacement",
            "Fault Finding & Repairs",
            "COC Certificate",
            "Generator Installation",
            "Other"
        ],
        "Aircon": [
            "New AC Installation",
            "AC Repair & Fault Finding",
            "Routine Service & Maintenance",
            "Commercial Air Conditioning",
            "Other"
        ],
        "Solar": [
            "New Solar System",
            "Battery Backup Solution",
            "System Upgrade / Expansion",
            "Commercial Solar",
            "Other"
        ]
    };

    const [isInitialized, setIsInitialized] = useState(false);
    const prevIsOpen = useRef(isOpen);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("quoteModalState");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.step) setStep(parsed.step);
                if (parsed.category) setCategory(parsed.category);
                if (parsed.subService) setSubService(parsed.subService);
                if (parsed.details) setDetails(parsed.details);
                if (parsed.timeframe) setTimeframe(parsed.timeframe);
                if (parsed.name) setName(parsed.name);
                if (parsed.phone) setPhone(parsed.phone);
                if (parsed.email) setEmail(parsed.email);
                if (parsed.area) setArea(parsed.area);
                if (parsed.isSuccess) setIsSuccess(parsed.isSuccess);
                if (parsed.acType) setAcType(parsed.acType);
                if (parsed.acBrand) setAcBrand(parsed.acBrand);
            } catch (e) {
                console.error("Failed to parse quote modal state", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to local storage whenever state changes
    useEffect(() => {
        if (!isInitialized) return;
        const stateToSave = {
            step, category, subService, details, timeframe, name, phone, email, area, isSuccess, acType, acBrand
        };
        localStorage.setItem("quoteModalState", JSON.stringify(stateToSave));
    }, [isInitialized, step, category, subService, details, timeframe, name, phone, email, area, isSuccess, acType, acBrand]);

    // Handle opening logic and preselected categories
    useEffect(() => {
        if (isOpen && !prevIsOpen.current) {
            // Reset the form if it was in success state
            if (isSuccess) {
                setStep(preselectedCategory ? 2 : 1);
                setCategory(preselectedCategory || "");
                setSubService("");
                setDetails("");
                setTimeframe("As soon as possible");
                setName("");
                setPhone("");
                setEmail("");
                setArea("");
                setAcType("");
                setAcBrand("Not sure");
                setIsSuccess(false);
                localStorage.removeItem("quoteModalState");
            }
            // If opening from a new service page, override previous progress for category/step
            else if (preselectedCategory && preselectedCategory !== category) {
                setCategory(preselectedCategory);
                setStep(2);
                setSubService("");
            }
        }
        prevIsOpen.current = isOpen;
    }, [isOpen, preselectedCategory, isSuccess, category]);

    // Focus trap
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const isAcInstall = category === "Aircon" && subService === "New AC Installation";
    const totalSteps = isAcInstall ? 5 : 4;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (step < totalSteps) {
            setStep(step + 1);
            return;
        }

        setIsSubmitting(true);
        try {
            const payload = {
                serviceCategory: category,
                serviceType: subService,
                description: details,
                timeframe: timeframe,
                customerName: name,
                customerPhone: phone,
                customerEmail: email,
                customerArea: area,
                ...(isAcInstall && {
                    acType: acType,
                    acBrand: acBrand
                })
            };

            const response = await fetch("https://hook.eu2.make.com/1rz5w2sjex28nl2qf7ffofqpe7bn819d", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setIsSuccess(true);
                if (typeof window !== "undefined" && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                        event: "form_submission",
                        formType: "free_quote",
                        serviceCategory: category,
                    });
                }
            } else {
                alert("There was an error submitting your request. Please try again or call us directly.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was a network error. Please try again or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNext = () => {
        if (step === 1 && !category) {
            alert("Please select a service category.");
            return;
        }
        if (step === 2 && !subService) {
            alert("Please select the specific service you need.");
            return;
        }
        if (step === 3 && isAcInstall && !acType) {
            alert("Please select the type of AC unit (Split unit, Inverter, or Not sure).");
            return;
        }
        const isDetailsStep = (step === 3 && !isAcInstall) || (step === 4 && isAcInstall);
        if (isDetailsStep && !details) {
            const txt = document.getElementById("details_textarea") as HTMLTextAreaElement;
            if (txt && !txt.checkValidity()) {
                txt.reportValidity();
                return;
            }
        }
        setStep(s => s + 1);
    };

    const handleBack = () => {
        setStep(s => s - 1);
    };

    const startStep = preselectedCategory ? 2 : 1;
    const progressChunks = [];
    for (let i = startStep; i <= totalSteps; i++) {
        progressChunks.push(i);
    }
    const currentProgressIndex = progressChunks.indexOf(step);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 transition-opacity">
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
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
                                {progressChunks.map((s, idx) => (
                                    <div key={s} className={`h-2 flex-1 rounded-full ${idx <= currentProgressIndex ? 'bg-cyan-600' : 'bg-gray-200'}`} />
                                ))}
                            </div>
                        </div>

                        <div className="flex-1">
                            {step === 1 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-gray-800">1. What service do you need?</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {categories.map(c => (
                                            <label key={c} className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${category === c ? 'border-cyan-600 bg-cyan-50' : 'hover:border-cyan-600 hover:bg-cyan-50'}`}>
                                                <input type="radio" name="service" required checked={category === c} onChange={() => { setCategory(c); setSubService(""); }} className="w-5 h-5 text-cyan-600 focus:ring-cyan-600" />
                                                <span className="ml-3 font-medium text-gray-900">{c}</span>
                                            </label>
                                        ))}
                                    </div>

                                </div>
                            )}

                            {step === 2 && category && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                    <h3 className="font-semibold text-gray-800">
                                        {preselectedCategory ? "1." : "2."} What do you need help with?
                                    </h3>
                                    <div className="grid grid-cols-1 gap-3 max-h-[40vh] overflow-y-auto pr-1">
                                        {(subServicesMap[category] || []).map(sub => (
                                            <label key={sub} className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${subService === sub ? 'border-cyan-600 bg-cyan-50' : 'hover:border-cyan-600 hover:bg-cyan-50'}`}>
                                                <input type="radio" name="subService" required checked={subService === sub} onChange={() => setSubService(sub)} className="w-5 h-5 text-cyan-600 focus:ring-cyan-600" />
                                                <span className="ml-3 font-medium text-gray-900">{sub}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 3 && isAcInstall && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                    <h3 className="font-semibold text-gray-800">
                                        {preselectedCategory ? "2." : "3."} AC Installation Preferences
                                    </h3>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">What type of AC unit do you prefer?</label>
                                        <div className="grid grid-cols-1 gap-3">
                                            {["Split Unit", "Inverter", "Not sure"].map(type => (
                                                <label key={type} className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${acType === type ? 'border-cyan-600 bg-cyan-50' : 'hover:border-cyan-600 hover:bg-cyan-50'}`}>
                                                    <input type="radio" name="acType" required checked={acType === type} onChange={() => setAcType(type)} className="w-5 h-5 text-cyan-600 focus:ring-cyan-600" />
                                                    <span className="ml-3 font-medium text-gray-900">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium mb-1">Preferred AC Brand</label>
                                        <select value={acBrand} onChange={(e) => setAcBrand(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none bg-white">
                                            <option>Not sure</option>
                                            <option>Samsung</option>
                                            <option>LG</option>
                                            <option>Daikin</option>
                                            <option>Midea</option>
                                            <option>Alliance</option>
                                            <option>Hisense</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {((step === 3 && !isAcInstall) || (step === 4 && isAcInstall)) && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                    <h3 className="font-semibold text-gray-800">
                                        {preselectedCategory ? (isAcInstall ? "3." : "2.") : (isAcInstall ? "4." : "3.")} Tell us more
                                    </h3>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Describe the issue or project</label>
                                        <textarea id="details_textarea" required value={details} onChange={(e) => setDetails(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none min-h-[100px]" placeholder="e.g. Need a quote for a 5kW inverter and panels..."></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">When do you need this done?</label>
                                        <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none bg-white">
                                            <option>As soon as possible</option>
                                            <option>Within a week</option>
                                            <option>Planning phase</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {((step === 4 && !isAcInstall) || (step === 5 && isAcInstall)) && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                    <h3 className="font-semibold text-gray-800">
                                        {preselectedCategory ? (isAcInstall ? "4." : "3.") : (isAcInstall ? "5." : "4.")} Your details
                                    </h3>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Full Name</label>
                                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                                        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Email Address</label>
                                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Area / Suburb</label>
                                        <input type="text" required value={area} onChange={(e) => setArea(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none" placeholder="e.g. Somerset West" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 flex justify-between gap-3">
                            {step > startStep ? (
                                <button type="button" onClick={handleBack} className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-2">
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>
                            ) : <div></div>}

                            {step < totalSteps ? (
                                <button type="button" onClick={handleNext} className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-700 flex items-center gap-2 transition ml-auto">
                                    Next <ArrowRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button type="submit" disabled={isSubmitting} className={`px-6 py-3 bg-[#ff6b00] text-white rounded-lg font-bold flex items-center gap-2 transition ml-auto shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#e66000]'}`}>
                                    {isSubmitting ? "Submitting..." : (
                                        <>Submit Request <CheckCircle className="w-4 h-4" /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
