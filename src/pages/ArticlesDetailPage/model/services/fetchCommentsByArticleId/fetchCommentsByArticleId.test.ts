import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data = {
  id: '1',
  text: 'admin',
  user: {
    id: '1',
    username: 'kir',
  },
};

describe('fetchCommentsByArticleId.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
