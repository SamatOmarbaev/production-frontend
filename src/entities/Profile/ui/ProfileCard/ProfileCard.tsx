import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import styles from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль пользователя')} />
        <Button theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles.input}
        />
      </div>
    </div>
  );
});
