import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedCompanies from '@/components/TrustedCompanies';
import Feature from '@/components/Feature';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f0ee] to-white">
      <Header />

      <main>
        <Hero />
        <TrustedCompanies />
        <Feature />
        <Services />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}