import { memo } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemSkeletonRedesigned/ArticleListItemSkeletonRedesigned';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemSkeletonDeprecated/ArticleListItemSkeletonDeprecated';

export interface ArticleListItemSkeltonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkelton = memo((props: ArticleListItemSkeltonProps) => (
  <ToggleFeatures
    feature='isAppRedesigned'
    on={<ArticleListItemSkeletonRedesigned {...props} />}
    off={<ArticleListItemSkeletonDeprecated {...props} />}
  />
));
