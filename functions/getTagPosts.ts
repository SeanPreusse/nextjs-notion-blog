// Import necessary libraries and components
import notion from "@/lib";
import { Article } from "@/layouts/types";
import { convertToPost } from "./convertToPost";

export const getPublishedPostsByTag = async (tags?: string[]): Promise<Article[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  
  // Create filter based on whether tags are provided
  const filter = tags
    ? [
        {
          property: "status",
          select: {
            equals: "Published",
          },
        },
        {
          property: "tags", // Assuming tags is the property name in your database
          multi_select: {
            contains_all: tags,
          },
        },
      ]
    : {
        property: "status",
        select: {
          equals: "Published",
        },
      };

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "date",
        direction: "ascending",
      },
    ],
  });

  const getPublishedPostsByTag: Article[] = response.results.map((e) =>
    convertToPost(e)
  );

  return getPublishedPostsByTag;
};
