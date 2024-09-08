import {
  FC, Fragment, ReactNode,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';

import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value?: string;
  content?: ReactNode;
  disabled?: boolean;
}

export interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  initialValue?: string;
  defaulValue?: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

/**
 * @deprecated
 */

export const ListBox: FC<ListBoxProps> = (props) => {
  const {
    items, className, initialValue, defaulValue, onChange, readOnly, direction = 'bottom right', label,
  } = props;

  const optionClasses = [mapDirectionClass[direction]];

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
          <Button disabled={readOnly}>
            {initialValue ?? defaulValue}
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
                    { [popupCls.active]: active, [cls.disabled]: item.disabled },
                  )}
                >
                  {selected && '!!!'}
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
