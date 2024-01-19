import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types/CommentFormSchema';

const initialState: CommentFormSchema = {
  text: '',
};

export const CommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginByUsername.pending, (state) => {
//         state.error = undefined;
//         state.isLoading = true;
//       })
//       .addCase(loginByUsername.fulfilled, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(loginByUsername.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
});

// Action creators are generated for each case reducer function
export const { actions: CommentFormActions } = CommentFormSlice;
export const { reducer: CommentFormReducer } = CommentFormSlice;
