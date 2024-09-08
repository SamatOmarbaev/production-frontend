import {
  FC, ReactNode,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { Portal } from '../../redesigned/Portal/Portal';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  container?: HTMLElement | null;
  lazy?: boolean;
}

/**
 * @deprecated
 */

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen, onClose, container, lazy,
  } = props;

  const { close, isClosing, isMounted } = useModal({ animationDelay: 500, onClose, isOpen });
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal container={container}>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div
          className={classNames(cls.content)}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
