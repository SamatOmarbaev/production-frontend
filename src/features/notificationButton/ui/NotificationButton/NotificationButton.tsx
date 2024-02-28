import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { IconWrapper } from 'shared/ui/IconWrapper/IconWrapper';
import { Notificationlist } from 'entities/Notification';
import Notification from 'shared/assets/icons/notification.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
  const { className } = props;

  return (
    <Popover
      direction="bottom left"
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <IconWrapper Svg={Notification} inverted />
        </Button>
      )}
      className={classNames('', {}, [className])}
    >
      <Notificationlist className={cls.notifications} />
    </Popover>
  );
};
