import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../../model/types/sidebar';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { IconWrapper } from '@/shared/ui/redesigned/IconWrapper';

import cls from './SidebarItemRedesigned.module.scss';

interface SidebarItemRedesignedProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItemRedesigned = (props: SidebarItemRedesignedProps) => {
    const { collapsed, item } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
            to={item.path}
            activeClassName={cls.active}
        >
            <IconWrapper Svg={item.Icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
}
