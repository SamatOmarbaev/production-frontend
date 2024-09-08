import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/PageWrapper';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { VStack } from '@/shared/ui/redesigned/Stack';

const ProfilePage = memo(() => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <PageWrapper data-testid="ProfilePage" className={classNames('', {}, [])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </PageWrapper>
  );
});

export default ProfilePage;
