import { Article } from '@/layouts/types';
import ArticleCard from './ArticleCard';

type Props = {
  articles: Article[];
};


export default function ArticleList({ articles }: Props) {
  // console.log(articles)
  return (
    <div className="grid gap-10 lg:gap-12 sm:grid-cols-2">
      {articles.map(article => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
}
