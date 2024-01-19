import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfileHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfileHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль пользователя')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readOnly
            ? (
              <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Редактировать')}
              </Button>
            )
            : (
              <>
                <Button
                  className={cls.editBtn}
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('Отменить')}
                </Button>
                <Button
                  className={cls.saveBtn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                >
                  {t('Сохранить')}
                </Button>
              </>
            )}
        </div>
      )}
      {}
    </div>
  );
};
