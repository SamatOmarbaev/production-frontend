import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
    >
      {t('Язык')}
    </Button>
  );
});

export default LangSwitcher;
