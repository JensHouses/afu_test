// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'modules:done': (installedModules) => {
      console.log('✅ Geladene Nuxt-Module:');
      installedModules?.forEach((mod: any, i: number) => {
        console.log(`  [${i + 1}]`, mod?.meta?.name || 'Unbekanntes Modul');
      });

    }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'AFU - Test',
      meta: [
        { name: 'description', content: 'Amateurfunk Prüfungsfragensimulator' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "stylesheet", href: "/katex/katex.min.css" },
      ],
        script: [
            { src: '/katex/katex.min.js', async: true, defer: true },
            { src: '/katex/contrib/auto-render.min.js', async: true, defer: true },
        ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  plugins: [
    '~/plugins/katex.client.ts',
  ],
  ssr: false,


})
