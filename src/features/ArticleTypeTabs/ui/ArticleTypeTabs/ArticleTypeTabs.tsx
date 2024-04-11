import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation('article');

  const onTabsClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
  ], [t]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabsClick}
      className={classNames('', {}, [className])}
    />
  );
};
