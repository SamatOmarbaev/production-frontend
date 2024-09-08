import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import GridIcon from '@/shared/assets/icons/deprecated/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/deprecated/list-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { IconWrapper } from '@/shared/ui/deprecated/IconWrapper';
import { ArticleView } from '@/entities/Article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: GridIcon,
  },
  {
    view: ArticleView.GRID,
    icon: ListIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.viewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
          className={cls.btn}
        >
          <IconWrapper
            Svg={viewType.icon}
            className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
            height={24}
            width={24}
          />
        </Button>
      ))}
    </div>
  );
};
