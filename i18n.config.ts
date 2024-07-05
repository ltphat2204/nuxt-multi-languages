import en from '~/lang/en';
import fr from '~/lang/fr';

export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    messages: {
      en,
      fr
    }
}))