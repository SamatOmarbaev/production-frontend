import { FC, lazy } from 'react';
import { ProfileRatingProps } from './ProfileRating';

export const ProfileRatingAsync = lazy<FC<ProfileRatingProps>>(() => import('./ProfileRating'));
