import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating: FC<ProfileRatingProps> = (props) => {
  const { className, profileId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });
  const [rateProfileMutation] = useRateProfile();

  const handleRateArticle = useCallback((starsCount: number, feedBack?: string) => {
    try {
      rateProfileMutation({
        userId: userData?.id ?? '',
        profileId,
        rate: starsCount,
        feedback: feedBack,
      });
    } catch (error) {
      console.log(error);
    }
  }, [profileId, rateProfileMutation, userData?.id]);

  const cancelHandler = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const acceptHandler = useCallback((starsCount: number, feedBack?: string) => {
    handleRateArticle(starsCount, feedBack);
  }, [handleRateArticle]);

  const rating = data?.[0];

  if (isLoading) {
    return <Skeleton width="100%" height={120} border="1rem" />;
  }

  return (
    <RatingCard
      className={className}
      title={t('Оцените профиль')}
      feedBackTitle={t('Оставьте свой отзыв о профиле, это поможет улучшить качество')}
      hasFeedBack
      onAccept={acceptHandler}
      onCancel={cancelHandler}
      rate={rating?.rate}
    />
  );
};

export default ProfileRating;
