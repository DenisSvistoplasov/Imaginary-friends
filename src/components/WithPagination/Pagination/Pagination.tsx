import { classnames } from '../../../utils/classnames';
import styles from './Pagination.module.scss';

interface IPaginationProps{
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

export function Pagination({currentPage, totalPages, goToPage}: IPaginationProps) {
  const numberBtns = Array(totalPages).fill(0).map((_, i, __, pageNumber = i + 1) => (
    <button
      className={classnames(styles.btn, { [styles.active]: currentPage === pageNumber })}
      key={pageNumber}
      onClick={() => goToPage(pageNumber)}
    >
      {pageNumber}
    </button>
  ));

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  
  const goToFirst = () => !isFirst && goToPage(1);
  const goToPrev = () => !isFirst && goToPage(currentPage - 1);
  const goToNext = () => !isLast && goToPage(currentPage + 1);
  const goToLast = () => !isLast && goToPage(totalPages);

  const backwardClasses = classnames(styles.btn, { [styles.disabled]: isFirst });
  const forwardClasses = classnames(styles.btn, { [styles.disabled]: isLast });
  
  return (
    <div className={styles.wrapper}>
      <button className={backwardClasses} onClick={goToFirst}>{'<<'}</button>
      <button className={backwardClasses} onClick={goToPrev}>{'<'}</button>
      {numberBtns}
      <button className={forwardClasses} onClick={goToNext}>{'>'}</button>
      <button className={forwardClasses} onClick={goToLast}>{'>>'}</button>
    </div>
  );
}