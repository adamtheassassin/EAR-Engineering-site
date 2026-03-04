"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaPaperPlane } from "react-icons/fa6";
import { CONTACT } from "@/lib/constants";
import QuoteModal from "@/components/QuoteModal";

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            alert("Thank you for your message. We will get back to you shortly.");
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <title>Contact Us | EAR Engineering</title>
            <meta name="description" content={`Get in touch with EAR Engineering. ${CONTACT.hours.mon_thu}`} />

            <Header onOpenModal={() => setIsModalOpen(true)} />

            <main className="flex-1 bg-gray-50 pt-16 pb-24 border-b border-gray-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <Image
                            src="/EAR Engineering Menu Logo.png"
                            alt="EAR Engineering Logo"
                            width={220}
                            height={60}
                            className="mx-auto mb-8 object-contain"
                        />
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                            Let&apos;s Get in <span className="text-[#015CAB]">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            Have questions or need a personalized quote? Reach out to our team of engineering experts today. We respond fast.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                        {/* Contact Information */}
                        <div className="space-y-8 h-full">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col gap-8 h-full">
                                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>

                                <div className="space-y-8">
                                    <a href={CONTACT.phoneLink} className="flex items-start gap-5 group">
                                        <div className="bg-[#e6f0f9] p-4 rounded-xl flex-shrink-0 text-[#015CAB] group-hover:bg-[#015CAB] group-hover:text-white transition-colors duration-300">
                                            <FaPhone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Call Us</h3>
                                            <p className="text-gray-600 font-medium text-lg leading-snug group-hover:text-[#015CAB] transition-colors">{CONTACT.phone}</p>
                                        </div>
                                    </a>

                                    <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-5 group">
                                        <div className="bg-[#e6f0f9] p-4 rounded-xl flex-shrink-0 text-[#015CAB] group-hover:bg-[#015CAB] group-hover:text-white transition-colors duration-300">
                                            <FaEnvelope className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                                            <p className="text-gray-600 font-medium text-lg leading-snug break-all group-hover:text-[#015CAB] transition-colors">{CONTACT.email}</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-5">
                                        <div className="bg-[#e6f0f9] p-4 rounded-xl flex-shrink-0 text-[#015CAB]">
                                            <FaLocationDot className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Our Location</h3>
                                            <p className="text-gray-600 font-medium text-lg leading-snug pr-4">{CONTACT.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="bg-[#e6f0f9] p-4 rounded-xl flex-shrink-0 text-[#015CAB]">
                                            <FaClock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Business Hours</h3>
                                            <div className="text-gray-600 font-medium text-lg leading-snug space-y-1">
                                                <p>{CONTACT.hours.mon_thu}</p>
                                                <p>{CONTACT.hours.fri}</p>
                                                <p className="text-gray-400">{CONTACT.hours.sat_sun}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 h-full flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#015CAB] focus:border-[#015CAB] transition-all bg-gray-50 focus:bg-white text-gray-900 outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#015CAB] focus:border-[#015CAB] transition-all bg-gray-50 focus:bg-white text-gray-900 outline-none"
                                            placeholder="082 123 4567"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#015CAB] focus:border-[#015CAB] transition-all bg-gray-50 focus:bg-white text-gray-900 outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-bold text-gray-700">Service Needed</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#015CAB] focus:border-[#015CAB] transition-all bg-gray-50 focus:bg-white text-gray-900 outline-none appearance-none"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="electrical">Electrical Installation & Repair</option>
                                        <option value="ac">Air Conditioning</option>
                                        <option value="solar">Solar & Inverters</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-700">Project Details or Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#015CAB] focus:border-[#015CAB] transition-all bg-gray-50 focus:bg-white text-gray-900 outline-none resize-none"
                                        placeholder="Tell us a bit about what you need help with..."
                                    ></textarea>
                                </div>

                                <div className="flex-grow flex flex-col justify-end">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 mt-2 bg-[#FFCA08] hover:bg-[#E5B507] text-gray-900 font-extrabold text-lg rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending Message..." : "Send Message"}
                                        {!isSubmitting && <FaPaperPlane className="w-5 h-5" />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
