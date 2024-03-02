import {
  MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationDelay?: number;
}

export function useModal(props: UseModalProps) {
  const {
    isOpen, onClose, animationDelay,
  } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [onClose, animationDelay]);

  const onKeyDowm = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDowm);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDowm);
    };
  }, [isOpen, onKeyDowm]);

  return {
    isClosing, isMounted, close,
  };
}
