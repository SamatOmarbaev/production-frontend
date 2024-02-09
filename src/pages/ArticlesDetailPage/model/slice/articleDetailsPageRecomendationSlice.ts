import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDetailsRecomendationSchema } from '../types/ArticleDetailsRecomendationSchema';
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations';

const recomendationAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticleRecomendations = recomendationAdapter.getSelectors<StateSchema>(
  (state) => state.articlesDetailsPage?.recomendations || recomendationAdapter.getInitialState(),
);

const articleDetailsPageRecomendationSlice = createSlice({
  name: 'articleDetailsPageRecomendationSlice',
  initialState: recomendationAdapter.getInitialState<ArticleDetailsRecomendationSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recomendationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecomendationReducer } = articleDetailsPageRecomendationSlice;
export const { actions: articleDetailsPageRecomendationActions } = articleDetailsPageRecomendationSlice;
