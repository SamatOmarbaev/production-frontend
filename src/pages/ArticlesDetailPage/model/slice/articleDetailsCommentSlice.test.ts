import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentReducer } from './articleDetailsCommentSlice';

// const data = {
//   id: '1',
//   text: 'admin',
//   user: {
//     id: '1',
//     username: 'kir',
//   },
// };

describe('articleDetailsCommentSlice.test', () => {
  test('test update article service pending', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: false,
      error: 'error',
    };
    expect(articleDetailsCommentReducer(state as ArticleDetailsCommentSchema, fetchCommentsByArticleId.pending))
      .toEqual({
        isLoading: true,
        error: undefined,
      });
  });
  test('test update article service rejected', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: true,
      error: 'error',
    };
    expect(articleDetailsCommentReducer(state as ArticleDetailsCommentSchema, fetchCommentsByArticleId.rejected))
      .toEqual({
        isLoading: false,
        error: undefined,
      });
  });
});
