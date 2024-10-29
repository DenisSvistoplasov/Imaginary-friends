import { Route, Routes } from 'react-router-dom';
import styles from './Content.module.scss';
import { Home } from '../../pages/Home/Home';
import { Paths } from '../../constants';
import { Friends } from '../../pages/Friends/Friends';

export function Content() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path={Paths.home} Component={Home} />
        <Route path={Paths.friends} Component={Friends} />
      </Routes>
    </div>
  );
}