import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item?: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
  const { className, item } = props;

  const content = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card max className={classNames('', {}, [className])}>
          <Text title={item?.title} text={item?.description} />
        </Card>
      }
      off={
        <CardDeprecated theme={CardTheme.OUTLINED} max className={classNames('', {}, [className])}>
          <TextDeprecated title={item?.title} text={item?.description} />
        </CardDeprecated>
      }
    />

  );

  if (item?.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={cls.link}
      >
        {content}
      </a>
    );
  }

  return content;
};
