import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

function AdminPanelPage() {
  const { t } = useTranslation('admin');

  return (
    <PageWrapper>
      {t('Админ панель')}
    </PageWrapper>
  );
}

export default memo(AdminPanelPage);
