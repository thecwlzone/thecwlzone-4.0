import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

import htaccessIntegration from 'astro-htaccess'

import aiRobotsTxt from 'astro-ai-robots-txt'

export default defineConfig({
  site: config.site,
  integrations: [mdx(), sitemap(), htaccessIntegration(), aiRobotsTxt()],

  markdown: {
    shikiConfig: {
      themes: config.shikiThemes,
      wrap: true,
      transformers: [codeHeadersPlugin]
    },
    remarkPlugins: [readingTimePlugin]
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
