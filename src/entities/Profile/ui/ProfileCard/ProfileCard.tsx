import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardDeprecated, ProfileCardDeprecatedError, ProfileCardDeprecatedLoader } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned, ProfileCardRedesignedSkeleton } from '../ProfileCardRedesigned/ProfileCardRedesigned';
import { Profile } from '../../model/types/profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

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
  const { isLoading, error } = props;

  if (isLoading) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedError />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
});
