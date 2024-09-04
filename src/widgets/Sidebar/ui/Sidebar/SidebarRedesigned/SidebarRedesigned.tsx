import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import { AppLogo } from "@/shared/ui/deprecated/AppLogo";

import cls from './SidebarRedesigned.module.scss';

interface SidebarRedesignedProps {
    collapsed?: boolean;
    className?: string;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className, collapsed } = props;
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <AppLogo className={cls.appLogo} />
        </aside>
    )
})