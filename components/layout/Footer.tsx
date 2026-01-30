import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0c0c0c] text-white pt-24 pb-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-primary"></div>

            <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black font-black text-2xl italic">F</div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white leading-none">FIT INDIA</span>
                                <span className="text-[10px] font-bold text-gray-500 tracking-tighter uppercase">Pest Control Solutions</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            <strong>Government Approved (Lic No: 2358)</strong>. FIT India Pest Control Services provides safe, effective, and affordable treatment solutions using premium Bayer chemicals.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <Link key={idx} href="#" className="bg-white/5 w-11 h-11 rounded-xl flex justify-center items-center transition-all hover:bg-primary hover:text-white hover:-translate-y-1">
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-black mb-10 relative inline-block">
                            DeemakRoko Services
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></div>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                'Anti-Termite Piping System',
                                'Drill-Fill-Seal Treatment',
                                'Soil Treatment Solutions',
                                'Termite Reticulation Refill',
                                'Post Construction Treatment',
                                'Pre Construction Service'
                            ].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 text-sm font-semibold transition-all hover:text-white flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-black mb-10 relative inline-block">
                            FIT India Solutions
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></div>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                'General Pest Management',
                                'Cockroach Elimination',
                                'Rodent Control System',
                                'Bed Bug Heat Treatment',
                                'Mosquito Prevention',
                                'Eco-Friendly Sanitization'
                            ].map((service) => (
                                <li key={service}>
                                    <Link href="#" className="text-gray-400 text-sm font-semibold transition-all hover:text-white flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-all"></span>
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-black mb-10 relative inline-block">
                            Corporate Office
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></div>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-gray-400 text-sm group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all">
                                    <MapPin size={20} className="text-primary" />
                                </div>
                                <span className="pt-1">H. No.-1568/8, Bishwa Gurugram, Haryana-122006</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400 text-sm group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all">
                                    <Phone size={20} className="text-primary" />
                                </div>
                                <span className="pt-1 font-bold text-white">+91-9315805309</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400 text-sm group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all">
                                    <Mail size={20} className="text-primary" />
                                </div>
                                <span className="pt-1">info@fitindiapestcontrol.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs italic">
                        © {new Date().getFullYear()} FIT India Pest Control Services x DeemakRoko. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Site Map</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
