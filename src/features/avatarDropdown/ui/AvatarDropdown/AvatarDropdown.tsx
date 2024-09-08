import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  const items = [
    ...(isAdminPanelAvailable ? [{
      content: t('Админка'),
      href: getRouteAdmin(),
    }] : []),
    {
      content: t('Профиль'),
      href: getRouteProfile(authData?.id ?? ''),
    },
    {
      content: t('Выйти'),
      onClick: onLogout,
    },
  ]

  if (!authData) {
    return null;
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Dropdown
          trigger={<Avatar size={48} src={authData.avatar} />}
          items={items}
          direction="bottom left"
          className={classNames('', {}, [className])}
        />
      }
      off={
        <DropdownDeprecated
          trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
          items={items}
          direction="bottom left"
          className={classNames('', {}, [className])}
        />
      }
    />

  );
};
