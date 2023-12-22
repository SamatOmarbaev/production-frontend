import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = () => {
    setIsAuthModal((prev) => !prev);
  };

  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        onClick={onToggleModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Minus praesentium quae commodi, fugit atque a consequatur`)}
      </Modal>
    </nav>
  );
};

export default Navbar;
