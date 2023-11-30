import { ChangeEventHandler, FormEvent, useState } from 'react';
import styles from './FriendForm.module.scss';
import { FormData } from '../../types';
import { FriendData } from '../../types';
import classNames from 'classnames';
import { useImageFallback } from '../../hooks';
import { FallbackedImage } from '../FallbackedImage/FallbackedImage';

interface FriendFormProps {
  currentFriend?: FriendData;
  onSubmit: (data: FormData) => void;
  close: () => void;
}

export function FriendForm({ currentFriend, onSubmit, close }: FriendFormProps) {
  const [name, setName] = useState(currentFriend?.name || '');
  const [img, setImg] = useState(currentFriend?.img || '');
  const onImgError = useImageFallback();

  const onNameChange: ChangeEventHandler<HTMLInputElement> = (e) => setName(e.target.value);
  const onImgChange: ChangeEventHandler<HTMLInputElement> = (e) => setImg(e.target.value);

  const onSubmit_ = (e: FormEvent) => {
    e.preventDefault();
    if (name) onSubmit({ name, img });
  };

  const title = currentFriend ?
    'Correct you imaginary friend ' + currentFriend.name + '.' :
    'Make up a new imaginary friend!';

  return (
    <div className="wr">
      <form className={styles.form} onSubmit={onSubmit_}>
        <h3 className={styles.title}>{title}</h3>
        <FallbackedImage src={img} alt="default friend's image" className={styles.img} onError={onImgError} />
        <div className={styles.fields}>
          <span className={styles.fieldName}>Friend's name</span>
          <input
            className={styles.input}
            type="text"
            value={name}
            placeholder='Bing Bong'
            autoFocus
            onChange={onNameChange}
          />
          <span className={styles.fieldName}>Friend's image</span>
          <input
            className={styles.input}
            type="text"
            value={img}
            placeholder='http://'
            onChange={onImgChange}
          />
        </div>
        <button className={classNames(styles.btn, styles.saveBtn)} disabled={!name}>Save</button>
        <button className={classNames(styles.btn, styles.cancelBtn)} type='button' onClick={close}>Cancel</button>
      </form>
    </div>

  );
}