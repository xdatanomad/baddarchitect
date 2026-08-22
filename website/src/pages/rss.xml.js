import rss from "@astrojs/rss";
import { getPublishedEssays } from "@/lib/content";
import { site } from "@/lib/site";

export async function GET(context) {
  const posts = await getPublishedEssays();

  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `/essays/${post.data.routeSlug}/`
    }))
  });
}
