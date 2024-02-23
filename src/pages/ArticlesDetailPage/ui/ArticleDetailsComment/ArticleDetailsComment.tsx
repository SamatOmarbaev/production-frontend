import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comments';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { addCommentForArticle } from '../../model/services/addCommentArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/getComments';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComment: FC<ArticleDetailsCommentProps> = (props) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack max gap="16" className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Комментарии')} />
      <CommentForm onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
};
