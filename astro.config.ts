import { defineConfig } from 'astro/config'

import { satteri } from '@astrojs/markdown-satteri'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import tailwindcss from '@tailwindcss/vite'
import expressiveCode from 'astro-expressive-code'
import config from './src/theme.config'

/**
 * Sätteri MDAST plugin that wraps headings and their following content in section elements.
 * Ported from remark-sectionize for Sätteri compatibility.
 * Works at HAST level to avoid unsupported node types.
 */
function satteriSectionizePlugin() {
  const processed = new WeakSet()

  return {
    name: 'sectionize',
    element: {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visit(node: any, ctx: any) {
        const parent = ctx.parent(node)
        if (!parent || !('children' in parent) || processed.has(parent)) {
          return
        }

        processed.add(parent)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const children = parent.children as any[]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newChildren: any[] = []

        let i = 0
        while (i < children.length) {
          const child = children[i]

          // If this is a heading element, start a new section
          if (child.type === 'element' && /^h[1-6]$/.test(child.tagName)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const section: any = {
              type: 'element',
              tagName: 'section',
              properties: {},
              children: []
            }

            // Add the heading
            section.children.push(child)
            i++

            // Add all following content until the next heading
            while (i < children.length) {
              const nextChild = children[i]
              if (
                nextChild.type === 'element' &&
                /^h[1-6]$/.test(nextChild.tagName)
              ) {
                break
              }
              section.children.push(nextChild)
              i++
            }

            newChildren.push(section)
          } else {
            // Non-heading content at root level
            newChildren.push(child)
            i++
          }
        }

        ctx.setProperty(parent, 'children', newChildren)
      }
    }
  }
}

/**
 * Sätteri HAST plugin that adds target="_blank" and rel attributes to external links.
 * Ported from rehype-external-links for Sätteri compatibility.
 */
function satteriExternalLinksPlugin() {
  return {
    name: 'external-links',
    element: {
      filter: ['a'],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visit(node: any, ctx: any) {
        const href = node.properties?.href

        // Check if link is external (http or https)
        if (
          typeof href === 'string' &&
          (href.startsWith('http://') || href.startsWith('https://'))
        ) {
          ctx.setProperty(node, 'target', '_blank')
          ctx.setProperty(node, 'rel', ['noopener', 'noreferrer', 'external'])
        }
      }
    }
  }
}

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
    sitemap()
  ],

  markdown: {
    processor: satteri({
      hastPlugins: [satteriSectionizePlugin(), satteriExternalLinksPlugin()]
    })
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
