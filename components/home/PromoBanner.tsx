'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
    ShieldCheck,
    MapPin,
    UserCheck,
    Search,
    Clock,
    Leaf,
    BugOff,
    Zap,
    Smile,
    History,
    CheckCircle2,
    Award,
    Circle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Government Approved",
        desc: "Licensed and regulated (Auth. License #2358).",
        tag: "Certified"
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        title: "Located in Gurgaon",
        desc: "Proudly serving the Gurgaon NCR region.",
        tag: "Local"
    },
    {
        icon: <UserCheck className="w-5 h-5" />,
        title: "Highly Trained Team",
        desc: "Certified technicians for professional execution.",
        tag: "Experts"
    },
    {
        icon: <Search className="w-5 h-5" />,
        title: "Free Home Inspection",
        desc: "Book zero-cost assessment in Gurgaon today.",
        tag: "Free"
    },
    {
        icon: <Clock className="w-5 h-5" />,
        title: "24/7 Emergency",
        desc: "Rapid response available round the clock.",
        tag: "Rapid"
    },
    {
        icon: <Leaf className="w-5 h-5" />,
        title: "Eco-Friendly Services",
        desc: "Safe solutions for home & office environments.",
        tag: "Safe"
    },
    {
        icon: <BugOff className="w-5 h-5" />,
        title: "Goodbye to Termites",
        desc: "Advanced foundation protection systems.",
        tag: "Defense"
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Bayer Chemicals",
        desc: "Exclusively safe and eco-friendly products.",
        tag: "Premium"
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Timely Response",
        desc: "Quick inspections with minimal disruption.",
        tag: "Punctual"
    },
    {
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: "Hassle-Free Process",
        desc: "Streamlined from booking to final cleanup.",
        tag: "Easy"
    },
    {
        icon: <History className="w-5 h-5" />,
        title: "Service Warranty",
        desc: "1 & 2 year contract-based protection.",
        tag: "Warranty"
    },
    {
        icon: <Smile className="w-5 h-5" />,
        title: "100% Satisfaction",
        desc: "Full after-service support guarantee.",
        tag: "Support"
    }
];

const PromoBanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Timeline central line growth animation
        gsap.fromTo(lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 40%',
                    end: 'bottom 90%',
                    scrub: 1,
                }
            }
        );

        // Timeline items animation
        const items = gsap.utils.toArray('.timeline-item');
        items.forEach((item: any, index) => {
            const isEven = index % 2 === 0;

            gsap.from(item, {
                x: isEven ? -50 : 50,
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                }
            });

            // Animate the dots on the line
            gsap.from(item.querySelector('.timeline-dot'), {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%',
                }
            });
        });

        ScrollTrigger.refresh();
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="bg-bg-light/50 py-20 overflow-hidden relative"
        >
            <div className="section-container relative">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="sub-title">Expert Service Journey</span>
                    <h2 className="section-title text-text-dark text-3xl! md:text-4xl!">Our Professional Commitment</h2>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div
                        ref={lineRef}
                        className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-primary origin-top transform -translate-x-1/2 hidden md:block"
                    />

                    <div className="space-y-6 md:space-y-0 relative">
                        {timelineData.map((item, idx) => (
                            <div
                                key={idx}
                                className={`timeline-item relative flex flex-col md:flex-row items-center md:h-32 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 px-4 md:px-10 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                                    <div className={`relative group p-6 bg-secondary border-b-4 border-primary/20 rounded-2xl md:rounded-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] 
                    ${idx % 2 === 0 ? 'md:rounded-tr-[60px] md:rounded-br-[60px]' : 'md:rounded-tl-[60px] md:rounded-bl-[60px]'}
                  `}>
                                        {/* Connector Line */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-primary/30 hidden md:block ${idx % 2 === 0 ? 'right-full' : 'left-full'}`} />

                                        <div className={`flex items-center gap-3 mb-1.5 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-left md:text-right'}`}>
                                            <div className="p-2 bg-text-dark/10 rounded-full text-text-dark">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-lg font-black text-text-dark leading-tight">{item.title}</h3>
                                        </div>

                                        <p className="text-text-dark/70 text-sm font-semibold leading-snug">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Center Dot */}
                                <div className="timeline-dot absolute left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                                    <div className="w-10 h-10 rounded-full bg-white border-4 border-primary shadow-lg flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                    </div>
                                </div>

                                {/* Empty Side (Spacer for Desktop) */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
