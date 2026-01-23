import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '../ui';
import Counter from '../ui/Counter';

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <Section id="about" alternate>
      <SectionTitle>{t('about.title')}</SectionTitle>

      <div className="max-w-3xl mx-auto">
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
          <div className="space-y-4 text-lg text-text/80 leading-relaxed">
            <p className="text-xl font-medium text-primary">
              {t('about.story.line1')}
            </p>
            <p>{t('about.story.line2')}</p>
            <p className="pt-4">{t('about.story.line3')}</p>
            <p>
              {i18n.language === 'ko' ? (
                <>
                  <Counter value={14} className="font-semibold text-primary" />
                  라운드 동안 밭을 일구고, 동물을 기르고,
                </>
              ) : (
                <>
                  Over <Counter value={14} className="font-semibold text-primary" /> rounds, you must plow fields, raise animals,
                </>
              )}
            </p>
            <p>{t('about.story.line5')}</p>
            <p className="pt-4 text-primary/90 font-medium">
              {t('about.story.line6')}
            </p>
            <p className="text-primary/90 font-medium">
              {t('about.story.line7')}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
