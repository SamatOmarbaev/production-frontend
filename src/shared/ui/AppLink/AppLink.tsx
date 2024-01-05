import { Link, LinkProps } from 'react-router-dom';
import { ReactNode, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode
}

const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    className,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

export default AppLink;
