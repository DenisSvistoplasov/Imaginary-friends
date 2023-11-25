import { ChangeEvent, ChangeEventHandler, FormEvent, useRef, useState } from 'react';
import styles from './FriendForm.module.scss';
import { IFormData } from '../../types/formData';
import { IFriend } from '../../types/friend';
import defaultImg from '../../assets/images/defaultFriendImage.webp';
import { classnames } from '../../utils/classnames';

interface IFriendFormProps {
  currentFriend?: IFriend;
  onSubmit: (data: IFormData) => void;
  close: () => void; 
}

export function FriendForm({ currentFriend, onSubmit, close }: IFriendFormProps) {
  const [name, setName] = useState(currentFriend?.name || '');
  const [img, setImg] = useState(currentFriend?.img || '');

  const onNameChange: ChangeEventHandler<HTMLInputElement> = (e) => setName(e.target.value);
  const onImgChange: ChangeEventHandler<HTMLInputElement> = (e) => setImg(e.target.value);

  const onSubmit_ = (e: FormEvent) => {
    e.preventDefault();
    if (name) onSubmit({name, img});
  };

  const title = currentFriend ?
    'Correct you imaginary friend ' + currentFriend.name + '.' :
    'Make up a new imaginary friend!';

  return (
    <div className="wr">
      <form className={styles.form} onSubmit={onSubmit_}>
      <h3 className={styles.title}>{title}</h3>
      <img src={img || defaultImg} alt="default friend's image" className={styles.img} />
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
      <button className={classnames(styles.btn, styles.saveBtn)} disabled={!name}>Save</button>
      <button className={classnames(styles.btn, styles.cancelBtn)} type='button' onClick={close}>Cancel</button>
    </form>
    </div>

  );
}