import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <nav className={classNames(styles.Navbar, {}, [className])}>
    <div className={classNames(styles.links, {}, [])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        О нас
      </AppLink>
    </div>
  </nav>
);

export default Navbar;
