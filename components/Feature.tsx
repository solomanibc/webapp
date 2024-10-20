import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Feature() {
  const t = useTranslations('Index');

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Image src="https://source.unsplash.com/random/600x400?design" alt={t('feature.imageAlt')} width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-6">{t('feature.title')}</h2>
          <p className="text-xl mb-8">{t('feature.description')}</p>
          <Button>{t('feature.cta')}</Button>
        </div>
      </div>
    </section>
  );
}