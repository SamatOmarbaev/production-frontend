import {
  FC, Fragment, ReactNode,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
   value?: string;
   content?: ReactNode;
   disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom'

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionBottom,
  top: cls.optionTop,
};

export const ListBox: FC<ListBoxProps> = (props) => {
  const {
    items, className, initialValue, defaulValue, onChange, readOnly, direction = 'bottom', label,
  } = props;

  const optionClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readOnly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={initialValue}
        onChange={onChange}
      >
        <HListBox.Button disabled={readOnly} className={cls.trigger}>
          <Button>
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
                    { [cls.active]: active, [cls.disabled]: item.disabled },
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
