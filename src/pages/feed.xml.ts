import config from '@/theme.config'
import { getPosts } from '@/util/posts'
import rss from '@astrojs/rss'

export async function GET() {
  const posts = await getPosts()

  return rss({
    title: config.title,
    description: config.description,
    site: config.site,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom'
    },
    customData: `<atom:link href="${config.site}rss.xml" rel="self" type="application/rss+xml"
      language>${config.locale}/>`,
    items: posts.map(({ data, id }) => ({
      link: `posts/${id}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedDate)
    }))
  })
}
