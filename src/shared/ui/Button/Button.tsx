import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children, className, theme, square, size = ButtonSize.M, type, ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles[size]]: true,
  };

  return (
    <button
      className={classNames(styles.Button, mods, [className, styles[theme]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
