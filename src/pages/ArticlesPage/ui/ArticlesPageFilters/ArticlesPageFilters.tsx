import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { view, type, sort, search, order,
    onChangeView, onChangeType, onChangeSort,
    onChangeSearch, onChangeOrder
  } = useArticlesFilters();

  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Поиск')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  );
};
