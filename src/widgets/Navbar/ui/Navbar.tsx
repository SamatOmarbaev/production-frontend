import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  const onOpenModal = () => {
    setIsAuthModal(true);
  };

  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </nav>
  );
};

export default Navbar;
