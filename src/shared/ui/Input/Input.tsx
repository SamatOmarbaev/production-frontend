import { Mods, classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, onChange, value, type = 'text', placeholder, autoFocus, readOnly, ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>();
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [styles.readOnly]: readOnly,
  };

  const isCaretVisible = isFocused && !readOnly;

  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          onBlur={onBlur}
          onFocus={onFocus}
          readOnly={readOnly}
          onSelect={onSelect}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={styles.caret}
          />
        )}
      </div>

    </div>
  );
});
