import { FC } from 'react';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer: FC<ViewSelectorContainerProps> = (props) => {
  const { className } = props;
  const { view, onChangeView } = useArticlesFilters();

  return (
    <ArticleViewSelector
      view={view}
      onViewClick={onChangeView}
      className={className}
    />
  );
}