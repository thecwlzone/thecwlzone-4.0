import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import tailwindcss from '@tailwindcss/vite'
import expressiveCode from 'astro-expressive-code'
import sectionizePlugin from 'remark-sectionize'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

import htaccessIntegration from 'astro-htaccess'

export default defineConfig({
  site: config.site,
  integrations: [
    expressiveCode({
      themes: config.expressiveCodeThemes,
      themeCssSelector: (theme) => `[data-mode='${theme.type}']`,
      defaultProps: {
        wrap: true,
        collapseStyle: 'collapsible-end',
        showLineNumbers: true
      },
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()]
    }),
    mdx(),
    sitemap(),
    htaccessIntegration()
  ],

  markdown: {
    remarkPlugins: [readingTimePlugin, sectionizePlugin]
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
