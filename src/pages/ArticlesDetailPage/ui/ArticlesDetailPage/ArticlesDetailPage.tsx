import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
   className?: string;
}

const ArticlesDetailPage: FC<ArticlesDetailPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      {t('Страница статьи')}
    </div>
  );
};

export default memo(ArticlesDetailPage);
