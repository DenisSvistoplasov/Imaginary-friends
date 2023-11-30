import styles from './Sidebar.module.scss';
import { Navigation } from '../Navigation/Navigation';

interface SidebarProps {
}

export function Sidebar({}: SidebarProps) {
  return (
    <aside className={styles.wrapper}>
      <Navigation />
    </aside>
  );
}