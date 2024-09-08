import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import TiledIconDeprecated from '@/shared/assets/icons/deprecated/tiled-24-24.svg';
import ListIconDeprecated from '@/shared/assets/icons/deprecated/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/redesigned/tile.svg';
import ListIcon from '@/shared/assets/icons/redesigned/burger.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { IconWrapper as IconWrapperDeprecated } from '@/shared/ui/deprecated/IconWrapper';
import { ArticleView } from '@/entities/Article';

import cls from './ArticleViewSelector.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { IconWrapper } from '@/shared/ui/redesigned/IconWrapper';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card border='round' variant='outlinedLight' className={classNames(cls.viewSelectorRedesigned, {}, [className])}>
          <HStack gap='8' align='center'>
            {viewTypes.map((viewType) => (
              <IconWrapper
                Svg={viewType.icon}
                className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                clickable
                onClick={onClick(viewType.view)}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.viewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
              key={viewType.view}
              className={cls.btn}
            >
              <IconWrapperDeprecated
                Svg={viewType.icon}
                className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                height={24}
                width={24}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
};
