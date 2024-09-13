import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sortOrder';
import { Input } from '@/shared/ui/redesigned/Input';
import { IconWrapper } from '@/shared/ui/redesigned/IconWrapper';
import SearchIcon from '@/shared/assets/icons/redesigned/search.svg';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  onChangeSort: (newSort: ArticleSortField) => void;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  type: ArticleType;
  onChangeType: (type: ArticleType) => void
  search: string;
  onChangeSearch: (type: string) => void
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = (props) => {
  const { className, type, sort, search, order, onChangeType, onChangeSort, onChangeSearch, onChangeOrder } = props;
  const { t } = useTranslation('article');

  return (
    <Card
      className={classNames(cls.articlesFilters, {}, [className])}
      padding='24'
      border='round'
    >
      <VStack gap='32'>
        <Input
          placeholder={t('Поиск')}
          value={search}
          size='s'
          onChange={onChangeSearch}
          addonLeft={<IconWrapper Svg={SearchIcon} />}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
        />
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
}