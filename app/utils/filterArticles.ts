import { Article } from "@/layouts/types";

export function filterArticles(articles: Article[], selectedTag: string | null): Article[] {
  return articles
    .sort((a, b) => Number(new Date(b.date)))
    .filter((article: Article) => {
      if (selectedTag === null) {
        return true;
      }
      return article.tags.includes(selectedTag);
    });
}