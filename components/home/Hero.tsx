'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        subTitle: "Welcome to FIT India Pest Control",
        title: "Best <span class='text-primary'>Pest Control Gurgaon</span> for Healthy Living",
        description: "Official Fit India Pest Control (License No: 2358). Trusted exterminator in Gurgaon using Bayer's safe chemicals to protect your family from harmful pests.",
        image: "/images/pest-control-technician-expert-service.png",
        // image: "https://images.unsplash.com/photo-1540513133343-41e8f6645383?q=80&w=1600&auto=format&fit=crop",
        alt: "Fit India Pest Control expert technician providing eco-friendly treatment in Gurgaon",
        cta: "Book Inspection"
    },
    {
        id: 2,
        subTitle: "DeemakRoko - Architect's 1st Choice",
        title: "#1 <span class='text-primary'>Termite Treatment Delhi</span> & NCR",
        description: "India's premier termite exterminator with over 10 years of experience. Providing innovative Anti-Termite Piping and Drill-Fill-Seal solutions across Delhi.",
        image: "/images/termite-protection-treatment-service.png",
        alt: "DeemakRoko professional termite protection and treatment service in Delhi",
        cta: "Save 12% Now"
    },
    {
        id: 3,
        subTitle: "Safe & Government Approved",
        title: "Professional <span class='text-primary'>Home Exterminator</span> Services",
        description: "Get rid of cockroaches, rodents, and mosquitoes today. Our certified technicians provide safe residential and commercial pest control with multi-year warranties.",
        image: "/images/certified-pest-control-specialist.png",
        alt: "Certified pest control specialist providing safe exterminator services for homes",
        cta: "Get Free Quote"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-bg-cream">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="section-container h-full flex items-center">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 w-full pt-10">
                            <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="sub-title"
                                >
                                    {slides[current].subTitle}
                                </motion.span>
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-text-dark"
                                    dangerouslySetInnerHTML={{ __html: slides[current].title }}
                                />
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-lg text-text-light mb-10 max-w-lg mx-auto lg:mx-0"
                                >
                                    {slides[current].description}
                                </motion.p>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <button className="btn-primary px-10 py-4 text-lg">{slides[current].cta}</button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="mt-12 hidden md:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                                            ))}
                                        </div>
                                        <div className="font-bold text-sm text-text-dark">Trusted by 25,000+ Customers PAN India</div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="flex-1 flex justify-center relative w-full h-[400px] lg:h-[600px]">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={slides[current].image}
                                        alt={slides[current].alt}
                                        fill
                                        className="rounded-[40px] object-cover shadow-2xl"
                                        priority
                                    />
                                    <div className="absolute top-10 -left-6 bg-secondary w-20 h-20 rounded-full hidden md:flex justify-center items-center shadow-lg animate-bounce">
                                        <span className="text-3xl">🛡️</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-10 right-10 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white text-text-dark flex justify-center items-center shadow-md hover:bg-primary hover:text-white transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white text-text-dark flex justify-center items-center shadow-md hover:bg-primary hover:text-white transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-primary w-8' : 'bg-gray-300'}`}
                    />
                ))}
            </div>

            {/* Background Decor */}
            <div className="absolute top-20 left-10 text-4xl opacity-10 select-none">🕷️</div>
            <div className="absolute bottom-20 right-10 text-4xl opacity-10 select-none animate-pulse">🦟</div>
        </section>
    );
};

export default Hero;
