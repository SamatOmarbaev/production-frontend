import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, readOnly,
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  const listBoxProps = {
    onChange: onChangeHandler,
    initialValue: value,
    defaulValue: t('Укажите страну'),
    items: options,
    className,
    readOnly,
    direction: "top right" as const,
    label: t('Укажите страну'),
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<ListBox {...listBoxProps} />}
      off={<ListBoxDeprecated {...listBoxProps} />}
    />
  );
});
