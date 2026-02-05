'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io';

const services = [
    {
        title: "Commercial Pest Control",
        tag: "Enterprise Grade",
        description: "Bayer-certified protection for high-stakes environments. We secure hotels, warehouses, and corporate offices with zero-disruption protocols.",
        image: "/images/certified-pest-control-specialist.png",
        features: ["Standard Compliance", "24/7 Monitoring", "Discreet Exit"],
        accent: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        color: "#3b82f6"
    },
    {
        title: "Cockroach Control",
        tag: "Scientific Strike",
        description: "Advanced DNA-disrupting gels and precision spray mapping. We don't just kill roaches; we stop the breeding cycle at the core.",
        image: "/images/cockroach-pest-management-system.png",
        features: ["Zero-Odor Tech", "Child-Safe Gel", "Targeted Baiting"],
        accent: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
        color: "#f97316"
    },
    {
        title: "Mosquito Defense",
        tag: "Vector Control",
        description: "Micro-fogging technology and biological larvae management. Create a 360-degree invisible shield around your property.",
        image: "/images/mosquito-control-prevention-safety.png",
        features: ["Indoor/Outdoor", "Larvae Control", "Dengue Shield"],
        accent: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
        color: "#22c55e"
    },
    {
        title: "Termite Protection",
        tag: "Structural Shield",
        description: "Beneath-the-surface Piping System and deep-soil infusion. Guarding your foundation with a 10-year structural integrity guarantee.",
        image: "/images/termite-protection-treatment-service.png",
        features: ["Drill-Fill-Seal", "Piping Systems", "10Y Warranty"],
        accent: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
        color: "#d97706"
    },
    {
        title: "Residential Shield",
        tag: "Home Sanctuary",
        description: "Eco-friendly, health-conscious pest management for modern homes. Protecting your family with non-toxic, non-allergic barriers.",
        image: "/images/pest-control-technician-expert-service.png",
        features: ["Anti-Bacterial", "Whole-Home Cover", "Pet Safe"],
        accent: "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)",
        color: "#28a745"
    },
    {
        title: "General Management",
        tag: "All-in-One",
        description: "A comprehensive periodic maintenance plan covering all common Indian pests. Consistent safety through continuous surveillance.",
        image: "/images/professional-bed-bug-removal.png",
        features: ["All-in-one Visist", "Expert Inspection", "Bayer Approved"],
        accent: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
        color: "#6366f1"
    }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2"
        >
            {/* Image Layer - Stable Aspect Ratio */}
            <div className="relative h-64 lg:h-72 w-full overflow-hidden shrink-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />

                {/* Overlapping Badge */}
                <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 rounded-2xl backdrop-blur-md bg-white/20 border border-white/20 text-[10px] font-black uppercase tracking-widest text-white">
                        {service.tag}   
                    </div>
                </div>

                <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-text-dark transition-all duration-500 cursor-pointer">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>

            {/* Content Container - Dynamic Height */}
            <div className="relative -mt-12 mx-4 mb-4 bg-white rounded-[32px] p-8 lg:p-10 flex-1 flex flex-col shadow-xl border border-gray-50/50">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: service.accent }}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-black text-text-dark group-hover:text-primary transition-colors leading-tight">
                            {service.title}
                        </h3>
                    </div>

                    <p className="text-text-light text-sm lg:text-base font-medium leading-relaxed mb-8">
                        {service.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {service.features.map((feat, i) => (
                            <div key={i} className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-primary" />
                                <span className="text-[10px] font-bold text-text-dark/70 uppercase tracking-tighter">{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Interaction */}
                <div className="pt-8 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <button className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] group/btn">
                        Details <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </button>

                    <a
                        href={`https://wa.me/919315805309?text=Interested in ${service.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group/wa"
                    >
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-lg group-hover/wa:scale-110 transition-transform">
                            <IoLogoWhatsapp size={24} />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-[9px] font-black uppercase text-text-light/40">Consult</span>
                            <span className="text-[11px] font-black text-text-dark">Expert</span>
                        </div>
                    </a>
                </div>
            </div>

            {/* Premium Bottom Accent */}
            <div
                className="h-1.5 transition-all duration-700 w-0 group-hover:w-full"
                style={{ background: service.accent }}
            />
        </motion.div>
    );
};

const ServiceList = () => {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="section-container">
                {/* Refined Header */}
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6"
                    >
                        <Sparkles size={16} className="text-primary" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-text-dark">Technical Services</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-4 tracking-tighter">
                        Intelligent <span className="text-primary italic">Bio-Defense</span>
                    </h2>
                    <p className="text-text-light max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                        Beyond simple extermination. We deploy Bayer-certified scientific solutions to create a permanent shield for your environment.
                    </p>

                    {/* Decorative Background Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
                </div>

                {/* Grid Layout - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom Stats or Ribbon */}
                <div className="mt-24 pt-10 border-t border-gray-200 flex flex-wrap justify-center md:justify-around gap-10 opacity-60">
                    {['Bayer Certified Chemicals', 'Nano-Tech Spray Equipment', 'Eco-Safe Shielding', '10Y Structural Warranty'].map((text, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-primary" />
                            <span className="text-xs font-black uppercase tracking-widest text-text-dark">{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;
