import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import cls from './Notificationlist.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationlistProps {
  className?: string;
}

export const Notificationlist: FC<NotificationlistProps> = (props) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

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
