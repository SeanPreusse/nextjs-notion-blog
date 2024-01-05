import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import notion from "@/lib";
import { convertToPost } from "@/functions/convertToPost";
import Link from "next/link";
import TopScrollButton from "../../../components/TopScrollButton";
import Container from '@/components/Container';
import ArticleList from '@/components/ArticleList';
import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import getLocalizedDate from '@/app/utils/getLocalizedDate';
import { getTagFilteredPosts } from "@/functions/articleFilteredPosts";
import SocialshareButtons from "@/components/SocialshareButtons";



export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { id } = searchParams;

  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
    next: { revalidate: 60 },
  });
  console.log(response)
  const blockMap = await response.json();
  const pageProperties = await notion.pages.retrieve({ page_id: id });
  const postDetails = convertToPost(pageProperties);
  const moreArticles: Article[] = await getAllPosts();

  const formattedTime = getLocalizedDate(postDetails.date);
  const slug = postDetails.slug || [];
  const tags = postDetails.tags || [];
  
  // Pass id instead of uniqueId
  const tagPosts: Article[] = await getTagFilteredPosts({ tags, slug: String(slug) });

  return (
    <div className="space-y-5 max-w-7xl m-auto min-h-screen">
      <img className="object-cover w-full h-52 xl:rounded-[20px] aspect-video" src={postDetails.coverImage} />

      <div>
        <div className="text-center space-y-5 text-sm mx-auto mt-3">
          <div className="tracking-tight sm:text-4xl">
            {postDetails.title}
          </div>
          <div className="text-md leading-8 sm:mt-4">
            <div>
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
            <div className="font-semibold">
              {postDetails.author}
            </div>
            <SocialshareButtons
        shareUrl={`http://localhost:3000/${postDetails.slug}?id=${postDetails.id}`}
        title={postDetails.title}
      />
          </div>



        </div>


        <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 pt-4 border-t mt-4">
          <NotionRenderer blockMap={blockMap} />

        </div>
        <div className="py-12 border-t">
          <Container>
            <div className="flex items-center justify-between my-8">
              <div className="text-3xl font-bold text-gray-900">Latest articles</div>
              <Link href="/articles">
                <span className="font-semibold text-gray-900 cursor-pointer">
                  More articles ➜
                </span>
              </Link>
            </div>
            <ArticleList articles={tagPosts} />
          </Container>
        </div>
      </div>
      <TopScrollButton />
    </div>
  );
}
