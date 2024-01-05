import { Mods, classNames } from 'shared/lib/classNames/classNames';
import React, {
  FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  container?: HTMLElement | null;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen, onClose, container, lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDowm = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDowm);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDowm);
    };
  }, [isOpen, onKeyDowm]);

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal container={container}>
      <div className={classNames(styles.Modal, mods, [className, theme])}>
        <div className={classNames(styles.overlay)} onClick={closeHandler}>
          <div
            className={classNames(styles.content)}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
