import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const data = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  createdAt: '2',
  img: 'sda',
  views: 123,
};

describe('articleDetailsSlice.test', () => {
  test('test update article service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
      .toEqual({
        isLoading: true,
        error: undefined,
      });
  });
  test('test update article service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      data,
      isLoading: true,
      error: 'error',
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled))
      .toEqual({
        data: undefined,
        isLoading: false,
        error: 'error',
      });
  });
  test('test update article service rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: 'error',
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected))
      .toEqual({
        isLoading: false,
        error: undefined,
      });
  });
});
