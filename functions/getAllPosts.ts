import notion from "@/lib";
import { Article } from "@/layouts/types";
import { convertToPost } from "./convertToPost";

export const getAllPosts = async (): Promise<Article[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "status",
      select: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "date",
        direction: "ascending",
      },
    ],
  });

  const publishedPosts: Article[] = response.results.map((e) =>
    convertToPost(e)
  );

  return publishedPosts;
};
