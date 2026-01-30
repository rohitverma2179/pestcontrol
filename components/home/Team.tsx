import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const members = [
    {
        name: 'Johnathan Smith',
        role: 'Senior Exterminator',
        image: '/images/certified-pest-control-specialist.png',
        alt: 'Johnathan Smith, a senior certified pest control exterminator with 15 years experience'
    },
    {
        name: 'Dr. Maria Garcia',
        role: 'Entomologist Expert',
        image: '/images/certified-pest-control-specialist.png',
        alt: 'Dr. Maria Garcia, an expert entomologist specializing in urban pest management'
    },
    {
        name: 'Robert Wilson',
        role: 'Bed Bug Specialist',
        image: '/images/certified-pest-control-specialist.png',
        alt: 'Robert Wilson, professional bed bug treatment specialist'
    },
    {
        name: 'Sarah Jones',
        role: 'Customer Safety Lead',
        image: '/images/certified-pest-control-specialist.png',
        alt: 'Sarah Jones, head of customer safety and eco-friendly treatment protocols'
    }
];

const Team = () => {
    return (
        <section className="bg-white py-20">
            <div className="section-container">
                <div className="text-center mb-12">
                    <span className="sub-title">Our Dedicated Experts</span>
                    <h2 className="section-title">Licensed Professional Team</h2>
                    <p className="max-w-2xl mx-auto text-text-light">
                        Our team consists of certified pest management professionals and urban entomologists dedicated to protecting your home.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative overflow-hidden rounded-2xl mb-5 shadow-sm">
                                <Image
                                    src={member.image}
                                    alt={member.alt}
                                    width={280}
                                    height={350}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute -bottom-16 left-0 w-full bg-primary flex justify-center gap-4 py-4 px-4 text-white transition-all duration-300 group-hover:bottom-0">
                                    <Facebook size={18} className="cursor-pointer hover:scale-120 transition-transform" />
                                    <Twitter size={18} className="cursor-pointer hover:scale-120 transition-transform" />
                                    <Instagram size={18} className="cursor-pointer hover:scale-120 transition-transform" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                                <p className="text-primary font-bold text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
