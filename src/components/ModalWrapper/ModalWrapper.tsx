import { ReactNode, SyntheticEvent } from 'react';
import styles from './ModalWrapper.module.scss';
import { createPortal } from 'react-dom';

interface ModalWrapperProps {
  children: ReactNode;
  close?: () => void;
}

export function ModalWrapper({ children, close }: ModalWrapperProps) {
  const onClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      close?.();
    }
  };
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