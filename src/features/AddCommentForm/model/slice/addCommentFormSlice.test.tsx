import { CommentFormSchema } from '../types/CommentFormSchema';
import { CommentFormActions, CommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
  test('test set text', () => {
    const state: DeepPartial<CommentFormSchema> = {
      text: 'admin',
    };
    expect(CommentFormReducer(state as CommentFormSchema, CommentFormActions.setText('admin')))
      .toEqual({ text: 'admin' });
  });
});
