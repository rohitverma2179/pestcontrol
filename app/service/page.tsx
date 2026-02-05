'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RunningLine from '@/components/layout/RunningLine';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceList from '@/components/service/ServiceList';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PromoBanner from '@/components/home/PromoBanner';
import FAQ from '@/components/home/FAQ';

export default function ServicePage() {
    return (
        <>
            <Header />
            <RunningLine />
            <main>
                <ServiceHero />
                <ServiceList />
                {/* <WhyChooseUs /> */}
                {/* <PromoBanner /> */}
                <div className="bg-bg-light">
                    <FAQ />
                </div>
            </main>
            <Footer />
        </>
    );
}
