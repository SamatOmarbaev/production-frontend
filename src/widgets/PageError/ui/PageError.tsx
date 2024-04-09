import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Button } from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface ErrorPageProps {
  className?: string
}

const PageError = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Перезагрузить страницу')}
      </Button>
    </div>
  );
};

export default PageError;
