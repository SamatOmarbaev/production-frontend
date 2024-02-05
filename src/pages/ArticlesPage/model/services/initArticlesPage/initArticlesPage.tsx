import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesInited,
} from '../../selectors/getArticlesPage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initialView());
      dispatch(fetchArticlesList({
        page: 1,
      }));
    }
  },
);
