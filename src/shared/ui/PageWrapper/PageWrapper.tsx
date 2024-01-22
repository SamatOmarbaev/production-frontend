import {
  FC,
  MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.pageWrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
