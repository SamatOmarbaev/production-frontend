import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLinkTheme, AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { SidebarItemType } from '../../../model/types/sidebar';

import cls from './SidebarItemDeprecated.module.scss';

interface SidebarItemDeprecatedProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItemDeprecated = (props: SidebarItemDeprecatedProps) => {
    const { collapsed, item } = props;
    const { t } = useTranslation();

    return (
        <AppLinkDeprecated
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLinkDeprecated>
    )
}
