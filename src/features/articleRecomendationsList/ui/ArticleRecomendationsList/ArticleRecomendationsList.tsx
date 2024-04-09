import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecomendationsList } from '../../api/articleRecomendationsApi';

interface ArticleRecomendationsListProps {
  className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
  const { className } = props;
  const { isLoading, data: articles, error } = useArticleRecomendationsList(3);
  const { t } = useTranslation('article');

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем')}
      />
      <ArticleList
        target="_blank"
        articles={articles}
        isLoading={isLoading}
      />
    </VStack>
  );
});
