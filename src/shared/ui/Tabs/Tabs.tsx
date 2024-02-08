import { FC, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = (props) => {
  const {
    className, tabs, value, onTabClick,
  } = props;

  const clickHandler = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
