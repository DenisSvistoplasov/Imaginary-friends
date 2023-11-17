import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { Paths } from '../../../constants/paths';

interface INavigationProps {
}

export function Navigation({}: INavigationProps) {

  const linkClassName = ({ isActive = false }) =>
    [
      isActive ? styles.active : '',
      styles.link
    ].join(' ');

  return (
    <nav className={styles.wrapper}>
      <ul className="list">
        <li className="item"><NavLink className={linkClassName} to={Paths.profile}>Profile</NavLink></li>
        <li className="item"><NavLink className={linkClassName} to={Paths.users}>Users</NavLink></li>
        <li className="item"><NavLink className={linkClassName} to={Paths.settings}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}