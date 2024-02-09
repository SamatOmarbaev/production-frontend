import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecomendationReducer } from './articleDetailsPageRecomendationSlice';
import { ArticlesDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
  comments: articleDetailsCommentReducer,
  recomendations: articleDetailsPageRecomendationReducer,
});
