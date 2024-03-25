import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';

function ForbiddenPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      {t('У вас нет доступа к этой странице')}
    </PageWrapper>
  );
}

export default memo(ForbiddenPage);
