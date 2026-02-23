import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800 pb-28 md:pb-16">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
                <div className="md:col-span-1">
                    <div className="font-extrabold text-2xl tracking-tighter text-white mb-6">
                        EAR <span className="text-cyan-500">Engineering</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed mb-6">
                        Project-managed electrical, aircon & solar in Helderberg + Cape Town. Since 1994. Quality installations, zero guesswork.
                    </p>
                    <div className="text-xs font-semibold text-gray-500">
                        &copy; {new Date().getFullYear()} EAR Engineering.<br />All rights reserved.
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Contact Us</h4>
                    <ul className="space-y-4">
                        <li>
                            <a href={CONTACT.phoneLink} className="flex items-center gap-3 hover:text-cyan-400 transition font-medium group">
                                <div className="bg-cyan-900/50 p-2 rounded-lg group-hover:bg-cyan-800 transition">
                                    <Phone className="w-4 h-4 text-cyan-400" />
                                </div>
                                {CONTACT.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-cyan-400 transition font-medium group">
                                <div className="bg-cyan-900/50 p-2 rounded-lg group-hover:bg-cyan-800 transition">
                                    <Mail className="w-4 h-4 text-cyan-400" />
                                </div>
                                {CONTACT.email}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Location</h4>
                    <div className="flex items-start gap-3 text-sm font-medium">
                        <div className="bg-cyan-900/50 p-2 rounded-lg mt-1">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                            {CONTACT.address.split(", ").map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-cyan-500 hover:text-cyan-400 font-bold transition underline underline-offset-4"
                            >
                                View on Maps
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Business Hours</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li className="flex items-start gap-3">
                            <div className="bg-cyan-900/50 p-2 rounded-lg">
                                <Clock className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div className="space-y-2">
                                <div>{CONTACT.hours.mon_thu}</div>
                                <div>{CONTACT.hours.fri}</div>
                                <div className="text-gray-500">{CONTACT.hours.sat_sun}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
