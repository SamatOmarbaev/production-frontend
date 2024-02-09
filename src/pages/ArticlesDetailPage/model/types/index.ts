import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecomendationSchema } from './ArticleDetailsRecomendationSchema';

export interface ArticlesDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recomendations: ArticleDetailsRecomendationSchema;
}
