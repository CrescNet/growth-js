import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'

import messages from 'src/i18n'

export default boot(({ app }) => {
  const language = navigator.language.split('-')[0]
  const i18n = createI18n({
    locale: language,
    fallbackLocale: 'en',
    globalInjection: true,
    messages,
  })

  app.use(i18n)
})
