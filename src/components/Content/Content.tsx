import { Route, Routes } from 'react-router-dom';
import styles from './Content.module.scss';
import { Home } from '../Home/Home';
import { Paths } from '../../constants/paths';
import { Settings } from '../Settings/Settings';
import { Friends } from '../Friends/Friends';

interface IContentProps {
}

export function Content({}: IContentProps) {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path={Paths.home} Component={Home} />
        <Route path={Paths.friends} Component={Friends} />
      </Routes>
    </div>
  );
}