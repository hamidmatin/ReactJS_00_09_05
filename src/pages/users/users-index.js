import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BasePage } from '../../components/base-page';
import UserTable from './user-table';
import styles from './users.module.css';
import { Link } from 'react-router-dom';
import { withLoading } from '../../HOC/with-loading';
import { fadeShow } from '../../HOC/fade-show';

const UsersPageIndex = () => {
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
      // console.log(result);
      setUserList(result.data);
      setIsLoading(false);
    });
  }, []);

  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  const deleteUserHandel = (id) => {
    /** Confirm **/

    setIsLoading(true);

    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then((result) => {
      setUserList(userList.filter((user) => user.id !== id))
      setIsLoading(false)
    });
  };

  const BasePageWithLoading = withLoading(BasePage)
  const UserTableFade = fadeShow(UserTable)

  return (
    <BasePageWithLoading title='Users' className='container' isloadng={isLoading}>
      <div className={styles['add-panel']}>
        <Link to='/users/new'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
      <UserTableFade userList={userList} onDelete={deleteUserHandel} duration={3000} />
    </BasePageWithLoading>
  );
};

export default UsersPageIndex;
