import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from '@/widgets/PageWrapper';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={
            <PageWrapper
              data-testid="ArticlesPage"
              onScrollEnd={onNextPart}
              className={classNames('', {}, [className])}
            >
              <ArticleInfiniteList />
              <ArticlePageGreeting />
            </PageWrapper>
          }
        />
      }
      off={
        <PageWrapper
          data-testid="ArticlesPage"
          onScrollEnd={onNextPart}
          className={classNames(cls.ArticlesPage, {}, [className])}
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList />
          <ArticlePageGreeting />
        </PageWrapper>
      }
    />
  )

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
