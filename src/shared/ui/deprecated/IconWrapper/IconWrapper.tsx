import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './IconWrapper.module.scss';

interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * @deprecated
 */

export const IconWrapper = memo((props: IconWrapperProps) => {
  const {
    className, Svg, inverted, ...otherProps
  } = props;

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.iconWrapper, {}, [className])}
      {...otherProps}
    />
  );
});
