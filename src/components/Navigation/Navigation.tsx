import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { Paths } from '../../constants';

export function Navigation() {

  const linkClassName = ({ isActive = false }) =>
    [
      isActive ? styles.active : '',
      styles.link
    ].join(' ');

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}><NavLink className={linkClassName} to={Paths.home}>Home</NavLink></li>
        <li className={styles.item}><NavLink className={linkClassName} to={Paths.friends}>Friends</NavLink></li>
      </ul>
    </nav>
  );
}