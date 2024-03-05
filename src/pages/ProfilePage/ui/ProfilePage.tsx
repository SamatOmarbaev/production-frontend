import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { EditableProfileCard } from '@/features/editableProfileCard';

const ProfilePage = memo(() => {
  const { id } = useParams<{id: string}>();

  return (
    <PageWrapper className={classNames('', {}, [])}>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
});

export default ProfilePage;
