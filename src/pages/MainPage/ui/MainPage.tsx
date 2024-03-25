import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      {t('Главная страница')}
    </PageWrapper>
  );
}
export default memo(MainPage);
