import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        gap="8"
        max
        className={classNames(cls.commentCard, {}, [className, cls.loading])}
      >
        <HStack gap="8">
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={20} />
        </HStack>
        <Skeleton width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      data-testid="CommentCard.Content"
      gap="8"
      max
      className={classNames(cls.commentCard, {}, [className])}
    >
      <AppLink to={getRouteProfile(comment?.user.id)} className={cls.header}>
        <Avatar size={30} className={cls.avatar} src={comment?.user.avatar} />
        <Text text={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} />
    </VStack>
  );
});
