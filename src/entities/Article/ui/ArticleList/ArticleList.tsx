import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkelton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
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
    className, articles, isLoading, view = ArticleView.LIST, target,
  } = props;
  const { t } = useTranslation('article');

  const renderArticles = (article: Article) => (
    <ArticleListItem target={target} article={article} view={view} key={article.id} />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])} data-testid="ArticleList">
      {articles.length > 0
        ? articles.map(renderArticles)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
