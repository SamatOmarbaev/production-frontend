import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import cls from './LangSwitcher.module.scss';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Button
          onClick={toggle}
          variant='clear'
        >
          {t('Язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames(cls.LangSwitcher, {}, [className])}
          onClick={toggle}
          theme={ButtonTheme.CLEAR}
        >
          {t('Язык')}
        </ButtonDeprecated>
      }
    />

  );
});

export default LangSwitcher;
