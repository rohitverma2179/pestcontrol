const PromoBanner = () => {
    return (
        <section className="py-20 lg:py-28">
            <div className="section-container">
                <div className="bg-linear-to-r from-primary to-[#1a8a3a] rounded-2xl p-8 md:p-16 text-white relative overflow-hidden group">
                    {/* Background circles for effect */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full font-bold text-sm mb-5">
                            Exclusive Seasonal Offer
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-5">
                            Get Your First Pest Control Treatment  Guard Your Home Today
                        </h2>
                        <p className="text-lg opacity-90 mb-10">
                            Stop waiting for the infestation to grow. Contact our experts now and get a comprehensive inspection and your first basic treatment at absolutely no cost!
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-7.5">
                            <button className="btn-secondary whitespace-nowrap">Get Free Quote</button>

                            <div className="flex gap-4">
                                {[
                                    { val: '00', label: 'D' },
                                    { val: '00', label: 'H' },
                                    { val: '00', label: 'M' },
                                    { val: '00', label: 'S' }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 p-3 rounded-lg text-center min-w-[60px] font-bold">
                                        <span className="block text-2xl">{item.val}</span>
                                        <span className="text-[10px] uppercase opacity-70">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
