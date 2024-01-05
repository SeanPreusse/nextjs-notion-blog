import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import Search from "../../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";

const SearchPage = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <div className="max-w-5xl m-auto p-4 min-h-screen">
      <Search
        publishedPosts={publishedPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </div>
  );
};

export default SearchPage;
