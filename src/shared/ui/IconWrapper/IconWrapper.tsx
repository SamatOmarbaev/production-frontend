import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './IconWrapper.module.scss';

interface IconWrapperProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const IconWrapper = memo((props: IconWrapperProps) => {
  const { className, Svg, inverted } = props;

  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.iconWrapper, {}, [className])} />
  );
});
