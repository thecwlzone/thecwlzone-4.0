import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://www.thecwlzone.com',
  title: 'The CWL Zone',
  description:
    'The 4.0 version of The CWL Zone website, a static site created by the Astro framework. The official website of Christopher W Lehman',
  author: 'Christopher W Lehman',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    // { label: 'Projects', href: '/projects/' },
    { label: 'Photo Gallery', href: '/gallery/' },
    { label: 'Tags', href: '/tags/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/thecwlzone/thecwlzone-4.0',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-aurora',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  expressiveCodeThemes: ['vitesse-light', 'vitesse-black']
})
