import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleBlockType, ArticleView } from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import EyeIcon from '@/shared/assets/icons/redesigned/eye.svg';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { ArticleListItemProps } from '../ArticleListItem';
import { IconWrapper } from '@/shared/ui/redesigned/IconWrapper';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = (props: ArticleListItemProps) => {
    const {
        className, article, view = ArticleView.LIST, target,
    } = props;
    const { t } = useTranslation();

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} alt={article.title} />
            <Text weight='bold' text={article.user.username} />
        </>
    )
    const views = (
        <HStack gap='8'>
            <IconWrapper Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );

    if (view === ArticleView.GRID) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <Card
                border='round'
                padding='24'
                max
                className={classNames('', {}, [className, cls[view]])}
                data-testid="ArticleListItem"
            >
                <VStack gap='16' max>
                    <HStack gap='8'>
                        {userInfo}
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text xlSize weight="extraBold" title={article.title} />
                    <Text size='l' weight="bold" title={article.subtitle} />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock.paragraphs && (
                        <Text text={textBlock.paragraphs.slice(0, 1).join(' ')} className={cls.textBlock} />
                    )}
                    <HStack max justify='between'>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant='outline'>
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames('', {}, [className, cls[view]])}
            data-testid="ArticleListItem"
        >
            <Card padding='0' className={cls.card} border='round'>
                <AppImage
                    fallback={<Skeleton width="100%" height={240} />}
                    src={article.img}
                    alt={article.title}
                    className={cls.image}
                />
                <VStack className={cls.info} gap='4'>
                    <Text text={article.subtitle} className={cls.title} />
                    <VStack gap='4' className={cls.footer} max>
                        <HStack max justify='between'>
                            <Text text={article.createdAt} />
                            {views}
                        </HStack>
                        <HStack gap='4'>
                            {userInfo}
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
}
