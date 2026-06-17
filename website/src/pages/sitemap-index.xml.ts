import { getPublishedArticles, getPublishedLessons } from "@/lib/content";
import { pillars, site } from "@/lib/site";

const staticRoutes = [
  "",
  "about/",
  "articles/",
  "lessons/",
  "topics/",
  ...pillars.map((pillar) => `topics/${pillar.slug}/`)
];

export async function GET() {
  const articles = await getPublishedArticles();
  const lessons = await getPublishedLessons();
  const dynamicRoutes = [
    ...articles.map((article) => `articles/${article.data.routeSlug}/`),
    ...lessons.map((lesson) => `lessons/${lesson.data.routeSlug}/`)
  ];

  const urls = [...staticRoutes, ...dynamicRoutes]
    .map((route) => new URL(route, site.url).toString())
    .map((loc) => `<url><loc>${loc}</loc></url>`)
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

