import { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Popover } from '@/shared/ui/redesigned/Popups';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { IconWrapper as IconWrapperDeprecated } from '@/shared/ui/deprecated/IconWrapper';
import { IconWrapper } from '@/shared/ui/redesigned/IconWrapper';
import { Notificationlist } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/deprecated/notification.svg';
import NotificationIcon from '@/shared/assets/icons/redesigned/notification.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';

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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<IconWrapper Svg={NotificationIcon} clickable onClick={onOpenDrawer} />}
      off={
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
          <IconWrapperDeprecated Svg={NotificationIconDeprecated} inverted />
        </Button>
      }
    />
  );

  return (
    <div>
      <BrowserView>
        <ToggleFeatures
          feature='isAppRedesigned'
          on={
            <Popover
              direction="bottom left"
              trigger={trigger}
              className={classNames('', {}, [className])}
            >
              <Notificationlist className={cls.notifications} />
            </Popover>
          }
          off={
            <PopoverDeprecated
              direction="bottom left"
              trigger={trigger}
              className={classNames('', {}, [className])}
            >
              <Notificationlist className={cls.notifications} />
            </PopoverDeprecated>
          }
        />
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <Notificationlist />
        </Drawer>
      </MobileView>
    </div>
  );
};
