'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RunningLine from '@/components/layout/RunningLine';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    CheckCircle2,
    Clock,
    ShieldCheck,
    Zap,
    TrendingDown,
    Building2,
    Home,
    Ruler,
    Droplet,
    Layout,
    Truck,
    Tag,
    ArrowRight,
    Info
} from 'lucide-react';
import Image from 'next/image';

const TermiteClient = () => {
    return (
        <>
            <Header />
            <RunningLine />
            <main id="main-content" className="bg-white">
                {/* Hero Section */}
                <header className="relative h-[60vh] min-h-125 flex items-center overflow-hidden bg-text-dark">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src="/images/termite-protection-treatment-service.png"
                            alt="Professional Termite Treatment Service by FIT India Pest Control"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-r from-text-dark via-text-dark/80 to-transparent"></div>

                    <div className="section-container relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="sub-title text-secondary !after:bg-secondary">Premium Termite Protection</span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                                Expert Termite <br />
                                <span className="text-secondary">Treatment Cost</span> Guide
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                                Professional, government-approved termite solutions tailored to your property. Find the best plan within your budget.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link href="/appointment" className="btn-secondary">Request Free Inspection</Link>
                                <a href="#pricing-plans" className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all">View Pricing Plans</a>
                            </div>
                        </motion.div>
                    </div>
                </header>

                {/* Introduction Section */}
                <section className="py-24 bg-white" aria-labelledby="intro-heading">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="sub-title">Why It Matters</span>
                                <h2 id="intro-heading" className="section-title">Termite Treatment <span className="text-primary italic">Cost</span> Analysis</h2>
                                <p className="text-text-light text-lg mb-8 leading-relaxed">
                                    Every year, termites cause significant damage to Indian households. The cost of these damages can easily escalate from a few thousand to lakhs of rupees, not to mention the loss of precious time and mental peace.
                                </p>
                                <div className="bg-bg-light border-l-4 border-primary p-8 rounded-r-2xl shadow-sm mb-8">
                                    <blockquote className="text-text-dark font-semibold text-lg italic">
                                        "Fortunately, FIT India Pest Control offers customized rates for termite treatment, ensuring optimal budget allocation."
                                    </blockquote>
                                </div>
                                <p className="text-text-light text-lg leading-relaxed">
                                    Whether you need pre-construction or post-construction treatment, our team at FIT India Pest Control is here to help you find the best solution within your budget.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-text-dark p-10 rounded-[40px] shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16"></div>
                                <h3 className="text-white text-2xl font-black mb-8">Table of Contents</h3>
                                <nav className="space-y-4">
                                    {[
                                        { label: "Factors that effect the cost", icon: "01" },
                                        { label: "Two methods of Calculating Cost", icon: "02" },
                                        { label: "Types of Treatment & Average Cost", icon: "03" },
                                        { label: "Tips for Saving Money", icon: "04" },
                                        { label: "Cost Comparison Methods", icon: "05" },
                                        { label: "Conclusion & Final Thoughts", icon: "06" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 group cursor-pointer border-b border-white/10 pb-4 last:border-0">
                                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-sm group-hover:bg-primary group-hover:text-white transition-all">
                                                {item.icon}
                                            </span>
                                            <span className="text-gray-300 group-hover:text-white font-bold transition-all">{item.label}</span>
                                            <ArrowRight size={16} className="text-primary ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                                        </div>
                                    ))}
                                </nav>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Factors Section */}
                <section className="py-24 bg-bg-light relative overflow-hidden text-text-dark" aria-labelledby="factors-heading">
                    <div className="section-container">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="sub-title mx-auto text-primary">Cost Analysis</span>
                            <h2 id="factors-heading" className="section-title">Factors Affecting Termite Treatment Cost</h2>
                            <p className="text-text-light text-lg">Multiple variables influence the final investment required for effective termite protection.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Zap, title: "Mode of Treatment", desc: "Different methods require different materials, preparation, and timelines, impacting overall costs." },
                                { icon: Ruler, title: "Size of Property", desc: "Larger properties generally cost more, though rate per unit might decrease due to fixed costs." },
                                { icon: Droplet, title: "Types of Chemicals", desc: "Chemical type and quantity per unit vary by treatment mode and objective, affecting the price." },
                                { icon: TrendingDown, title: "Extent of Damage", desc: "Damages to electrical routes, basement walls, or exterior impact procedure and cost." },
                                { icon: Building2, title: "Type of Property", desc: "Complexity of structure, ease of access, and site height impact the overall cost structure." },
                                { icon: Layout, title: "Furniture Density", desc: "Quantity and complexity of furniture often become a dominant factor in pricing per unit." },
                                { icon: ShieldCheck, title: "Warranty Period", desc: "Standard warranty is included, but extended coverage is available for long-term security." },
                                { icon: Truck, title: "Location", desc: "Remote locations outside regular operation cycles may involve different cost structures." },
                                { icon: Tag, title: "Current Offers", desc: "Regular offers from FIT India Pest Control can significantly reduce your treatment costs." }
                            ].map((factor, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
                                >
                                    <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                                        <factor.icon size={28} aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-black mb-3 text-text-dark">{factor.title}</h3>
                                    <p className="text-text-light text-sm leading-relaxed">{factor.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Calculation Methods */}
                <section className="py-24 bg-white" aria-labelledby="methods-heading">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-primary/5 p-10 rounded-[40px] border border-primary/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                        <Info size={24} aria-hidden="true" />
                                    </div>
                                    <h3 id="methods-heading" className="text-2xl font-black text-text-dark">Lumpsum Method</h3>
                                </div>
                                <p className="text-text-light leading-relaxed mb-6 font-medium">
                                    This involves calculating all cost elements individually. All costs are summed up for the final quotation.
                                </p>
                                <div className="bg-white/60 backdrop-blur p-4 rounded-xl border border-primary/20 text-sm font-bold text-primary inline-block">
                                    Best for: Large sites & special cases
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-secondary/5 p-10 rounded-[40px] border border-secondary/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-text-dark">
                                        <Layout size={24} aria-hidden="true" />
                                    </div>
                                    <h3 className="text-2xl font-black text-text-dark">Square Feet Method</h3>
                                </div>
                                <p className="text-text-light leading-relaxed mb-6 font-medium">
                                    Derived from the Lumpsum data, this is a simpler estimation method. It is primarily used by the industry for most sites.
                                </p>
                                <div className="bg-white/60 backdrop-blur p-4 rounded-xl border border-secondary/20 text-sm font-bold text-secondary-hover inline-block">
                                    Standard Industry Practice
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Post Construction Plans */}
                <section id="pricing-plans" className="py-24 bg-text-dark" aria-labelledby="post-plans-heading">
                    <div className="section-container">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="sub-title mx-auto text-secondary !after:bg-secondary">Existing Structures</span>
                            <h2 id="post-plans-heading" className="section-title text-white">Post-Construction Treatment Plans</h2>
                            <p className="text-gray-400 text-lg italic">Rates are shared as per Site location and Site specifications.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Basic Plan */}
                            <PlanCard
                                title="Basic Termisecure"
                                warranty="3 Months"
                                tag="Short-Term Solution"
                                features={["Basic DFS Treatment", "Standard Chemical Application", "Basic Customer Support"]}
                                variant="light"
                            />
                            {/* Standard Plan */}
                            <PlanCard
                                title="Standard Termisecure"
                                warranty="2 Years"
                                tag="Strong Reliable Protection"
                                popular
                                features={["Comprehensive DFS Treatment", "Enhanced GreenPro Chemicals", "Oil-Based Furniture Treatment", "Adjacent Soil Treatment", "Post-Treatment Cleaning", "Priority Customer Support"]}
                                variant="secondary"
                            />
                            {/* Ultimate Plan */}
                            <PlanCard
                                title="Ultimate Shield"
                                warranty="5 Years"
                                tag="Highest Quality Protection"
                                features={[
                                    "Uniform DFS Service", "External Termite Barrier", "Premium Custom Chemical",
                                    "Premium Baiting System", "External Perimeter protection", "Custom Soil Treatment",
                                    "Detailed Precaution Report", "Yearly Inspection Follow up", "Dedicated Account Manager"
                                ]}
                                variant="primary"
                            />
                            {/* Spot Treatment */}
                            <PlanCard
                                title="Spot Treatment"
                                warranty="None"
                                tag="Targeted Resolution"
                                features={["Focus on infested objects", "Specific area targeting", "Immediate resolution"]}
                                variant="light"
                                isSpot
                            />
                        </div>
                    </div>
                </section>

                {/* Pre Construction Plans */}
                <section className="py-24 bg-white" aria-labelledby="pre-plans-heading">
                    <div className="section-container">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="sub-title mx-auto">New Construction</span>
                            <h2 id="pre-plans-heading" className="section-title">Pre-Construction TermiPipe Plans</h2>
                            <p className="text-text-light text-lg">Integrated termite protection for lifetime structural security.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <PipePlanCard
                                title="TermiPipe Basic"
                                warranty="10 Years"
                                ideal="Budget-friendly / Low Furniture"
                                features={[
                                    "Border Protection", "16mm Standard Pipes", "12 Months Refill Frequency",
                                    "Single Refilling Point per 1000 Sqft", "4 feet Clamping Distance", "Standard Chemicals"
                                ]}
                                color="gray"
                            />
                            <PipePlanCard
                                title="TermiPipe Standard"
                                warranty="25 Years"
                                ideal="Long-term Security"
                                featured
                                features={[
                                    "Complete Wall Coverage", "16mm Standard Pipes", "Double-layer Furniture Protection",
                                    "Cross Installation (>10ft rooms)", "Rust-Proof Refilling Box", "24 Months Refill Frequency",
                                    "2 feet Clamping Distance", "Priority Support"
                                ]}
                                color="secondary"
                            />
                            <PipePlanCard
                                title="TermiPipe Ultimate"
                                warranty="40 Years"
                                ideal="Premium Interiors / Luxury homes"
                                features={[
                                    "18mm Premium Pipes (2mm extra diameter)",
                                    "3.5mm Wall Thickness (50% higher)",
                                    "Higher Load-Bearing Capacity",
                                    "Higher Pore Density for uniform flow",
                                    "RoHS & ESCR Tested (Anti-Crack)",
                                    "42 Months Refill Frequency",
                                    "Soil & Capillary Wall Treatment",
                                    "Installation Layout Map Provided",
                                    "Dedicated Account Manager"
                                ]}
                                color="primary"
                            />
                        </div>
                    </div>
                </section>

                {/* Other Pre-Construction */}
                <section className="py-24 bg-bg-cream border-y border-secondary/20" aria-label="Essential Construction Services">
                    <div className="section-container">
                        <h2 className="text-3xl font-black text-center mb-16">Other Essential Pre-Construction Services</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Wall Treatments",
                                    warranty: "7 Years",
                                    desc: "Strong barrier below skirting level to prevent termites moving up walls."
                                },
                                {
                                    title: "Soil Treatment",
                                    warranty: "10 Years",
                                    desc: "Thorough chemical treatment at all construction stages as per IS6313. (Recommended)",
                                    recommended: true
                                },
                                {
                                    title: "Piping Treatment",
                                    warranty: "50 Years (Pipe)",
                                    desc: "Network of porous pipes for easy chemical renewal. Permanent security. (Highly Recommended)",
                                    highlyRecommended: true
                                }
                            ].map((item, idx) => (
                                <article key={idx} className={`p-10 rounded-4xl border transition-all ${item.highlyRecommended ? 'bg-text-dark text-white border-transparent' : 'bg-white border-gray-100 hover:border-secondary'}`}>
                                    {item.recommended && <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block tracking-widest">Recommended</span>}
                                    {item.highlyRecommended && <span className="bg-secondary text-text-dark text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block tracking-widest">Highly Recommended</span>}
                                    <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                                    <p className={`${item.highlyRecommended ? 'text-gray-400' : 'text-text-light'} text-sm mb-6 leading-relaxed`}>{item.desc}</p>
                                    <div className="flex items-center gap-2 font-bold text-lg">
                                        <Clock size={20} className="text-secondary" aria-hidden="true" />
                                        <span>Warranty: {item.warranty}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tips Section */}
                <section className="py-24 bg-white" aria-labelledby="tips-heading">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="sub-title">Expert Advice</span>
                                <h2 id="tips-heading" className="section-title">Tips for Saving Money on Termite Treatment</h2>
                                <p className="text-text-light text-lg mb-10">Maximize your investment by following these professional strategies.</p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Early Detection", desc: "Termites are secret destroyers. Immediate treatment prevents costly furniture replacement." },
                                        { title: "Avoid DIY Experiments", desc: "Improper solutions often aggravate the situation, spreading termites to other areas." },
                                        { title: "Seek Root Cause Solutions", desc: "Removing infested furniture is just the start; you must eliminate the entire colony." },
                                        { title: "Contact Barrier Creation", desc: "Scientific methods that infect the queen ensure the issue is resolved once and for all." },
                                        { title: "Enquire About Offers", desc: "FIT India Pest Control regularly runs offers that can significantly lower your costs." },
                                        { title: "Regular Inspections", desc: "Identify issues early to avoid deep pocket expenses later." }
                                    ].map((tip, idx) => (
                                        <div key={idx} className="flex gap-5 group">
                                            <div className="w-10 h-10 rounded-full bg-bg-light border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                                <CheckCircle2 size={18} aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-text-dark mb-1">{tip.title}</h4>
                                                <p className="text-text-light text-sm">{tip.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-primary p-2 rounded-[50px]">
                                    <div className="rounded-[45px] overflow-hidden">
                                        <Image
                                            src="/images/certified-pest-control-specialist.png"
                                            alt="Certified Pest Control Specialist performing inspection"
                                            width={600}
                                            height={800}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <aside className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-text-dark">
                                            <ShieldCheck size={24} aria-hidden="true" />
                                        </div>
                                        <span className="font-black text-text-dark">Colony Elimination</span>
                                    </div>
                                    <p className="text-xs text-text-light font-bold leading-tight uppercase tracking-wider mb-2">Scientific Results</p>
                                    <p className="text-sm font-semibold text-text-dark">We target the reproductive queen to ensure long-term safety.</p>
                                </aside>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="py-24 bg-bg-light" aria-label="Conclusion">
                    <div className="section-container">
                        <div className="bg-text-dark rounded-[60px] p-12 md:p-20 relative overflow-hidden text-center">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(40,167,69,0.1)_0%,transparent_70%)]"></div>

                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10">Conclusion & Final Thoughts</h2>
                            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 relative z-10">
                                The cost of termite treatments can vary greatly depending upon multiple factors. Our recommendation is to always look for a more permanent solution as it can only help you in saving money from regular costly termite damages.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10 text-white">
                                <Link href="/appointment" className="btn-secondary rounded-2xl px-10">
                                    Get Pricing For Your Property
                                </Link>
                                <Link href="/service" className="btn-outline border-2 border-white/20 hover:bg-white/10 px-10 py-3 rounded-2xl font-black transition-all">
                                    Explore Other Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

interface PlanCardProps {
    title: string;
    warranty: string;
    tag: string;
    features: string[];
    popular?: boolean;
    variant?: 'light' | 'primary' | 'secondary';
    isSpot?: boolean;
}

const PlanCard = ({ title, warranty, tag, features, popular = false, variant = 'light', isSpot = false }: PlanCardProps) => {
    const bgClass = variant === 'primary' ? 'bg-primary border-transparent' : variant === 'secondary' ? 'bg-secondary border-transparent' : 'bg-white/5 border-white/10';
    const textClass = variant === 'primary' || variant === 'secondary' ? 'text-text-dark' : 'text-white';
    const lightTextClass = variant === 'primary' || variant === 'secondary' ? 'text-text-dark/70' : 'text-gray-400';
    const btnClass = variant === 'primary' ? 'bg-text-dark text-white' : variant === 'secondary' ? 'bg-text-dark text-white' : 'bg-white/10 text-white hover:bg-white/20';

    return (
        <motion.article
            whileHover={{ y: -10 }}
            className={`${bgClass} p-8 rounded-[40px] border flex flex-col h-full relative transition-all group`}
        >
            {popular && (
                <div className="absolute -top-4 right-8 bg-primary-hover text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg z-10">Most Robust</div>
            )}
            <div className="mb-8">
                <h3 className={`text-2xl font-black mb-1 ${textClass}`}>{title}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${lightTextClass}`}>{tag}</p>
            </div>

            <div className="mb-8 pb-8 border-b border-black/5 flex items-baseline gap-1">
                <span className={`text-4xl font-black ${textClass}`}>{warranty}</span>
                <span className={`text-sm font-bold ${lightTextClass}`}>{isSpot ? '' : 'Warranty'}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
                {features.map((feature: string, i: number) => (
                    <li key={i} className={`flex items-start gap-3 text-sm font-bold ${textClass}`}>
                        <CheckCircle2 size={18} className={variant === 'light' ? 'text-primary' : 'text-text-dark'} aria-hidden="true" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link href="/appointment" className={`${btnClass} w-full py-4 rounded-3xl font-black text-center text-sm transition-all uppercase tracking-wider`}>
                Contact for Quote
            </Link>
        </motion.article>
    );
};

interface PipePlanCardProps {
    title: string;
    warranty: string;
    ideal: string;
    features: string[];
    color?: 'primary' | 'secondary' | 'gray';
    featured?: boolean;
}

const PipePlanCard = ({ title, warranty, ideal, features, color = 'gray', featured = false }: PipePlanCardProps) => {
    const colorMap = {
        primary: 'border-primary bg-primary/5',
        secondary: 'border-secondary bg-secondary/5',
        gray: 'border-gray-100 bg-white'
    };

    return (
        <motion.article
            whileHover={{ y: -10 }}
            className={`p-10 rounded-[48px] border-2 ${colorMap[color]} flex flex-col h-full relative overflow-hidden`}
        >
            {featured && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 text-xs font-black text-primary px-3 py-1 bg-primary/10 rounded-full italic">
                    <ShieldCheck size={14} aria-hidden="true" /> Recommended
                </div>
            )}
            <div className="mb-10">
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black text-text-dark">{warranty.split(' ')[0]}</span>
                    <span className="text-xl font-bold text-text-light">Years</span>
                </div>
                <h3 className="text-2xl font-black text-text-dark mb-4">{title}</h3>
                <div className="bg-bg-light/80 p-3 rounded-2xl text-[10px] font-black text-text-light uppercase tracking-widest leading-none flex items-center gap-2">
                    <Home size={12} aria-hidden="true" /> {ideal}
                </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
                {features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-text-dark">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link href="/appointment" className={`${color === 'primary' ? 'bg-primary text-white' : color === 'secondary' ? 'bg-secondary text-text-dark' : 'bg-text-dark text-white'} w-full py-5 rounded-3xl font-black text-center text-xs uppercase tracking-widest shadow-lg hover:-translate-y-1 transition-all`}>
                Request Inspection
            </Link>
        </motion.article>
    );
};

export default TermiteClient;
