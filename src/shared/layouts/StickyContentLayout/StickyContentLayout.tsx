import { ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
    const { left, content, right, className } = props;

    return (
        <div className={classNames(styles.StickyContentLayout, {}, [className])}>
            {right && <div className={styles.left}>{left}</div>}
            <div className={styles.content}>{content}</div>
            {left && <div className={styles.right}>{right}</div>}
        </div>
    )
}
