import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comments';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentForm } from 'features/AddCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { articleDetailsPageReducer } from '../../model/slice';
import { fetchArticleRecomendations } from '../../model/services/fetchArticleRecomendations/fetchArticleRecomendations';
import { getRecomendationsIsLoading } from '../../model/selectors/getRecomandations';
import { getArticleRecomendations } from '../../model/slice/articleDetailsPageRecomendationSlice';
import { addCommentForArticle } from '../../model/services/addCommentArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/getComments';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import cls from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailPage: FC<ArticlesDetailPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recomendations = useSelector(getArticleRecomendations.selectAll);
  const recomendationsIsLoading = useSelector(getRecomendationsIsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecomendations());
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <PageWrapper className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        {t('Статья не найдена')}
      </PageWrapper>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <Button onClick={onBack}>
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text size={TextSize.L} title={t('Рекомендуем')} className={cls.commentTitle} />
        <ArticleList
          target="_blank"
          articles={recomendations}
          isLoading={recomendationsIsLoading}
          className={cls.recomendations}
        />
        <Text size={TextSize.L} title={t('Комментарии')} className={cls.commentTitle} />
        <CommentForm className={cls.commentForm} onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesDetailPage);
