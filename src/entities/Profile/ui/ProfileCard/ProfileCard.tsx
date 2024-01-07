import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className, data, error, isLoading,
    onChangeFirstName, onChangeLastName, onChangeAge, onChangeCity,
    onChangeUsername, onChangeAvatar, onChangeCurrency, onChangeCountry,
    readOnly,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readOnly,
  };

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={styles.input}
          onChange={onChangeFirstName}
          readOnly={readOnly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles.input}
          onChange={onChangeLastName}
          readOnly={readOnly}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={styles.input}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город')}
          className={styles.input}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          value={data?.username}
          placeholder={t('Введите имя пользователя')}
          className={styles.input}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          className={styles.input}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
});
