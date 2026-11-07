import { createContentLoader } from 'vitepress'

// Adding a Markdown file to either collection automatically creates its card.
export default createContentLoader(['research/*.md', 'projects/*.md'], {
  transform(pages) {
    return pages
      .filter(({ url, frontmatter }) => frontmatter.category && frontmatter.title && !url.split('/').some(part => part.startsWith('_')))
      .map(({ url, frontmatter: f }) => ({
        url,
        collection: url.startsWith('/research/') ? 'research' : 'projects',
        title: f.title,
        description: f.description || '',
        category: f.category || '',
        period: f.period || '',
        image: f.image,
        imageAlt: f.imageAlt || f.title,
        tags: Array.isArray(f.tags) ? f.tags : [],
        order: Number(f.order) || 99,
        featured: f.featured === true
      }))
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
  }
})
