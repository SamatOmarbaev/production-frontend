import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import { CommentFormActions, CommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getCommentFormText } from '../../model/selectors/addCommentFormSelectors';
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
      <HStack max justify="between" className={classNames(cls.AddCommentForm, {}, [className])}>
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
      </HStack>
    </DynamicModuleLoader>
  );
});

export default CommentForm;
