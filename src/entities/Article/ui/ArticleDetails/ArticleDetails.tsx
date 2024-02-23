import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { IconWrapper } from 'shared/ui/IconWrapper/IconWrapper';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
  getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
      return null;
    }
  }, []);

  useInitialEffect(() => dispatch(fetchArticleById(id)));

  let content;

  if (isLoading) {
    content = (
      <VStack gap="16" max>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </VStack>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </HStack>
        <VStack gap="4" max>
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8">
            <IconWrapper Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap="8">
            <IconWrapper Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
