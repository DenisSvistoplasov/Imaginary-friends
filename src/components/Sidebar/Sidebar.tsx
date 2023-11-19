import styles from './Sidebar.module.scss';
import { Navigation } from './Navigation/Navigation';

interface ISidebarProps{
}

export function Sidebar({}: ISidebarProps) {
  return (
    <aside className={styles.wrapper}>
      <Navigation/>
    </aside>
  );
}