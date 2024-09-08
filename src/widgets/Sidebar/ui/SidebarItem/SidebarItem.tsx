import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarItemDeprecated } from './SidebarItemDeprecated/SidebarItemDeprecated';
import { SidebarItemRedesigned } from './SidebarItemRedesigned/SidebarItemRedesigned';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<SidebarItemRedesigned item={item} collapsed={collapsed} />}
      off={<SidebarItemDeprecated item={item} collapsed={collapsed} />}
    />
  );
});
