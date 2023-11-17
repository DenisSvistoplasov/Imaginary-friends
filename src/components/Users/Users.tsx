import {  useEffect } from 'react';
import styles from './Users.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getUsers, selectUsersData, selectUsersMeta } from '../../store/users';
import { User } from './User/User';
import { WithPreloader } from '../WithPreloader/WithPreloader';
import { WithPagination } from '../WithPagination/WithPagination';

interface IUsersProps {
}

export function Users({}: IUsersProps) {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector(selectUsersData);
  const { currentPage, isLoading, totalPages } = useAppSelector(selectUsersMeta);
  

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const goToPage = (n: number) => dispatch(getUsers(n));

  const list = usersData.map(user => (
    <li className={styles.item} key={user.id}>
      <User data={user} />
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <WithPreloader isLoading={isLoading}>
        <WithPagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}>
          <ul className={styles.list}>
            {list}
          </ul>
        </WithPagination>
      </WithPreloader>
    </div>
  );
}