import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/carbon_user-avatar-filled.svg';
import { IconWrapper } from '../IconWrapper';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className, src, size, alt, fallbackInverted,
  } = props;

  const mods: Mods = {};

  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  const fallback = <Skeleton border="50%" width={size} height={size} />;
  const errorFallback = <IconWrapper inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={style}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
