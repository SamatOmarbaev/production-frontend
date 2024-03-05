import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticlesDetailPage.module.scss';
import { ArticlesDetailPageHeader } from '../ArticlesDetailPageHeader/ArticlesDetailPageHeader';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';

interface ArticlesDetailPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailPage: FC<ArticlesDetailPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{id: string}>();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticlesDetailPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecomendationsList />
          <ArticleDetailsComment id={id} />
        </VStack>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesDetailPage);
