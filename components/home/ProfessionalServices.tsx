import Image from 'next/image';

const services = [
    {
        id: 1,
        title: 'Hospital Pest Management',
        description: 'Sterile and high-safety pest solutions for medical facilities and healthcare centers.',
        image: '/images/pest-control-technician-expert-service.png',
        alt: 'Antiseptic pest control cleaning services for hospitals and medical clinics'
    },
    {
        id: 2,
        title: 'Modern Office Cleaning',
        description: 'Discreet and effective pest management for corporate offices and workplaces.',
        image: '/images/certified-pest-control-specialist.png',
        alt: 'Professional office pest control and workplace sanitation services'
    },
    {
        id: 3,
        title: 'Industrial Pest Control',
        description: 'Heavy-duty extermination for warehouses, factories, and manufacturing plants.',
        image: '/images/pest-control-technician-expert-service.png',
        alt: 'Industrial scale pest extermination and warehouse fumigation services'
    },
    {
        id: 4,
        title: 'School Safety Treatment',
        description: 'Child-safe pest prevention programs for schools, daycares, and universities.',
        image: '/images/certified-pest-control-specialist.png',
        alt: 'Safe and organic pest control treatments for schools and educational institutions'
    }
];

const ProfessionalServices = () => {
    return (
        <section className="bg-bg-light py-20">
            <div className="section-container">
                <div className="text-center mb-12">
                    <span className="sub-title">What We Do</span>
                    <h2 className="section-title">Professional Specialized Services</h2>
                    <p className="max-w-2xl mx-auto text-text-light">
                        We provide specialized pest control and hygiene services tailored to different environments and industry standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-md group">
                            <div className="h-52 overflow-hidden relative">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-sm text-text-light mb-5 leading-relaxed">{service.description}</p>
                                <button className="bg-primary text-white px-5 py-2 rounded font-semibold text-sm transition-all hover:bg-primary-hover">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalServices;
