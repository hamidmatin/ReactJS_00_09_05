import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { BasePage } from '../../components/base-page';
import UserForm from './user-form';

const UserEditPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState({
    id: 0,
    name: 'default',
    username: '',
    email: '',
  })

  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(result => {
        console.log(result)
        setUser(result.data)
        setIsLoading(false)
      })
  }, [id] )

  const updateUser = (user) => {
    console.log(user)
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
      .then(result => {
        console.log(result)
        navigate('/users')
      })
  }
  return (
    <BasePage title='User Edit' isLoading={isLoading}>
      <UserForm user={user} onSave={updateUser}/>
    </BasePage>
  );
};
export default UserEditPage;
