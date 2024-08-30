import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getUserAuthData,
} from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { NavbarRedesigned } from './NavbarRedesigned/NavbarRedesigned';
import { NavbarOldDesigned } from './NavbarOldDesigned/NavbarOldDesigned';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<NavbarOldDesigned />}
        on={<NavbarRedesigned />}
      />
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={classNames(cls.links, {}, [])}
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});

export default Navbar;
