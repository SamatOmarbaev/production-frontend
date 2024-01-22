import { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
   className?: string;
   children: ReactNode;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
  const { className, children } = props;

  return (
    <section className={classNames(cls.pageWrapper, {}, [className])}>
      {children}
    </section>
  );
});
