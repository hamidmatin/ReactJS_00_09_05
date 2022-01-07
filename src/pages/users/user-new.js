import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { BasePage } from '../../components/base-page';
import UserForm from './user-form';

const UserNewPage = () => {
  const navigate = useNavigate()
  
  const addNewUser = (user) => {
    console.log(user);
    axios.post('https://jsonplaceholder.typicode.com/users', user).then((result) => {
      console.log(result);
      // Add to user list
      
      navigate('/users')
    });
  };

  const newUser = {
    id: 0,
    name: 'default',
    username: '',
    email: '',
  }

  return (
    <BasePage title='User New' className='container' isLoading={false}>
      <UserForm onSave={addNewUser} user={newUser}/>
    </BasePage>
  );
};

export default UserNewPage;
