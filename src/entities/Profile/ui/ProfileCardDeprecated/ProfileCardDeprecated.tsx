import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedLoader = () => (
  <HStack max justify="center" className={classNames(cls.ProfileCard, { [cls.loading]: true })}>
    <LoaderDeprecated />
  </HStack>
)

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [cls.error])}>
      <TextDeprecated
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
      />
    </HStack>
  )
}

export const ProfileCardDeprecated: FC<ProfileCardProps> = (props) => {
  const { className, data,
    onChangeAge, onChangeAvatar, onChangeCity,
    onChangeCountry, onChangeCurrency, onChangeFirstName,
    onChangeLastName, onChangeUsername, readOnly } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" max>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        value={data?.first}
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstName}
        readOnly={readOnly}
        data-testid="ProfileCard.firstname"
      />
      <InputDeprecated
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastName}
        readOnly={readOnly}
        data-testid="ProfileCard.lastname"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t('Ваш возраст')}
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t('Ваш город')}
        onChange={onChangeCity}
        readOnly={readOnly}
      />
      <InputDeprecated
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
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
    </VStack>
  );
}