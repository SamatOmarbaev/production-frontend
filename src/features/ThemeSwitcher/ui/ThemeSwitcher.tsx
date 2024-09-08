import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import ThemeIconDeprecated from '@/shared/assets/icons/deprecated/theme.svg';
import ThemeIcon from '@/shared/assets/icons/redesigned/theme.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { IconWrapper as IconWrapperDeprecated } from '@/shared/ui/deprecated/IconWrapper';
import { ToggleFeatures } from '@/shared/lib/features';
import { IconWrapper } from '@/shared/ui/redesigned/IconWrapper';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    })
  }, [toggleTheme, dispatch])

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<IconWrapper Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
      off={
        <Button
          className={classNames(cls.ThemeBtn, {}, [className])}
          onClick={onToggleHandler}
          theme={ButtonTheme.CLEAR}
        >
          <IconWrapperDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
        </Button>
      }
    />
  );
});

export default ThemeSwitcher;
