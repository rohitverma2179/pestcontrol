import Image from 'next/image';

const termiteServices = [
    {
        id: 1,
        title: 'Anti-Termite Piping',
        sub: 'New Construction Specialist',
        description: 'Lifetime protection with zero maintenance. India\'s premier choice for new homes. Compatible with all designs.',
        image: '/images/termite-protection-treatment-service.png',
        icon: '🏗️',
        alt: 'Anti-termite piping system installation for new home constructionSuraksha'
    },
    {
        id: 2,
        title: 'Drill-Fill-Seal',
        sub: 'Deemak Jad Se Khatam!',
        description: 'Integrated method covering walls, furniture, and soil. Colony elimination technique with multi-year warranty.',
        image: '/images/professional-bed-bug-removal.png',
        icon: '🔨',
        alt: 'Drill fill seal termite treatment for existing residential properties'
    },
    {
        id: 3,
        title: 'Soil Treatment',
        sub: 'Pehle Din Se Suraksha!',
        description: 'Traditionally proven residual effect method. IS6313 recommended for ground-based construction safety.',
        image: '/images/pest-control-technician-expert-service.png',
        icon: '🌱',
        alt: 'Soil treatment for termite prevention in initial construction phase'
    },
    {
        id: 4,
        title: 'General Pest Control',
        sub: 'FIT India Approved',
        description: 'Safe and eco-friendly treatment for cockroaches, mosquitoes, rodents, and lizards using Bayer chemicals.',
        image: '/images/mosquito-control-prevention-safety.png',
        icon: '🛡️',
        alt: 'General pest control services using government approved eco-friendly chemicals'
    }
];

const ServiceGrid = () => {
    return (
        <section className="bg-white py-20 pb-32">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-2xl">
                        <span className="sub-title">Expert Termite & Pest Solutions</span>
                        <h2 className="section-title">Specialized Services for Every Need</h2>
                        <p className="text-text-light text-lg">
                            Combining DeemakRoko's termite expertise with FIT India's comprehensive pest management systems.
                        </p>
                    </div>
                    <button className="btn-primary shadow-xl">Explore All Services</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {termiteServices.map((service) => (
                        <div key={service.id} className="relative group p-1 bg-linear-to-br from-gray-100 to-white rounded-3xl transition-all hover:bg-primary/10">
                            <div className="bg-white p-8 rounded-[22px] h-full shadow-sm hover:shadow-2xl transition-all border border-gray-50 flex flex-col items-center text-center">
                                <div className="relative w-28 h-28 mb-8">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        className="rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-primary w-10 h-10 rounded-full flex justify-center items-center text-xl shadow-lg border-2 border-white text-white">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-[10px] uppercase font-black tracking-tighter text-primary bg-primary/5 px-2 py-1 rounded">
                                        {service.sub}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-text-light text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                                <div className="w-full pt-4 border-t border-gray-100">
                                    <button className="text-primary font-bold text-sm group-hover:underline flex items-center gap-2 justify-center w-full">
                                        View Details <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
