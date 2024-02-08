import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CommentFormActions, CommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getCommentFormError, getCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './CommentForm.module.scss';

export interface CommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: CommentFormReducer,
};

const CommentForm = memo((props: CommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getCommentFormText);
  const error = useSelector(getCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentChange = useCallback((value: string) => {
    dispatch(CommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentChange('');
  }, [onCommentChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentChange}
          className={cls.input}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default CommentForm;