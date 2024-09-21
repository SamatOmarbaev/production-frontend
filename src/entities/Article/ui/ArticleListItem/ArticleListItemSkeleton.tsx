import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import { toggleFeatures } from '@/shared/lib/features';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeltonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkelton = memo((props: ArticleListItemSkeltonProps) => {
  const { className, view = ArticleView.LIST } = props;

  const Skeleton = toggleFeatures({ name: 'isAppRedesigned', on: () => SkeletonRedesigned, off: () => SkeletonDeprecated })
  const Card = toggleFeatures({ name: 'isAppRedesigned', on: () => CardRedesigned, off: () => CardDeprecated })

  if (view === ArticleView.GRID) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card max padding='24' border='round'>
          <div className={cls.headerWrapper}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={15} className={cls.username} />
            <Skeleton width={100} height={15} className={cls.date} />
          </div>
          <Skeleton width={500} height={25} className={cls.title} />
          <div className={cls.imgWrapper}>
            <Skeleton height={250} className={cls.image} />
          </div>
          <div>
            <Skeleton width="100%" height={50} className={cls.textBlock} />
          </div>
          <div className={cls.footer}>
            <Skeleton width={100} height={30} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={100} height={15} />
        </div>
        <Skeleton width={150} height={15} className={cls.title} />
      </Card>
    </div>
  );
});
