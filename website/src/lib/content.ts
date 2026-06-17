import { getCollection } from "astro:content";

export async function getPublishedArticles() {
  const articles = await getCollection("articles", ({ data }) => {
    return data.status === "published" && !data.draft;
  });

  return articles.sort(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime()
  );
}

export async function getPublishedLessons() {
  const lessons = await getCollection("lessons", ({ data }) => {
    return data.status === "published" && !data.draft;
  });

  return lessons.sort(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime()
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
    year: "numeric"
  }).format(date);
}
