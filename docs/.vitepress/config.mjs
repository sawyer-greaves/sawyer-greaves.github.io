import { defineConfig } from 'vitepress'

// GitHub Actions supplies these automatically. Local previews work at /.
const base = `/${(process.env.VITEPRESS_BASE || '').replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/')
const hostname = (process.env.VITEPRESS_HOSTNAME || '').replace(/\/$/, '')
const description = 'Sawyer Greaves is a robotics graduate student at the University of Utah, working across controls, simulation, and robotic hardware.'

export default defineConfig({
  lang: 'en-US',
  title: 'Sawyer Greaves',
  description,
  base,
  cleanUrls: false,
  // Keep templates outside docs/ so unfinished content is never published.
  srcExclude: ['**/_*.md'],
  lastUpdated: false,
  appearance: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#153f3c' }],
    ['meta', { property: 'og:site_name', content: 'Sawyer Greaves' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],
  ...(hostname ? { sitemap: { hostname: `${hostname}${base}` } } : {}),
  transformHead({ pageData }) {
    const title = pageData.frontmatter.title || pageData.title || 'Sawyer Greaves'
    const pageDescription = pageData.description || description
    const head = [
      ['meta', { property: 'og:title', content: title === 'Sawyer Greaves' ? title : `${title} | Sawyer Greaves` }],
      ['meta', { property: 'og:description', content: pageDescription }]
    ]
    if (hostname) {
      const relative = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '.html')
      const url = `${hostname}${base}${relative}`
      head.push(['link', { rel: 'canonical', href: url }])
      head.push(['meta', { property: 'og:url', content: url }])
      head.push(['meta', { property: 'og:image', content: `${hostname}${base}images/profile.webp` }])
    }
    return head
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Sawyer Greaves',
    nav: [
      { text: 'Research', link: '/research/', activeMatch: '/research/' },
      { text: 'Publications', link: '/publications' },
      { text: 'Projects', link: '/projects/', activeMatch: '/projects/' },
      { text: 'About & CV', link: '/about' }
    ],
    sidebar: false,
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: false, next: false },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rodeosocks', ariaLabel: 'Sawyer Greaves on GitHub' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/sawyer-greaves-555616277/', ariaLabel: 'Sawyer Greaves on LinkedIn' }
    ],
    footer: {
      message: 'Robotics · Controls · Space exploration',
      copyright: '© Sawyer Greaves'
    }
  }
})
