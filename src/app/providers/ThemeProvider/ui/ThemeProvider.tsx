import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';


interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
  const [isThemeInited, setIsThemeInited] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
