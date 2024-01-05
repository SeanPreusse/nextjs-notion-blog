import { Article } from "@/lib/types";

export const convertToPost = (item: any): Article => ({
  id: item.id,
  title: item.properties.title.title[0].text.content,
  date: item.properties.date.date.start,
  type: item.properties.type.select.name,
  slug: item.properties.slug.rich_text[0].text.content,
  status: item.properties.status.select.name,
  tags: item.properties.tags.multi_select.map(
    (tag: { name: string }) => tag.name
  ),
  summary: item.properties.summary.rich_text.map(
    (textObj: { text: { content: string } }) => textObj.text.content
  ),
  coverImage: item.properties?.coverImage?.files[0]?.file?.url,
  author: item.properties.author.created_by.name
});
