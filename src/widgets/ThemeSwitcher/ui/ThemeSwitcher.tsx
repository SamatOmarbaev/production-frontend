import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ThemeSwitcher.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProvider";

import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
