import { ReactNode } from 'react';
import styles from './WithPagination.module.scss';
import { classnames } from '../../utils/classnames';
import { Pagination } from './Pagination/Pagination';

interface IWithPaginationProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

export function WithPagination({ children, currentPage, totalPages, goToPage }: IWithPaginationProps) {


  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {children}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
}