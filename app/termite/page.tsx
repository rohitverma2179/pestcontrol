import { Metadata } from 'next';
import TermiteClient from '@/components/termite/TermiteClient';

export const metadata: Metadata = {
    title: "Termite Treatment Cost & Plans - #1 Termite Protection | FIT India Pest Control",
    description: "Check professional termite treatment cost in Gurgaon & Delhi. Expert anti-termite piping (10-40yr warranty), drill-fill-seal, and soil treatment plans. Government approved (Lic: 2358) safe solutions.",
    keywords: "termite treatment cost, anti termite piping price, termite protection Gurgaon, termite control Delhi, drill fill seal cost, pre construction termite treatment price, fit india pest control",
    openGraph: {
        title: "Expert Termite Treatment Cost & Protection Plans | FIT India",
        description: "Find the best termite treatment plans tailored to your budget. Pre and Post-construction experts.",
        images: ['/images/termite-protection-treatment-service.png'],
        type: 'website',
    },
    alternates: {
        canonical: 'https://fitindiapestcontrol.com/termite',
    }
};

export default function TermitePage() {
    return <TermiteClient />;
}
