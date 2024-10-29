import styles from './Sidebar.module.scss';
import { Navigation } from '../Navigation/Navigation';

export function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <Navigation />
    </aside>
  );
}