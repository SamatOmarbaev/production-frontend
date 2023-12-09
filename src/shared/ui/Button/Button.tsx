import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { t } from 'i18next';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children, className, theme, type, ...otherProps
  } = props;

  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
