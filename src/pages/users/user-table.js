import React from 'react';
import { Link } from 'react-router-dom';
import styles from './users.module.css';

const UserTable = ({ userList, onDelete }) => {
  return (
    <div className={styles['users-table']}>
      <div className={styles['table-row']}>
        <div className={`${styles['data']} ${styles['title']}`}>Name</div>
        <div className={`${styles['data']} ${styles['title']}`}>User Name</div>
        <div className={`${styles['data']} ${styles['title']}`}>Email</div>
        <div className={`${styles['data']} ${styles['title']}`}>Actions</div>
      </div>
      {userList.length > 0 ? (
        userList.map((user) => (
          <div key={user.id} className={styles['table-row']}>
            <div className={styles['data']}>{user.name}</div>
            <div className={styles['data']}>{user.username}</div>
            <div className={styles['data']}>{user.email}</div>
            <div className={styles['action']}>
              <button
                className={styles['icon-button']}
                onClick={() => {
                  onDelete(user.id);
                }}
              >
                <span className='material-icons'>delete</span>
              </button>
              <Link to={`edit/${user.id}`} className={styles['icon-button']}>
                <span className='material-icons'>edit</span>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className={styles['empty-table']}>List is Empty</div>
      )}
    </div>
  );
};

export default UserTable;
