import { ReactNode, SyntheticEvent } from 'react';
import styles from './ModalWrapper.module.scss';
import { createPortal } from 'react-dom';
import { classnames } from '../../utils/classnames';

interface IModalWrapperProps {
  children: ReactNode;
  className?: string;
  close?: () => void;
}

export function ModalWrapper({ children, className, close }: IModalWrapperProps) {
  const onClick = (e: SyntheticEvent) => {
    if (e.target===e.currentTarget) {
      close?.();
    }
  }
  return (
    <>
      {createPortal(
        <div className={styles.wrapper} onClick={onClick}>
            {children}
        </div>,
        document.body)}
    </>
  );
}