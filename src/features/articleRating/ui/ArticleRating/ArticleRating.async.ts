import { FC, lazy } from 'react';
import { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingAsync = lazy<FC<ArticleRatingProps>>(() => import('./ArticleRating'));
