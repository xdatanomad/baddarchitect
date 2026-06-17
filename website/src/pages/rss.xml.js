import rss from "@astrojs/rss";
import { getPublishedArticles } from "@/lib/content";
import { site } from "@/lib/site";

export async function GET(context) {
  const articles = await getPublishedArticles();

  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedDate,
      link: `/articles/${article.data.routeSlug}/`
    }))
  });
}
