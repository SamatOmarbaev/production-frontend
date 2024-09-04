import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { getArticle } from '../../model/slice/articlesPageSlice';
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/getArticlesPage';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);
  const articles = useSelector(getArticle.selectAll);

  if (error) {
    return <Text title={t('Произошла ошибка при загрузке статей')} />;
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
};
