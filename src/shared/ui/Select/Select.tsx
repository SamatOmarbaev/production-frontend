import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, onChange, value, readOnly,
  } = props;

  const mods: Mods = {};

  const optionList = useMemo(() => options?.map((opt) => (
    <option
      className={styles.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {label && (
        <span className={styles.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readOnly}
      >
        {optionList}
      </select>
    </div>
  );
});
