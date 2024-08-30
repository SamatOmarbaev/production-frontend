import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarRedesigned } from './SidebarRedesigned/SidebarRedesigned';
import { SidebarOldDesigned } from './SidebarOldDesigned/SidebarOldDesigned';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      key={item.path}
      collapsed={collapsed}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<SidebarRedesigned collapsed={collapsed} />}
      off={<SidebarOldDesigned collapsed={collapsed} itemList={itemList} toggleSidebar={toggleSidebar} />}
    />
  )
});
