'use client';

import { useState } from 'react';
import { Plus, Minus, Send } from 'lucide-react';

const faqs = [
    {
        question: "What is DeemakRoko's Anti-Termite Piping System?",
        answer: "It is a specialized network of porous pipes installed under the floor or along the walls during construction. It allows for easy recharging of termite chemicals (like Bayer) without any drilling or damage to your flooring, providing lifetime protection."
    },
    {
        question: "Is FIT India Pest Control government approved?",
        answer: "Yes, FIT India Pest Control Services is a government-approved company with License No: 2358. We operate strictly under government safety guidelines and use only safe, eco-friendly chemicals."
    },
    {
        question: "What is the 'Drill-Fill-Seal' treatment?",
        answer: "This is a post-construction termite treatment where our experts drill small holes in the wall-to-floor junctions, fill them with concentrated colony-elimination chemicals, and then seal them. It's the most effective way to protect existing furniture and structures."
    },
    {
        question: "Are the chemicals safe for hospitals and schools?",
        answer: "Absolutely. We use high-quality, odorless, and eco-friendly Bayer Company products that are safe for sensitive environments like healthcare centers, daycares, and schools."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-bg-cream py-24 relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
                    <div className="flex-[1.4]">
                        <span className="sub-title">Got Any Questions?</span>
                        <h2 className="section-title">Knowledge Base & FAQ</h2>
                        <div className="mt-12 space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border-2 rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-primary bg-white shadow-xl' : 'border-gray-100 bg-white/50'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full p-6 text-left flex justify-between items-center group"
                                    >
                                        <span className={`text-lg font-black transition-colors ${openIndex === index ? 'text-primary' : 'text-text-dark group-hover:text-primary'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-primary/10 text-primary'}`}>
                                            {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="p-6 pt-0 text-text-light font-medium leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100 relative group">
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Send size={32} className="text-text-dark" />
                            </div>
                            <h3 className="text-3xl font-black mb-2">Request Visit</h3>
                            <p className="text-text-light text-sm mb-8 font-semibold italic">Expert inspection starting at just ₹999</p>

                            <form className="space-y-5">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Subject (e.g. Termites in Furniture)"
                                        className="w-full px-6 py-4 border-2 border-gray-50 rounded-2xl bg-gray-50 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-medium"
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-6 py-4 border-2 border-gray-50 rounded-2xl bg-gray-50 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-medium"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Phone (+91)"
                                            className="w-full px-6 py-4 border-2 border-gray-50 rounded-2xl bg-gray-50 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-medium"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Tell us about the problem area..."
                                        className="w-full px-6 py-4 border-2 border-gray-50 rounded-2xl bg-gray-50 outline-none focus:border-primary focus:bg-white transition-all h-36 resize-none font-bold placeholder:font-medium"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20">
                                    Submit Reservation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
};

export default FAQ;
