import {
  Fragment, ReactNode,
  useMemo,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';

import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
  value?: T;
  content?: ReactNode;
  disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  initialValue?: T;
  defaulValue?: string;
  onChange: (value: T) => void;
  readOnly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    items, className, initialValue, defaulValue, onChange, readOnly, direction = 'bottom right', label,
  } = props;

  const optionClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItems = useMemo(() => items?.find(item => item.value === initialValue), [initialValue, items])

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readOnly}
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={initialValue}
        onChange={onChange}
      >
        <HListBox.Button as="div" className={popupCls.trigger}>
          <Button variant='filled' disabled={readOnly}>
            {selectedItems?.content ?? defaulValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    { [popupCls.activeItem]: active, [cls.disabled]: item.disabled, [cls.selected]: selected },
                  )}
                >
                  {selected}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
