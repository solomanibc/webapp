import { useTranslations } from 'next-intl';

export default function TrustedCompanies() {
  const t = useTranslations('Index');

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">{t('trusted.title')}</h2>
        <div className="flex justify-around items-center flex-wrap">
          {['Logo', 'Logo', 'Logo', 'Logo'].map((logo, index) => (
            <div key={index} className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold mb-4">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}