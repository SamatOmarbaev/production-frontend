import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });
  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const handleRateArticle = useCallback((starsCount: number, feedBack?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback: feedBack,
      });
    } catch (error) {
      console.log(error);
    }
  }, [articleId, rateArticleMutation, userData?.id]);

  const cancelHandler = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const acceptHandler = useCallback((starsCount: number, feedBack?: string) => {
    handleRateArticle(starsCount, feedBack);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} border="1rem" />;
  }

  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      title={t('Оцените статью')}
      feedBackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
      hasFeedBack
      onAccept={acceptHandler}
      onCancel={cancelHandler}
    />
  );
};

export default ArticleRating;
