import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import Star from '@/shared/assets/icons/star.svg';
import { IconWrapper } from '../IconWrapper/IconWrapper';

interface StarRatingProps {
  className?: string;
  onSelect?: (starNum: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = (props) => {
  const {
    className, onSelect, selectedStars = 0, size = 30,
  } = props;
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((starNum) => (
        <IconWrapper
          Svg={Star}
          key={starNum}
          className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [currentStarsCount >= starNum ? cls.hovered : cls.normal])}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNum)}
          onClick={onClick(starNum)}
        />
      ))}
    </div>
  );
};
