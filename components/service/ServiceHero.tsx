'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';

const ServiceHero = () => {
    return (
        <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden bg-text-dark">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-text-dark via-text-dark/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('/images/pest-control-technician-expert-service.png')] bg-cover bg-center opacity-40 scale-105" />

                {/* Animated Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] z-0"
                />
            </div>

            <div className="section-container relative z-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center gap-1">
                                Home
                            </Link>
                            <ChevronRight size={14} className="text-white/40" />
                            <span className="text-primary text-sm font-black uppercase tracking-widest">Our Services</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            Advanced <br />
                            <span className="text-primary italic">Pest Management</span> <br />
                            Solutions
                        </h1>

                        <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                            Protecting your home and business with government-approved, eco-friendly, and highly effective pest control treatments since 1998.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                                <Shield className="text-primary" size={20} />
                                <span className="text-white font-bold text-sm">Certified Professionals</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                                <Shield className="text-primary" size={20} />
                                <span className="text-white font-bold text-sm">Eco-Friendly Process</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 z-20">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35c43.18,11.83,86.05,23.45,131,23.55C189.39,70.1,245.71,70.1,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default ServiceHero;
