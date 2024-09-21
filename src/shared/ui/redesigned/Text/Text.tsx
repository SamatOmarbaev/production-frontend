import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'normal' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

export type TextWeight = 'bold' | 'extraBold';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
  xlSize?: boolean;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  's': 'size_s',
  'm': 'size_m',
  'l': 'size_l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  's': 'h3',
  'm': 'h2',
  'l': 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className, text, title, variant = 'normal', align = 'left',
    size = 'm', 'data-testid': dataTestId = '', weight = 'bold', xlSize
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const additionalClassess = [className, cls[weight], cls[variant], cls[align], sizeClass];

  return (
    <div className={classNames(cls.Text, { [cls.xl]: xlSize }, additionalClassess)}>
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={cls.text}
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  );
});
