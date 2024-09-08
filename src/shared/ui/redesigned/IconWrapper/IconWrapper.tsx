import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './IconWrapper.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const IconWrapper = memo((props: IconProps) => {
  const {
    className, Svg, width = 32, height = 32, clickable, ...otherProps
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.iconWrapper, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  )

  if (clickable) {
    return (
      <button
        type="button"
        className={cls.button}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    )
  }

  return icon;
});
