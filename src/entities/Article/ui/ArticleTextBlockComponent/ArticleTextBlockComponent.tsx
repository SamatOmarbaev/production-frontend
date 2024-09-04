import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {block?.title && <Text title={block?.title} className={cls.title} />}
      {block?.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraphs} />
      ))}
    </div>
  );
});
