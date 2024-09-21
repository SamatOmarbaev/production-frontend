import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleBlockType, ArticleView } from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { IconWrapper } from '@/shared/ui/deprecated/IconWrapper';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/deprecated/eye.svg';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/deprecated/Button';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItemDeprecated.module.scss';

export const ArticleListItemDeprecated = (props: ArticleListItemProps) => {
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
            <div className={classNames('', {}, [className, cls[view]])} data-testid="ArticleListItem">
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
            data-testid="ArticleListItem"
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
}
