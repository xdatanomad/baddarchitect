import { getCollection } from "astro:content";

export async function getStages() {
  const stages = await getCollection("stages");
  return stages.sort((a, b) => a.data.order - b.data.order);
}

export async function getStageById(id: string) {
  const stages = await getStages();
  return stages.find((stage) => stage.id === id);
}

export async function getFieldNotes() {
  return getCollection("fieldNotes");
}

export async function getFieldNotesForStage(stageId: string) {
  const fieldNotes = await getFieldNotes();
  return fieldNotes.filter((note) => note.data.stage.id === stageId);
}

export async function getGuides() {
  return getCollection("guides");
}

export async function getGuidesForStage(stageId: string) {
  const guides = await getGuides();
  return guides.filter(
    (guide) =>
      guide.data.primaryStage.id === stageId ||
      guide.data.crossListedStages.some((stage) => stage.id === stageId)
  );
}

export async function getPublishedEssays() {
  const posts = await getCollection("essays", ({ data }) => {
    return data.status === "published" && !data.draft;
  });

  return posts.sort(
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

export function entryHref(
  entry: { data: { routeSlug: string } },
  kind: "field-note" | "guide" = "field-note"
) {
  const base = kind === "guide" ? "/guides/" : "/field-notes/";
  return `${base}${entry.data.routeSlug}/`;
}

export function entryStatusLabel(entry: { data: { status: string } }) {
  return entry.data.status === "published" ? "Published" : "Planned";
}
