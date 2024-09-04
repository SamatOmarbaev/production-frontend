import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { IconWrapper } from '@/shared/ui/deprecated/IconWrapper';

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
    <Button
      className={classNames(cls.ThemeBtn, {}, [className])}
      onClick={onToggleHandler}
      theme={ButtonTheme.CLEAR}
    >
      <IconWrapper Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  );
});

export default ThemeSwitcher;
