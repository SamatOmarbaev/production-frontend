import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

describe('addCommentForArticle.test', () => {
  test('error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
