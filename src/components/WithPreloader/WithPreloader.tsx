import { ReactNode } from 'react';
import styles from './WithPreloader.module.scss';
import { Loader } from '../Loader/Loader';
import classNames from 'classnames';

interface WithPreloaderProps {
  isLoading: boolean;
  children: ReactNode;
  className?: string;
}

export function WithPreloader({ isLoading, children, className }: WithPreloaderProps) {

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.inner}>
        {children}
      </div>
      {isLoading && <Loader className={styles.loader} dark />}
    </div>
  );
}