import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import cls from './Notificationlist.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationlistProps {
  className?: string;
}

export const Notificationlist: FC<NotificationlistProps> = (props) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  })

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.notificationlist, {}, [className])}
      >
        <Skeleton width="100%" height={80} border="8px" />
        <Skeleton width="100%" height={80} border="8px" />
        <Skeleton width="100%" height={80} border="8px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.notificationlist, {}, [className])}
    >
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
};
