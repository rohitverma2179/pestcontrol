import Image from 'next/image';
import { CheckCircle, ShieldCheck, Users, Award, Clock } from 'lucide-react';

const coreValues = [
    {
        icon: <ShieldCheck className="text-primary" size={24} />,
        title: "Eco-Friendly Bayer Products",
        text: "Safety first. We exclusively use government-approved premium chemicals safe for kids and pets."
    },
    {
        icon: <Users className="text-primary" size={24} />,
        title: "10+ Years Expert Team",
        text: "DeemakRoko brings together biologists and structural engineers for absolute protection."
    },
    {
        icon: <Award className="text-primary" size={24} />,
        title: "Architect's 1st Choice",
        text: "Preferred partner for leading architects across India for pre-construction termite piping."
    },
    {
        icon: <Clock className="text-primary" size={24} />,
        title: "Emergency 24/7 Support",
        text: "Fast response in Gurgaon, Delhi, and Faridabad. We solve your pest issues in minutes."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-24">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16">
                    <div className="flex-1 w-full order-2 lg:order-1">
                        <span className="sub-title">India's Premier Protection Team</span>
                        <h2 className="section-title">Your Trusted Partner in Advanced Pest & Termite Treatment</h2>
                        <p className="text-text-light text-lg mb-8 leading-relaxed">
                            Welcome to the union of <strong>DeemakRoko</strong> and <strong>FIT India Pest Control</strong>. With over a decade of excellence, our team of highly trained technicians is backed by expert biologists and structural engineers. We don't just kill pests; we eliminate the root cause.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {coreValues.map((value, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                                        <p className="text-text-light text-sm">{value.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 w-full order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl"></div>
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src="/images/certified-pest-control-specialist.png"
                                    alt="FIT India certified pest control specialist at work"
                                    width={600}
                                    height={800}
                                    className="w-full object-cover aspect-4/5"
                                />
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-5">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-black">
                                        10
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-xl leading-none">Years of Excellence</h5>
                                        <p className="text-text-light text-sm mt-1">Specialized Termite Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-10 bg-bg-light rounded-[40px] border border-gray-100 shadow-inner group">
                    <div className="text-center group-hover:scale-105 transition-transform">
                        <h3 className="text-5xl font-black text-primary mb-2">25k+</h3>
                        <p className="text-text-dark font-bold uppercase text-[10px] tracking-widest">Happy Homes</p>
                    </div>
                    <div className="text-center group-hover:scale-105 transition-transform">
                        <h3 className="text-5xl font-black text-primary mb-2">150+</h3>
                        <p className="text-text-dark font-bold uppercase text-[10px] tracking-widest">Expert Staff</p>
                    </div>
                    <div className="text-center group-hover:scale-105 transition-transform">
                        <h3 className="text-5xl font-black text-primary mb-2">20+</h3>
                        <p className="text-text-dark font-bold uppercase text-[10px] tracking-widest">Global Awards</p>
                    </div>
                    <div className="text-center group-hover:scale-105 transition-transform">
                        <h3 className="text-5xl font-black text-primary mb-2">99%</h3>
                        <p className="text-text-dark font-bold uppercase text-[10px] tracking-widest">Success Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
