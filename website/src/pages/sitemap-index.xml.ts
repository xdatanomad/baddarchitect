import { getFieldNotes, getGuides, getPublishedBlogPosts, getStages } from "@/lib/content";
import { site } from "@/lib/site";

const staticRoutes = ["", "about/", "blog/", "stages/", "guides/", "field-notes/"];

export async function GET() {
  const stages = await getStages();
  const fieldNotes = await getFieldNotes();
  const guides = await getGuides();
  const posts = await getPublishedBlogPosts();

  const dynamicRoutes = [
    ...stages.map((stage) => `stages/${stage.id}/`),
    ...fieldNotes.map((note) => `field-notes/${note.data.routeSlug}/`),
    ...guides.map((guide) => `guides/${guide.data.routeSlug}/`),
    ...posts.map((post) => `blog/${post.data.routeSlug}/`)
  ];

  const urls = [...staticRoutes, ...dynamicRoutes]
    .map((route) => new URL(route, site.url).toString())
    .map((loc) => `<url><loc>${loc}</loc></url>`)
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
