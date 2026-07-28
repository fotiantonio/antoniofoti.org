import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { posts } from '../data/posts';

export async function GET(context: APIContext) {
  return rss({
    title: 'Antonio Foti',
    description: 'Notes on shipping, code, and the indie path.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
