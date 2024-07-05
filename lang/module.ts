import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('i18n:registerModule', register => {
      register({
        langDir: resolve('./'),
        locales: [
          {
            code: 'en',
            files: [
                './en/about.json',
                './en/home.json'
            ],
          },
          {
            code: 'fr',
            files: [
                './fr/about.json',
                './fr/home.json'
            ],
          },
        ],
      })
    })
  }
})
