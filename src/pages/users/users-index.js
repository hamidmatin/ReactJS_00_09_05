import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BasePage } from '../../components/base-page';
import UserTable from './user-table';
import styles from './users.module.css';
import { Link } from 'react-router-dom';

const UsersPageIndex = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     userList: [],
  //     isLoading: true,
  //   };
  // }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
  //     // console.log(result);
  //     this.setState({ userList: result.data, isLoading: false });
  //   });
  // }

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
      // this.setState({
      //   isLoading: false,
      //   userList: this.state.userList.filter((user) => user.id !== id),
      // });
    });
  };

  return (
    <BasePage title='Users' className='container' isLoading={isLoading}>
      <div className={styles['add-panel']}>
        <Link to='/users/new'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
      <UserTable userList={userList} onDelete={deleteUserHandel} />
    </BasePage>
  );
};

export default UsersPageIndex;
