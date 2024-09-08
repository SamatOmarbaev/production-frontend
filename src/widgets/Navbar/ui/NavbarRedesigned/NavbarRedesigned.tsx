import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';

import cls from './NavbarRedesigned.module.scss';

interface NavbarRedesignedProps {
    className?: string;
}

export const NavbarRedesigned = (props: NavbarRedesignedProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    )
}
