import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import cls from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper className={classNames(cls.NotFoundPage, {}, [])}>
      {t('Страница не найдена')}
    </PageWrapper>
  );
}
