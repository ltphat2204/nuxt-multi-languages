import LangModule from './lang/module';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [LangModule, "@nuxtjs/i18n"],

  i18n: {
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts'
  },
  
  compatibilityDate: "2024-07-04"
})