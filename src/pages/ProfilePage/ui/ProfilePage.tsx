import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';

const ProfilePage = memo(() => {
  const { id } = useParams<{id: string}>();

  return (
    <PageWrapper className={classNames('', {}, [])}>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
});

export default ProfilePage;
