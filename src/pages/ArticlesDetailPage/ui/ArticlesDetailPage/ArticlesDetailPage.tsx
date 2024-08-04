import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from '@/widgets/PageWrapper';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticlesDetailPage.module.scss';
import { ArticlesDetailPageHeader } from '../ArticlesDetailPageHeader/ArticlesDetailPageHeader';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlags, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface ArticlesDetailPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailPage: FC<ArticlesDetailPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')

  if (!id) {
    return null;
  }

  const articleRatingCard = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => <Card>{t('Оценка статей скоро появится')}</Card>
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticlesDetailPageHeader />
          <ArticleDetails id={id} />
          {articleRatingCard}
          <ArticleRecomendationsList />
          <ArticleDetailsComment id={id} />
        </VStack>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesDetailPage);
