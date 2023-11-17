import { Route, Routes } from 'react-router-dom';
import styles from './Content.module.scss';
import { Profile } from '../Profile/Profile';
import { Paths } from '../../constants/paths';
import { Users } from '../Users/Users';
import { Settings } from '../Settings/Settings';

interface IContentProps{
}

export function Content({}: IContentProps) {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path={Paths.profile} Component={Profile}/>
        <Route path={Paths.users} Component={Users}/>
        <Route path={Paths.settings} Component={Settings}/>
      </Routes>
    </div>
  );
}