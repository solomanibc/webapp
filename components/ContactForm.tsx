import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const t = useTranslations('Index');

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <Input placeholder={t('contact.namePlaceholder')} />
          <Input type="email" placeholder={t('contact.emailPlaceholder')} />
          <Textarea placeholder={t('contact.messagePlaceholder')} />
          <Button type="submit" className="w-full">{t('contact.submit')}</Button>
        </form>
      </div>
    </section>
  );
}