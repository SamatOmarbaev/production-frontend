import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { IconWrapper } from '@/shared/ui/IconWrapper';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import {
  Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className, article, view = ArticleView.LIST, target,
  } = props;
  const { t } = useTranslation();

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <IconWrapper Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.GRID) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card>
          <div className={cls.headerWrapper}>
            <Avatar size={30} src={article.user.avatar} alt={article.title} className={cls.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <div className={cls.imgWrapper}>
            <AppImage
              fallback={<Skeleton width="100%" height={250} />}
              src={article.img}
              alt={article.title}
              className={cls.image}
            />
          </div>
          <div>
            {textBlock && (
              <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
            )}
          </div>
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <Button>
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames('', {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <HStack align="center">
          {types}
          {views}
        </HStack>
        <Text size={TextSize.S} title={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
