import { StateSchema } from '@/app/providers/StoreProvider';
import { getCommentFormError, getCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };
    expect(getCommentFormError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCommentFormError(state as StateSchema)).toEqual(undefined);
  });

  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: '123',
      },
    };
    expect(getCommentFormText(state as StateSchema)).toEqual('123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCommentFormText(state as StateSchema)).toEqual('');
  });
});
