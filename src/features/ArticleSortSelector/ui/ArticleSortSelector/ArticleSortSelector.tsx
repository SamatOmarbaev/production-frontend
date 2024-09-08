import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sortOrder';
import { ArticleSortField } from '@/entities/Article';
import cls from './ArticleSortSelector.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  onChangeSort: (newSort: ArticleSortField) => void;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
  const {
    className, sort, order, onChangeOrder, onChangeSort,
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию'),
    },
    {
      value: 'desc',
      content: t('убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам'),
    },
  ], [t]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <VStack gap='8' align='start' className={classNames(cls.articleSortSelectorRedesigned, {}, [className])}>
          <Text text={t('Сортировать по:')} />
          <ListBox
            items={sortFieldOptions}
            initialValue={sort}
            onChange={onChangeSort}
          />
          <ListBox
            items={orderOptions}
            initialValue={order}
            onChange={onChangeOrder}
          />
        </VStack>
      }
      off={
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
          <Select
            label={t('Сортировка по')}
            options={sortFieldOptions}
            value={sort}
            onChange={onChangeSort}
          />
          <Select
            label={t('по')}
            options={orderOptions}
            value={order}
            onChange={onChangeOrder}
          />
        </div>
      }
    />
  );
};
