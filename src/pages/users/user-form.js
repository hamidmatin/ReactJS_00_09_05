import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './users.module.css';

const UserForm = ({ onSave, user }) => {
  
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    id: 0,
    name: '',
    username: '',
    email: '',
  })

  const [isDirty, setIsDirty] = useState(false)

  useEffect(()=>{
    setUserData(user)
  }, [user])

  const changeHandler = (e) => {
    if(userData){
    setUserData({ ...userData, [e.target.name]: e.target.value })
    setIsDirty(true)}
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSave(userData);
  };

  
    return (
      <form className={styles['form-wrapper']} onSubmit={onSubmitHandler} noValidate>
        <div className={styles['form-container']}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={userData.name}
            onChange={changeHandler}
          />

          <label htmlFor='username'>User Name</label>
          <input
            type='text'
            name='username'
            id='username'
            value={userData.username}
            onChange={changeHandler}
          />

          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            name='email'
            id='email'
            value={userData.email}
            onChange={changeHandler}
          />

          <div className={styles['button-wrapper']}>
            <button
              type='button'
              className={styles['btn-close']}
              onClick={() => {
                // navigate(-1)
                navigate('/users')
              }}
            >
              Close <i className='material-icons'>cancel</i>
            </button>
            <button className={styles['btn-save']} disabled={!isDirty}>
              Save
              <i className='material-icons'>save</i>
            </button>
          </div>
        </div>
      </form>
    );
  }

  export default UserForm
