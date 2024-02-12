import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticlesDetailPageHeader.module.scss';

interface ArticlesDetailPageHeaderProps {
   className?: string;
}

export const ArticlesDetailPageHeader: FC<ArticlesDetailPageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [navigate, article?.id]);

  return (
    <div className={classNames(cls.articlesDetailPageHeader, {}, [className])}>
      <Button onClick={onBack}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button
          onClick={onEditArticle}
          className={cls.edit}
        >
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
};
