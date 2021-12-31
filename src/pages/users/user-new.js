import axios from 'axios'
import React, { Component } from 'react'
import { BasePage } from '../../components/base-page'
import UserForm from './user-form'

export default class UserNewPage extends Component {

  addNewUser = (user) =>{
    console.log(user)
    axios.post('https://jsonplaceholder.typicode.com/users', user)
    .then(result=>{
      console.log(result)
      // Add to user list
    })
  }
  render() {
    return (
      <BasePage title='User New' className='container' isLoading={false}>
        <UserForm onSave={this.addNewUser}/>
      </BasePage>
    )
  }
}
