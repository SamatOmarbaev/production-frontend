import { FC } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer: FC<FiltersContainerProps> = (props) => {
  const { className } = props;
  const { type, sort, search, order,
    onChangeType, onChangeSort,
    onChangeSearch, onChangeOrder
  } = useArticlesFilters();

  return (
    <ArticlesFilters
      type={type}
      sort={sort}
      search={search}
      order={order}
      onChangeType={onChangeType}
      onChangeSort={onChangeSort}
      onChangeSearch={onChangeSearch}
      onChangeOrder={onChangeOrder}
      className={className}
    />
  );
}