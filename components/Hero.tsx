import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl mb-8">{t('hero.description')}</p>
        <Button size="lg">{t('hero.cta')}</Button>
      </div>
      <div className="md:w-1/2">
        <Image src="https://source.unsplash.com/random/800x600?business" alt={t('hero.imageAlt')} width={800} height={600} className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
}