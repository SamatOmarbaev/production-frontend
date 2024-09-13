import React, {
  InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState,
} from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'size'>

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input = memo((props: InputProps) => {
  const {
    className, onChange, value, type = 'text', placeholder,
    autoFocus, readOnly, addonLeft, addonRight, label, size = 'm', ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>();
  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const input = <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
    {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={cls.input}
      onBlur={onBlur}
      onFocus={onFocus}
      readOnly={readOnly}
      placeholder={placeholder}
      {...otherProps}
    />
    {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
  </div>

  if (label) {
    return (
      <HStack max gap='8'>
        <Text text={label} />
        {input}
      </HStack>
    )
  }

  return input;
});
