import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  getArticlesIsLoading, getArticlesView,
} from '../../model/selectors/getArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticle } from '../../model/slice/articlesPageSlice';
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
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesView);
  const articles = useSelector(getArticle.selectAll);

  const onNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper
        onScrollEnd={onNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
