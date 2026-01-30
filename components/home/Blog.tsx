import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: 'How to Detect Early Signs of Termite Infestation',
        excerpt: 'Termites can cause major structural damage before you even notice them. Learn the 5 warning signs every homeowner should know.',
        date: '10 Feb 2024',
        author: 'Pest Expert',
        image: '/images/pest-control-technician-expert-service.png',
        alt: 'Visual guide on detecting early signs of termite infestations in residential homes'
    },
    {
        id: 2,
        title: '10 Natural Ways to Prevent Mosquitoes in Summer',
        excerpt: 'Keeping mosquitoes away doesn\'t always require harsh chemicals. Discover organic prevention tips for a safe outdoor summer.',
        date: '12 Feb 2024',
        author: 'Safety Lead',
        image: '/images/mosquito-control-prevention-safety.png',
        alt: 'Organic and natural mosquito prevention tips for home gardens and backyards'
    },
    {
        id: 3,
        title: 'Why Regular Pest Inspections Save You Money',
        excerpt: 'Preventative care is always cheaper than extermination. See how quarterly property inspections protect your long-term investment.',
        date: '15 Feb 2024',
        author: 'Admin',
        image: '/images/certified-pest-control-specialist.png',
        alt: 'Economic benefits of regular professional pest inspections for property owners'
    }
];

const Blog = () => {
    return (
        <section className="bg-bg-light py-20">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-5 text-center md:text-left">
                    <div className="max-w-xl">
                        <span className="sub-title">Expert Advice & News</span>
                        <h2 className="section-title">Latest Pest Control Blog</h2>
                    </div>
                    <button className="btn-primary">View All Articles</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group h-full">
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-5 bg-primary text-white px-4 py-1.5 text-xs font-bold rounded-t-md">
                                    Pest Education
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex gap-5 mb-4">
                                    <div className="flex items-center gap-1.5 text-xs text-text-light">
                                        <User size={14} className="text-primary" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-text-light">
                                        <Calendar size={14} className="text-primary" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                                    {post.title}
                                </h3>
                                <p className="text-text-light text-sm mb-6 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <button className="text-primary font-bold text-sm text-left hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    Read Full Article <span className="text-lg">+</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
