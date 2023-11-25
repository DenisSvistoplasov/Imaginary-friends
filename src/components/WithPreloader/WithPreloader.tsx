import { ReactNode, useRef } from 'react';
import styles from './WithPreloader.module.scss';
import { Loader } from '../Loader/Loader';
import { classnames } from '../../utils/classnames';

interface IWithPreloaderProps {
  isLoading: boolean;
  children: ReactNode;
  className?: string;
}

export function WithPreloader({ isLoading, children, className }: IWithPreloaderProps) {

  return (
    <div className={classnames(styles.wrapper, className)}>
      <div className={styles.inner}>
        {children}
      </div>
      {isLoading && <Loader className={styles.loader} dark/>}
    </div>
  );
}