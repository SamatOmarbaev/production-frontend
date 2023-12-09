import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <div className={classNames(styles.links, {}, [])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('О нас')}
        </AppLink>
      </div>
    </nav>
  );
};

export default Navbar;
