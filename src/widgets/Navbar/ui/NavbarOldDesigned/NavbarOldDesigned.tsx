import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';

import cls from './NavbarOldDesigned.module.scss';

interface NavbarOldDesignedProps {
    className?: string;
}

export const NavbarOldDesigned = (props: NavbarOldDesignedProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                theme={TextTheme.INVERTED}
                title={t('My App')}
                className={cls.appName}
            />
            <AppLink
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.INVETRED}
            >
                {t('Создать статью')}
            </AppLink>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    )
}
