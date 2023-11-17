import styles from './Sidebar.module.scss';
import { Navigation } from './Navigation/Navigation';

interface ISidebarProps{
}

export function Sidebar({}: ISidebarProps) {
  return (
    <div className={styles.wrapper}>
      <Navigation/>
    </div>
  );
}