import { classnames } from '../../utils/classnames';
import styles from './DeletionConfirm.module.scss';
import defaultImg from '../../assets/images/defaultFriendImage.webp';
import { IconTail } from '../IconTail';

interface IDeletionConfirmProps {
  name: string;
  onYes: () => void;
  onNo: () => void;
  img: string;
}

export function DeletionConfirm({ name, onYes, onNo, img }: IDeletionConfirmProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.text}>Forget <i>{name}</i>?</p>
        <div className={styles.imgWrapper}>
          <img src={img || defaultImg} alt="friend image" className={styles.img} />
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={classnames(styles.btn, styles.yes)} onClick={onYes}>Yes</button>
        <button className={classnames(styles.btn, styles.no)} onClick={onNo}>No</button>
      </div>
      <IconTail className={styles.tail} />
    </div>
  );
}