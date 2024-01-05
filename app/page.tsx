import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import { postsPerPage } from "@/site";
import Feed from "@/components/Feed";
import HeroSection from "../components/HeroSection";



const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = Number(searchParams.page) || 1;
  const publishedPosts: Article[] = await getAllPosts();
  // const startIndex = (page - 1) * postsPerPage;
  // const endIndex = startIndex + postsPerPage;
  // const postsToShow = publishedPosts.slice(startIndex, endIndex);


  return (
    <>
      <div className="">
      <HeroSection />
      <div className = "mt-4 max-w-5xl m-auto p-4 min-h-screen">
      <Feed articles={publishedPosts} />
      </div>
      </div>
    </>
  );
};

export default HomePage;
