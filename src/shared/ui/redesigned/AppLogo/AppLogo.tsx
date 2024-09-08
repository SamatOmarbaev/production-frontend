import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/redesigned/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../redesigned/Stack';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
    <HStack
        max
        justify="center"
        className={classNames(cls.appLogoWrapper, {}, [className])}
    >
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
        <AppSvg width={size} height={size} className={cls.appLogo} />
    </HStack>
));
