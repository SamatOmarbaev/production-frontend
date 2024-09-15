import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ProfileCardRedesignedSkeleton = () => (
  <Card padding='24' max >
    <VStack gap='32'>
      <HStack max justify='center'>
        <Skeleton border='100%' height={128} width={128} />
      </HStack>
      <HStack gap='32' max>
        <VStack gap='16' max>
          <Skeleton border='8px' width="100%" height={38} />
          <Skeleton border='8px' width="100%" height={38} />
          <Skeleton border='8px' width="100%" height={38} />
          <Skeleton border='8px' width="100%" height={38} />
        </VStack>
        <VStack gap='16' max>
          <Skeleton border='8px' width="100%" height={38} />
          <Skeleton border='8px' width="100%" height={38} />
          <Skeleton border='8px' width="100%" height={38} />
          <Skeleton border='8px' width="100%" height={38} />
        </VStack>
      </HStack>
    </VStack>
  </Card>
)

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack justify="center" max>
      <Text
        variant='error'
        align='center'
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
      />
    </HStack>
  )
}

export const ProfileCardRedesigned: FC<ProfileCardProps> = (props) => {
  const { className, data, onChangeAge,
    onChangeAvatar, onChangeCity, onChangeCountry, onChangeCurrency,
    onChangeFirstName, onChangeLastName, onChangeUsername, readOnly } = props;
  const { t } = useTranslation('profile');

  return (
    <Card padding='24' border='round' max className={className}>
      <VStack gap='32'>
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar size={120} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap='24' max>
          <VStack gap='16' max>
            <Input
              value={data?.first}
              label={t('Имя')}
              onChange={onChangeFirstName}
              readOnly={readOnly}
              data-testid="ProfileCard.firstname"
            />
            <Input
              value={data?.lastname}
              label={t('Фамилия')}
              onChange={onChangeLastName}
              readOnly={readOnly}
              data-testid="ProfileCard.lastname"
            />
            <Input
              value={data?.age}
              label={t('Возраст')}
              onChange={onChangeAge}
              readOnly={readOnly}
            />
            <Input
              value={data?.city}
              label={t('Город')}
              onChange={onChangeCity}
              readOnly={readOnly}
            />
          </VStack>
          <VStack gap='16' max>
            <Input
              value={data?.username}
              label={t('Имя пользователя')}
              onChange={onChangeUsername}
              readOnly={readOnly}
            />
            <Input
              value={data?.avatar}
              label={t('Ссылка на аватар')}
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
        </HStack>
      </VStack>
    </Card>
  );
}