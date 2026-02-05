'use client';

import { Mail, Phone, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const RunningLine = () => {
    const services = [
        "Commercial Pest Control",
        "Cockroach Pest Control",
        "Mosquito Pest Control",
        "Residential Pest Control",
        "Termite Protection",
        "General Pest Control",
        "Ant Control",
    ];

    const contactInfo = [
        { icon: <Mail size={14} className="text-secondary" />, text: "info@fitindiapestcontrol.com" },
        { icon: <Phone size={14} className="text-secondary" />, text: "+91-9315805309" },
    ];

    const tickerItems = [
        ...contactInfo,
        ...services.map(s => ({ icon: <ShieldCheck size={12} className="text-primary" />, text: s }))
    ];

    return (
        <div className="bg-text-dark border-y border-white/5 py-4 overflow-hidden whitespace-nowrap relative group">
            {/* Premium Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-text-dark to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-text-dark to-transparent z-20 pointer-events-none"></div>

            <motion.div
                className="flex w-max"
                animate={{ x: [0, "-50%"] }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <div className="flex items-center gap-12 px-6">
                    {tickerItems.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] shrink-0">
                            <span className="flex items-center justify-center p-1 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                {item.icon}
                            </span>
                            <span className={i < 2 ? "text-white" : "text-white/60 group-hover:text-white/90 transition-colors"}>
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-12 px-6" aria-hidden="true">
                    {tickerItems.map((item, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] shrink-0">
                            <span className="flex items-center justify-center p-1 rounded-full bg-white/5 transition-colors">
                                {item.icon}
                            </span>
                            <span className={i < 2 ? "text-white" : "text-white/60 transition-colors"}>
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default RunningLine;

