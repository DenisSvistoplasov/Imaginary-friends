import classNames from 'classnames';
import styles from './DeletionConfirm.module.scss';
import { IconTail } from '../Icons/IconTail';
import { FallbackedImage } from '../FallbackedImage/FallbackedImage';

interface DeletionConfirmProps {
  name: string;
  onYes: () => void;
  onNo: () => void;
  img: string;
}

export function DeletionConfirm({ name, onYes, onNo, img }: DeletionConfirmProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.text}>Forget <i>{name}</i>?</p>
        <div className={styles.imgWrapper}>
          <FallbackedImage src={img} alt="friend image" className={styles.img} />
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={classNames(styles.btn, styles.yes)} onClick={onYes}>Yes</button>
        <button className={classNames(styles.btn, styles.no)} onClick={onNo}>No</button>
      </div>
      <IconTail className={styles.tail} />
    </div>
  );
}