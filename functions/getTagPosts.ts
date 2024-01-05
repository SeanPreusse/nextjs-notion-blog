// // Import necessary libraries and components
// import notion from "@/lib";
// import { Article } from "@/lib/types";
// import { convertToPost } from "./convertToPost";

// export const getPublishedPostsByTag = async (tags?: string[]): Promise<Article[]> => {
//   const databaseId = process.env.NOTION_DATABASE_ID!;
  
//   // Create filter based on whether tags are provided
//   const filter = {
//     and: [
//       {
//         property: "status",
//         select: {
//           equals: "Published",
//         },
//       },
//       {
//         property: "type",
//         select: {
//           equals: "Post",
//         },
//       },
//       {
//         property: "tags", // Assuming "tags" is the property name in your database
//         multi_select: {
//           contains_all: tags,
//         },
//       },
//     ]
//   };

//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       or: [filter], // Wrap filter inside an array if needed
//     },
//     sorts: [
//       {
//         property: "date",
//         direction: "ascending",
//       },
//     ],
//   });

//   const getPublishedPostsByTag: Article[] = response.results.map((e) =>
//     convertToPost(e)
//   );

//   return getPublishedPostsByTag;
// };
