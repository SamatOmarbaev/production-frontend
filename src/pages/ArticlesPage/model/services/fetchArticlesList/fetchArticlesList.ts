import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesLimit, getArticlesOrder, getArticlesPage, getArticlesSearch, getArticlesSort, getArticlesType,
} from '../../selectors/getArticlesPage';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getArticlesLimit(getState());
    const sort = getArticlesSort(getState());
    const order = getArticlesOrder(getState());
    const search = getArticlesSearch(getState());
    const page = getArticlesPage(getState());
    const type = getArticlesType(getState());

    try {
      addQueryParams({
        sort, search, order, type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          q: search,
          _order: order,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
