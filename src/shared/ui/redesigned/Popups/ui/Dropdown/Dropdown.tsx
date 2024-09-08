import { FC, Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';

import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    className, items, trigger, direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(cls.item, { [popupCls.activeItem]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={String(item.href)} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={String(item.href)} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};