import Image from "next/image";
import { FaLocationDot as MapPin, FaPhone as Phone, FaEnvelope as Mail, FaClock as Clock, FaFacebook } from "react-icons/fa6";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-600 py-16 border-t border-gray-200 pb-28 md:pb-8 flex flex-col">
            <div className="container mx-auto px-4 grid md:grid-cols-12 gap-8 lg:gap-12 flex-grow">
                <div className="md:col-span-3">
                    <div className="mb-6 flex">
                        <Image
                            src="/EAR Engineering Menu Logo.png"
                            alt="EAR Engineering Logo"
                            width={220}
                            height={60}
                            className="object-contain object-left"
                        />
                    </div>
                    <p className="text-sm font-medium leading-relaxed mb-6 text-gray-600">
                        <strong>EAR Electrical Engineering</strong> - Project-managed electrical, aircon & solar in Helderberg + Cape Town. Since 1994. Quality installations, zero guesswork.
                    </p>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-[#015CAB] font-bold mb-6 text-lg tracking-wide uppercase">Contact Us</h4>
                    <ul className="space-y-4">
                        <li>
                            <a href={CONTACT.phoneLink} className="flex items-center gap-3 text-gray-600 hover:text-[#015CAB] transition font-medium group">
                                <div className="bg-cyan-50 p-2 rounded-lg group-hover:bg-[#015CAB] transition">
                                    <Phone className="w-4 h-4 text-[#015CAB] group-hover:text-white transition" />
                                </div>
                                {CONTACT.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-gray-600 hover:text-[#015CAB] transition font-medium group">
                                <div className="bg-cyan-50 p-2 rounded-lg group-hover:bg-[#015CAB] transition">
                                    <Mail className="w-4 h-4 text-[#015CAB] group-hover:text-white transition" />
                                </div>
                                {CONTACT.email}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/share/1AmsoznMis/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#015CAB] transition font-medium group">
                                <div className="bg-cyan-50 p-2 rounded-lg group-hover:bg-[#015CAB] transition">
                                    <FaFacebook className="w-4 h-4 text-[#015CAB] group-hover:text-white transition" />
                                </div>
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-[#015CAB] font-bold mb-6 text-lg tracking-wide uppercase">Location</h4>
                    <div className="flex items-start gap-3 text-sm font-medium text-gray-600">
                        <div className="bg-cyan-50 p-2 rounded-lg mt-1 flex-shrink-0">
                            <MapPin className="w-4 h-4 text-[#015CAB]" />
                        </div>
                        <div>
                            <div className="leading-relaxed">{CONTACT.address}</div>
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-[#015CAB] hover:text-blue-800 font-bold transition underline underline-offset-4"
                            >
                                View on Maps
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-[#015CAB] font-bold mb-6 text-lg tracking-wide uppercase">Business Hours</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li className="flex items-start gap-3">
                            <div className="bg-cyan-50 p-2 rounded-lg flex-shrink-0">
                                <Clock className="w-4 h-4 text-[#015CAB]" />
                            </div>
                            <div className="space-y-2 text-gray-600">
                                <div>{CONTACT.hours.mon_fri}</div>
                                <div>{CONTACT.hours.sun}</div>
                                <div className="text-gray-500">{CONTACT.hours.sat}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright and Built By Section */}
            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-100 flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-sm font-semibold text-gray-500">
                    &copy; {new Date().getFullYear()} EAR Electrical Engineering. All rights reserved.
                </div>
                <a
                    href="https://ao-automations.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gray-400 hover:text-[#015CAB] transition-colors"
                >
                    Built by aoautomations
                </a>
            </div>
        </footer>
    );
}
