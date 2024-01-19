import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './getComments';

describe('getComments.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComment: {
        isLoading: true,
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComment: {
        error: 'error',
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
