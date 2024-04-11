import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

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
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [navigate, article]);

  return (
    <HStack justify="between" max className={classNames('', {}, [className])}>
      <Button onClick={onBack}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button
          onClick={onEditArticle}
        >
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
};
