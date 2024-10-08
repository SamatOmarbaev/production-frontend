import { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'outlinedLight' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';

export type CardBorder = 'round' | 'norm';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  "0": 'gap_0',
  "8": 'gap_8',
  "16": 'gap_16',
  "24": 'gap_24',
}

export const Card: FC<CardProps> = (props) => {
  const {
    className, children, variant = 'normal', border = 'normal', padding = '8', max, ...otherProps
  } = props;

  const paddings = mapPaddingToClass[padding];

  return (
    <article
      className={classNames(cls.Card, { [cls.max]: max }, [className, cls[variant], cls[paddings], cls[border]])}
      {...otherProps}
    >
      {children}
    </article>
  );
};
