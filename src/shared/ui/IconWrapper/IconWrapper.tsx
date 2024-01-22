import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './IconWrapper.module.scss';

interface IconWrapperProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const IconWrapper = memo((props: IconWrapperProps) => {
  const { className, Svg } = props;

  return (
    <Svg className={classNames(cls.iconWrapper, {}, [className])} />
  );
});
