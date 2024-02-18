import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const ProfilePage = memo(() => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text title={t('Профиль не найден')} />;
  }

  return (
    <PageWrapper className={classNames('', {}, [])}>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
});

export default ProfilePage;
