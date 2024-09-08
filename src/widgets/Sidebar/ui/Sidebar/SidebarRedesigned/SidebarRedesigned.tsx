import { memo, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { IconWrapper } from "@/shared/ui/redesigned/IconWrapper";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";

import ArrowIcon from '@/shared/assets/icons/redesigned/arrow-bottom.svg';

import cls from './SidebarRedesigned.module.scss';

interface SidebarRedesignedProps {
    collapsed?: boolean;
    className?: string;
    itemList: ReactNode[];
    toggleSidebar: () => void;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className, collapsed, itemList, toggleSidebar } = props;
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
        >
            <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemList}
            </VStack>
            <IconWrapper
                clickable
                onClick={toggleSidebar}
                className={cls.collapsedBtn}
                Svg={ArrowIcon}
            />
            <HStack gap="16" max justify="center" className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </HStack>
        </aside>
    )
})