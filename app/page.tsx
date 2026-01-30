'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// import Hero from '@/components/home/Hero';
import ServiceGrid from '@/components/home/ServiceGrid';
import ProfessionalServices from '@/components/home/ProfessionalServices';
import PromoBanner from '@/components/home/PromoBanner';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FAQ from '@/components/home/FAQ';
import Team from '@/components/home/Team';
import Blog from '@/components/home/Blog';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceGrid />
        <WhyChooseUs />
        <ProfessionalServices />
        <PromoBanner />
        <FAQ />
        <Team />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
