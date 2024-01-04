import { Article, TagFrequencyMap } from "@/layouts/types";

export const calculateTagFrequency = async ({
  publishedPosts,
}: {
  publishedPosts: Article[];
}) => {
  let allTags: string[] = [];
  const tagFrequencyMap: TagFrequencyMap = {};

  // Concatenate tags from posts into allTags array
  publishedPosts.forEach((post) => {
    allTags = [...allTags, ...post.tags];
  });

  // Create a frequency map of tags
  allTags.forEach((tag) => {
    tagFrequencyMap[tag] = (tagFrequencyMap[tag] || 0) + 1;
  });

  return tagFrequencyMap;
};
