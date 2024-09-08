import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from '@/widgets/PageWrapper';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticlesDetailPageHeader } from '../ArticlesDetailPageHeader/ArticlesDetailPageHeader';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';

import cls from './ArticlesDetailPage.module.scss';

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

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticlesDetailPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            off={<Card max>{t('Оценка статей скоро появится')}</Card>}
            on={<ArticleRating articleId={id} />}
          />
          <ArticleRecomendationsList />
          <ArticleDetailsComment id={id} />
        </VStack>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesDetailPage);
