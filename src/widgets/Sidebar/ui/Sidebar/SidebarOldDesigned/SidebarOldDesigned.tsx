import { memo, ReactNode } from 'react';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './SidebarOldDesigned.module.scss';

interface SidebarOldDesignedProps {
    collapsed?: boolean;
    className?: string;
    toggleSidebar: () => void
    itemList: ReactNode[];
}

export const SidebarOldDesigned = memo((props: SidebarOldDesignedProps) => {
    const { className, collapsed, itemList, toggleSidebar } = props;

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggleSidebar}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" gap="16" className={cls.items}>
                {itemList}
            </VStack>
            <HStack gap="16" max justify="center" className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </HStack>
        </aside>
    )
})