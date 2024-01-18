import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comments';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
