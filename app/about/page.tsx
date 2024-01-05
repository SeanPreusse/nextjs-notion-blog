import { NotionRenderer } from 'react-notion';
import notion from '@/lib';
import { convertToPost } from '@/functions/convertToPost';
import TopScrollButton from '@/components/TopScrollButton';
import { siteData } from "@/site";

export default async function AboutPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const pageid = process.env.ABOUT_PAGE;

  // Fetching blockMap
  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${pageid}`, {
    next: { revalidate: 60 },
  });
  const blockMap = await response.json();

  // Fetching pageProperties
  const pageProperties = await notion.pages.retrieve({ page_id: pageid });
  const postDetails = convertToPost(pageProperties);

  return (
    <div className="space-y-5 max-w-7xl m-auto min-h-screen">
      <img className="object-cover w-full h-52 xl:rounded-[20px] aspect-video" src={postDetails.coverImage} />

      <div>
        <div className="text-center space-y-5 text-sm mx-auto mt-3">
          <div className="tracking-tight sm:text-4xl">
            {postDetails.title}
          </div>
        </div>

        <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 pt-4 border-t mt-4">
          <NotionRenderer blockMap={blockMap} />
        </div>
      </div>
    </div>
  );
}
