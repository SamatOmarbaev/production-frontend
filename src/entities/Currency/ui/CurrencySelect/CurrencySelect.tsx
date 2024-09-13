import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readOnly,
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  const listBoxProps = {
    items: options,
    initialValue: value,
    onChange: onChangeHandler,
    defaulValue: t('Укажите валюту'),
    className,
    readOnly,
    direction: "top right" as const,
    label: t('Укажите валюту'),
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<ListBox {...listBoxProps} />}
      off={<ListBoxDeprecated {...listBoxProps} />}
    />
  );
});
