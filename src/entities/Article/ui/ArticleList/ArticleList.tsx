import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkelton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => (
  new Array(view === ArticleView.LIST ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkelton view={view} key={index} />
    ))
);

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className, articles, isLoading, view = ArticleView.LIST,
  } = props;

  const renderArticles = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticles)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
