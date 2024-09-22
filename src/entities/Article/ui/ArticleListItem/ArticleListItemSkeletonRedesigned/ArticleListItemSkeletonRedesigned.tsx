import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItemSkeltonProps } from '../ArticleListItemSkeleton';
import { ArticleView } from '../../../model/consts/articleConsts';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleListItemSkeletonRedesigned.module.scss';

export const ArticleListItemSkeletonRedesigned = (props: ArticleListItemSkeltonProps) => {
    const { className, view = ArticleView.LIST } = props;

    if (view === ArticleView.GRID) {
        return (
            <Card max padding='24' border='round' className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <VStack gap='16' max>
                    <HStack gap='8'>
                        <Skeleton width={32} height={32} border="50%" />
                        <Skeleton width={152} height={24} border='32px' />
                    </HStack>
                    <VStack gap='8' max>
                        <Skeleton width='100%' height={38} border='8px' />
                        <Skeleton width='90%' height={38} border='8px' />
                    </VStack>
                    <Skeleton width='75%' height={27} border='8px' />
                    <Skeleton width="100%" height={420} border='16px' />
                    <VStack gap='8' max>
                        <Skeleton width='90%' height={17} border='4px' />
                        <Skeleton width='80%' height={17} border='4px' />
                        <Skeleton width='95%' height={17} border='4px' />
                    </VStack>
                    <Skeleton width={56} height={23} border='22px' className={cls.views} />
                </VStack>
            </Card>
        );
    }

    return (
        <Card padding='0' border='round' className={classNames('', {}, [className, cls[view]])}>
            <VStack gap='16' max className={cls.card}>
                <Skeleton width='100%' height={140} border='16px' className={cls.image} />
                <VStack gap='8' max>
                    <Skeleton width='100%' height={16} border="4px" />
                    <Skeleton width='90%' height={16} border='4px' />
                    <Skeleton width='95%' height={16} border='4px' />
                </VStack>
                <VStack gap='8' max justify='end' className={cls.footer}>
                    <HStack gap='8' justify='between' max>
                        <Skeleton width={84} height={22} border="8px" />
                        <Skeleton width={88} height={24} border='8px' />
                    </HStack>
                    <HStack gap='8'>
                        <Skeleton width={32} height={32} border="50%" />
                        <Skeleton width={76} height={24} border='16px' />
                    </HStack>
                </VStack>
            </VStack>
        </Card>
    );
}
