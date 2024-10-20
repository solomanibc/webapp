import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('Index');

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Soloman IBC</div>
      <nav className="hidden md:flex space-x-6">
        <Link href="#" className="text-gray-600 hover:text-gray-900">{t('nav.home')}</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">{t('nav.product')}</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">{t('nav.about')}</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">{t('nav.pricing')}</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">{t('nav.contact')}</Link>
      </nav>
    </header>
  );
}