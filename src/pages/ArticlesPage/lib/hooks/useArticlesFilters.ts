import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort,
  getArticlesType,
  getArticlesView,
} from '../../model/selectors/getArticlesPage';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sortOrder';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const useArticlesFilters = () => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);
  const search = useSelector(getArticlesSearch);
  const type = useSelector(getArticlesType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedValue = useDebounce(fetchData, 1000);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedValue();
    },
    [dispatch, debouncedValue],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return {
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
    view,
    sort,
    order,
    search,
    type,
  };
};
