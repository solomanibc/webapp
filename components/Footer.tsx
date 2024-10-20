import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Index');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Soloman IBC</h3>
            <p>{t('footer.description')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">{t('nav.home')}</Link></li>
              <li><Link href="#" className="hover:underline">{t('nav.product')}</Link></li>
              <li><Link href="#" className="hover:underline">{t('nav.about')}</Link></li>
              <li><Link href="#" className="hover:underline">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">{t('services.webDesign.title')}</Link></li>
              <li><Link href="#" className="hover:underline">{t('services.digitalMarketing.title')}</Link></li>
              <li><Link href="#" className="hover:underline">{t('services.graphicDesign.title')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">Facebook</Link>
              <Link href="#" className="hover:text-gray-300">Twitter</Link>
              <Link href="#" className="hover:text-gray-300">LinkedIn</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}