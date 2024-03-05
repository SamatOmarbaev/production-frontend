import { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { IconWrapper } from '@/shared/ui/IconWrapper/IconWrapper';
import { Notificationlist } from '@/entities/Notification';
import Notification from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <IconWrapper Svg={Notification} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          direction="bottom left"
          trigger={trigger}
          className={classNames('', {}, [className])}
        >
          <Notificationlist className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <Notificationlist />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  );
};
